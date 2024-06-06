import React from 'react'

function Hero() {
  return (
    <div className="flex flex-col ml-8 mt-14 lg:mt-30 mr-8 lg:ml-16 lg:mr-0">
        <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col">
                <div>
                    <p className="text-4xl text-white font-bold lg:text-5xl lg:mt-10">
                        Every order<br/>fulfilled, <span className="bg-gradient-to-r from-[#9f6eed] via-[#fc907e] to-[#9f6eed]
                         bg-clip-text text-transparent font-semibold">
                            on time.</span>
                    </p>
                </div>
                <div className="mt-8">
                    <p className="text-lg text-white">
                    Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it<br/>
                    brings the same technology used by large global brands to power fast-growing<br/>
                    startups. In short, we make supply meet demand, and then help you grow both.
                    </p>
                </div>
                <div className="flex mt-12">
                    <button className=" rounded-full text-base md:text-lg h-1/2 pt-[2px] pb-[3px] pl-[2px] pr-[2px]
                     bg-gradient-to-r from-[#9f6eed] via-[#fc907e] to-[#9f6eed] mb-8">
                        <div className="transition esase-in-out duration-400 bg-gray-900 pt-1 pb-0.5 pl-3 pr-3 rounded-full hover:bg-transparent m-0">
                            <div className="transition delay-100 bg-gradient-to-r from-[#9f6eed] via-[#fc907e] to-[#9f6eed] bg-clip-text text-transparent hover:text-white">
                            Get started with CleverBooks 
                            </div>
                        </div>
                    </button>
                    <div className="">
                        <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" alt="point"
                        className=""/>
                    </div>
                </div>
            </div>
            <div className="h-full flex justify-center md:mr-20 md:ml-24 lg:mr-0 lg:ml-0 ">
                <div className="w-full h-3/4">
                    <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg" alt="hero"
                    className="h-full w-full"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero