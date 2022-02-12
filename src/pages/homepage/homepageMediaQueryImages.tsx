import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import create_share_img_mobile from '../../assets/home/mobile/create-and-share.webp';
import beautiful_stories_img_mobile from '../../assets/home/mobile/beautiful-stories.webp';
import designed_everyone_img_mobile from '../../assets/home/mobile/designed-for-everyone.webp';

import create_share_img_tablet from '../../assets/home/tablet/create-and-share.webp';
import beautiful_stories_img_tablet from '../../assets/home/tablet/beautiful-stories.webp';
import designed_everyone_img_tablet from '../../assets/home/tablet/designed-for-everyone.webp';

import create_share_img_desktop from '../../assets/home/desktop/create-and-share.webp';
import beautiful_stories_img_desktop from '../../assets/home/desktop/beautiful-stories.webp';
import designed_everyone_img_desktop from '../../assets/home/desktop/designed-for-everyone.webp';

import mountains_img_mobile from '../../assets/stories/mobile/mountains.webp';
import cityscapes_img_mobile from '../../assets/stories/mobile/cityscapes.webp';
import voyage_img_mobile from '../../assets/stories/mobile/18-days-voyage.webp';
import architecturals_img_mobile from '../../assets/stories/mobile/architecturals.webp';

import mountains_img_desktop from '../../assets/stories/desktop/mountains.webp';
import cityscapes_img_desktop from '../../assets/stories/desktop/cityscapes.webp';
import voyage_img_desktop from '../../assets/stories/desktop/18-days-voyage.webp';
import architecturals_img_desktop from '../../assets/stories/desktop/architecturals.webp';

export let queriedImages: { homepage: string[]; story: string[] };
export const homepageMediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			homepage: [
				create_share_img_mobile,
				beautiful_stories_img_mobile,
				designed_everyone_img_mobile,
			],
			story: [
				mountains_img_mobile,
				cityscapes_img_mobile,
				voyage_img_mobile,
				architecturals_img_mobile,
			],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			homepage: [
				create_share_img_tablet,
				beautiful_stories_img_tablet,
				designed_everyone_img_tablet,
			],
			story: [
				mountains_img_desktop,
				cityscapes_img_desktop,
				voyage_img_desktop,
				architecturals_img_desktop,
			],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			homepage: [
				create_share_img_desktop,
				beautiful_stories_img_desktop,
				designed_everyone_img_desktop,
			],
			story: [
				mountains_img_desktop,
				cityscapes_img_desktop,
				voyage_img_desktop,
				architecturals_img_desktop,
			],
		};
	}
};
