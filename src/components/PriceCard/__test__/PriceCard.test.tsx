import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PriceCard } from '../PriceCard';

const cardProps = {
	plan: 'Basic',
	body: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
	price: '$19',
	style: '',
	yearlyPlan: false,
};

beforeEach(() => {
	render(<PriceCard {...cardProps} />, { wrapper: BrowserRouter });
});

describe('<PriceCard />', () => {
	test('Should render <PriceCard />', () => {
		expect(screen.getByRole('pricecard')).toBeInTheDocument;
	});
	test('Should render Price Card - Plan', () => {
		expect(screen.getByRole('pricecard')).toHaveTextContent(cardProps.plan);
	});
	test('Should render Price Card - Body', () => {
		expect(screen.getByRole('pricecard')).toHaveTextContent(cardProps.body);
	});
	test('Should render Price Card - Price', () => {
		expect(screen.getByRole('pricecard')).toHaveTextContent(cardProps.price);
	});
});
