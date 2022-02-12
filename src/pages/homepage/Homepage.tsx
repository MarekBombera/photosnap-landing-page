import { Story } from '../../components/Story/Story';
import { Feature } from '../../components/Feature/Feature';
import { Spinner } from '../../components/Spinner/Spinner';

import {
	homepageMediaQueryImages,
	queriedImages,
} from './homepageMediaQueryImages';
import arrow from '../../assets/shared/desktop/arrow.svg';
import responsive_img from '../../assets/features/desktop/responsive.svg';
import no_limit_img from '../../assets/features/desktop/no-limit.svg';
import embed_img from '../../assets/features/desktop/embed.svg';

export const Homepage = (): JSX.Element => {
	homepageMediaQueryImages();

	if (queriedImages === undefined) {
		return <Spinner />;
	}
	const { homepage, story } = queriedImages;

	return (
		<div className="homepage" role="homepage">
			<div className="homepage__createShare-img">
				<img src={homepage[0]} alt="create and share" />
			</div>
			<section className="homepage__createShare-content">
				<div className="decoration-hr" role="decoration"></div>
				<h1 className="homepage__createShare-content-header">
					Create and share your photo stories
				</h1>
				<p className="homepage__createShare-content-body">
					Photosnap is a platform for photographers and visual storytellers. We
					make it easy to share photos, tell stories and connect with others.
				</p>
				<div className="homepage__createShare-content-action">
					<p className="action--white">get an invite</p>
					<img className="action-arrow--white" src={arrow} alt="" />
				</div>
			</section>

			<div className="homepage__beautifulStories-img">
				<img src={homepage[1]} alt="beautiful stories" />
			</div>
			<section className="homepage__beautifulStories-content">
				<h1 className="homepage__beautifulStories-content-header">
					Beautiful stories every time
				</h1>
				<p className="homepage__beautifulStories-content-body">
					We provide design templates to ensure your stories look terrific.
					Easily add photos, text, embed maps and media from other networks.
					Then share your story with everyone.
				</p>
				<div className="homepage__createShare-content-action">
					<p className="action--black">view the stories</p>
					<img className="action-arrow--black" src={arrow} alt="" />
				</div>
			</section>

			<div className="homepage__designedForEveryone-img">
				<img src={homepage[2]} alt="designed for everyone" />
			</div>
			<section className="homepage__designedForEveryone-content">
				<h1 className="homepage__designedForEveryone-content-header">
					Designed for everyone
				</h1>
				<p className="homepage__designedForEveryone-content-body">
					Photosnap can help you create stories that resonate with your
					audience. Our tool is designed for photographers of all levels,
					brands, businesses you name it.
				</p>
				<div className="homepage__createShare-content-action">
					<p className="action--black">view the stories</p>
					<img className="action-arrow--black" src={arrow} alt="" />
				</div>
			</section>

			<Story
				storyName={'The Mountains'}
				creator={'John Appleseed'}
				date={''}
				classGrid={'homepage-story-1'}
				img={{ url: story[0], alt: 'The Mountains' }}
			/>

			<Story
				storyName={'Sunset Cityscapes'}
				creator={'Benjamin Cruz'}
				date={''}
				classGrid={'homepage-story-2'}
				img={{ url: story[1], alt: 'Sunset Cityscapes' }}
			/>

			<Story
				storyName={'18 Days Voyage'}
				creator={'Alexei Borodin'}
				date={''}
				classGrid={'homepage-story-3'}
				img={{ url: story[2], alt: '18 Days Voyage' }}
			/>

			<Story
				storyName={'Architecturals'}
				creator={'Samantha Brooke'}
				date={''}
				classGrid={'homepage-story-4'}
				img={{ url: story[3], alt: 'Architecturals' }}
			/>
			<Feature
				header={'100% Responsive'}
				body={
					'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'
				}
				classGrid={'homepage-feature-1'}
				img={{ url: responsive_img, alt: 'responsive' }}
			/>
			<Feature
				header={'No Photo Upload Limit'}
				body={
					'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
				}
				classGrid={'homepage-feature-2'}
				img={{ url: no_limit_img, alt: 'no-limit' }}
			/>
			<Feature
				header={'Available to Embed'}
				body={
					'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.'
				}
				classGrid={'homepage-feature-3'}
				img={{ url: embed_img, alt: 'embed' }}
			/>
		</div>
	);
};
