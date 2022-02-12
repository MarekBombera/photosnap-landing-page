import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import hero_img_mobile from '../../assets/pricing/mobile/hero.webp';
import hero_img_tablet from '../../assets/pricing/tablet/hero.webp';
import hero_img_desktop from '../../assets/pricing/desktop/hero.webp';

export let queriedImages: { hero: string };
export const pricingMediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			hero: hero_img_mobile,
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			hero: hero_img_tablet,
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			hero: hero_img_desktop,
		};
	}
};
