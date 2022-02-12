import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Beta } from '../Beta';

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
	render(<Beta />, { wrapper: BrowserRouter });
});

describe('Beta', () => {
	test('should render <Beta /> ', () => {
		expect(screen.getByRole('beta')).toBeInTheDocument;
	});
	test('should display Beta - Header ', () => {
		expect(screen.getByRole('beta')).toHaveTextContent(
			'We’re in beta. Get your invite today!'
		);
	});
	test('should show Decoration <hr /> ', () => {
		expect(screen.queryAllByRole('decoration')).toBeInTheDocument;
	});
});
