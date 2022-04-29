import { useState } from 'react';
import { useMediaQueryMatch } from '../../hooks/useMediaQueryMatch/useMediaQueryMatch';

import arrow from '../../assets/shared/desktop/arrow.svg';

interface props {
	storyName: string;
	creator: string;
	date: string;
	storyBody: string;

	img: {
		url: string;
		alt: string;
	};
}

export const FeaturedStory = ({
	storyName,
	date,
	creator,
	storyBody,
	img,
}: props): JSX.Element => {
	const [showEffect, setShowEffect] = useState<boolean>(false);

	const toggleShowEffect = (): void => {
		setShowEffect(showEffect);
	};

	const showColorEffectOnHover = (): string => {
		if (showEffect) {
			return 'featuredStory-effect--active';
		}
		return '';
	};

	const renderStory = (
		<section className="featuredStory-content ">
			<p className="featuredStory-announce"> last month's featured story</p>
			<h1 className="featuredStory-storyName">{storyName}</h1>
			<div className="featuredStory-creator-date-wrapper">
				<p className="featuredStory-date">{date}</p>
				<p className="featuredStory-creator">{`by ${creator}`}</p>
			</div>
			<p className="featuredStory-storyBody">{storyBody}</p>
			<div className="featuredStory-action">
				<p
					className="action--white"
					onMouseEnter={toggleShowEffect}
					onMouseLeave={toggleShowEffect}
				>
					Read the Story
				</p>
				<img className="action-arrow--white" src={arrow} alt=""></img>
			</div>
		</section>
	);

	return (
		<div
			className="featuredStory"
			role="featured-story"
			style={{
				backgroundImage: `url(${img.url})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				imageRendering: 'pixelated',
				zIndex: 2,
			}}
		>
			<div className={`featuredStory-effect ${showColorEffectOnHover()}`}></div>
			{useMediaQueryMatch('tablet') && renderStory}
			<div className="featuredStory-img">
				<img src={img.url} alt={img.alt} />
			</div>
			{!useMediaQueryMatch('tablet') && renderStory}
		</div>
	);
};
