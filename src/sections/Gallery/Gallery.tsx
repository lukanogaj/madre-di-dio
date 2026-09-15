import "./Gallery.css";

const galleryItems = [
	{
		id: 1,
		label: "Skrzypce",
	},
	{
		id: 2,
		label: "Wokal",
	},
	{
		id: 3,
		label: "Organy",
	},
	{
		id: 4,
		label: "Ceremonia ślubna",
	},
	{
		id: 5,
		label: "Muzyka na żywo",
	},
	{
		id: 6,
		label: "Madre di Dio",
	},
];

function Gallery() {
	return (
		<section
			className='gallery'
			id='gallery'>
			<div className='gallery__container container'>
				{/* Section heading */}
				<div className='gallery__heading'>
					<span className='gallery__eyebrow'>Nasze chwile</span>

					<h2 className='gallery__title'>Galeria</h2>

					<p className='gallery__intro'>
						Muzyka, emocje i wyjątkowe chwile, którym mamy przyjemność
						towarzyszyć.
					</p>
				</div>

				{/* Gallery grid */}
				<div className='gallery__grid'>
					{galleryItems.map((item) => (
						<div
							className='gallery__item'
							key={item.id}>
							<div className='gallery__placeholder'>
								<span>{item.label}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Gallery;
