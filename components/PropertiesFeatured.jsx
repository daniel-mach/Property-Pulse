import { fetchProperties } from "@/utils/requests";
import PropertyCardFeatured from "./PropertyCardFeatured";

const FeaturedProperties = async () => {
  const properties = await fetchProperties({ showFeatured: true });

  return (
    properties.length > 0 && (
      <section className="bg-green-50 px-4 pb-10 pt-6">
        <div className="container-xl m-auto lg:container">
          <h2 className="mb-6 text-center text-3xl font-bold text-green-500">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {properties.map((property) => (
              <PropertyCardFeatured key={property._id} property={property} />
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default FeaturedProperties;
