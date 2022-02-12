import { Story } from '../../components/Story/Story';
import { FeaturedStory } from '../../components/FeaturedStory/FeaturedStory';
import { Spinner } from '../../components/Spinner/Spinner';

import {
	storiesMediaQueryImages,
	queriedImages,
} from './storiesMediaQueryImages';

export const Stories = (): JSX.Element => {
	storiesMediaQueryImages();

	if (queriedImages === undefined) {
		return <Spinner />;
	}
	const { featuredStory, story } = queriedImages;

	return (
		<div className="stories" role="stories">
			<FeaturedStory
				storyName={'Hazy full moon of Appalachia'}
				creator={'John Appleseed'}
				date={'February 2nd 2022'}
				storyBody={
					'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
				}
				img={{ url: featuredStory, alt: 'Moon of Appalachia' }}
			/>
			<Story
				storyName={'The Mountains'}
				creator={'John Appleseed'}
				date={'January 17nd 2022'}
				classGrid={'stories-story-1'}
				img={{ url: story[0], alt: 'The Mountains' }}
			/>

			<Story
				storyName={'Sunset Cityscapes'}
				creator={'Benjamin Cruz'}
				date={'January 4th 2022'}
				classGrid={'stories-story-2'}
				img={{ url: story[1], alt: 'Sunset Cityscapes' }}
			/>

			<Story
				storyName={'18 Days Voyage'}
				creator={'Alexei Borodin'}
				date={'December 12th 2021'}
				classGrid={'stories-story-3'}
				img={{ url: story[2], alt: '18 Days Voyage' }}
			/>

			<Story
				storyName={'Architecturals'}
				creator={'Samantha Brooke'}
				date={'November 18th 2021'}
				classGrid={'stories-story-4'}
				img={{ url: story[3], alt: 'Architecturals' }}
			/>

			<Story
				storyName={'World Tour 2021'}
				creator={'Timothy Wagner'}
				date={'November 6th 2021'}
				classGrid={'stories-story-5'}
				img={{ url: story[4], alt: 'World Tour 2021' }}
			/>

			<Story
				storyName={'Unforeseen Corners'}
				creator={'William Malcolm'}
				date={'October 21st 2021'}
				classGrid={'stories-story-6'}
				img={{ url: story[5], alt: 'Unforeseen Corners' }}
			/>

			<Story
				storyName={'King on Africa'}
				creator={'Tim Hillenburg'}
				date={'October 10th 2021'}
				classGrid={'stories-story-7'}
				img={{ url: story[6], alt: 'King on Africa' }}
			/>

			<Story
				storyName={'The Trip to Nowhere'}
				creator={'Felicia Rourke'}
				date={'September 30th 2021'}
				classGrid={'stories-story-8'}
				img={{ url: story[7], alt: 'The Trip to Nowhere' }}
			/>

			<Story
				storyName={'Rage of The Sea'}
				creator={'Mohammed Abdul'}
				date={'September 18th 2021'}
				classGrid={'stories-story-9'}
				img={{ url: story[8], alt: 'Rage of The Sea' }}
			/>

			<Story
				storyName={'Running Free'}
				creator={'Michelle Wong'}
				date={'September 3rd 2021'}
				classGrid={'stories-story-10'}
				img={{ url: story[9], alt: 'Running Free' }}
			/>

			<Story
				storyName={'Behind the waves'}
				creator={'Lamarr Wilson'}
				date={'August 24th 2021'}
				classGrid={'stories-story-11'}
				img={{ url: story[10], alt: 'Behind the waves' }}
			/>

			<Story
				storyName={'Calm Waters'}
				creator={'Samantha Brooke'}
				date={'August 14th 2021'}
				classGrid={'stories-story-12'}
				img={{ url: story[11], alt: 'Calm Waters' }}
			/>

			<Story
				storyName={'The Milky Way'}
				creator={'Benjamin Cruz'}
				date={'August 5th 2021'}
				classGrid={'stories-story-13'}
				img={{ url: story[12], alt: 'The Milky Way' }}
			/>

			<Story
				storyName={'Night at The Dark Forest'}
				creator={'Timothy Wagner'}
				date={'July 26th 2021'}
				classGrid={'stories-story-14'}
				img={{ url: story[13], alt: 'Night at The Dark Forest' }}
			/>

			<Story
				storyName={"Somwarpet's Beauty"}
				creator={'William Malcolm'}
				date={'July 14th 2021'}
				classGrid={'stories-story-15'}
				img={{ url: story[14], alt: "Somwarpet's Beauty" }}
			/>

			<Story
				storyName={'Land of Dreams'}
				creator={'Alexei Borodin'}
				date={'July 2nd 2021'}
				classGrid={'stories-story-16'}
				img={{ url: story[15], alt: 'Land of Dreams' }}
			/>
		</div>
	);
};
