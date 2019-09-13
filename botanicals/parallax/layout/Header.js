import React from 'react';

function Header({ activeTab, onTabChange, isBottom }) {

	return (
		<header>
			<div className="inner">

				<a className="branding" href="/home">
					<img src="images/stillbotanical-logo.png" alt="Still Botanicals logo" />
				</a>

				<nav className={`menu ${isBottom === true && 'white'}`}>
					<ul className="menu__inner">
					
						<li className={`menu__item ${activeTab === 0 && 'menu__item--current'}`}>
							<NavLink index={0} text={'Home'} onClick={onTabChange}>
								Home
							</NavLink>
						</li>

						<li className={`menu__item ${activeTab === 1 && 'menu__item--current'}`}>
							<NavLink index={1} text={'Shop'} onClick={onTabChange}>
								Shop
							</NavLink>
						</li>

						<li className={`menu__item ${activeTab === 2 && 'menu__item--current'}`}>
							<NavLink index={2} text={'Contact'} onClick={onTabChange}>
								Contact
							</NavLink>
						</li>

						<li className="menu__item menu__item--cart">
							<NavLink index={1} text={'Shop'} onClick={onTabChange}>
								<svg xmlns="http://www.w3.org/2000/svg" width="29.333" height="22" viewBox="0 0 29.333 22">
									<path className="cart" d="M12.222,23.167a1.833,1.833,0,1,1-1.833-1.833A1.833,1.833,0,0,1,12.222,23.167ZM16.5,21.333a1.833,1.833,0,1,0,1.833,1.833A1.833,1.833,0,0,0,16.5,21.333Zm1.633-6.111,2.416-8.556H0l3.591,8.556ZM24.206,3,20.011,17.667H4.615l1.025,2.444H21.822L26.068,5.444h2.358L29.333,3Z" transform="translate(0 -3)"/>
								</svg>
							</NavLink>
						</li>

					</ul>
				</nav>

				<div className="menu__trigger">
					<span></span>
					<span></span>
					<span></span>
				</div>

			</div>
		</header>
	);
}

class NavLink extends React.Component {

	handleClick = () => {
		this.props.onClick(this.props.index);
	}

	render() {
		return (
			<a onClick={this.handleClick} className="menu__item__link">
				{this.props.children}
			</a>
		);
	}
}

export default Header;