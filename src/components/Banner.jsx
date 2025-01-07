import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const artifacts = [
  {
    artifactName: "Rosetta Stone",
    artifactImage: "https://i.ibb.co.com/8jQydTQ/Rosetta`-Stone.jpg",
    historicalContext:
      "The Rosetta Stone is a granodiorite stele inscribed with three versions of a decree issued in Memphis, Egypt, in 196 BC during the Ptolemaic dynasty on behalf of King Ptolemy V.",
  },
  {
    artifactName: "Antikythera Mechanism",
    artifactImage: "https://i.ibb.co.com/p4YZ0dL/antikythera-mechanism.jpg",
    historicalContext:
      "The Antikythera Mechanism is an ancient Greek analog computer and orrery used to predict astronomical positions and eclipses for calendar and astrological purposes decades in advance.",
  },
  {
    artifactName: "Terracotta Army",
    artifactImage: "https://i.ibb.co.com/998y4Q7/teracotta-Army.jpg",
    historicalContext:
      "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. It was buried with the emperor to protect him in the afterlife.",
  },
];

const ArtifactSlider = () => {
  return (
    <div className="w-full  py-5">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="h-[700px] "
      >
        {artifacts.map((artifact, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center p-5">
            <div className="bg-white shadow-md rounded-lg p-5 w-full">
              <img
                src={artifact.artifactImage}
                alt={artifact.artifactName}
                className="w-full h-[500px]  object-cover rounded-md mb-5"
              />
              <h2 className="text-2xl font-bold mb-2">{artifact.artifactName}</h2>
              <p className="text-gray-600">{artifact.historicalContext}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ArtifactSlider;
