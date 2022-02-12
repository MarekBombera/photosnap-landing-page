import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../Header';
import { Homepage } from '../../../pages/homepage/Homepage';

beforeEach(() => {
	render(<Header />, { wrapper: BrowserRouter });
});

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

describe('Header', () => {
	test('should render <Header /> ', () => {
		expect(screen.getByRole('banner')).toBeInTheDocument;
	});
	test('should display Logo ', () => {
		expect(screen.getByAltText(/logo header/i)).toBeInTheDocument;
	});

	test('navigate to <Homepage /> page when clicked on Logo', () => {
		render(<Homepage />, { wrapper: BrowserRouter });
		userEvent.click(screen.getByAltText(/logo header/i));
		expect(screen.getByRole('homepage')).toBeInTheDocument;
	});

	test('should display Burger-Menu-Icon by default ', () => {
		expect(screen.getByAltText(/mobile navigation/i)).toBeInTheDocument;
	});
	test('should not display Close-Menu-Icon by default ', () => {
		expect(screen.queryByAltText(/close mobile navigation/i)).not
			.toBeInTheDocument;
	});
	test('should open Mobile-Menu onClick ', () => {
		userEvent.click(screen.getByAltText(/mobile navigation/i));
		expect(screen.getByRole('navigation')).toBeInTheDocument;
	});

	test('should close Mobile-Menu onClick ', () => {
		userEvent.click(screen.getByAltText(/mobile navigation/i));
		expect(screen.getByRole('navigation')).toBeInTheDocument;

		userEvent.click(screen.getByAltText(/close mobile navigation/i));
		expect(screen.queryByRole('navigation')).not.toBeInTheDocument;
	});

	describe('should display <NavLinks/> on Burger-Menu-Icon onClick', () => {
		beforeEach(() => {
			userEvent.click(screen.getByAltText(/mobile navigation/i));
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
	});

	describe('should not display <NavLinks/> on Close-Icon onClick ', () => {
		beforeEach(() => {
			userEvent.click(screen.getByAltText(/mobile navigation/i));
		});
		afterEach(() => {
			userEvent.click(screen.getByAltText(/close mobile navigation/i));
		});
		test('should display - Stories NavLink ', () => {
			expect(screen.getByText(/stories/i)).not.toBeInTheDocument;
		});
		test('should display - Features NavLink ', () => {
			expect(screen.getByText(/features/i)).not.toBeInTheDocument;
		});
		test('should display - Pricing NavLink ', () => {
			expect(screen.getByText(/pricing/i)).not.toBeInTheDocument;
		});
		test('should display - Get An Invite ', () => {
			expect(screen.getByText(/get an invite/i)).not.toBeInTheDocument;
		});
	});
});
