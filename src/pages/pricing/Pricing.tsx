import { useState } from 'react';
import { PriceCard } from '../../components/PriceCard/PriceCard';
import { Beta } from '../../components/Beta/Beta';
import { Spinner } from '../../components/Spinner/Spinner';
import {
	pricingMediaQueryImages,
	queriedImages,
} from './pricingMediaQueryImages';
import { PricingFeatures } from '../../components/PricingFeatures/PricingFeatures';

export const Pricing = (): JSX.Element => {
	const [yearlyPlan, setYearlyPlan] = useState<boolean>(false);

	pricingMediaQueryImages();

	if (queriedImages === undefined) {
		return <Spinner />;
	}

	const handleCheckbox = (): void => {
		setYearlyPlan(!yearlyPlan);
	};

	const handleMonthlyPricingColor = (): string => {
		return !yearlyPlan ? '' : 'pricing-monthly--active';
	};

	const handleYearlyPricingColor = (): string => {
		return yearlyPlan ? '' : 'pricing-yearly--active';
	};

	const { hero } = queriedImages;
	return (
		<div className="pricing" role="pricing">
			<div className="pricing__hero-img">
				<img src={hero} alt="pricing" />
			</div>
			<section className="pricing__hero-content">
				<div className="decoration-hr" role="decoration"></div>
				<h1 className="pricing__hero-content-header">pricing</h1>
				<p className="pricing__hero-content-body">
					Create your stories, Photosnap is a platform for photographers and
					visual storytellers. It’s the simple way to create and share your
					photos.
				</p>
			</section>
			<div className="pricing__checkbox">
				<p className={`pricing-monthly ${handleMonthlyPricingColor()}`}>
					Monthly
				</p>
				<input onChange={handleCheckbox} type="checkbox" name="" />
				<p className={`pricing-yearly ${handleYearlyPricingColor()}`}>Yearly</p>
			</div>
			<PriceCard
				plan={'basic'}
				body={
					'Includes basic usage of our platform. Recommended for new and aspiring photographers.'
				}
				price={'19'}
				style={'normal'}
				yearlyPlan={yearlyPlan}
			/>
			<PriceCard
				plan={'pro'}
				body={
					'More advanced features available. Recommended for photography veterans and professionals.'
				}
				price={'39'}
				style={'pro'}
				yearlyPlan={yearlyPlan}
			/>
			<PriceCard
				plan={'business'}
				body={
					'Additional features available such as more detailed metrics. Recommended for business owners.'
				}
				price={'99'}
				style={'normal'}
				yearlyPlan={yearlyPlan}
			/>
			<div className="pricing__features">
				<h1 className="pricing__features-heading">compare</h1>
				<div className="pricing__features-header">
					<p className="pricing__features-tag">the features</p>
					<p className="pricing__features-basic">basic</p>
					<p className="pricing__features-pro">pro</p>
					<p className="pricing__features-business">business</p>
				</div>

				<hr />
				<PricingFeatures
					feature={'unlimited story posting'}
					basic={true}
					pro={true}
					business={true}
					classGrid={'pricing__features-feature-1'}
				/>
				<PricingFeatures
					feature={'unlimited photo upload'}
					basic={true}
					pro={true}
					business={true}
					classGrid={'pricing__features-feature-2'}
				/>
				<PricingFeatures
					feature={'embedding custom content'}
					basic={false}
					pro={true}
					business={true}
					classGrid={'pricing__features-feature-3'}
				/>
				<PricingFeatures
					feature={'customize metadata'}
					basic={false}
					pro={true}
					business={true}
					classGrid={'pricing__features-feature-4'}
				/>
				<PricingFeatures
					feature={'advanced metrics'}
					basic={false}
					pro={false}
					business={true}
					classGrid={'pricing__features-feature-5'}
				/>
				<PricingFeatures
					feature={'photo downloads'}
					basic={false}
					pro={false}
					business={true}
					classGrid={'pricing__features-feature-6'}
				/>
				<PricingFeatures
					feature={'search engine indexing'}
					basic={false}
					pro={false}
					business={true}
					classGrid={'pricing__features-feature-7'}
				/>
				<PricingFeatures
					feature={'custom analytics'}
					basic={false}
					pro={false}
					business={true}
					classGrid={'pricing__features-feature-8'}
				/>
			</div>
			<Beta />
		</div>
	);
};
