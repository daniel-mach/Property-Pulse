import PropertyCard from "@/components/PropertyCard";
import User from "@/models/User";
import connectDB from "@/config/database";
import { getSessionUser } from "@/utils/getSessionUser";

const SavedPropertiesPage = async () => {
  await connectDB();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  const { bookmarks } = await User.findById(userId)
    .populate("bookmarks")
    .lean();

  return (
    <section className="py-6">
      <h1 className="mb-4 text-2xl">Saved Properties</h1>
      <div className="container-xl m-auto px-4 py-6 lg:container">
        {bookmarks.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {bookmarks.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedPropertiesPage;
