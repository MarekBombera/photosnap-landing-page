import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Stories } from '../Stories';

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

beforeEach(() => {
	render(<Stories />, { wrapper: BrowserRouter });
});

describe('Stories', () => {
	test('should render <Stories /> ', () => {
		expect(screen.getByRole('stories')).toBeInTheDocument;
	});
	test('should show <FeaturedStory /> ', () => {
		expect(screen.getByRole('featured-story')).toBeInTheDocument;
	});
	test('should show 14x <Story /> ', () => {
		expect(screen.getAllByRole('story').length).toBe(16);
	});
});
