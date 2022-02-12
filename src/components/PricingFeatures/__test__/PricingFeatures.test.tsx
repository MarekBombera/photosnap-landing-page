import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PricingFeatures } from '../PricingFeatures';

const featuresProps = {
	feature: 'unlimited story posting',
	basic: true,
	pro: true,
	business: true,
	classGrid: '',
};

beforeEach(() => {
	render(<PricingFeatures {...featuresProps} />, { wrapper: BrowserRouter });
});

describe('PricingFeatures', () => {
	test('Should render <PricingFeatures />', () => {
		expect(screen.getByRole('pricing-features')).toBeInTheDocument;
	});

	test('should display Pricing Features - Check IMG 3x ', () => {
		expect(screen.queryAllByAltText(/check/i).length).toBe(3);
	});
});
