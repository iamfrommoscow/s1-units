import {sortByItemCount, sortByDate, sortByItemNames, sortOrders, sortTypes} from './sortOrders';

const nullOrders = (func) => {
	const result = func(null, null);
	expect(result).toBe(0);
}

const undefinedOrders = (func) => {
	const result = func(undefined, undefined);
	expect(result).toBe(0);
}

const nullItems = (func) => {
	const order1 = {
		items: null
	}
	const order2 = {
		items: null
	}
	const result = func(order1, order2);
	expect(result).toBe(0);
}

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		nullOrders(sortByItemCount);
	});

	it('orders are undefined', () => {
		undefinedOrders(sortByItemCount);
	});


	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('items are null', () => {
		nullItems(sortByItemCount);
	});

	it('second order has more items', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});

	it('first order has more items', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});



});

describe('sortByDate function', () => {
	it('orders are null', () => {
		nullOrders(sortByDate);
	});

	it('orders are undefined', () => {
		undefinedOrders(sortByDate);
	});

	it('dates are null', () => {
		const orderWithoutDate = {date: null}

		const result = sortByDate(orderWithoutDate, orderWithoutDate);
		expect(result).toEqual(0);
	});

	it('same date', () => {
		const orderWithDate = {
			date: 1544356800000
		}
		const result = sortByDate(orderWithDate, orderWithDate);
		expect(result).toBe(0);
	});

	it('second date later then first date', () => {
		const order1 = {
			date: 1544356800000
		}
		const order2 = {
			date: 1552481120000
		}
		const result = sortByDate(order1, order2);
		expect(result).toBe(1);
	});
	
	it('second date earlier then first date', () => {
		const order1 = {
			date: 1552481120000
		}
		const order2 = {
			date: 1544356800000
		}
		const result = sortByDate(order1, order2);
		expect(result).toBe(-1);
	});



});


describe('sortByItemNames function', () => {
	it('orders are null', () => {
		nullOrders(sortByItemNames);
	});

	it('orders are undefined', () => {
		undefinedOrders(sortByItemNames);
	});

	it('items are null', () => {
		nullItems(sortByItemNames);
	});

	it('first item name string < then second item name string', () => {
		const order1 = {
			items: ['ab', 'ba'],
		};
		const order2 = {
			items: ['cd', 'dc'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	});

	it('first item name string > then second item name string', () => {
		const order1 = {
			items: ['cd', 'dc'],
		};
		const order2 = {
			items: ['ab', 'ba'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	});

});

describe('sortOrders function', () => {
	it('undefined orders and sortType', () => {
		const result = sortOrders(undefined, undefined);
		expect(result).toBeUndefined();
	});
});

