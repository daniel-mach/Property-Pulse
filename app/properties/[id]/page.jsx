"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Link from "next/link";

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) {
        return;
      }

      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="mt-10 text-center text-2xl font-bold">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className="container m-auto px-6 py-6">
              <Link
                href="/properties.html"
                className="flex items-center text-blue-500 hover:text-blue-600"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to Properties
              </Link>
            </div>
          </section>
          <section className="bg-blue-50">
            <div className="container m-auto px-6 py-10">
              <div className="md:grid-cols-70/30 grid w-full grid-cols-1 gap-6">
                <main>
                  <div className="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
                    <div className="mb-4 text-gray-500">Apartment</div>
                    <h1 className="mb-4 text-3xl font-bold">
                      Boston Commons Retreat
                    </h1>
                    <div className="mb-4 flex justify-center align-middle text-gray-500 md:justify-start">
                      <i className="fa-solid fa-location-dot mr-2 text-lg text-orange-700"></i>
                      <p className="text-orange-700">
                        120 Tremont Street Boston, MA 02111
                      </p>
                    </div>

                    <h3 className="my-6 bg-gray-800 p-2 text-lg font-bold text-white">
                      Rates & Options
                    </h3>
                    <div className="flex flex-col justify-around md:flex-row">
                      <div className="mb-4 flex items-center justify-center border-b border-gray-200 pb-4 md:border-b-0 md:pb-0">
                        <div className="mr-2 font-bold text-gray-500">
                          Nightly
                        </div>
                        <div className="text-2xl font-bold">
                          <i className="fa fa-xmark text-red-700"></i>
                        </div>
                      </div>
                      <div className="mb-4 flex items-center justify-center border-b border-gray-200 pb-4 md:border-b-0 md:pb-0">
                        <div className="mr-2 font-bold text-gray-500">
                          Weekly
                        </div>
                        <div className="text-2xl font-bold text-blue-500">
                          $1,100
                        </div>
                      </div>
                      <div className="mb-4 flex items-center justify-center pb-4 md:pb-0">
                        <div className="mr-2 font-bold text-gray-500">
                          Monthly
                        </div>
                        <div className="text-2xl font-bold text-blue-500">
                          $4,200
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-6 text-lg font-bold">
                      Description & Details
                    </h3>
                    <div className="mb-4 flex justify-center gap-4 space-x-9 text-xl text-blue-500">
                      <p>
                        <i className="fa-solid fa-bed"></i> 3
                        <span className="hidden sm:inline"> Beds</span>
                      </p>
                      <p>
                        <i className="fa-solid fa-bath"></i> 2
                        <span className="hidden sm:inline"> Baths</span>
                      </p>
                      <p>
                        <i className="fa-solid fa-ruler-combined"></i>
                        1,500<span className="hidden sm:inline"> sqft</span>
                      </p>
                    </div>
                    <p className="mb-4 text-gray-500">
                      This is a beautiful apartment located near the commons
                    </p>
                    <p className="mb-4 text-gray-500">
                      We have a beautiful apartment located near the commons. It
                      is a 2 bedroom apartment with a full kitchen and bathroom.
                      It is available for weekly or monthly rentals.
                    </p>
                  </div>

                  <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-6 text-lg font-bold">Amenities</h3>

                    <ul className="grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>{" "}
                        Wifi
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Full kitchen
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Washer & Dryer
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Free Parking
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Hot Tub
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        24/7 Security
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Wheelchair Accessible
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Elevator Access
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Dishwasher
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Gym/Fitness Center
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Air Conditioning
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Balcony/Patio
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Smart TV
                      </li>
                      <li>
                        <i className="fas fa-check mr-2 mt-3 text-green-600"></i>
                        Coffee Maker
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                    <div id="map"></div>
                  </div>
                </main>

                <aside className="space-y-4">
                  <button className="flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
                    <i className="fas fa-bookmark mr-2"></i> Bookmark Property
                  </button>
                  <button className="flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600">
                    <i className="fas fa-share mr-2"></i> Share Property
                  </button>

                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-6 text-xl font-bold">
                      Contact Property Manager
                    </h3>
                    <form>
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="name"
                        >
                          Name:
                        </label>
                        <input
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="email"
                        >
                          Email:
                        </label>
                        <input
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="phone"
                        >
                          Phone:
                        </label>
                        <input
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
                          id="phone"
                          type="text"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-gray-700"
                          htmlFor="message"
                        >
                          Message:
                        </label>
                        <textarea
                          className="focus:shadow-outline h-44 w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none"
                          id="message"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                      <div>
                        <button
                          className="focus:shadow-outline flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
                          type="submit"
                        >
                          <i className="fas fa-paper-plane mr-2"></i> Send
                          Message
                        </button>
                      </div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PropertyPage;
