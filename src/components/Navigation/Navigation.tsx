import { NavLink } from 'react-router-dom';

export const Navigation = (): JSX.Element => {
	return (
		<>
			<nav className="navigation">
				<div className="navigation__NavLinks">
					<NavLink to="/stories" className="NavLink--no-default-style">
						<p role="stories-nav">stories</p>
					</NavLink>
					<NavLink to="/features" className="NavLink--no-default-style">
						<p role="features-nav">features</p>
					</NavLink>
					<NavLink to="/pricing" className="NavLink--no-default-style">
						<p role="pricing-nav">pricing</p>
					</NavLink>
				</div>
			</nav>
			<div className="navigation__invite">
				<p className="navigation__invite">get an invite</p>
			</div>
		</>
	);
};
