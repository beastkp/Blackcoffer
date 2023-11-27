import React from "react";
import train from "../assets/train.webp";
import airplane from "../assets/airplane.jpeg";
import ship from "../assets/ship.jpg";
import impexp from "../assets/impexp.webp";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import Footer from "../Components/Footer";
import USA from '../assets/USA.png'
import India from '../assets/India.png'
import Turkey from '../assets/turkey.jpeg'
import Russia from '../assets/russia.jpeg'
import Mexico from '../assets/Mexico.png'
import Pakistan from '../assets/pakistan.jpg'
import Saudi from '../assets/Saudi.jpeg'
import SouthAfrica from '../assets/southAfrica.png'
import Nigeria from '../assets/Nigeria.png'
import China from '../assets/china.jpeg'
import Austria from '../assets/austria.webp'

const Homepage = ({ hasSidebar }) => {
  // Placeholder data
  const companyMotto = "Empowering Your Journey";
  const carouselImages = [airplane, ship, train, impexp];
  const serviceExplanation =
    "We provide this service because we believe in making transportation seamless and enjoyable for everyone.";
  return (
    <div className="bg-gray-100 p-8 max-w-[1500px] ml-[250px] h-screen">
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-6xl font-bold mb-4 ">{companyMotto}</h1>
        <h3 className="text-lg py-3">Find the nest insights of various contries and their exported goods aling with the likehood,relevance and intensities of their travel.</h3>
        <div>
          <TECarousel showControls showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={carouselImages[0]}
                  className="block w-full h-[500px]"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">Airway</h5>
                  <p>
                    Air cargo transports over US $6 trillion worth of goods annually
                  </p>
                </div>
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
              >
                <img
                  src={carouselImages[1]}
                  className="block w-full h-[500px]"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">Waterway</h5>
                  <p>
                    Today, an estimated 90% of the world’s goods are transported
                    by sea
                  </p>
                </div>
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none "
              >
                <img
                  src={carouselImages[2]}
                  className="block w-full h-[500px]"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">Railway</h5>
                  <p>
                    All major interstate transportations are done by freight trains
                  </p>
                </div>
              </TECarouselItem>
              <TECarouselItem
                itemID={4}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none "
              >
                <img
                  src={carouselImages[3]}
                  className="block w-full h-[500px]"
                  alt="..."
                />
                <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                  <h5 className="text-xl">Import and Export</h5>
                  <p>
                    Import and Export have bought a lot of commodities to different parts of world
                  </p>
                </div>
              </TECarouselItem>
            </div>
          </TECarousel>
        </div>

        <div className="py-10">
            <h1 className="text-center font-bold text-2xl py-5">Countries we provide information about</h1>
            <ul className="flex gap-8 flex-wrap">
                <div>
                <img src={USA} alt="" className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110 delay-[300ms]"/>
                <li className="p-2">USA</li>
                </div>
                <div>
                <img src={Russia} alt="" className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110  duration-[600ms]"/>
                <li className="p-2 text-md font-semibold">Russia</li>
                </div>
                <div>
                    <img src={India} alt="" className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110  duration-[600ms]"/>
                <li className="p-2 text-md font-semibold">India</li>

                </div>
                <div>
                    <img src={Mexico} alt="" className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110  duration-[600ms]"/>
                <li className="p-2 text-md font-semibold">Mexico</li>

                </div>
                <div>
                    <img src={Pakistan} alt=""className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110  duration-[600ms]" />
                <li className="p-2 text-md font-semibold">Pakistan</li>

                </div>
                <div>
                    <img src={Turkey} alt=""className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110  duration-[600ms]" />
                <li className="p-2 text-md font-semibold">Turkey</li>

                </div>
                <div>
                    <img src={China} alt="" className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110  duration-[600ms]"/>
                <li className="p-2 text-md font-semibold">China</li>

                </div>
                <div>
                    <img src={Saudi} alt="" className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110  duration-[600ms]"/>
                <li className="p-2 text-md font-semibold">Saudi Arabia</li>

                </div>
                <div>
                    <img src={SouthAfrica} alt="" className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110  duration-[600ms]"/>
                <li className="p-2 text-md font-semibold">South Africa</li>

                </div>
                <div>
                    <img src={Nigeria} alt="" className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110  duration-[600ms]"/>
                <li className="p-2 text-md font-semibold">Nigeria</li>

                </div>
                <div>
                    <img src={Austria} alt="" className="w-[230px] h-[150px] p-2  shadow-2xl border-gray-500 rounded-xl hover:scale-110  duration-[600ms]"/>
                <li className="p-2 text-md font-semibold">Austria</li>

                </div>
            </ul>
        </div>
        {/* Service Explanation */}
        <div className="mt-8">
          <p className="text-lg">{serviceExplanation}</p>
        </div>
      </div>
      <div className="py-10">

      <Footer/>
      </div>
    </div>
  );
};

export default Homepage;
// declare module 'tw-elements-react/dist/plugin.cjs';