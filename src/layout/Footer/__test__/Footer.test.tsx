import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../Footer';

import { Homepage } from '../../../pages/homepage/Homepage';
import { Stories } from '../../../pages/stories/Stories';
import { Features } from '../../../pages/features/Features';
import { Pricing } from '../../../pages/pricing/Pricing';

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
	render(<Footer />, { wrapper: BrowserRouter });
});

describe('Footer', () => {
	test('should render <Footer />', () => {
		expect(screen.getByRole('footer')).toBeInTheDocument;
	});
	test('should display Logo', () => {
		expect(screen.getByAltText(/footer logo/i)).toBeInTheDocument;
	});

	describe('Social Section', () => {
		test('should display Social - Facebook', () => {
			expect(screen.getByAltText(/facebook/i)).toBeInTheDocument;
		});
		test('should display Social - Youtube', () => {
			expect(screen.getByAltText(/Youtube/i)).toBeInTheDocument;
		});
		test('should display Social - Twitter', () => {
			expect(screen.getByAltText(/Twitter/i)).toBeInTheDocument;
		});
		test('should display Social - Pinterest', () => {
			expect(screen.getByAltText(/Pinterest/i)).toBeInTheDocument;
		});
		test('should display Social - Instagram', () => {
			expect(screen.getByAltText(/Instagram/i)).toBeInTheDocument;
		});
	});

	describe('NavLinks section', () => {
		test('should display - Home NavLink ', () => {
			expect(screen.getByText(/home/i)).toBeInTheDocument;
		});
		test('should display - Stories NavLink ', () => {
			expect(screen.getByText(/stories/i)).toBeInTheDocument;
		});
		test('should display - Features NavLink ', () => {
			expect(screen.getByText(/features/i)).toBeInTheDocument;
		});
		test('should display - Pricing NavLink ', () => {
			expect(screen.getByText(/pricing/i)).toBeInTheDocument;
		});
		test('should display - Get An Invite ', () => {
			expect(screen.getByText(/get an invite/i)).toBeInTheDocument;
		});

		test('navigate to <Homepage /> page when clicked on footer NavLink', () => {
			render(<Homepage />, { wrapper: BrowserRouter });

			userEvent.click(screen.getByRole('homepage-footer-nav'));
			expect(screen.getByRole('homepage')).toBeInTheDocument;
		});

		test('navigate to <Stories /> page when clicked on footer NavLink', () => {
			render(<Stories />, { wrapper: BrowserRouter });

			userEvent.click(screen.getByRole('stories-footer-nav'));
			expect(screen.getByRole('stories')).toBeInTheDocument;
		});

		test('navigate to <Features /> page when clicked on footer NavLink', () => {
			render(<Features />, { wrapper: BrowserRouter });

			userEvent.click(screen.getByRole('features-footer-nav'));
			expect(screen.getByRole('features')).toBeInTheDocument;
		});

		test('navigate to <Pricing /> page when clicked on footer NavLink', () => {
			render(<Pricing />, { wrapper: BrowserRouter });

			userEvent.click(screen.getByRole('pricing-footer-nav'));
			expect(screen.getByRole('pricing')).toBeInTheDocument;
		});
	});
});
