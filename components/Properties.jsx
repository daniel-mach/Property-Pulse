"use client";

import { useState, useEffect } from "react";
import PropertyCard from "@/components/PropertyCard";
import Pagination from "@/components/Pagination";
import Spinner from "@/components/Spinner";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalProperties, setTotalProperties] = useState(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(
          `/api/properties?page=${page}&pageSize=${pageSize}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setProperties(data.properties);
        setTotalProperties(data.total);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page, pageSize]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return loading ? (
    <Spinner />
  ) : (
    <section className="py-6">
      <div className="container-xl m-auto px-4 py-6 lg:container">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
      <Pagination
        page={page}
        pageSize={pageSize}
        totalProperties={totalProperties}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Properties;
