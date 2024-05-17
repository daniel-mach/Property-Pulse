"use client";

import { useState } from "react";

const PropertyAddForm = () => {
  const [fields, setFields] = useState({
    name: "Test Property",
    type: "Apartment",
    description: "",
    location: {
      street: "",
      city: "Test City",
      state: "Test State",
      zipcode: ""
    },
    beds: "3",
    baths: "1",
    square_feet: "1500",
    amenities: [],
    rates: {
      nightly: "",
      weekly: "1100",
      monthly: "4200"
    },
    seller_info: {
      name: "",
      email: "test@test.com",
      phone: ""
    },
    images: []
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name.includes(".")) {
      const [outerKey, innerKey] = name.split(".");

      setFields((prevFields) => ({
        ...prevFields,
        [outerKey]: {
          ...prevFields[outerKey],
          [innerKey]: value
        }
      }));
    } else {
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value
      }));
    }
  };

  const handleAmenitiesChange = (event) => {
    const { value, checked } = event.target;

    const updatedAmenities = [...fields.amenities];

    if (checked) {
      updatedAmenities.push(value);
    } else {
      const index = updatedAmenities.indexOf(value);

      if (index !== -1) {
        updatedAmenities.splice(index, 1);
      }
    }

    setFields((prevFields) => ({ ...prevFields, amenities: updatedAmenities }));
  };

  const handleImageChange = () => {};

  return (
    <form>
      <h2 className="mb-6 text-center text-3xl font-semibold">Add Property</h2>
      <div className="mb-4">
        <label htmlFor="type" className="mb-2 block font-bold text-gray-700">
          Property Type
        </label>
        <select
          id="type"
          name="type"
          className="w-full rounded border px-3 py-2"
          required
          value={fields.type}
          onChange={handleChange}
        >
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
          <option value="House">House</option>
          <option value="Cabin Or Cottage">Cabin or Cottage</option>
          <option value="Room">Room</option>
          <option value="Studio">Studio</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">
          Listing Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder="eg. Beautiful Apartment In Miami"
          required
          value={fields.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="mb-2 block font-bold text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full rounded border px-3 py-2"
          rows="4"
          placeholder="Add an optional description of your property"
          value={fields.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-4 bg-blue-50 p-4">
        <label className="mb-2 block font-bold text-gray-700">Location</label>
        <input
          type="text"
          id="street"
          name="location.street"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder="Street"
          value={fields.location.street}
          onChange={handleChange}
        />
        <input
          type="text"
          id="city"
          name="location.city"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder="City"
          required
          value={fields.location.city}
          onChange={handleChange}
        />
        <input
          type="text"
          id="state"
          name="location.state"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder="State"
          required
          value={fields.location.state}
          onChange={handleChange}
        />
        <input
          type="text"
          id="zipcode"
          name="location.zipcode"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder="Zipcode"
          value={fields.location.zipcode}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4 flex flex-wrap">
        <div className="w-full pr-2 sm:w-1/3">
          <label htmlFor="beds" className="mb-2 block font-bold text-gray-700">
            Beds
          </label>
          <input
            type="number"
            id="beds"
            name="beds"
            className="w-full rounded border px-3 py-2"
            required
            value={fields.beds}
            onChange={handleChange}
          />
        </div>
        <div className="w-full px-2 sm:w-1/3">
          <label htmlFor="baths" className="mb-2 block font-bold text-gray-700">
            Baths
          </label>
          <input
            type="number"
            id="baths"
            name="baths"
            className="w-full rounded border px-3 py-2"
            required
            value={fields.baths}
            onChange={handleChange}
          />
        </div>
        <div className="w-full pl-2 sm:w-1/3">
          <label
            htmlFor="square_feet"
            className="mb-2 block font-bold text-gray-700"
          >
            Square Feet
          </label>
          <input
            type="number"
            id="square_feet"
            name="square_feet"
            className="w-full rounded border px-3 py-2"
            required
            value={fields.square_feet}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">Amenities</label>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          <div>
            <input
              type="checkbox"
              id="amenity_wifi"
              name="amenities"
              value="Wifi"
              className="mr-2"
              checked={fields.amenities.includes("Wifi")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_wifi">Wifi</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_kitchen"
              name="amenities"
              value="Full Kitchen"
              className="mr-2"
              checked={fields.amenities.includes("Full Kitchen")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_kitchen">Full kitchen</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_washer_dryer"
              name="amenities"
              value="Washer & Dryer"
              className="mr-2"
              checked={fields.amenities.includes("Washer & Dryer")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_washer_dryer">Washer & Dryer</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_free_parking"
              name="amenities"
              value="Free Parking"
              className="mr-2"
              checked={fields.amenities.includes("Free Parking")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_free_parking">Free Parking</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_pool"
              name="amenities"
              value="Swimming Pool"
              className="mr-2"
              checked={fields.amenities.includes("Swimming Pool")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_pool">Swimming Pool</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_hot_tub"
              name="amenities"
              value="Hot Tub"
              className="mr-2"
              checked={fields.amenities.includes("Hot Tub")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_hot_tub">Hot Tub</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_24_7_security"
              name="amenities"
              value="24/7 Security"
              className="mr-2"
              checked={fields.amenities.includes("24/7 Security")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_24_7_security">24/7 Security</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_wheelchair_accessible"
              name="amenities"
              value="Wheelchair Accessible"
              className="mr-2"
              checked={fields.amenities.includes("Wheelchair Accessible")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_wheelchair_accessible">
              Wheelchair Accessible
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_elevator_access"
              name="amenities"
              value="Elevator Access"
              className="mr-2"
              checked={fields.amenities.includes("Elevator Access")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_elevator_access">Elevator Access</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_dishwasher"
              name="amenities"
              value="Dishwasher"
              className="mr-2"
              checked={fields.amenities.includes("Dishwasher")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_dishwasher">Dishwasher</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_gym_fitness_center"
              name="amenities"
              value="Gym/Fitness Center"
              className="mr-2"
              checked={fields.amenities.includes("Gym/Fitness Center")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_gym_fitness_center">
              Gym/Fitness Center
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_air_conditioning"
              name="amenities"
              value="Air Conditioning"
              className="mr-2"
              checked={fields.amenities.includes("Air Conditioning")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_air_conditioning">Air Conditioning</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_balcony_patio"
              name="amenities"
              value="Balcony/Patio"
              className="mr-2"
              checked={fields.amenities.includes("Balcony/Patio")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_balcony_patio">Balcony/Patio</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_smart_tv"
              name="amenities"
              value="Smart TV"
              className="mr-2"
              checked={fields.amenities.includes("Smart TV")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_smart_tv">Smart TV</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_coffee_maker"
              name="amenities"
              value="Coffee Maker"
              className="mr-2"
              checked={fields.amenities.includes("Coffee Maker")}
              onChange={handleAmenitiesChange}
            />
            <label htmlFor="amenity_coffee_maker">Coffee Maker</label>
          </div>
        </div>
      </div>
      <div className="mb-4 bg-blue-50 p-4">
        <label className="mb-2 block font-bold text-gray-700">
          Rates (Leave blank if not applicable)
        </label>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <div className="flex items-center">
            <label htmlFor="weekly_rate" className="mr-2">
              Weekly
            </label>
            <input
              type="number"
              id="weekly_rate"
              name="rates.weekly"
              className="w-full rounded border px-3 py-2"
              value={fields.rates.weekly}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="monthly_rate" className="mr-2">
              Monthly
            </label>
            <input
              type="number"
              id="monthly_rate"
              name="rates.monthly"
              className="w-full rounded border px-3 py-2"
              value={fields.rates.monthly}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="nightly_rate" className="mr-2">
              Nightly
            </label>
            <input
              type="number"
              id="nightly_rate"
              name="rates.nightly"
              className="w-full rounded border px-3 py-2"
              value={fields.rates.nightly}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_name"
          className="mb-2 block font-bold text-gray-700"
        >
          Seller Name
        </label>
        <input
          type="text"
          id="seller_name"
          name="seller_info.name."
          className="w-full rounded border px-3 py-2"
          placeholder="Name"
          value={fields.seller_info.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_email"
          className="mb-2 block font-bold text-gray-700"
        >
          Seller Email
        </label>
        <input
          type="email"
          id="seller_email"
          name="seller_info.email"
          className="w-full rounded border px-3 py-2"
          placeholder="Email address"
          required
          value={fields.seller_info.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="seller_phone"
          className="mb-2 block font-bold text-gray-700"
        >
          Seller Phone
        </label>
        <input
          type="tel"
          id="seller_phone"
          name="seller_info.phone"
          className="w-full rounded border px-3 py-2"
          placeholder="Phone"
          value={fields.seller_info.phone}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="images" className="mb-2 block font-bold text-gray-700">
          Images (Select up to 4 images)
        </label>
        <input
          type="file"
          id="images"
          name="images"
          className="w-full rounded border px-3 py-2"
          accept="image/*"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <div>
        <button
          className="focus:shadow-outline w-full rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
          type="submit"
        >
          Add Property
        </button>
      </div>
    </form>
  );
};
export default PropertyAddForm;
