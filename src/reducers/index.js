import { combineReducers } from 'redux';
import booksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    activeBook: ActiveBook,
    books: booksReducer
});

export default rootReducer;
