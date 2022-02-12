import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import beta_img_mobile from '../../assets/shared/mobile/bg-beta.webp';
import beta_img_tablet from '../../assets/shared/tablet/bg-beta.webp';
import beta_img_desktop from '../../assets/shared/desktop/bg-beta.webp';

export let queriedImages: { beta_img: string };
export const betaMediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			beta_img: beta_img_mobile,
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			beta_img: beta_img_tablet,
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			beta_img: beta_img_desktop,
		};
	}
};
