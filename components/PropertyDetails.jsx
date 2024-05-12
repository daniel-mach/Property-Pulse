import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaTimes,
  FaCheck,
  FaMapMarker,
  FaRuler
} from "react-icons/fa";

const PropertyDetails = ({ property }) => {
  return (
    <main>
      <div className="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
        <div className="mb-4 text-gray-500">Apartment</div>
        <h1 className="mb-4 text-3xl font-bold">Boston Commons Retreat</h1>
        <div className="mb-4 flex justify-center align-middle text-gray-500 md:justify-start">
          <FaMapMarker className="mr-2 text-lg text-orange-700"></FaMapMarker>
          <p className="text-orange-700">120 Tremont Street Boston, MA 02111</p>
        </div>

        <h3 className="my-6 bg-gray-800 p-2 text-lg font-bold text-white">
          Rates & Options
        </h3>
        <div className="flex flex-col justify-around md:flex-row">
          <div className="mb-4 flex items-center justify-center border-b border-gray-200 pb-4 md:border-b-0 md:pb-0">
            <div className="mr-2 font-bold text-gray-500">Nightly</div>
            <div className="text-2xl font-bold">
              <FaTimes className="text-red-700"></FaTimes>
            </div>
          </div>
          <div className="mb-4 flex items-center justify-center border-b border-gray-200 pb-4 md:border-b-0 md:pb-0">
            <div className="mr-2 font-bold text-gray-500">Weekly</div>
            <div className="text-2xl font-bold text-blue-500">$1,100</div>
          </div>
          <div className="mb-4 flex items-center justify-center pb-4 md:pb-0">
            <div className="mr-2 font-bold text-gray-500">Monthly</div>
            <div className="text-2xl font-bold text-blue-500">$4,200</div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-6 text-lg font-bold">Description & Details</h3>
        <div className="mb-4 flex justify-center gap-4 space-x-9 text-xl text-blue-500">
          <p>
            <FaBed className="mr-2 inline-block"></FaBed>3
            <span className="ml-2 hidden sm:inline">Beds</span>
          </p>
          <p>
            <FaBath className="mr-2 inline-block"></FaBath>2
            <span className="ml-2 hidden sm:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="mr-2 inline-block"></FaRulerCombined>
            1,500<span className="ml-2 hidden sm:inline">sqft</span>
          </p>
        </div>
        <p className="mb-4 text-gray-500">
          This is a beautiful apartment located near the commons
        </p>
        <p className="mb-4 text-gray-500">
          We have a beautiful apartment located near the commons. It is a 2
          bedroom apartment with a full kitchen and bathroom. It is available
          for weekly or monthly rentals.
        </p>
      </div>

      <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-6 text-lg font-bold">Amenities</h3>

        <ul className="grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <li>
            <i className="fas fa-check mr-2 mt-3 text-green-600"></i> Wifi
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
  );
};
export default PropertyDetails;
