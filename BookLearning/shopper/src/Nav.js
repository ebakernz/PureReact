import React from 'react';

const Nav = ({ activeTab, onTabChange, items }) => {

	const itemCount = items.reduce((sum, item) => {
		return sum + item.count
	}, 0);

	const itemTotal = items.reduce((sum, item) => {
		return sum + (item.price * item.count)
	}, 0);

	return(
		<nav className="App-nav">
			<ul>
				<li className={`App-nav-item ${activeTab === 0 && 'selected'} `}>
					<NavLink index={0} onClick={onTabChange}>Items</NavLink>
				</li>
				<li className={`App-nav-item ${activeTab === 1 && 'selected'} `}>
					<NavLink index={1} onClick={onTabChange}>Cart</NavLink>
				</li>
				<div className="App-nav-item App-nav-cart-summary" onClick={onTabChange.bind(this,1)}>
					<i className="fa fa-shopping-cart"/>
					<span className="summary-item-count">
						{itemCount}
						{'  '}
						{itemCount === 1 ? 'item' : 'items'}
					</span>
					{'  '}
					{ items.length > 0 && 
						<span className="summary-total">
							(${itemTotal.toFixed(2)})
						</span>
					}
				</div>
			</ul>
		</nav>
	);
}

class NavLink extends React.Component {

	handleClick = () => {
		this.props.onClick(this.props.index);
	}

	render() {
		return (
			<a onClick={this.handleClick}>
				{this.props.children}
			</a>
		);
	}
}

export default Nav;