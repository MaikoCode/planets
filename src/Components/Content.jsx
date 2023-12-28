import planetJson from "../../data.json";
import iconSource from "../assets/icon-source.svg"

export default function Content() {
   
  return (
    <div className="mt-10">

        <div>
            <section className="mobile-explorer flex items-center justify-between border-b border-white">
                <button className="text-white">overview</button>
                <button>structure</button>
                <button>surface</button>
            </section>

            <section className="flex flex-col py-4">
                <div className="flex flex-col items-center mb-8">
                    <img src={planetJson[0].images.planet}
                     className="w-[112px] h-[112px]"
                     alt="image" />
                </div>

                <div className="flex flex-col px-4">
                    <aside>
                        <h2 className="text-center font-antonio text-xl uppercase font-bold
                        tracking-widest mb-2">{planetJson[0].name}</h2>
                        <div>
                        <p className="font-spartan text-gray text-justify px-4 mb-2">
                            {planetJson[0].overview.content}
                        </p>
                        <p className="text-center text-gray">
                        Source: 
                            <a href={planetJson[0].overview.source} className="font-bold underline pl-2">Wikipedia</a>
                            <img src={iconSource} alt="icon" className="inline-block pl-1" />
                        </p>
                        </div>
                    </aside>
                    <aside className="desktop-explorer font-antonio flex flex-col">
                        <button className="border font-spartan p-3 flex items-center mb-2">
                            <span className="uppercase text-gray text-sm pr-4">01</span>
                            <span className="uppercase">overview</span> 
                        </button>

                        <button className="border font-spartan p-3 flex items-center mb-2">
                            <span className="uppercase text-gray text-sm pr-4">02</span>
                            <span className="uppercase">internal structure</span> 
                        </button>

                        <button className="border font-spartan p-3 flex items-center mb-2">
                            <span className="uppercase text-gray text-sm pr-4">03</span>
                            <span className="uppercase">surface geology</span> 
                        </button>
                    </aside>
                </div>
            </section>

            <section className="px-4">
                {/* additionnal information */}

                <span className="border font-spartan p-3 flex justify-between mb-2">
                    <span className="uppercase text-gray text-sm">rotation time</span>
                    <span className="uppercase font-bold text-white">{planetJson[0].rotation} days</span>
                </span>
                <span className="border font-spartan p-3 flex justify-between mb-2">
                    <span className="uppercase text-gray text-sm">revolution time</span>
                    <span className="uppercase font-bold text-white">{planetJson[0].revolution} days</span>
                </span>
                <span className="border font-spartan p-3 flex justify-between mb-2">
                    <span className="uppercase text-gray text-sm">radius</span>
                    <span className="uppercase font-bold text-white">{planetJson[0].radius} km</span>
                </span>
                <span className="border font-spartan p-3 flex justify-between">
                    <span className="uppercase text-gray text-sm">average temp.</span>
                    <span className="uppercase font-bold text-white">{planetJson[0].temperature}</span>
                </span>
            </section>
        </div>
    </div>
  )
}
