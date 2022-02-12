import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import hero_img_mobile from '../../assets/features/mobile/hero.webp';
import hero_img_tablet from '../../assets/features/tablet/hero.webp';
import hero_img_desktop from '../../assets/features/desktop/hero.webp';

export let queriedImages: { hero: string };
export const featuresMediaQueryImages = (): void => {
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
