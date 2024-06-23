import Properties from "@/components/Properties";
import PropertySearchForm from "@/components/PropertySearchForm";
import Property from "@/models/Property";
import connectDB from "@/config/database";

const PropertiesPage = async ({ searchParams: { pageSize = 6, page = 1 } }) => {
  await connectDB();

  const skip = (page - 1) * pageSize;
  const total = await Property.countDocuments({});
  const properties = await Property.find({}).skip(skip).limit(pageSize);

  return (
    <>
      <section className="bg-green-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <Properties
        properties={properties}
        total={total}
        page={parseInt(page)}
        pageSize={parseInt(pageSize)}
      />
    </>
  );
};

export default PropertiesPage;
