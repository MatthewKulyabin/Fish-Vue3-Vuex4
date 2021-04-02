<template>
	<div>
		<h2>Game Over</h2>
		<div class="game_over">
			<p>{{username}}</p>
			<p>Your current points are {{points}}</p>
			<h4>Your best score:</h4>
			<button @click="showResult(username)">Show</button>
			<ol>
				<li v-for="(i) in 11">{{result[i - 1]}}</li>
			</ol>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	name: 'GameOver',
	data() {
		return {
			result: '',
		};
	},
	methods: {
		showResult(username) {
			this.result = JSON.parse(localStorage.getItem(username));
		}
	},
	computed: {
		...mapGetters([
			'username',
			'points',
		]),
	},
}
</script>

<style>
	.game_over {
		padding: 10px;
		width: 50%;
		height: 500px;
		margin-left: 25%;
		margin-right: 25%;
		border: 1px solid #ccc;
	}
</style>
