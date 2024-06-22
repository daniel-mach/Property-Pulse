import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section className="mb-4 px-4">
      <div className="container-xl m-auto lg:container">
        <div className="grid grid-cols-1 gap-4 rounded-lg py-4 md:grid-cols-2">
          <InfoBox
            heading="For Renters"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backgroundColor: "bg-gray-700"
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-green-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-green-600"
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
