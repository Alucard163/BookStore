<template>
  <div class="book-tiles">
	  <md-progress v-if="!books.length" md-indeterminate></md-progress>
	  <div class="card-holder" v-else="books.length">
		 <md-card md-with-hover v-for="book in books" :key="book.Id">
			 <md-card-media>
				<img src="../assets/logo.png" alt="book">
			 </md-card-media>
			 <md-card-header>
				<div class="md-title" v-text="book.title"></div>
				<div class="md-subhead">{{book.year}}</div>
				<div class="md-subhead">{{book.author}}</div>
			 </md-card-header>
			 <md-card-actions>
				<md-button @click.native="go(book.id)">Детали</md-button>
			 </md-card-actions>
		 </md-card>
	 </div>
  </div>
</template>

<script>
export default {
	name: 'book-tiles',
	props:['search'],
	data () {
		return {	}
	},
	methods:{
		go(id){
			console.log(id)
		}
	},
	computed: {
		books(){
			return this.$store.getters.searchByTitle(this.search);
		}
	},
	mounted: function(){
	 	this.$store.dispatch('LOAD_BOOK_LIST')
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-holder{
	margin-top: 20px;
}
.card-holder .md-card {
 width: 100%;
 max-width: 320px;
 margin: 0 4px 16px;
 display: inline-block;
 vertical-align: top;
}
.card-holder img{
	height:50px;
	width: 50px;
	margin-top: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
