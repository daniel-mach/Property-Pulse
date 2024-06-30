import PropertyEditForm from "@/components/PropertyEditForm";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializeableObject } from "@/utils/convertToObject";

const PropertyEditPage = async ({ params }) => {
  await connectDB();

  const propertyDoc = await Property.findById(params.id).lean();

  const property = convertToSerializeableObject(propertyDoc);

  if (!property) {
    return (
      <h1 className="mt-10 text-center text-2xl font-bold">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      <div className="container m-auto max-w-2xl py-24">
        <div className="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
          <PropertyEditForm property={property} />
        </div>
      </div>
    </>
  );
};

export default PropertyEditPage;
