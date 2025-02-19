import React from "react";
import Image from "next/image";

const HomeAbout = () => {
  return (
    <>
      <section className="bg-white py-12 px-6 md:px-16">
        <div className=" grid md:grid-cols-2 gap-2">
          <div className="  flex flex-col gap-4 group relative">
            {/* First Row - Single Full Image */}
            <div className="relative h-40 md:h-56 ">
              <Image
                src="/home/about1.png"
                alt="Child smiling"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>

            {/* Second Row - Two Images  */}
            <div className="flex gap-4">
              <div className="relative flex-1 h-40 md:h-56  ">
                <Image
                  src="/home/about2.png"
                  alt="Children in a field"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
              <div className="relative flex-1 h-40 md:h-56 ">
                <Image
                  src="/home/about3.png"
                  alt="Helping hands"
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </div>
            </div>

            {/* Third Row - Single Full Image */}
            <div className="relative h-40 md:h-56 ">
              <Image
                src="/home/hero5.png"
                alt="Smiling group of children"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </div>

          <div className=" flex flex-col justify-center px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In the heart of Delhi, many children play near Yamuna Bank. Their
              eyes shine with hope as they run along with the wind. That was the
              first time the idea of Jaago Manav—Awakening Humanity—dived in.
              Jaago Manav was established in May 2018 with the idea of
              “Awakening Humanity Within Us.” In May 2018, Jaago Manav was born
              to be a catalyst for change and to bring hope to families living
              in the remote rural corners of India. We are an independent,
              non-profit organization committed to helping everyone who dares to
              dream. Our team of volunteers is highly enthusiastic and strives
              to bring positive change to society by providing opportunities for
              every individual to bloom to their full potential.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We foster a positive environment in every rural community to
              create a strong impact on families by addressing their needs and
              aspirations. Our community-centric discussions focus on helping
              families resolve complex social issues through education,
              healthcare, empowerment, agriculture, and social and political
              awareness. What sets us apart is our complete transparency of
              funds, which provides a platform for empowerment for every family.
            </p>
            <div className="flex space-x-8 mt-6">
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                  159+
                </h3>
                <p className="text-gray-600">Completed Projects</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                  200+
                </h3>
                <p className="text-gray-600">Volunteers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-red-600">
                  15+
                </h3>
                <p className="text-gray-600">Awards Achieved</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
