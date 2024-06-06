import React from 'react'

function Answers() {
  return (
    <div className="flex flex-col mt-12 justify-center items-center ml-6 mr-6 xl:ml-20 xl:mr-20">
      <div>
        <p className="text-2xl font-bold lg:text-3xl xl:text-4xl">
        Four key questions answered by CleverBooks
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-14 lg:mt-20 gap-5 lg:gap-7">
        <div className="flex flex-col bg-[#E6E6FA] rounded-3xl p-6">
          <div className="h-[56px] w-[56px]">
              <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg" alt="icons"
              className="h-full w-full"/>
          </div>
          <div>
              <p className=" text-black text-xl font-semibold mt-3">
              What to order
              </p>
          </div>
          <div className=" mt-3 mb-2">
              <p>
              Get accurate demand and days to stock out. Automate purchase planning so
              you can always have what you need for your next sales cycle.
              </p>
          </div>
        </div>

        <div className="flex flex-col bg-[#E6E6FA] rounded-3xl p-6">
          <div className="h-[56px] w-[56px]">
              <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg" alt="icons"
              className="h-full w-full"/>
          </div>
          <div>
              <p className=" text-black text-xl font-semibold mt-3">
              When to order
              </p>
          </div>
          <div className=" mt-3 mb-2">
              <p>
              Have up-to-date inventory, storage, sales velocity, and 
              demand. Get timely order suggestions so you're never left guessing.
              </p>
          </div>
        </div>

        <div className="flex flex-col bg-[#E6E6FA] rounded-3xl p-6">
          <div className="h-[56px] w-[56px]">
              <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg" alt="icons"
              className="h-full w-full"/>
          </div>
          <div>
              <p className=" text-black text-xl font-semibold mt-3">
              How much to stock
              </p>
          </div>
          <div className=" mt-3 mb-2">
              <p>
              Get inventory requirements for every node, for every SKU. So
               you avoid out-of-stock situations, even during demand spikes.
              </p>
          </div>
        </div>

        <div className="flex flex-col bg-[#E6E6FA] rounded-3xl p-6">
          <div className="h-[56px] w-[56px]">
              <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg" alt="icons"
              className="h-full w-full"/>
          </div>
          <div>
              <p className=" text-black text-xl font-semibold mt-3">
              Where to place
              </p>
          </div>
          <div className=" mt-3 mb-2">
              <p>
              Our tool suggests how to move stock within your supply chain.
               So you'll always have products available across cities.
              </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Answers