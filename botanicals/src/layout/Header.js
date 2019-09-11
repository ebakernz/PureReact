import React from 'react';

function Header() {

	return (
		<header>
			<div className="inner">

				<a className="branding" href="/home">
					<img src="/images/stillbotanical-logo.png" alt="Still Botanicals logo" />
				</a>			

				<nav className="menu">
					<ul className="menu__inner">
					
						<li className="menu__item">
							<a className="menu__item__link" href="/home">
								Home
							</a>
						</li>

						<li className="menu__item">
							<a className="menu__item__link" href="/shop">
								Shop
							</a>
						</li>

						<li className="menu__item">
							<a className="menu__item__link" href="/contact">
								Contact
							</a>
						</li>

						<li className="menu__item">
							<a className="menu__item__link" href="/shop">
								<svg xmlns="http://www.w3.org/2000/svg" width="29.333" height="22" viewBox="0 0 29.333 22">
									<path className="cart" d="M12.222,23.167a1.833,1.833,0,1,1-1.833-1.833A1.833,1.833,0,0,1,12.222,23.167ZM16.5,21.333a1.833,1.833,0,1,0,1.833,1.833A1.833,1.833,0,0,0,16.5,21.333Zm1.633-6.111,2.416-8.556H0l3.591,8.556ZM24.206,3,20.011,17.667H4.615l1.025,2.444H21.822L26.068,5.444h2.358L29.333,3Z" transform="translate(0 -3)"/>
								</svg>
							</a>
						</li>

					</ul>
				</nav>

			</div>
		</header>
	);
}

export default Header;