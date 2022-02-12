import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from '../Navigation';

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
	render(<Navigation />, { wrapper: BrowserRouter });
	expect(screen.getByRole('navigation')).toBeInTheDocument;
});

describe('Navigation ', () => {
	test('navigate to <Stories /> page when clicked on NavLink', () => {
		render(<Stories />, { wrapper: BrowserRouter });

		userEvent.click(screen.getByRole('stories-nav'));
		expect(screen.getByRole('stories')).toBeInTheDocument;
	});

	test('navigate to <Features /> page when clicked on NavLink', () => {
		render(<Features />, { wrapper: BrowserRouter });

		userEvent.click(screen.getByRole('features-nav'));
		expect(screen.getByRole('features')).toBeInTheDocument;
	});

	test('navigate to <Pricing /> page when clicked on NavLink', () => {
		render(<Pricing />, { wrapper: BrowserRouter });

		userEvent.click(screen.getByRole('pricing-nav'));
		expect(screen.getByRole('pricing')).toBeInTheDocument;
	});
});
