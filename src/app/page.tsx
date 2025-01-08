import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className="bg-gradient-to-r from-yellow-100 to-green-100 py-12 px-6 md:px-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Jaago Manav-Awakening Humanity
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Awakening Hearts and Minds: Building Bridges, Creating Awareness
          </p>
          <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
            JOIN US NOW
          </button>
        </div>
        <div className="flex gap-4">
          {/* First Div - 1 Image */}
          <div className="relative h-[17rem] w-1/6">
            <Image
              src="/images/hero1.avif"
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
                src="/images/hero2.avif"
                alt="Image 2"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative h-32">
              <Image
                src="/images/hero3.avif"
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
              src="/images/hero1.avif"
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
                src="/images/hero2.avif"
                alt="Image 5"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative h-32">
              <Image
                src="/images/hero3.avif"
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
              src="/images/hero1.avif"
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
                src="/images/hero2.avif"
                alt="Image 8"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative h-32">
              <Image
                src="/images/hero3.avif"
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
            src="/images/unicef.png"
            alt="UNICEF"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/wfp.png"
            alt="World Food Program"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/save-the-children-logo.svg"
            alt="Save the Children"
            width={150}
            height={50}
            className="object-contain"
          />
          <Image
            src="/images/mercyCorps.png"
            alt="Mercy Corps"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
      </section>

      {/* About Us  */}

      <section className="bg-white py-12 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            {/* First Row - Single Full-Width Image */}
            <div className="relative h-40 md:h-56">
              <Image
                src="/images/hero1.avif"
                alt="Child smiling"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Second Row - Two Images Side-by-Side */}
            <div className="flex gap-4">
              <div className="relative flex-1 h-40 md:h-56">
                <Image
                  src="/images/hero2.avif"
                  alt="Children in a field"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="relative flex-1 h-40 md:h-56">
                <Image
                  src="/images/hero3.avif"
                  alt="Helping hands"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>

            {/* Third Row - Single Full-Width Image */}
            <div className="relative h-40 md:h-56">
              <Image
                src="/images/hero3.avif"
                alt="Smiling group of children"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
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

      {/* Our Mission */}

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
                  src="/images/donation.png"
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
                  src="/images/donation.png"
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
                  src="/images/donation.png"
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
              src="/images/indian-map.png"
              alt="India map with children"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
        </div>
      </section>

      {/* new edit  */}
      {/* <div className="w-full">
          <div className="bg-red-500 w-[20%]">
            <div className="  flex flex-col">
              <Image
                src="/images/hero1.avif"
                alt="Happy children"
                layout="fill"
                // objectFit="cover"
                className="w-1/2 "
              />
              <Image
                src="/images/hero2.avif"
                alt="Smiling children"
                layout="fill"
                // objectFit="cover"
                className="w-1/2 "
              />
            </div>
            <div className="">
              <Image
                src="/images/hero2.avif"
                alt="Smiling children"
                layout="fill"
                // objectFit="cover"
                className="w-1/2 "
              />
            </div>
          </div>
          
          
        </div> */}

      {/* new edit ends */}
    
    
    
    
    </>
  );
}
