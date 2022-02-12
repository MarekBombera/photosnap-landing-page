import { betaMediaQueryImages, queriedImages } from './betaMediaQueryImages';
import arrow from '../../assets/shared/desktop/arrow.svg';
import { Spinner } from '../../components/Spinner/Spinner';

export const Beta = (): JSX.Element => {
	betaMediaQueryImages();

	if (queriedImages === undefined) {
		return <Spinner />;
	}
	const { beta_img } = queriedImages;

	return (
		<div className="beta" role="beta">
			<div className="decoration-hr" role="decoration"></div>
			<div className="beta-img">
				<img src={beta_img} alt={'beta'} />
			</div>
			<div className="beta-content">
				<h3 className="beta-header">We’re in beta. Get your invite today!</h3>

				<div className="beta-action">
					<p className="action--white">get an invite</p>
					<img className="action-arrow--white" src={arrow} alt="" />
				</div>
			</div>
		</div>
	);
};
