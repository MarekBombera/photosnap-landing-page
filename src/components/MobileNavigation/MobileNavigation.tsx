import { NavLink } from 'react-router-dom';
import { useClickOutside } from '../../hooks/useClickOutside/useClickOutside';

type props = {
	openMobileMenu: boolean;
	toggleMobileMenu: () => void;
};

export const MobileNavigation = ({
	openMobileMenu,
	toggleMobileMenu,
}: props): JSX.Element => {
	if (!openMobileMenu) {
		return <div></div>;
	}

	const domNodeRef = useClickOutside(() => {
		setTimeout(() => {
			toggleMobileMenu();
		}, 1);
	});

	return (
		<>
			<nav className="mobile-navigation" ref={domNodeRef}>
				<NavLink
					to="/stories"
					className="NavLink--no-default-style"
					onClick={toggleMobileMenu}
				>
					<p role="stories-nav">stories</p>
				</NavLink>
				<NavLink
					to="/features"
					className="NavLink--no-default-style"
					onClick={toggleMobileMenu}
				>
					<p role="features-nav">features</p>
				</NavLink>
				<NavLink
					to="/pricing"
					className="NavLink--no-default-style"
					onClick={toggleMobileMenu}
				>
					<p role="pricing-nav">pricing</p>
				</NavLink>
				<hr />
				<div className="mobile-navigation__invite">
					<p>get an invite</p>
				</div>
			</nav>
		</>
	);
};
