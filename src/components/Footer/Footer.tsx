import "./Footer.css";

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer'>
			<div className='footer__container container'>
				{/* Brand */}
				<div className='footer__brand'>
					<a
						href='#home'
						className='footer__logo'>
						Madre di Dio
					</a>

					<p>Oprawa muzyczna ślubów</p>

					<span>Skrzypce • Wokal • Organy</span>
				</div>

				{/* Navigation */}
				<nav
					className='footer__nav'
					aria-label='Nawigacja w stopce'>
					<a href='#about'>O nas</a>
					<a href='#repertoire'>Repertuar</a>
					<a href='#recordings'>Nagrania</a>
					<a href='#gallery'>Galeria</a>
					<a href='#contact'>Kontakt</a>
				</nav>

				{/* Contact */}
				<div className='footer__contact'>
					<a href='tel:+48693202583'>+48 693 202 583</a>

					<a href='mailto:trio.madre.di.dio@gmail.com'>
						trio.madre.di.dio@gmail.com
					</a>

					<span>Oprawa muzyczna ślubów Madre di Dio</span>
				</div>
			</div>

			<div className='footer__bottom container'>
				<p>© {currentYear} Madre di Dio. Wszelkie prawa zastrzeżone.</p>
			</div>
		</footer>
	);
}

export default Footer;
