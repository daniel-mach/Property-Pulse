"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

function ProfileProperties({ properties: initialProperties }) {
  const [properties, setProperties] = useState(initialProperties);

  const handleDeleteProperty = async (propertyId) => {};

  return properties.map((property) => (
    <div key={property._id} className="mb-10">
      <Link href={`/properties/${property._id}`}>
        <Image
          className="h-32 w-full rounded-md object-cover"
          src={property.images[0]}
          alt=""
          width={500}
          height={100}
          priority={true}
        />
      </Link>
      <div className="mt-2">
        <p className="text-lg font-semibold">{property.name}</p>
        <p className="text-gray-600">
          Address: {property.location.street} {property.location.city}{" "}
          {property.location.state}
        </p>
      </div>
      <div className="mt-2">
        <Link
          href={`/properties/${property._id}/edit`}
          className="mr-2 rounded-md bg-green-500 px-3 py-3 text-white hover:bg-green-600"
        >
          Edit
        </Link>
        <button
          onClick={() => handleDeleteProperty(property._id)}
          className="rounded-md bg-red-500 px-3 py-2 text-white hover:bg-red-600"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  ));
}

export default ProfileProperties;
