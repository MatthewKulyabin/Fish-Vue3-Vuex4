import {createApp} from 'vue';
import {createStore} from 'vuex';

import {random, toLocalStorage} from '../pureFunctions';

export const store = createStore({
	data() {
		return {
			interval: null,
		};
	},
	state() {
		return {
			username: '',
			fish: [],
			time: 60,
			points: 0,
			result: {},
		};
	},
	getters: {
		username(state) {
			return state.username;
		},
		fish(state) {
			return state.fish;
		},
		time(state) {
			return state.time;
		},
		points(state) {
			return state.points;
		},
	},
	mutations: {
		saveUsername(state, payload) {
			state.username = payload.usernameText;
			state.result.username = state.username;
			return true;
		},
		renderFish(state) {
			const fishTypes = ['fish', 'fish_plural', 'dolphin', 'dead_fish'];
			const fishCount = random(1, 3);
			for (let i = 0; i < fishCount; i++) {
				if (state.fish.length > 20) {
					return;
				}
				state.fish.push({
				type: fishTypes[random(0, fishTypes.length - 1)],
				left: random(0, 1625),
				top: random(0, 650),
			});
			}
		},
		decreaseTime(state) {
			state.time -= 0.5;

			// GameOver
			if (state.time <= 0) {
				state.result.points = state.points;
				toLocalStorage(state.result);
				clearInterval(this.interval);
			}
		},
		fishClicked(state, {index}) {
			state.fish.splice(index, 1);
		},
		increasePoint(state, {index}) {
			switch (state.fish.find((_, i) => i === index).type) {
				case 'dead_fish':
					return;
				case 'fish':
					state.points++;
					return;
				case 'fish_plural':
					state.points += 5;
					return;
				case 'dolphin':
					state.points += 3;
					return;
			}
		},
		fishMove(state) {
			const direction = random(0, 1);
			state.fish.forEach(fish => {
				direction
					&& fish.left < 1615
					&& (fish.left += 5)
					|| fish.left > 10
					&& (fish.left -= 5)
			});
		}
	},
	actions: {
		startGame({commit}) {
			this.interval = setInterval(() => {
				commit('renderFish');
				commit('decreaseTime');
				commit('fishMove');
			}, 5);
		},
	},
});
