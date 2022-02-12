import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FeaturedStory } from '../FeaturedStory';

import appalachia_img from '../../../assets/stories/mobile/moon-of-appalachia.webp';

window.matchMedia =
	window.matchMedia ||
	function () {
		return {
			matches: true,
			media: '(max-width: 767px)',
			onchange: null,
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn(),
		};
	};

const featuredStoryProps = {
	storyName: 'Hazy full moon of Appalachia',
	creator: 'John Appleseed',
	date: 'February 2nd 2022',
	storyBody:
		'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
	classGrid: '',
	img: {
		url: appalachia_img,
		alt: 'Moon of Appalachia',
	},
};

beforeEach(() => {
	render(<FeaturedStory {...featuredStoryProps} />, { wrapper: BrowserRouter });
});

describe('FeaturedStory', () => {
	test('should display FeaturedStory - Story Name ', () => {
		expect(screen.getByRole('featured-story')).toHaveTextContent(
			featuredStoryProps.storyName
		);
	});
	test('should display FeaturedStory - Creator ', () => {
		expect(screen.getByRole('featured-story')).toHaveTextContent(
			featuredStoryProps.creator
		);
	});
	test('should display FeaturedStory - Date ', () => {
		expect(screen.getByRole('featured-story')).toHaveTextContent(
			featuredStoryProps.date
		);
	});
	test('should display FeaturedStory - Story Body ', () => {
		expect(screen.getByRole('featured-story')).toHaveTextContent(
			featuredStoryProps.storyBody
		);
	});
	test('should display FeaturedStory - Read Story ', () => {
		expect(screen.getByRole('featured-story')).toHaveTextContent(
			/read the story/i
		);
	});
	test('should display FeaturedStory - IMG ', () => {
		expect(screen.getByAltText(/Moon of Appalachia/i)).toHaveAttribute(
			'src',
			featuredStoryProps.img.url
		);
	});
});
