import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Story } from '../Story';

import mountains_img from '../../../assets/stories/mobile/mountains.webp';

const storyProps = {
	storyName: 'The Mountains',
	creator: 'John Appleseed',
	date: '',
	classGrid: '',
	img: {
		url: mountains_img,
		alt: 'The Mountains',
	},
};

beforeEach(() => {
	render(<Story {...storyProps} />, { wrapper: BrowserRouter });
});

describe('Story', () => {
	test('should render <Story /> ', () => {
		expect(screen.getByRole('story')).toBeInTheDocument;
	});
	test('should display Story - Story Name ', () => {
		expect(screen.getByRole('story')).toHaveTextContent(storyProps.storyName);
	});
	test('should display Story - Creator ', () => {
		expect(screen.getByRole('story')).toHaveTextContent(storyProps.creator);
	});
	test('should display Story - Read Story ', () => {
		expect(screen.getByRole('story')).toHaveTextContent(/read story/i);
	});
	test('should display Story - IMG ', () => {
		expect(screen.getByAltText(/the mountains/i)).toHaveAttribute(
			'src',
			storyProps.img.url
		);
	});
});
