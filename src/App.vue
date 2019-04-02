<template>
  <div id="app">
	  <div class="phone-viewport">
	   <md-toolbar>
	     <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
	       <md-icon>menu</md-icon>
	     </md-button>
	     <h2 class="md-title">Книжная полка</h2>
	   </md-toolbar>
		<md-sidenav class="md-left" ref="leftSidenav">
	   <md-toolbar class="md-small">
	      <div class="md-toolbar-container">
	        <h3 class="md-title">Навигация</h3>
	      </div>
	   </md-toolbar>
		<md-list>
		  <md-list-item v-for="item in menu" :key="item.state">
				<md-ink-ripple />
				<md-icon v-text="item.icon"></md-icon>
				<span v-text="item.title"></span>
		  </md-list-item>
	  </md-list>

	  </md-sidenav>
	 </div>
	 <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
	  return {
		  menu:[{
			  icon: 'insert_drive_file',
			  title: 'Книги',
			  state: 'home'
		  },{
			  icon: 'people',
			  title: 'Авторы',
			  state: 'authors'
		  }]
	  }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
