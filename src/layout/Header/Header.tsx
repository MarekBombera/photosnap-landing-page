import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MobileNavigation } from '../../components/MobileNavigation/MobileNavigation';
import { Navigation } from '../../components/Navigation/Navigation';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import logo from '../../assets/shared/desktop/logo.svg';
import burgerMenu from '../../assets/shared/mobile/menu.svg';
import close_icon from '../../assets/shared/mobile/close.svg';

export const Header = (): JSX.Element => {
	const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

	const toggleMobileMenu = (): void => {
		setOpenMobileMenu(!openMobileMenu);
	};

	const burgerIcon: JSX.Element = (
		<img
			className="mobile-navigation-burger-icon"
			onClick={toggleMobileMenu}
			src={burgerMenu}
			alt="mobile navigation"
		/>
	);

	const closeIcon: JSX.Element = (
		<img
			className="mobile-navigation-close-icon"
			onClick={toggleMobileMenu}
			src={close_icon}
			alt="close mobile navigation"
		/>
	);

	return (
		<header>
			<div className="header">
				<NavLink to="/" className="NavLink--no-default-style">
					<img className="logo" src={logo} alt="logo header"></img>
				</NavLink>
				{!openMobileMenu ? burgerIcon : closeIcon}
				{!useMediaQueryMatch('phone') && <Navigation />}
			</div>
			{useMediaQueryMatch('phone') && (
				<MobileNavigation
					openMobileMenu={openMobileMenu}
					toggleMobileMenu={toggleMobileMenu}
				/>
			)}
		</header>
	);
};
