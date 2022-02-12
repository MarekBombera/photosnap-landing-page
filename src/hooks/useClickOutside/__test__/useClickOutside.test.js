import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../../../layout/Header/Header';

beforeEach(() => {
	render(<Header />, {
		wrapper: BrowserRouter,
	});
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

describe('useClickOutside Hook', () => {
	test('Should close Mobile-Menu while clicking outside', () => {
		userEvent.click(screen.getByAltText(/mobile navigation/i));
		expect(screen.getByRole('navigation')).toBeInTheDocument;

		userEvent.click(screen.getByRole('banner'));
		expect(screen.getByRole('navigation')).not.toBeInTheDocument;
	});
});
