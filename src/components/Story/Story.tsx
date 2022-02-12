import arrow from '../../assets/shared/desktop/arrow.svg';

interface props {
	storyName: string;
	creator: string;
	date: string;
	classGrid: string;
	img: {
		url: string;
		alt: string;
	};
}

export const Story = ({
	storyName,
	creator,
	date,
	classGrid,
	img,
}: props): JSX.Element => {
	return (
		<div
			className={`story ${classGrid}`}
			role="story"
			style={{
				backgroundImage: `url(${img.url})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				imageRendering: 'pixelated',
			}}
		>
			<div className="story__content">
				<div className="story__header">
					<p className="story__header-date">{date}</p>
					<p className="story__header-name">{storyName}</p>
					<p className="story__header-creator">{`by ${creator}`}</p>
				</div>
				<div className="story__read-story">
					<p className="action--white">read story</p>
					<img className="action-arrow--white" src={arrow} alt="" />
				</div>
			</div>
			<div className="story__img">
				<img src={img.url} alt={img.alt}></img>
			</div>
		</div>
	);
};
