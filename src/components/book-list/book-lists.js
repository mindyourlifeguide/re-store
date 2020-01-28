import React, { Component } from 'react';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BookListsItem from '../book-list-item';

import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookListStyle = styled.ul`
	list-style: none;
`;

const BookLists = ({ books, onAddedToCart }) => {
	return (
		<BookListStyle>
			{books.map(book => {
				return (
					<li key={book.id}>
						<BookListsItem
							book={book}
							onAddedToCart={() => onAddedToCart(book.id)}
						/>
					</li>
				);
			})}
		</BookListStyle>
	);
};

class BooksContainer extends Component {
	componentDidMount() {
		this.props.fetchBooks();
	}

	render() {
		const { books, loading, error, onAddedToCart } = this.props;

		if (loading) {
			return <Spinner />;
		}

		if (error) {
			return <ErrorIndicator />;
		}

		return <BookLists books={books} onAddedToCart={onAddedToCart} />;
	}
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
	return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
	return bindActionCreators(
		{
			fetchBooks: fetchBooks(bookstoreService),
			onAddedToCart: bookAddedToCart,
		},
		dispatch,
	);
};

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps),
)(BooksContainer);
