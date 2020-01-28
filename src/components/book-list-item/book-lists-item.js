import React from 'react';
import styled from 'styled-components';

const BookListItemStyle = styled('div')`
	display: flex;
	margin: 15px 0;
	width: 350px;
`;
const BookCover = styled('div')`
	flex-shrink: 0;
	width: 120px;
	margin-right: 30px;
	img {
		max-width: 100%;
	}
`;
const BookDetails = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 10px;
	align-items: flex-start;
`;
const BookTitle = styled.span`
	font-size: 1.2rem;
`;
const BookPrice = styled.span`
	font-size: 1.4rem;
`;

const BookListItem = ({ book, onAddedToCart }) => {
	const { title, author, price, coverImage } = book;
	return (
		<BookListItemStyle>
			<BookCover>
				<img src={coverImage} alt="cover" />
			</BookCover>
			<BookDetails>
				<BookTitle>{title}</BookTitle>
				<div className="book-author">{author}</div>
				<BookPrice>${price}</BookPrice>
				<button onClick={onAddedToCart} className="btn btn-info add-to-cart">
					Add to cart
				</button>
			</BookDetails>
		</BookListItemStyle>
	);
};

export default BookListItem;
