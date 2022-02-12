type props = {
	plan: string;
	body: string;
	price: string;
	style: string;
	yearlyPlan: boolean;
};

export const PriceCard = ({
	plan,
	body,
	price,
	style,
	yearlyPlan,
}: props): JSX.Element => {
	const handleBillingPeriod = (): string => {
		if (!yearlyPlan) {
			return 'per month';
		}
		return 'per year';
	};

	const handleBillingPrice = (price: string): string => {
		if (!yearlyPlan) {
			return price;
		}
		return `${price}0`;
	};

	return (
		<div
			className={`priceCard priceCard__${style} priceCard__${style}-${plan}`}
			role="pricecard"
		>
			{style === 'pro' && (
				<div className="decoration-hr" role="decoration"></div>
			)}
			<h1 className="priceCard-plan">{plan}</h1>
			<p className="priceCard-body">{body}</p>
			<div className="priceCard-price-wrapper">
				<h1 className="priceCard-price">{`$${handleBillingPrice(
					price
				)}.00`}</h1>
				<p className="priceCard-billing">{handleBillingPeriod()}</p>
			</div>

			<p className={`priceCard-action priceCard__${style}-action`}>
				pick a plan
			</p>
		</div>
	);
};
