import "./QuoteFeature.css";

function QuoteFeature() {
	return (
		<section className='quote-feature'>
			<div className='quote-feature__container container'>
				<div className='quote-feature__left'>
					<div className='quote-feature__quote'>
						<span
							className='quote-feature__mark'
							aria-hidden='true'>
							“
						</span>

						<blockquote>
							Muzyka wyraża to,
							<br />
							czego nie da się powiedzieć słowami.
						</blockquote>

						<span className='quote-feature__author'>św. Augustyn</span>
					</div>

					<img
						className='quote-feature__branch'
						src='/images/gold-branch.png'
						alt=''
						aria-hidden='true'
					/>
				</div>

				<div className='quote-feature__recording'>
					<div className='quote-feature__media'>
						<button
							className='quote-feature__play'
							type='button'
							aria-label='Odtwórz nasze nagranie'>
							▶
						</button>

						<span>Posłuchaj nas</span>
					</div>

					<a
						className='quote-feature__link'
						href='#recordings'>
						Zobacz wszystkie →
					</a>
				</div>
			</div>
		</section>
	);
}

export default QuoteFeature;
