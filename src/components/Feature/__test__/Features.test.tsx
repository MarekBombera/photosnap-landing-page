import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Feature } from '../Feature';
import responsive_img from '../../../assets/features/desktop/responsive.svg';

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

const featureProps = {
	header: '100% Responsive',
	body: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
	classGrid: '',
	img: {
		url: responsive_img,
		alt: 'responsive',
	},
};

beforeEach(() => {
	render(<Feature {...featureProps} />, { wrapper: BrowserRouter });
});

describe('Feature', () => {
	test('should render <Feature /> ', () => {
		expect(screen.getByRole('feature')).toBeInTheDocument;
	});
	test('should display Feature - Header ', () => {
		expect(screen.getByRole('feature')).toHaveTextContent(featureProps.header);
	});
	test('should display Feature - Body ', () => {
		expect(screen.getByRole('feature')).toHaveTextContent(featureProps.body);
	});
	test('should display Feature - IMG ', () => {
		expect(screen.getByAltText(/responsive/i)).toHaveAttribute(
			'src',
			featureProps.img.url
		);
	});
});
