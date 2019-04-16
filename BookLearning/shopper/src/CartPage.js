import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './CartPage.css';

const EmptyCart = () => (
	<div className="CartPage-empty">
		<p>Your car is empty.</p>
		<p>Why not add some products?</p>
	</div>
);

function CartPage({ items, onAddOne, onRemoveOne }) {
	return(
		items.length === 0 ? <EmptyCart /> :
		<ul className="CartPage-items">
			{items.map( item => 
				<li key={item.id} className="CartPage-item">
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
				TOTAL: ${items.reduce( (sum, item) => sum + (item.price * item.count), 0)}
			</li>
		</ul>
	);
}
CartPage.propTypes = {
	items: PropTypes.array.isRequired,
	onAddOne: PropTypes.func.isRequired,
	onRemoveOne: PropTypes.func.isRequired
}

export default CartPage;