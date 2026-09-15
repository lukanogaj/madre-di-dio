import "./Recordings.css";

const recordings = [
	{
		title: "Ave Maria",
		description: "Franz Schubert",
	},
	{
		title: "Panis Angelicus",
		description: "César Franck",
	},
	{
		title: "Canon in D",
		description: "Johann Pachelbel",
	},
	{
		title: "Hallelujah",
		description: "Leonard Cohen",
	},
];

function Recordings() {
	return (
		<section
			className='recordings'
			id='recordings'>
			<div className='recordings__container container'>
				{/* Section heading */}
				<div className='recordings__heading'>
					<span className='recordings__eyebrow'>Posłuchaj nas</span>

					<h2 className='recordings__title'>Nasze nagrania</h2>

					<p className='recordings__intro'>
						Posłuchaj wybranych utworów w naszym wykonaniu.
					</p>
				</div>

				{/* Recording cards */}
				<div className='recordings__grid'>
					{recordings.map((recording) => (
						<article
							className='recordings__card'
							key={recording.title}>
							<div className='recordings__media'>
								<button
									className='recordings__play'
									type='button'
									aria-label={`Odtwórz ${recording.title}`}>
									▶
								</button>
							</div>

							<div className='recordings__card-content'>
								<h3>{recording.title}</h3>

								<p>{recording.description}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Recordings;
