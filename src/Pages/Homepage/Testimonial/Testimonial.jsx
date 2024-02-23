import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Testimonial</p>
        <h1 className="text-5xl font-bold py-4">What Customer Says</h1>
        <p>
          Our coustomer is driver of our bussiness. We are in the industry since
          2012. <br /> in this long journey we served our every client properly.
          Check what they say about us.
        </p>
      </div>

      {/* Review card */}

      <div className="flex justify-between">
        <div className="w-2/5 ms-24 border-2 p-4 my-10 border-gray-200 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center mb-4">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full">
                  <img src="/assets/images/client/1.jpg" />
                </div>
              </div>
              <div className="ms-4">
                <p className="text-xl font-bold">Otto Colman</p>
                <p className="text-gray-600 font-semibold">Bussinessman</p>
              </div>
            </div>
            <div>
              <img
                className="w-8 opacity-50"
                src="/assets/icons/quote.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="text-justify">
              I recently had the pleasure of entrusting my vehicle to the
              capable hands of Richard at Car Doctor. From the moment I walked
              in, I was greeted with professionalism and a genuine willingness
              to help.
            </p>
          </div>
        </div>

        <div className="w-2/5 me-24 border-2 p-4 my-10 border-gray-200 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center mb-4">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full">
                  <img src="/assets/images/client/2.jpg" />
                </div>
              </div>
              <div className="ms-4">
                <p className="text-xl font-bold">James Style</p>
                <p className="text-gray-600 font-semibold">Bussinessman</p>
              </div>
            </div>
            <div>
              <img
                className="w-8 opacity-50"
                src="/assets/icons/quote.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="text-justify">
              Time is precious, and Car Doctor understands that. Despite their
              busy schedule, they efficiently completed the repairs on my
              vehicle within the promised timeframe. I appreciated their
              commitment to getting me back on the road safely and swiftly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
