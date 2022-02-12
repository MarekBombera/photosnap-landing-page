import check_img from '../../assets/pricing/desktop/check.svg';

type props = {
	feature: string;
	basic: boolean;
	pro: boolean;
	business: boolean;
	classGrid: string;
};

export const PricingFeatures = ({
	feature,
	basic,
	pro,
	business,
	classGrid,
}: props): JSX.Element => {
	const showCheckImg = (plan: boolean): string | JSX.Element => {
		if (plan) {
			return <img src={check_img} alt="check" />;
		}
		return '';
	};

	return (
		<div className={`pricingFeatures ${classGrid}`} role="pricing-features">
			<p className="pricingFeatures-feature">{feature}</p>
			<div className="pricingFeatures-basic">
				<p>basic</p>
				{showCheckImg(basic)}
			</div>
			<div className="pricingFeatures-pro">
				<p>pro</p>
				{showCheckImg(pro)}
			</div>
			<div className="pricingFeatures-business">
				<p>business</p>
				{showCheckImg(business)}
			</div>
		</div>
	);
};
