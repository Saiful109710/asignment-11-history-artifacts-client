import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGlobe, FaLandmark, FaBook, FaBuilding, FaQuoteLeft } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const HistoricalTimeline = () => {
  const events = [
    {
      year: "3000 BCE",
      title: "Invention of Writing",
      description:
        "The Sumerians developed the first known writing system, cuneiform, in Mesopotamia.",
      icon: <FaBook />,
    },
    {
      year: "2560 BCE",
      title: "Great Pyramid of Giza",
      description:
        "The construction of the Great Pyramid of Giza, one of the Seven Wonders of the Ancient World.",
      icon: <FaLandmark />,
    },
    {
      year: "79 CE",
      title: "Eruption of Mount Vesuvius",
      description:
        "The eruption of Mount Vesuvius buried the Roman cities of Pompeii and Herculaneum under volcanic ash.",
      icon: <FaGlobe />,
    },
    {
      year: "1440 CE",
      title: "Invention of the Printing Press",
      description:
        "Johannes Gutenberg invented the printing press, revolutionizing the spread of information.",
      icon: <FaBook />,
    },
    {
      year: "1969",
      title: "Moon Landing",
      description:
        "NASA's Apollo 11 mission successfully landed humans on the Moon for the first time.",
      icon: <FaGlobe />,
    },
    {
      year: "1989",
      title: "Fall of the Berlin Wall",
      description:
        "The Berlin Wall, symbolizing the division of East and West Germany, was torn down.",
      icon: <FaBuilding />,
    },
  ];

  




  const categories = [
    {
      name: "Ancient Civilizations",
      description: "Explore artifacts from early human societies like Mesopotamia, Egypt, and Indus Valley.",
      imgSrc: "https://i.ibb.co.com/C6HmWhX/ancient-Civilization.jpg", // Replace with relevant image URL
    },
    {
      name: "Technological Inventions",
      description: "Discover artifacts that represent breakthroughs in technology and science.",
      imgSrc: "https://i.ibb.co.com/2cm6Kfq/technology-Invention.jpg", // Replace with relevant image URL
    },
    {
      name: "Cultural Artifacts",
      description: "Dive into artifacts that reflect cultural traditions and artistic achievements.",
      imgSrc: "https://i.ibb.co.com/yFmptB7/cultural-Artifacts.jpg", // Replace with relevant image URL
    },
    {
      name: "Medieval Artifacts",
      description: "Learn about artifacts from the medieval period, including weapons, art, and more.",
      imgSrc: "https://i.ibb.co.com/nMXgPbF/medevial-Artifacts.jpg", // Replace with relevant image URL
    },
  ];

  const quotes = [
    {
      quote: "The only thing we have to fear is fear itself.",
      author: "Franklin D. Roosevelt",
      year: "1933",
    },
    {
      quote: "I think, therefore I am.",
      author: "René Descartes",
      year: "1637",
    },
    {
      quote: "To be, or not to be, that is the question.",
      author: "William Shakespeare",
      year: "1600",
    },
    {
      quote: "An eye for an eye will leave the whole world blind.",
      author: "Mahatma Gandhi",
      year: "1947",
    },
    {
      quote: "History is written by the victors.",
      author: "Winston Churchill",
      year: "1940",
    },
  ];

  return (
    <div>
      {/* Historical Timeline Section */}
      <Fade>
      <section className="bg-sky-50 py-10 rounded-xl">
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12">
          Historical Timeline
        </h2>
        <VerticalTimeline animate={true}>
          {events.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={event.year}
              iconStyle={{
                background: "rgb(37, 99, 235)", // Tailwind's "sky-600"
                color: "#fff",
              }}
              icon={event.icon}
              contentStyle={{
                background: "#E0F2FE", // Tailwind's "sky-100"
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #E0F2FE",
              }}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-bold text-sky-700">
                {event.title}
              </h3>
              <p className="text-gray-700">{event.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
      </Fade>

      {/* Artifact Categories Section */}
      <Fade>
      <section className=" py-10">
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12">
          Artifact Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={category.imgSrc}
                alt={category.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-sky-700">
                  {category.name}
                </h3>
                <p className="text-gray-700">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      </Fade>

      {/* Historical Quotes Section */}
      <Fade>
      <section className=" py-10">
        <h2 className="text-4xl font-bold text-center text-sky-700 mb-12">
          Discover Historical Quotes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <FaQuoteLeft className="text-sky-700 text-3xl mb-4" />
              <p className="italic text-gray-700 mb-4">"{quote.quote}"</p>
              <h4 className="text-lg font-bold text-sky-700">
                - {quote.author}, {quote.year}
              </h4>
            </div>
          ))}
        </div>
      </section>
      </Fade>
    </div>
  );
};

export default HistoricalTimeline;
