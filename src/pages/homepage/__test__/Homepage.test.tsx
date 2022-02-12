import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Homepage } from '../Homepage';

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
	render(<Homepage />, { wrapper: BrowserRouter });
});

describe('Homepage', () => {
	test('should render <Homepage /> ', () => {
		expect(screen.getByRole('homepage')).toBeInTheDocument;
	});

	describe('Create & Share section', () => {
		test('should show Create&Share - IMG ', () => {
			expect(screen.getByAltText(/create and share/i));
		});
		test('should show Create&Share - Header ', () => {
			expect(screen.getByText(/Create and share your photo stories/i))
				.toBeInTheDocument;
		});
		test('should show Create&Share - Body ', () => {
			expect(
				screen.getByText(
					/Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others./i
				)
			).toBeInTheDocument;
		});
		test('should show Create&Share - Get An Invite ', () => {
			expect(screen.getByText(/get an invite/i)).toBeInTheDocument;
		});

		test('should show Decoration <hr /> ', () => {
			expect(screen.getByRole('decoration')).toBeInTheDocument;
		});
	});

	describe('Beautiful Stories Section', () => {
		test('should show Beautiful Stories - IMG ', () => {
			expect(screen.getByAltText(/beautiful stories/i));
		});
		test('should show Beautiful Stories - Header ', () => {
			expect(screen.getByText(/Beautiful stories every time/i))
				.toBeInTheDocument;
		});

		test('should show Beautiful Stories - Body ', () => {
			expect(
				screen.getByText(
					/We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone./i
				)
			).toBeInTheDocument;
		});
		test('should show Beautiful Stories - View The Stories ', () => {
			expect(screen.queryAllByText(/view the stories/i)).toBeInTheDocument;
		});
	});

	describe('Designed For Everyone', () => {
		test('should show Designed For Everyone - IMG ', () => {
			expect(screen.getByAltText(/designed for everyone/i));
		});
		test('should show Designed For Everyone - Header ', () => {
			expect(screen.getByText(/designed for everyone/i)).toBeInTheDocument;
		});

		test('should show Designed For Everyone - Body ', () => {
			expect(
				screen.getByText(
					/Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it./i
				)
			).toBeInTheDocument;
		});
	});

	describe('Stories section', () => {
		test('should show 4x <Story />', () => {
			expect(screen.getAllByRole('story').length).toBe(4);
		});
	});

	describe('Product Info Section', () => {
		describe('Product Info - Responsive', () => {
			test('should show Product Info - Responsive - IMG', () => {
				expect(screen.getByAltText(/responsive/i)).toBeInTheDocument;
			});
			test('should show Product Info - Responsive - Heading', () => {
				expect(screen.getByText(/100% responsive/i)).toBeInTheDocument;
			});

			test('should show Product Info - Responsive - Body', () => {
				expect(
					screen.getByText(
						/No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen./i
					)
				).toBeInTheDocument;
			});
		});
		describe('Product Info - No Upload Limit', () => {
			test('should show Product Info - No Upload Limit - IMG', () => {
				expect(screen.getByAltText(/no-limit/i)).toBeInTheDocument;
			});
			test('should show Product Info - No Upload Limit - Heading', () => {
				expect(screen.getByText(/no photo upload limit/i)).toBeInTheDocument;
			});

			test('should show Product Info - No Upload Limit - Body', () => {
				expect(
					screen.getByText(
						/Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go./i
					)
				).toBeInTheDocument;
			});
		});
		describe('Product Info - Available Embed', () => {
			test('should show Product Info - Available Embed - IMG', () => {
				expect(screen.getByAltText(/embed/i)).toBeInTheDocument;
			});
			test('should show Product Info - Available Embed - Heading', () => {
				expect(screen.getByText(/available to embed/i)).toBeInTheDocument;
			});

			test('should show Product Info - Available Embed - Body', () => {
				expect(
					screen.getByText(
						/Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more./i
					)
				).toBeInTheDocument;
			});
		});
	});
});
