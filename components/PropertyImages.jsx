import Image from "next/image";

const PropertyImages = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4 pb-12">
      <div className="container mx-auto">
        {images.length === 1 ? (
          <Image
            src={images[0]}
            alt=""
            className="mx-auto h-[400px] rounded-xl object-cover"
            width={1800}
            height={400}
            priority={true}
          />
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`${images.length === 3 && index === 2 ? "col-span-2" : "col-span-1"}`}
              >
                <Image
                  src={image}
                  alt=""
                  className="h-[400px] w-full rounded-xl object-cover"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={true}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertyImages;
