import Image from "next/image";
import React from "react";

const Mission = () => {
  return (
    <>
      <section className="bg-white py-12 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Join Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Jaago Manav, we believe that everyone deserves an equal
              opportunity to shape their future, to learn, and to grow. So, we
              are on a mission to uplift families through education. The blend
              of practical and moral education with quality opens up unlimited
              opportunities for our young girls and children. But we can’t do it
              alone. We need Your Support. Let’s Pledge To Make a Difference.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Image
                  src="/home/Donation.png"
                  alt="Donation"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Donation</h3>
                  <p className="text-gray-600">
                    Small acts bring big change. Your small act of generosity
                    can change the lives of one family and one girl. Be the
                    first one to take a step to support our young children in
                    the rural community.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Image
                  src="/home/Volunteering.png"
                  alt="Volunteering"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Volunteering
                  </h3>
                  <p className="text-gray-600">
                    Together, we can take a step to enhance our rural
                    communities. Become a volunteer and create an impact with
                    Jaago Manav to make a difference.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Image
                  src="/home/CSR.png"
                  alt="CSR"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">CSR</h3>
                  <p className="text-gray-600">
                    Partner with Jaago Manav to support education and
                    empowerment in rural communities. Let your commitment and
                    dedication speak to the values of a healthy culture and
                    society.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 font-bold mt-6">
              Support Education #educationmatters <br />
              Higher Education For Girls #educationispower
            </p>
          </div>
          <div className="relative">
            <Image
              src="/home/map.png"
              alt="India map with children"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
