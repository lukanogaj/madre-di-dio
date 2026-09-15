import "./Repertoire.css";

const repertoire = [
	{
		category: "Na wejście",
		songs: [
			"Canon in D — Johann Pachelbel",
			"Ave Maria — Franz Schubert",
			"Ave Maria — Johann Sebastian Bach / Charles Gounod",
		],
	},
	{
		category: "Podczas ceremonii",
		songs: [
			"Panis Angelicus — César Franck",
			"Hallelujah — Leonard Cohen",
			"Amazing Grace — tradycyjna",
		],
	},
	{
		category: "Na zakończenie",
		songs: [
			"Marsz weselny — Felix Mendelssohn",
			"Ode to Joy — Ludwig van Beethoven",
			"Wybrany utwór Pary Młodej",
		],
	},
];

function Repertoire() {
	return (
		<section
			className='repertoire'
			id='repertoire'>
			<div className='repertoire__container container'>
				{/* Section heading */}
				<div className='repertoire__heading'>
					<span className='repertoire__eyebrow'>
						Muzyka na Waszą uroczystość
					</span>

					<h2 className='repertoire__title'>Repertuar</h2>

					<p className='repertoire__intro'>
						Repertuar dobieramy do charakteru ceremonii oraz indywidualnych
						życzeń Pary Młodej.
					</p>
				</div>

				{/* Repertoire categories */}
				<div className='repertoire__grid'>
					{repertoire.map((section) => (
						<article
							className='repertoire__card'
							key={section.category}>
							<h3 className='repertoire__card-title'>{section.category}</h3>

							<ul className='repertoire__list'>
								{section.songs.map((song) => (
									<li key={song}>{song}</li>
								))}
							</ul>
						</article>
					))}
				</div>

				<p className='repertoire__note'>
					Masz wymarzony utwór, którego nie ma na liście? Skontaktuj się z nami
					— chętnie porozmawiamy o przygotowaniu indywidualnej aranżacji.
				</p>
			</div>
		</section>
	);
}

export default Repertoire;
