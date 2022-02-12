import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Features } from '../Features';

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
	render(<Features />, { wrapper: BrowserRouter });
});

describe('Features', () => {
	test('should render <Features /> ', () => {
		expect(screen.getByRole('features')).toBeInTheDocument;
	});

	describe('Features Hero section', () => {
		test('should show Features Hero - IMG ', () => {
			expect(screen.getByAltText(/features/i));
		});
		test('should show Features Hero - Header ', () => {
			expect(screen.queryAllByText(/features/i)).toBeInTheDocument;
		});
		test('should show Features Hero - Body ', () => {
			expect(
				screen.getByText(
					/We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories./i
				)
			).toBeInTheDocument;
		});

		test('should show Features Hero - Decoration <hr /> ', () => {
			expect(screen.queryAllByRole('decoration')).toBeInTheDocument;
		});
	});
});
