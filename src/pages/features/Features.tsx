import { Feature } from '../../components/Feature/Feature';
import { Beta } from '../../components/Beta/Beta';
import { Spinner } from '../../components/Spinner/Spinner';

import responsive_img from '../../assets/features/desktop/responsive.svg';
import no_limit_img from '../../assets/features/desktop/no-limit.svg';
import embed_img from '../../assets/features/desktop/embed.svg';
import custom_domain_img from '../../assets/features/desktop/custom-domain.svg';
import boost_exposure_img from '../../assets/features/desktop/boost-exposure.svg';
import drag_drop_img from '../../assets/features/desktop/drag-drop.svg';

import {
	featuresMediaQueryImages,
	queriedImages,
} from './featuresMediaQueryImages';

export const Features = (): JSX.Element => {
	featuresMediaQueryImages();

	if (queriedImages === undefined) return <Spinner />;

	const { hero } = queriedImages;
	return (
		<div className="features" role="features">
			<div className="features__hero-img">
				<img src={hero} alt="features" />
			</div>
			<section className="features__hero-content">
				<div className="decoration-hr" role="decoration"></div>
				<h1 className="features__hero-content-header">features</h1>
				<p className="features__hero-content-body">
					We make sure all of our features are designed to be loved by every
					aspiring and even professional photographers who wanted to share their
					stories.
				</p>
			</section>
			<Feature
				header={'100% Responsive'}
				body={
					'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'
				}
				classGrid={'features-feature-1'}
				img={{ url: responsive_img, alt: 'responsive' }}
			/>
			<Feature
				header={'No Photo Upload Limit'}
				body={
					'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
				}
				classGrid={'features-feature-2'}
				img={{ url: no_limit_img, alt: 'no-limit' }}
			/>
			<Feature
				header={'Available to Embed'}
				body={
					'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.'
				}
				classGrid={'features-feature-3'}
				img={{ url: embed_img, alt: 'embed' }}
			/>
			<Feature
				header={'Custom Domain'}
				body={
					'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!'
				}
				classGrid={'features-feature-4'}
				img={{ url: custom_domain_img, alt: 'custom domain' }}
			/>

			<Feature
				header={'Boost Your Exposure'}
				body={
					'Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.'
				}
				classGrid={'features-feature-5'}
				img={{ url: boost_exposure_img, alt: 'boost exposure' }}
			/>
			<Feature
				header={'Drag & Drop Image'}
				body={
					'Easily drag and drop your image and get beautiful shots every-time. No over the top tooling to add friction to creating stories.'
				}
				classGrid={'features-feature-6'}
				img={{ url: drag_drop_img, alt: 'drag & drop' }}
			/>
			<Beta />
		</div>
	);
};
