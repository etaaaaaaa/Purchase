import Cart from './Cart'
import Book from './Books'
import MusicAlbum from './MusicAlbum'
import Movie from './Movie'

const cart = new Cart()
console.log(cart.items)

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225))
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900))
cart.add(new Movie(1009, 'Avengers', 2012, true, 'USA', 'Avengers Assemble!', 'fantastic', 137, 300))

console.log(cart.items)