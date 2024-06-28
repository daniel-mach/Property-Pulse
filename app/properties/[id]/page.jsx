import Link from "next/link";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";
import ButtonBookmark from "@/components/ButtonBookmark";
import ButtonShare from "@/components/ButtonShare";
import PropertyContactForm from "@/components/PropertyContactForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializeableObject } from "@/utils/convertToObject";

const PropertyPage = async ({ params }) => {
  const PUBLIC_DOMAIN = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

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
      <PropertyHeaderImage image={property.images[0]} />
      <section className="border bg-gray-50">
        <div className="container m-auto px-6 py-6">
          <Link
            href="/properties"
            className="flex items-center text-green-500 hover:text-green-600"
          >
            <FaArrowAltCircleLeft className="mr-2" />
            <p>Back to Properties</p>
          </Link>
        </div>
      </section>
      <section>
        <div className="container m-auto px-6 py-10">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-70/30">
            <PropertyDetails property={property} />
            <aside className="space-y-4">
              <ButtonBookmark property={property} />
              <ButtonShare property={property} />
              <PropertyContactForm property={property} />
            </aside>
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  );
};
export default PropertyPage;
