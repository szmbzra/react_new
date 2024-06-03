import React, { useState, useRef } from "react";
import { rentBuy, slider } from "../components/data";
import Title from "../components/Title";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Home = () => {
  const [background, setBackground] = useState(true);

  const wrapperRef = useRef(null);
  const scrollAmount = 500;

  const ToggleRent = () => {
    setBackground(true);
  };

  const ToggleBuy = () => {
    setBackground(false);
  };

  const Next = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft += scrollAmount;
    }
  };

  const Prev = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollLeft -= scrollAmount;
    }
  };

  return (
    <div>
      {/* slider banner */}
      <div className="bg-slate-500 h-[600px] flex">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 justify-center items-center h-full">
            <div className="child_one justify-self-end">
              <div className="w-[38.5rem] text-white">
                <h1 className="text-6xl font-bold leading-tight">
                  Choose your home <br />
                  for future life
                </h1>
                <p className="pe-10">
                  Find a variety of properties that suit you very easily, forget
                  all difficulties in finding a residence for you
                </p>
              </div>
            </div>
            <div className="child_two">
              <div className="flex">
                <button
                  className={`w-28 h-12 rounded-tl-lg font-bold ${
                    background
                      ? "bg-defaultColor text-white"
                      : "bg-orange-100 text-black"
                  }`}
                  onClick={ToggleRent}
                >
                  Rent
                </button>
                <button
                  className={`w-28 h-12 rounded-tr-lg font-bold ${
                    background
                      ? "bg-orange-100 text-black"
                      : "bg-defaultColor text-white"
                  }`}
                  onClick={ToggleBuy}
                >
                  Buy
                </button>
              </div>
              <div className="bg-white w-[441px] h-auto p-6 rounded-tr-md rounded-bl-md rounded-br-md">
                {background ? (
                  <>
                    <div className="h-12 w-full">
                      <input
                        type="text"
                        placeholder="Type keyword..."
                        className="placeholder:text-slate-400 h-14 rounded-md w-full border-2 border-neutral-200 ps-5"
                      />
                    </div>
                    <div className="w-full mt-6">
                      <select className="h-12 w-full border-2 border-neutral-200 ps-5">
                        <option value="">Property Type</option>
                      </select>
                    </div>
                    <div className="h-12 w-full mt-6">
                      <select className="h-12 w-full border-2 border-neutral-200 ps-5">
                        <option value="">Location</option>
                      </select>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-xl text-gray-700">
                    Coming Soon
                  </div>
                )}
                <div className="flex justify-between gap-2 mt-6">
                  <button className="bg-orange-300 grow h-12 rounded-md hover:bg-defaultColor ">
                    Filter
                  </button>
                  <button className="bg-orange-300 grow h-12 rounded-md hover:bg-defaultColor">
                    Search Now
                  </button>
                </div>
              </div>
              <ul className="flex justify-between mt-3 w-[441px] text-white">
                {rentBuy.map(({ id, name }) => (
                  <li key={id}>
                    <a href="#">{name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* text title */}
      <div className="text-center">
        <Title
          heading="Explore our listings"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo"
        />
      </div>
      {/* Slider */}
      <div className="container mx-auto">
        <div className="image_slider relative">
          <div
            ref={wrapperRef}
            className="image_wrapper overflow-x-auto w-full whitespace-nowrap"
          >
            <div className="flex justify-evenly text-center w-[2600px]">
              {slider.map(({ id, name, listing }) => (
                <div className="items inline-block" key={id}>
                  <div className="rounded-full h-28 w-28 bg-slate-300 mb-3"></div>
                  <h2 className="font-bold">{name}</h2>
                  <p>{listing} listing</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between absolute w-full top-1/2 transform -translate-y-1/2">
            <div className="hover:cursor-pointer">
              <button onClick={Prev}>
                <FaArrowLeft />
              </button>
            </div>
            <div className="hover:cursor-pointer">
              <button onClick={Next}>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}
    </div>
  );
};

export default Home;
