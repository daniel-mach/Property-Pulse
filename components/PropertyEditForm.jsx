const PropertyEditForm = ({ property }) => {
  return (
    <form>
      <h2 className="mb-6 text-center text-3xl font-semibold">Edit Property</h2>

      <div className="mb-4">
        <label htmlFor="type" className="mb-2 block font-bold text-gray-700">
          Property Type
        </label>
        <select
          id="type"
          name="type"
          className="w-full rounded border px-3 py-2"
          required
          defaultValue={property.type}
        >
          <option defaultValue="Apartment">Apartment</option>
          <option defaultValue="Condo">Condo</option>
          <option defaultValue="House">House</option>
          <option defaultValue="Cabin Or Cottage">Cabin or Cottage</option>
          <option defaultValue="Room">Room</option>
          <option defaultValue="Studio">Studio</option>
          <option defaultValue="Other">Other</option>
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
          defaultValue={property.name}
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
          defaultValue={property.description}
        ></textarea>
      </div>

      <div className="mb-4 bg-green-50 p-4">
        <label className="mb-2 block font-bold text-gray-700">Location</label>
        <input
          type="text"
          id="street"
          name="location.street"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder="Street"
          defaultValue={property.location.street}
        />
        <input
          type="text"
          id="city"
          name="location.city"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder="City"
          required
          defaultValue={property.location.city}
        />
        <input
          type="text"
          id="state"
          name="location.state"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder="State"
          required
          defaultValue={property.location.state}
        />
        <input
          type="text"
          id="zipcode"
          name="location.zipcode"
          className="mb-2 w-full rounded border px-3 py-2"
          placeholder="Zipcode"
          defaultValue={property.location.zipcode}
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
            defaultValue={property.beds}
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
            defaultValue={property.baths}
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
            defaultValue={property.square_feet}
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
              defaultValue="Wifi"
              className="mr-2"
              defaultChecked={property.amenities.includes("Wifi")}
            />
            <label htmlFor="amenity_wifi">Wifi</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_kitchen"
              name="amenities"
              defaultValue="Full Kitchen"
              className="mr-2"
              defaultChecked={property.amenities.includes("Full Kitchen")}
            />
            <label htmlFor="amenity_kitchen">Full kitchen</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_washer_dryer"
              name="amenities"
              defaultValue="Washer & Dryer"
              className="mr-2"
              defaultChecked={property.amenities.includes("Washer & Dryer")}
            />
            <label htmlFor="amenity_washer_dryer">Washer & Dryer</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_free_parking"
              name="amenities"
              defaultValue="Free Parking"
              className="mr-2"
              defaultChecked={property.amenities.includes("Free Parking")}
            />
            <label htmlFor="amenity_free_parking">Free Parking</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_pool"
              name="amenities"
              defaultValue="Swimming Pool"
              className="mr-2"
              defaultChecked={property.amenities.includes("Swimming Pool")}
            />
            <label htmlFor="amenity_pool">Swimming Pool</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_hot_tub"
              name="amenities"
              defaultValue="Hot Tub"
              className="mr-2"
              defaultChecked={property.amenities.includes("Hot Tub")}
            />
            <label htmlFor="amenity_hot_tub">Hot Tub</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_24_7_security"
              name="amenities"
              defaultValue="24/7 Security"
              className="mr-2"
              defaultChecked={property.amenities.includes("24/7 Security")}
            />
            <label htmlFor="amenity_24_7_security">24/7 Security</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_wheelchair_accessible"
              name="amenities"
              defaultValue="Wheelchair Accessible"
              className="mr-2"
              defaultChecked={property.amenities.includes(
                "Wheelchair Accessible"
              )}
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
              defaultValue="Elevator Access"
              className="mr-2"
              defaultChecked={property.amenities.includes("Elevator Access")}
            />
            <label htmlFor="amenity_elevator_access">Elevator Access</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_dishwasher"
              name="amenities"
              defaultValue="Dishwasher"
              className="mr-2"
              defaultChecked={property.amenities.includes("Dishwasher")}
            />
            <label htmlFor="amenity_dishwasher">Dishwasher</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_gym_fitness_center"
              name="amenities"
              defaultValue="Gym/Fitness Center"
              className="mr-2"
              defaultChecked={property.amenities.includes("Gym/Fitness Center")}
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
              defaultValue="Air Conditioning"
              className="mr-2"
              defaultChecked={property.amenities.includes("Air Conditioning")}
            />
            <label htmlFor="amenity_air_conditioning">Air Conditioning</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_balcony_patio"
              name="amenities"
              defaultValue="Balcony/Patio"
              className="mr-2"
              defaultChecked={property.amenities.includes("Balcony/Patio")}
            />
            <label htmlFor="amenity_balcony_patio">Balcony/Patio</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_smart_tv"
              name="amenities"
              defaultValue="Smart TV"
              className="mr-2"
              defaultChecked={property.amenities.includes("Smart TV")}
            />
            <label htmlFor="amenity_smart_tv">Smart TV</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="amenity_coffee_maker"
              name="amenities"
              defaultValue="Coffee Maker"
              className="mr-2"
              defaultChecked={property.amenities.includes("Coffee Maker")}
            />
            <label htmlFor="amenity_coffee_maker">Coffee Maker</label>
          </div>
        </div>
      </div>

      <div className="mb-4 bg-green-50 p-4">
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
              defaultValue={property.rates.weekly}
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
              defaultValue={property.rates.monthly}
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
              defaultValue={property.rates.nightly}
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
          name="seller_info.name"
          className="w-full rounded border px-3 py-2"
          placeholder="Name"
          defaultValue={property.seller_info.name}
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
          defaultValue={property.seller_info.email}
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
          defaultValue={property.seller_info.phone}
        />
      </div>

      <div>
        <button
          type="submit"
          className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Update Property
        </button>
      </div>
    </form>
  );
};
export default PropertyEditForm;
