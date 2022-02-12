import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './layout/Header/Header';
import { Footer } from './layout/Footer/Footer';
import { Spinner } from './components/Spinner/Spinner';

import './styles/css/main.css';

interface lazyLoading {
	default: () => JSX.Element | never;
}

const Homepage = lazy(
	(): Promise<lazyLoading> =>
		import('./pages/homepage/Homepage').then(({ Homepage }) => ({
			default: Homepage,
		}))
);

const Stories = lazy(
	(): Promise<lazyLoading> =>
		import('./pages/stories/Stories').then(({ Stories }) => ({
			default: Stories,
		}))
);
const Features = lazy(
	(): Promise<lazyLoading> =>
		import('./pages/features/Features').then(({ Features }) => ({
			default: Features,
		}))
);
const Pricing = lazy(
	(): Promise<lazyLoading> =>
		import('./pages/pricing/Pricing').then(({ Pricing }) => ({
			default: Pricing,
		}))
);

export const App = (): JSX.Element => {
	return (
		<>
			<Suspense fallback={<Spinner />}>
				<Header />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/stories" element={<Stories />} />
					<Route path="/features" element={<Features />} />
					<Route path="/pricing" element={<Pricing />} />
				</Routes>
				<Footer />
			</Suspense>
		</>
	);
};
