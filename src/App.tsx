import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import QuoteFeature from "./sections/QuoteFeature/QuoteFeature";
import About from "./sections/About/About";
import Recordings from "./sections/Recordings/Recordings";
import Repertoire from "./sections/Repertoire/Repertoire";
import Gallery from "./sections/Gallery/Gallery";
import Contact from "./sections/Contact/Contact";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Services />
			<QuoteFeature />
			<About />
			<Recordings />
			<Repertoire />
			<Gallery />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
