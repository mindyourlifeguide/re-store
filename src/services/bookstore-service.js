export default class BookstoreService {
	data = [
		{
			id: 1,
			title: 'Production-Ready Microservices',
			author: 'Susan J. Fowler',
			price: 32,
			coverImage:
				'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
		},
		{
			id: 2,
			title: 'Release It!',
			author: 'Michael T. Nygard',
			price: 45,
			coverImage:
				'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg',
		},
		{
			id: 3,
			title: 'React Design Patterns and Best Practices - Second Edition',
			author: 'Carlos Santana Roldán',
			price: 40,
			coverImage:
				'https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/b/1/b11439_mockupcover_0.png',
		},
	];

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.75) {
					reject(new Error('Something bad happened'));
				} else {
					resolve(this.data);
				}
			}, 700);
		});
	}
}
