import "./Hero.css";

function Hero() {
	return (
		<section
			className='hero'
			id='home'>
			<div className='hero__image-wrapper'>
				<img
					className='hero__image'
					src='/images/hero-madre-di-dio.png'
					alt='Madre di Dio — oprawa muzyczna ślubów: skrzypce, wokal i organy'
				/>

				<a
					className='hero__contact-link'
					href='#contact'
					aria-label='Przejdź do formularza kontaktowego'
				/>
			</div>
		</section>
	);
}

export default Hero;
