import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map(
            book => {
                return (
                    <li key={book.title}
                        onClick={() => this.props.selectBook(book)
                        }
                        className="list-group-item">
                        {book.title}
                    </li>
                )
            }
        )
    }   

    render () {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )

    }
}

function mapStateToProps (state) {
    //Whatever is returned, shows up as props inside book-list
    return {
        books: state.books
    };
}

//Anything returned from this will end up as props on BookList
function mapDispatchToProps(dispatch) {
    // Whenever select book is called, the result should be passed to all reducers
    return bindActionCreators({
        selectBook
    }, dispatch);
}

// Promote book list from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop

export default connect(mapStateToProps, mapDispatchToProps)(BookList);