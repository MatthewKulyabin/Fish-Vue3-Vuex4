<template>
  <Username />
  <Game v-if="username" />
  <GameOver v-if="!time" /> <!-- !time --> 
</template>

<script>
import {mapState, mapGetters} from 'vuex';

import Username from './components/Username';
import Game from './components/Game';
import GameOver from './components/GameOver';

export default {
  name: 'App',
  components: {
    Username,
    Game,
    GameOver,
  },
  computed: {
    ...mapGetters([
      'username',
      'time'
    ]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hide {
  display: none;
}
</style>
