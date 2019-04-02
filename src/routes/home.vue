<template>
  <div class="home">
    <h1>Книги</h1>
				 <span>Сортировать по:</span>
			<!--a href="#" v-on="click: sortBy(column)" v-class="active: sortKey == column"></a-->
	 <md-input-container>
	   <label>Поиск</label>
	   <md-input placeholder="Поиск книг" v-model="search"></md-input>
	 </md-input-container>
	 <book-tiles :search="search"/>
	 
  </div>
	
</template>

<script>
import bookTiles from '@/components/book-tiles'

export default {
	name: 'home',
	components:{
		bookTiles
	},
	data () {
		return {
			loading: true,
			search: ''
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home{
	margin: 0 20%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
