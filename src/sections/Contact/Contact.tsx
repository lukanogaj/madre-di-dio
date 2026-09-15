import "./Contact.css";

function Contact() {
	return (
		<section
			className='contact'
			id='contact'>
			<div className='contact__container container'>
				{/* Contact information */}
				<div className='contact__content'>
					<span className='contact__eyebrow'>Skontaktuj się z nami</span>

					<h2 className='contact__title'>
						Stwórzmy razem wyjątkową oprawę Waszego ślubu
					</h2>

					<p className='contact__intro'>
						Zapraszamy do kontaktu w sprawie dostępnych terminów, repertuaru
						oraz indywidualnej oprawy muzycznej ceremonii.
					</p>

					<div className='contact__details'>
						<a
							className='contact__detail'
							href='tel:+48693202583'>
							<span
								className='contact__icon'
								aria-hidden='true'>
								☎
							</span>

							<div>
								<span className='contact__label'>Telefon</span>
								<strong>+48 693 202 583</strong>
							</div>
						</a>

						<a
							className='contact__detail'
							href='mailto:trio.madre.di.dio@gmail.com'>
							<span
								className='contact__icon'
								aria-hidden='true'>
								✉
							</span>

							<div>
								<span className='contact__label'>E-mail</span>
								<strong>trio.madre.di.dio@gmail.com</strong>
							</div>
						</a>

						<div className='contact__detail'>
							<span
								className='contact__icon'
								aria-hidden='true'>
								♡
							</span>

							<div>
								<span className='contact__label'>Facebook</span>
								<strong>Oprawa muzyczna ślubów Madre di Dio</strong>
							</div>
						</div>
					</div>
				</div>

				{/* Contact form */}
				<form className='contact__form'>
					<div className='contact__field'>
						<label htmlFor='name'>Imię i nazwisko</label>
						<input
							id='name'
							name='name'
							type='text'
							placeholder='Wasze imię'
						/>
					</div>

					<div className='contact__field'>
						<label htmlFor='email'>E-mail</label>
						<input
							id='email'
							name='email'
							type='email'
							placeholder='wasz@email.pl'
						/>
					</div>

					<div className='contact__field'>
						<label htmlFor='wedding-date'>Data uroczystości</label>
						<input
							id='wedding-date'
							name='wedding-date'
							type='date'
						/>
					</div>

					<div className='contact__field'>
						<label htmlFor='message'>Wiadomość</label>
						<textarea
							id='message'
							name='message'
							rows={6}
							placeholder='Napiszcie kilka słów o Waszej uroczystości...'
						/>
					</div>

					<button
						className='contact__submit'
						type='submit'>
						Wyślij wiadomość
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
