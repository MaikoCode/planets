import planetJson from "../../data.json";
import iconSource from "../assets/icon-source.svg"
import { useState } from "react";

export default function FirstPage() {

    const [activeButton, setActiveButton] = useState('overview');

    const planetColors = {
        "mercury": "bg-mercury border-mercury hover:bg-mercury",
        "venus": "bg-venus border-venus hover:bg-venus",
        "earth": "bg-earth border-earth hover:bg-earth",
        "mars": "bg-mars border-mars hover:bg-mars",
        "jupiter": "bg-jupiter border-jupiter hover:bg-jupiter",
        "saturn": "bg-saturn border-saturn hover:bg-saturn",
        "uranus": "bg-uranus border-uranus hover:bg-uranus",
        "neptune": "bg-neptune border-neptune hover:bg-neptune"
      };

    const activePlanet = planetJson[0].name.toLowerCase();
    const activeColor = planetColors[activePlanet] || "#ffffff";

    const handleButtonClick = (button) => {
        setActiveButton(button)
    }


   
  return (
    <div className="mt-10">
        <div className="lg:px-12">
            <section className="mobile-explorer flex items-center justify-between border-b border-white">
                <button 
                className={`${activeButton === 'overview' ? `before:bg-${activePlanet}` : ''}`}
                onClick={() => handleButtonClick('overview')}
                >overview</button>

                <button
                className={`${activeButton === 'structure' ? `before:bg-${activePlanet}` : ''}`}
                onClick={() => handleButtonClick('structure')}
                >structure</button>

                <button
                className={`${activeButton === 'surface' ? `before:bg-${activePlanet}` : ''}`}
                onClick={() => handleButtonClick('surface')}
                >surface</button>
            </section>

            <section className="flex flex-col py-4 md:mt-[20vh] lg:mt-[10vh] lg:flex-row">
                <div className="flex flex-col items-center lg:justify-center mb-8 lg:w-[45%] lg:mr-[5%]">

                    {activeButton === 'overview' && (
          <img
            src={planetJson[0].images.planet}
            className="w-[112px] h-[112px] lg:w-72 lg:h-72"
            alt="image"
          />
        )}
        {activeButton === 'structure' && (
          <img
            src={planetJson[0].images.internal}
            className="w-[112px] h-[112px] lg:w-72 lg:h-72"
            alt="image"
          />
        )}
        {activeButton === 'surface' && (
         <div>
            <img
                src={planetJson[0].images.planet}
                className="w-[112px] h-[112px] lg:w-72 lg:h-72"
                alt="image"
            />
            <img
                src={planetJson[0].images.geology}
                className="w-[66px] h-[66px] lg:w-36 lg:h-36 -translate-y-4 translate-x-6 lg:translate-x-16"
                alt="image"
            />
         </div>
        )}
                </div>
                <div className="flex flex-col px-4 md:flex-row md:mt-[10vh] lg:flex-col lg:justify-between lg:w-[45%] lg:ml-[5%]
                 lg:h-full">
                    <aside className="md:w-[45%] md:mr-[5%] lg:w-full lg:mr-auto lg:h-[45%]">
                        <h2 className="text-center font-antonio text-xl md:text-5xl uppercase font-bold
                        tracking-widest mb-2 md:text-left md:px-4 md:pl-0 pb-4">{planetJson[0].name}</h2>
                        <div>
                        <p className="font-spartan text-gray text-justify px-4 md:pl-0 mb-2 md:text-left
                        ">
                            {planetJson[0].overview.content}
                        </p>
                        <p className="text-center text-gray md:text-left md:px-4 md:pl-0">
                        Source: 
                            <a href={planetJson[0].overview.source} className="font-bold underline pl-2">Wikipedia</a>
                            <img src={iconSource} alt="icon" className="inline-block pl-1" />
                        </p>
                        </div>
                    </aside>
                    <aside className="desktop-explorer font-antonio flex flex-col md:w-[45%] md:ml-[5%] md:pt-12
                    lg:w-full lg:ml-auto lg:h-[45%]">
                        <button 
                        className={`border font-spartan p-3 flex items-center mb-2 hover:hover-button ${activeButton === 'overview' ? `${activeColor}` : ''}`}
                        onClick={() => handleButtonClick('overview')}>
                            <span className="uppercase text-gray text-base pr-4 font-bold">01</span>
                            <span className="uppercase">overview</span> 
                        </button>

                        <button 
                        className={`border font-spartan p-3 flex items-center mb-2 hover:hover-button ${activeButton === 'structure' ? `${activeColor}` : ''}`}
                        onClick={() => handleButtonClick('structure')}>
                            <span className="uppercase text-gray text-base pr-4 font-bold">02</span>
                            <span className="uppercase">internal structure</span> 
                        </button>

                        <button 
                        className={`border font-spartan p-3 flex items-center mb-2 hover:hover-button ${activeButton === 'surface' ? `${activeColor}` : ''}`}
                        onClick={() => handleButtonClick('surface')}>
                            <span className="uppercase text-gray text-base pr-4 font-bold">03</span>
                            <span className="uppercase">surface geology</span> 
                        </button>
                    </aside>
                </div>
            </section>

            <section className="px-4 md:flex md:justify-between md:mt-4 lg:mt-12">
                {/* additionnal information */}

                <span className="border font-spartan p-3 flex justify-between mb-2 md:flex md:flex-col md:p-4 md:w-[22.5%]">
                    <span className="uppercase text-gray text-sm">rotation time</span>
                    <span className="uppercase font-bold text-white md:text-2xl">{planetJson[0].rotation} days</span>
                </span>
                <span className="border font-spartan p-3 flex justify-between mb-2 md:flex md:flex-col md:p-4 md:w-[22.5%]">
                    <span className="uppercase text-gray text-sm">revolution time</span>
                    <span className="uppercase font-bold text-white md:text-2xl">{planetJson[0].revolution} days</span>
                </span>
                <span className="border font-spartan p-3 flex justify-between mb-2 md:flex md:flex-col md:w-[22.5%]">
                    <span className="uppercase text-gray text-sm">radius</span>
                    <span className="uppercase font-bold text-white md:text-2xl">{planetJson[0].radius} km</span>
                </span>
                <span className="border font-spartan p-3 flex justify-between mb-2 md:flex md:flex-col md:w-[22.5%]">
                    <span className="uppercase text-gray text-sm">average temp.</span>
                    <span className="uppercase font-bold text-white md:text-2xl">{planetJson[0].temperature}</span>
                </span>
            </section>
        </div>
    </div>
  )
}
