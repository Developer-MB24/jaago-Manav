import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-yellow-100 to-green-100 py-12 px-6 md:px-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Jaago Manav-Awakening Humanity
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-bold">
            Awakening Hearts and Minds: Building Bridges, Creating Awareness
          </p>
          <button className="mt-6 px-4 py-1 font-bold bg-[#035100] text-white rounded-full hover:bg-green-700 transition duration-300">
            JOIN US NOW
          </button>
        </div>
        <div className="flex gap-4">
          {/* First Div - 1 Image */}
          <div className="relative h-[17rem] w-1/6">
            <Image
              src="/home/hero1.png"
              alt="Image 1"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Second Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-1/6">
            <div className="relative h-32">
              <Image
                src="/home/hero2.png"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative h-32">
              <Image
                src="/home/hero3.png"
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </div>

          {/* Third Div - 1 Image */}
          <div className="relative h-[17rem] w-1/6">
            <Image
              src="/home/hero4.png"
              alt="Image 4"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Fourth Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-1/6">
            <div className="relative h-32">
              <Image
                src="/home/hero5.png"
                alt="Image 5"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative h-32">
              <Image
                src="/home/hero6.png"
                alt="Image 6"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </div>

          {/* Fifth Div - 1 Image */}
          <div className="relative h-[17rem] w-1/6">
            <Image
              src="/home/hero7.png"
              alt="Image 7"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          {/* Sixth Div - 2 Images in Column */}
          <div className="flex flex-col gap-4 w-1/6">
            <div className="relative h-32">
              <Image
                src="/home/hero8.png"
                alt="Image 8"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative h-32">
              <Image
                src="/home/hero9.png"
                alt="Image 9"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </div>
        </div>

        <div className=" mt-8 flex justify-evenly items-center text-black ">
          <Image
            src="/home/unicef.png"
            alt="UNICEF"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/home/wfp.png"
            alt="World Food Program"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/home/savechild.png"
            alt="Save the Children"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/home/mercy.png"
            alt="Mercy Corps"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
