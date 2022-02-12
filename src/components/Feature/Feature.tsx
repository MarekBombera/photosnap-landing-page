type props = {
	header: string;
	body: string;
	classGrid: string;
	img: {
		url: string;
		alt: string;
	};
};

export const Feature = ({
	header,
	body,
	classGrid,
	img,
}: props): JSX.Element => {
	return (
		<div className={`feature ${classGrid}`} role="feature">
			<div className="feature-img">
				<img src={img.url} alt={img.alt} />
			</div>
			<div className="feature-content">
				<h3 className="feature-header">{header}</h3>
				<p className="feature-body">{body}</p>
			</div>
		</div>
	);
};
