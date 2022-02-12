import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import moon_of_appalachia_mobile from '../../assets/stories/mobile/moon-of-appalachia.webp';
import moon_of_appalachia_tablet from '../../assets/stories/tablet/moon-of-appalachia.webp';
import moon_of_appalachia_desktop from '../../assets/stories/desktop/moon-of-appalachia.webp';

import mountains_img_mobile from '../../assets/stories/mobile/mountains.webp';
import cityscapes_img_mobile from '../../assets/stories/mobile/cityscapes.webp';
import voyage_img_mobile from '../../assets/stories/mobile/18-days-voyage.webp';
import architecturals_img_mobile from '../../assets/stories/mobile/architecturals.webp';
import world_tour_img_mobile from '../../assets/stories/mobile/world-tour.webp';
import unforeseen_corners_mobile from '../../assets/stories/mobile/unforeseen-corners.webp';
import king_on_africa_img_mobile from '../../assets/stories/mobile/king-on-africa.webp';
import trip_to_nowhere_img_mobile from '../../assets/stories/mobile/trip-to-nowhere.webp';
import rage_of_the_sea_img_mobile from '../../assets/stories/mobile/rage-of-the-sea.webp';
import running_free_img_mobile from '../../assets/stories/mobile/running-free.webp';
import behind_the_waves_img_mobile from '../../assets/stories/mobile/behind-the-waves.webp';
import calm_water_img_mobile from '../../assets/stories/mobile/calm-waters.webp';
import milky_way_img_mobile from '../../assets/stories/mobile/milky-way.webp';
import dark_forest_img_mobile from '../../assets/stories/mobile/dark-forest.webp';
import somwarpet_img_mobile from '../../assets/stories/mobile/somwarpet.webp';
import land_of_dream_img_mobile from '../../assets/stories/mobile/land-of-dreams.webp';

import mountains_img_desktop from '../../assets/stories/desktop/mountains.webp';
import cityscapes_img_desktop from '../../assets/stories/desktop/cityscapes.webp';
import voyage_img_desktop from '../../assets/stories/desktop/18-days-voyage.webp';
import architecturals_img_desktop from '../../assets/stories/desktop/architecturals.webp';
import world_tour_img_desktop from '../../assets/stories/desktop/world-tour.webp';
import unforeseen_corners_desktop from '../../assets/stories/desktop/unforeseen-corners.webp';
import king_on_africa_img_desktop from '../../assets/stories/desktop/king-on-africa.webp';
import trip_to_nowhere_img_desktop from '../../assets/stories/desktop/trip-to-nowhere.webp';
import rage_of_the_sea_img_desktop from '../../assets/stories/desktop/rage-of-the-sea.webp';
import running_free_img_desktop from '../../assets/stories/desktop/running-free.webp';
import behind_the_waves_img_desktop from '../../assets/stories/desktop/behind-the-waves.webp';
import calm_water_img_desktop from '../../assets/stories/desktop/calm-waters.webp';
import milky_way_img_desktop from '../../assets/stories/desktop/milky-way.webp';
import dark_forest_img_desktop from '../../assets/stories/desktop/dark-forest.webp';
import somwarpet_img_desktop from '../../assets/stories/desktop/somwarpet.webp';
import land_of_dream_img_desktop from '../../assets/stories/desktop/land-of-dreams.webp';

export let queriedImages: { featuredStory: string; story: string[] };
export const storiesMediaQueryImages = (): void => {
	if (useMediaQueryMatch('phone')) {
		queriedImages = {
			featuredStory: moon_of_appalachia_mobile,
			story: [
				mountains_img_mobile,
				cityscapes_img_mobile,
				voyage_img_mobile,
				architecturals_img_mobile,
				world_tour_img_mobile,
				unforeseen_corners_mobile,
				king_on_africa_img_mobile,
				trip_to_nowhere_img_mobile,
				rage_of_the_sea_img_mobile,
				running_free_img_mobile,
				behind_the_waves_img_mobile,
				calm_water_img_mobile,
				milky_way_img_mobile,
				dark_forest_img_mobile,
				somwarpet_img_mobile,
				land_of_dream_img_mobile,
			],
		};
	}
	if (useMediaQueryMatch('tablet')) {
		queriedImages = {
			featuredStory: moon_of_appalachia_tablet,
			story: [
				mountains_img_desktop,
				cityscapes_img_desktop,
				voyage_img_desktop,
				architecturals_img_desktop,
				world_tour_img_desktop,
				unforeseen_corners_desktop,
				king_on_africa_img_desktop,
				trip_to_nowhere_img_desktop,
				rage_of_the_sea_img_desktop,
				running_free_img_desktop,
				behind_the_waves_img_desktop,
				calm_water_img_desktop,
				milky_way_img_desktop,
				dark_forest_img_desktop,
				somwarpet_img_desktop,
				land_of_dream_img_desktop,
			],
		};
	}
	if (useMediaQueryMatch('desktop')) {
		queriedImages = {
			featuredStory: moon_of_appalachia_desktop,
			story: [
				mountains_img_desktop,
				cityscapes_img_desktop,
				voyage_img_desktop,
				architecturals_img_desktop,
				world_tour_img_desktop,
				unforeseen_corners_desktop,
				king_on_africa_img_desktop,
				trip_to_nowhere_img_desktop,
				rage_of_the_sea_img_desktop,
				running_free_img_desktop,
				behind_the_waves_img_desktop,
				calm_water_img_desktop,
				milky_way_img_desktop,
				dark_forest_img_desktop,
				somwarpet_img_desktop,
				land_of_dream_img_desktop,
			],
		};
	}
};
