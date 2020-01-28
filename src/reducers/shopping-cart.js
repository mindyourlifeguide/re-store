const updateCartItems = (cartItems, item, idx) => {
	if (item.count === 0) {
		return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
	}

	if (idx === -1) {
		return [...cartItems, item];
	}

	return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
	const { id = book.id, count = 0, title = book.title, total = 0 } = item;

	return {
		id,
		title,
		count: count + quantity,
		total: total + quantity * book.price,
	};
};

const updateOrderTotal = cart =>
	cart.reduce((acc, item) => acc + item.total, 0);

const updateOrder = (state, bookId, quantity) => {
	const {
		bookList: { books },
		shoppingCart: { cartItems },
	} = state;

	const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
	const item = cartItems[itemIndex];
	const book = books.find(({ id }) => id === bookId);

	const newItem = updateCartItem(book, item, quantity);
	const newCart = updateCartItems(cartItems, newItem, itemIndex);

	localStorage.setItem('cart', JSON.stringify(newCart));

	return {
		cartItems: newCart,
		orderTotal: updateOrderTotal(newCart),
	};
};

const updateShoppingCart = (state, action) => {
	if (!state) {
		const cartFromLocalStorage = localStorage.getItem('cart');

		if (cartFromLocalStorage) {
			const cart = JSON.parse(cartFromLocalStorage);

			return {
				cartItems: cart,
				orderTotal: updateOrderTotal(cart),
			};
		}

		return {
			cartItems: [],
			orderTotal: 0,
		};
	}

	switch (action.type) {
		case 'BOOK_ADDED_TO_CART':
			return updateOrder(state, action.payload, 1);

		case 'BOOK_REMOVED_FROM_CART':
			return updateOrder(state, action.payload, -1);

		case 'ALL_BOOKS_REMOVED_FROM_CART': {
			const newCart = state.shoppingCart.cartItems.filter(
				({ id }) => id !== action.payload,
			);
			localStorage.setItem('cart', JSON.stringify(newCart));

			return {
				orderTotal: updateOrderTotal(newCart),
				cartItems: newCart,
			};
		}

		default:
			return state.shoppingCart;
	}
};

export default updateShoppingCart;
