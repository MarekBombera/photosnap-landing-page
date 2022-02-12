import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Pricing } from '../Pricing';
import { PriceCard } from '../../../components/PriceCard/PriceCard';

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
	render(<Pricing />, { wrapper: BrowserRouter });
});

describe('Pricing', () => {
	test('Should render <Pricing />', () => {
		expect(screen.getByRole('pricing')).toBeInTheDocument;
	});

	describe('Pricing Hero section', () => {
		test('should display Pricing Hero - IMG ', () => {
			expect(screen.getByAltText(/pricing/i));
		});
		test('should display Pricing Hero - Header ', () => {
			expect(screen.queryAllByText(/pricing/i)).toBeInTheDocument;
		});
		test('should display Pricing Hero - Body ', () => {
			expect(
				screen.getByText(
					/Create your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos./i
				)
			).toBeInTheDocument;
		});

		test('should display Pricing Hero - Decoration <hr /> ', () => {
			expect(screen.queryAllByRole('decoration')).toBeInTheDocument;
		});
	});

	describe('Checkbox section', () => {
		test('should display Checkbox', () => {
			expect(screen.getByRole('checkbox')).toBeInTheDocument;
		});
		test('should display Checkbox - Monthly ', () => {
			expect(screen.queryAllByText(/monthly/i)).toBeInTheDocument;
		});
		test('should display Checkbox - Yearly ', () => {
			expect(screen.queryAllByText(/yearly/i)).toBeInTheDocument;
		});
	});

	describe('<PriceCard/> section', () => {
		test('should display <PriceCard/> 3x', () => {
			expect(screen.queryAllByRole('pricecard').length).toBe(3);
		});
		test('should display different Basic - <PriceCard/> price after Checkbox click', () => {
			expect(screen.getByText(/19.00/i)).toBeInTheDocument;
			userEvent.click(screen.getByRole('checkbox'));
			expect(screen.getByText(/190.00/i)).toBeInTheDocument;
		});
		test('should display different Pro - <PriceCard/> price after Checkbox click', () => {
			expect(screen.getByText(/39.00/i)).toBeInTheDocument;
			userEvent.click(screen.getByRole('checkbox'));
			expect(screen.getByText(/390.00/i)).toBeInTheDocument;
		});
		test('should display different Business - <PriceCard/> price after Checkbox click', () => {
			expect(screen.getByText(/99.00/i)).toBeInTheDocument;
			userEvent.click(screen.getByRole('checkbox'));
			expect(screen.getByText(/990.00/i)).toBeInTheDocument;
		});
	});
});
