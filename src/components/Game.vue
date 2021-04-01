<template>
	<div :class="['game', !time ? 'hide' : '']" >
		<header>
			<div class="counter">{{points}}</div>
			<div class="timer" @click="start">{{time.toFixed()}}</div>
		</header>
		<main>
			<div v-for="(fi, i) in fish">
				<div
					v-for="(f) in fi"
					:class="[f]"
					:style="styleFish(fi)"
					@click.prevent="fishClickHandler(i)"
				></div>
			</div>
		</main>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	name: 'Game',
	data() {
		return {
			startFlag: true,
		};
	},
	methods: {
		start() {
			if (this.startFlag) {
				this.$store.dispatch('startGame');
			}
			this.startFlag = false;
		},
		styleFish(fish) {
			return {
				'left': fish.left + 'px',
				'top': fish.top + 'px',
			}
		},
		fishClickHandler(index) {
			this.$store.commit('fishClicked', {index});
			this.$store.commit('increasePoint', {index});
		}
	},
	computed: {
		...mapGetters([
			'fish',
			'time',
			'points',
		]),
	},
};
</script>

<style>
	header {
		display: flex;
		justify-content: space-around;
	}
	.counter {
		display: flex;
		width: 150px;
		height: 50px;
		border: 1px solid #ccc;
		align-items: center;
		justify-content: center;
	}
	.timer {
		display: flex;
		width: 150px;
		height: 50px;
		border: 1px solid #ccc;
		align-items: center;
		justify-content: center;
	}
	main {
		width: 90%;
		position: absolute;
		margin-left: 5%;
		margin-right: 5%;
		margin-top: 20px;
		height: 750px;
		border: 1px solid #ccc;
	}
	.fish {
		display: block;
		position: absolute;
		background-image: url('../assets/fish.jpg');
		background-size: 100px;
		background-repeat: no-repeat;
		width: 100px;
		height: 100px;
	}
	.fish_plural {
		display: block;
		position: absolute;
		background: url(../assets/fish_plural.jpg);
		background-size: 75px;
		background-repeat: no-repeat;
		width: 75px;
		height: 75px;
	}
	.dolphin {
		display: block;
		position: absolute;
		background: url(../assets/dolphin.jpg);
		background-size: 100px;
		background-repeat: no-repeat;
		width: 100px;
		height: 100px;
	}
	.dead_fish {
		display: block;
		position: absolute;
		background: url(../assets/dead_fish.jpg);
		background-size: 150px;
		background-repeat: no-repeat;
		width: 150px;
		height: 150px;
	}
	.hide {
		display: none,
	}
</style>
