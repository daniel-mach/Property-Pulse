import PropertyEditForm from "@/components/PropertyEditForm";

const PropertyEditPage = () => {
  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
          <PropertyEditForm />
        </div>
      </div>
    </section>
  );
};

export default PropertyEditPage;
