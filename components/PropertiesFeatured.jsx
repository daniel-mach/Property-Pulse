import { fetchProperties } from "@/utils/requests";

const FeaturedProperties = async () => {
  const properties = await fetchProperties({ showFeatured: true });

  return (
    <section className="bg-green-50 px-4 pb-10 pt-6">
      <div className="container-xl m-auto lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-green-500">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative flex flex-col rounded-xl bg-white shadow-md md:flex-row">
            <img
              src="images/properties/f1.jpg"
              alt=""
              className="w-full rounded-t-xl object-cover md:w-2/5 md:rounded-l-xl md:rounded-tr-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Seaside Retreat</h3>
              <div className="mb-4 text-gray-600">Condo</div>
              <h3 className="absolute left-[10px] top-[10px] rounded-lg bg-white px-4 py-2 text-right font-bold text-green-500 md:text-center lg:text-right">
                $2,500/wk
              </h3>
              <div className="mb-4 flex justify-center gap-4 text-gray-500">
                <p>
                  <i className="fa-solid fa-bed"></i> 4
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> 3
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  2,800 <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>
              <div className="mb-4 flex justify-center gap-4 text-sm text-green-900">
                <p>
                  <i className="fa-solid fa-money-bill"></i> Nightly
                </p>
                <p>
                  <i className="fa-solid fa-money-bill"></i> Weekly
                </p>
              </div>
              <div className="mb-5 border border-gray-200"></div>
              <div className="flex flex-col justify-between lg:flex-row">
                <div className="mb-4 flex gap-2 align-middle lg:mb-0">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                  <span className="text-orange-700"> Boston MA </span>
                </div>
                <a
                  href="property.html"
                  className="h-[36px] rounded-lg bg-green-500 px-4 py-2 text-center text-sm text-white hover:bg-green-600"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col rounded-xl bg-white shadow-md md:flex-row">
            <img
              src="images/properties/e1.jpg"
              alt=""
              className="w-full rounded-t-xl object-cover md:w-2/5 md:rounded-l-xl md:rounded-tr-none"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold">Modern Downtown Studio</h3>
              <div className="mb-4 text-gray-600">Studio</div>
              <h3 className="absolute left-[10px] top-[10px] rounded-lg bg-white px-4 py-2 text-right font-bold text-green-500 md:text-center lg:text-right">
                $4,200/mo
              </h3>
              <div className="mb-4 flex justify-center gap-4 text-gray-500">
                <p>
                  <i className="fa-solid fa-bed"></i> 1
                  <span className="md:hidden lg:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> 1
                  <span className="md:hidden lg:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  900 <span className="md:hidden lg:inline">sqft</span>
                </p>
              </div>
              <div className="mb-4 flex justify-center gap-4 text-sm text-green-900">
                <p>
                  <i className="fa-solid fa-money-bill"></i> Nightly
                </p>
                <p>
                  <i className="fa-solid fa-money-bill"></i> Weekly
                </p>
              </div>
              <div className="mb-5 border border-gray-200"></div>
              <div className="flex flex-col justify-between lg:flex-row">
                <div className="mb-4 flex gap-2 align-middle lg:mb-0">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                  <span className="text-orange-700"> Chicago IL </span>
                </div>
                <a
                  href="property.html"
                  className="h-[36px] rounded-lg bg-green-500 px-4 py-2 text-center text-sm text-white hover:bg-green-600"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
