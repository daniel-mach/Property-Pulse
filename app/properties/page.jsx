import Properties from "@/components/Properties";
import PropertySearchForm from "@/components/PropertySearchForm";

const PropertiesPage = async () => {
  return (
    <>
      <section className="bg-green-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Properties />
    </>
  );
};

export default PropertiesPage;
