import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const EmptyCart = () => (
	<div className="CartPage-empty">
		<p>Your car is empty.</p>
		<p>Why not add some products?</p>
	</div>
);

function CartPage({ items, onRemoveOne, onAddOne }) {
	return (

		items.length === 0 ? <EmptyCart /> :

		<ul className="CartPage-items">
			{items.map(item =>
				<li key={item.id}>
					<Item item={item}>
						<div className="CartItem-controls">
							<button
								className="CartItem-removeOne"
								onClick={() => onRemoveOne(item)}>
								&ndash;
							</button>
							<span className="CartItem-count">{item.count}</span>
							<button
								className="CartItem-addOne"
								onClick={() => onAddOne(item)}>
								+
							</button>
						</div>
					</Item>
				</li>
			)}
			<li className="CartPage-total">
				TOTAL: ${items.reduce( ( sum, item ) => sum + (item.count * item.price), 0).toFixed(2)}
			</li>
		</ul>
	)
}
CartPage.propTypes = {
	items: PropTypes.array.isRequired
};

export default CartPage;