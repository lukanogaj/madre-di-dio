import "./Services.css";

const services = [
	{
		icon: "♡",
		title: "Śluby",
		description: "Najważniejsze chwile",
	},
	{
		icon: "♫",
		title: "Koncerty",
		description: "Wydarzenia specjalne",
	},
	{
		icon: "♧",
		title: "Repertuar",
		description: "Od klasyki po współczesność",
	},
	{
		icon: "▣",
		title: "Kalendarz",
		description: "Sprawdź dostępne terminy",
	},
];

function Services() {
	return (
		<section
			className='services'
			aria-label='Nasza oferta'>
			<div className='services__container container'>
				{services.map((service) => (
					<article
						className='services__item'
						key={service.title}>
						{/* Decorative service icon */}
						<span
							className='services__icon'
							aria-hidden='true'>
							{service.icon}
						</span>

						<h2 className='services__title'>{service.title}</h2>

						<p className='services__description'>{service.description}</p>
					</article>
				))}
			</div>
		</section>
	);
}

export default Services;
