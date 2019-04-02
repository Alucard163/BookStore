import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state:{
		books: []
	},
	actions:{
		LOAD_BOOK_LIST: ({commit}) => {
			Vue.http.get('http://localhost:3000/books')
			.then(response => {
				commit('SET_BOOK_LIST', { books: response.body })
		}, response => {
			//error
		});
	}
		/*LOAD_BOOK_LIST: ({ commit }) => {
			Vue.http.get('http://fakerestapi.azurewebsites.net/api/Books').then(response => {
				commit('SET_BOOK_LIST', { books: response.body })
			}, response => {
				// error callback
			});
		}*/
	},
	mutations:{
		SET_BOOK_LIST: (state, { books }) => {
			state.books = books;
		}
	},
	getters:{
		allBooks: state => {
			return state.books;
		},
		searchByTitle: (state) => (title) => {
			if(!title.length) { return state.books; }
			return state.books.filter(x => x.title.toLowerCase().indexOf(title.toLowerCase()) > -1);
		}
	},
	modules:{

	}
})
