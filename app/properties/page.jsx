import PropertyCard from "@/components/PropertyCard";
import properties from "@/properties.json";

const PropertiesPage = () => {
  return (
    <section class="px-4 py-6">
      <div class="container-xl m-auto px-4 py-6 lg:container">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
