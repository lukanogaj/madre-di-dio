import { useState } from "react";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
	// Controls the mobile navigation menu
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Closes the mobile menu after selecting a navigation link
	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className='navbar'>
			<div className='navbar__container container'>
				{/* Brand */}
				<a
					href='#home'
					className='navbar__logo'
					onClick={closeMenu}>
					<span className='navbar__logo-name'>Madre di Dio</span>

					<span className='navbar__logo-subtitle'>Oprawa muzyczna ślubów</span>
				</a>
				<ThemeToggle />
				{/* Mobile menu button */}
				<button
					className='navbar__toggle'
					type='button'
					aria-label='Otwórz menu'
					aria-expanded={isMenuOpen}
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<span />
					<span />
					<span />
				</button>

				{/* Main navigation */}
				<nav className={`navbar__nav ${isMenuOpen ? "navbar__nav--open" : ""}`}>
					<a
						href='#home'
						onClick={closeMenu}>
						Strona główna
					</a>

					<a
						href='#about'
						onClick={closeMenu}>
						O nas
					</a>

					<a
						href='#repertoire'
						onClick={closeMenu}>
						Repertuar
					</a>

					<a
						href='#recordings'
						onClick={closeMenu}>
						Nagrania
					</a>

					<a
						href='#gallery'
						onClick={closeMenu}>
						Galeria
					</a>

					<a
						href='#contact'
						onClick={closeMenu}>
						Kontakt
					</a>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
