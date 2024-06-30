import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyCardFeatured from "./PropertyCardFeatured";

const FeaturedProperties = async () => {
  await connectDB();

  const properties = await Property.find({
    is_featured: true
  }).lean();

  const randomProperties = properties
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return properties.length > 0 ? (
    <section className="bg-green-50 px-4 pb-10 pt-6">
      <div className="container-xl m-auto lg:container">
        <h2 className="mb-6 text-center text-3xl font-bold text-green-600">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {randomProperties.map((property) => (
            <PropertyCardFeatured key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export default FeaturedProperties;
