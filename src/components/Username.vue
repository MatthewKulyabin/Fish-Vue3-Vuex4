<template>
	<div :class="[username ? 'hide' : '']">
		<input
			type="text"
			v-model="usernameText"
			@keydown.enter="saveUsernameHandler(usernameText)"
		/><br /><br />
		<button
			@click="saveUsernameHandler(usernameText)">Start</button>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	name: 'Username',
	data() {
		return {
			usernameText: '',
		};
	},
	methods: {
		saveUsernameHandler(usernameText) {
			usernameText
				&& this.$store.commit('saveUsername', {usernameText})
				&& (this.usernameText = '');
		},
	},
	computed: {
		...mapGetters([
      'username',
    ]),
	},
};
</script>

<style>
	.hide {
		display: none,
	}
</style>
