import React from "react";
import "./Home.css";
import { FaCheck } from "react-icons/fa";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import RoomCard from "../Shared/RoomCard/RoomCard";
import ConnectUs from "../Contact/Contact";
const Home = () => {
  const { rooms } = useLoaderData();

  const threeRooms = rooms.slice(0, 3);

  return (
    <div>
      <div className="home p-2 md:p-10 z-1">
        <div className="my-24 p-4 md:p-10">
          <h1 className="md:text-5xl text-4xl font-bold  text-white">
            Welcome To
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold  text-white">
            Radission Blu
          </h1>
          <p className="w-80 md:w-96 text-white pb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis,
            repudiandae unde, inventore accusamus dolores culpa ut eius adipisci{" "}
          </p>
          <Link to="/rooms">
            <button
              type="button"
              className="px-3 py-1 md:my-0 my-2  rounded-full bg-violet-600 text-white "
            >
              Book a Room
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-t from-slate-900 bg-slate-900 py-2 md:py-6 text-center">
        <h2 className="text-4xl my-4 md:my-10 text-white text-center font-bold">
          Book Your Room
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-5 md:px-20 px-4"
        >
          {threeRooms.map((room) => (
            <RoomCard key={room._id} room={room}></RoomCard>
          ))}
        </div>

        <Link to="/rooms">
          <button className="btn my-5 btn-outline text-white  ">
            Show All
          </button>
        </Link>
      </div>

      <div className="text-center grid grid-cols-1 md:grid-cols-3 p-4 md:p-10 from-slate-900 bg-slate-900">
        <div className="mt-10  md:mt-20" data-aos="zoom-in-right">
          <h2 className="text-4xl font-semibold text-white">Our Facilites</h2>
          <p className="text-gray-400 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam
            suscipit assumenda minima magni necessitatibus, odit animi incidunt
            quaerat eos iusto temporibus non molestias nulla accusamus culpa
            sapiente saepe. Excepturi.
          </p>
          <div>
            <div className="font-semibold pl-28 md:pl-32 mb-5 ">
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">24/7 Customer Service</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">Rooftop Dinner</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">Air Condition</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">Rooftop Pool</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className="rounded"
            style={{
              height: "500px",
            }}
            src="https://radissonhotelsamericas.iceportal.com/image/radisson-hotel-cincinnati-riverfront/exterior/20828-139327-f63764627_3xl.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="mt-20 " data-aos="zoom-in-left">
            <h2 className="text-4xl font-semibold text-white my-4">
              Our Services
            </h2>

            <div className=" my-5 ">
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo saepe amet nulla, quod nihil quaerat magni aliquam,
                earum sed veniam nobis. Doloremque natus optio illum est harum
                quo, voluptas voluptatem excepturi
              </p>
            </div>
            <div className="font-semibold pl-28 md:pl-32">
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">24/7 Customer Service</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">Rooftop Dinner</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">Air Condition</p>
              </div>
              <div className="flex  items-center">
                <FaCheck></FaCheck>
                <p className="px-2 text-white">Rooftop Pool</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration></ScrollRestoration>
      {/* <ConnectUs></ConnectUs> */}
    </div>
  );
};

export default Home;
