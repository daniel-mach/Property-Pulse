import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker
} from "react-icons/fa";

const PropertyCardFeatured = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;
    let rate;

    if (rates.monthly) {
      rate = `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      rate = `${rates.weekly.toLocaleString()}/wk`;
    } else {
      rate = `${rates.nightly.toLocaleString()}/night`;
    }

    return rate;
  };

  return (
    <div className="relative flex flex-row rounded-xl border border-green-600 bg-white shadow-md">
      <Image
        src={property.images[0]}
        alt=""
        sizes="100vw"
        width={0}
        height={0}
        className="w-1/2 rounded-t-xl object-cover md:rounded-l-xl md:rounded-tr-none"
        priority={true}
      />
      <div className="w-1/2 p-6">
        <div className="mb-6 text-left md:text-center lg:text-left">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h4 className="absolute left-[10px] top-[10px] rounded-lg border border-green-500 bg-white px-4 py-2 text-right font-bold text-green-500 md:text-center lg:text-right">
          ${getRateDisplay()}
        </h4>
        <div className="mb-4 flex justify-center gap-4 text-gray-500">
          <p>
            <FaBed className="mr-2 inline"></FaBed>
            {property.beds}
            <span className="md:hidden lg:inline"> Beds</span>
          </p>
          <p>
            <FaBath className="mr-2 inline"></FaBath>
            {property.baths}
            <span className="md:hidden lg:inline"> Baths</span>
          </p>
          <p>
            <FaRulerCombined className="mr-2 inline"></FaRulerCombined>
            {property.square_feet}
            <span className="md:hidden lg:inline"> sqft</span>
          </p>
        </div>
        <div className="mb-4 flex justify-center gap-4 text-sm text-green-900">
          <p>
            <FaMoneyBill className="mr-2 inline"></FaMoneyBill> Nightly
          </p>
          <p>
            <FaMoneyBill className="mr-2 inline"></FaMoneyBill> Weekly
          </p>
        </div>
        <div className="mb-5 border border-gray-200"></div>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-4 flex items-center gap-2 lg:mb-0">
            <FaMapMarker className="text-lg text-orange-700"></FaMapMarker>
            <span className="line-clamp-1 text-orange-700">
              {property.location.city}, {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] rounded-lg bg-green-500 px-4 py-2 text-center text-sm text-white hover:bg-green-600"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardFeatured;
