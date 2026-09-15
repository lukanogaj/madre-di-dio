import "./About.css";

function About() {
	return (
		<section
			className='about'
			id='about'>
			<div className='about__container container'>
				{/* About the ensemble */}
				<div className='about__content'>
					<span className='about__eyebrow'>O nas</span>

					<h2 className='about__title'>
						Muzyka, która towarzyszy najważniejszym chwilom
					</h2>

					<p>
						Oferujemy Państwu oprawę muzyczną ślubów i uroczystości, tworząc
						wyjątkową i pełną emocji atmosferę podczas najważniejszych momentów.
					</p>

					<p>
						Nasz trzyosobowy skład łączy brzmienie skrzypiec, wokalu oraz
						organów, dzięki czemu możemy przygotować oprawę dopasowaną do
						charakteru ceremonii i indywidualnych życzeń Pary Młodej.
					</p>

					<p>
						W naszym repertuarze znajdują się utwory klasyczne, religijne oraz
						współczesne aranżacje odpowiednie na uroczystości ślubne.
					</p>

					<p>
						Zależy nam, aby muzyka była pięknym dopełnieniem ceremonii i
						pozostała częścią jej wspomnień na długie lata.
					</p>

					<a
						className='about__contact-link'
						href='#contact'>
						Skontaktuj się z nami
					</a>
				</div>

				{/* Featured recording */}
				<div className='about__recording'>
					<div className='about__recording-placeholder'>
						<button
							className='about__play-button'
							type='button'
							aria-label='Odtwórz nagranie'>
							▶
						</button>

						<span>Posłuchaj nas</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
