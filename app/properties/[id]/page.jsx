"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchProperty } from "@/utils/requests";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";
import BookmarkButton from "@/components/ButtonBookmark";
import ShareButton from "@/components/ButtonShare";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Spinner from "@/components/Spinner";
import PropertyContactForm from "@/components/PropertyContactForm";

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) {
        return;
      }

      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!property && !loading) {
    return (
      <h1 className="mt-10 text-center text-2xl font-bold">
        Property Not Found
      </h1>
    );
  }

  return (
    <>
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
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
                  <BookmarkButton property={property} />
                  <ShareButton property={property} />
                  <PropertyContactForm property={property} />
                </aside>
              </div>
            </div>
          </section>
          <PropertyImages images={property.images} />
        </>
      )}
    </>
  );
};

export default PropertyPage;
