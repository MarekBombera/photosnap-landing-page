import { NavLink } from 'react-router-dom';

import logo_footer from '../../assets/shared/desktop/logo-footer.svg';
import arrow from '../../assets/shared/desktop/arrow.svg';
import facebook from '../../assets/shared/desktop/facebook.svg';
import youtube from '../../assets/shared/desktop/youtube.svg';
import twitter from '../../assets/shared/desktop/twitter.svg';
import pinterest from '../../assets/shared/desktop/pinterest.svg';
import instagram from '../../assets/shared/desktop/instagram.svg';

export const Footer = (): JSX.Element => {
	return (
		<footer className="footer" role="footer">
			<div className="footer__wrapper-1">
				<div className="footer__logo">
					<img src={logo_footer} alt="footer logo" />
				</div>
				<div className="footer__content">
					<div className="footer__social">
						<img src={facebook} alt="facebook" />
						<img src={youtube} alt="youtube" />
						<img src={twitter} alt="twitter" />
						<img src={pinterest} alt="pinterest" />
						<img src={instagram} alt="instagram" />
					</div>
					<nav className="footer__navigation">
						<NavLink to="/" className="NavLink--no-default-style">
							<p role="homepage-footer-nav">home</p>
						</NavLink>
						<NavLink to="/stories" className="NavLink--no-default-style">
							<p role="stories-footer-nav">stories</p>
						</NavLink>
						<NavLink to="/features" className="NavLink--no-default-style">
							<p role="features-footer-nav"> features</p>
						</NavLink>
						<NavLink to="/pricing" className="NavLink--no-default-style">
							<p role="pricing-footer-nav">pricing</p>
						</NavLink>
					</nav>
				</div>
			</div>
			<div className="footer__wrapper-2">
				<div className="footer__invite">
					<p className="action--white">get an invite</p>
					<img className="action-arrow--white" src={arrow} alt="" />
				</div>
				<div className="footer__copyright">
					<p>Copyright 2022. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};
