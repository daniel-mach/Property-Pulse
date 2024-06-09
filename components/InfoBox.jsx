import Link from "next/link";

const InfoBox = ({
  heading,
  backgroundColor,
  textColor = "text-gray-800",
  buttonInfo,
  children
}) => {
  return (
    <div className={`${backgroundColor} rounded-lg  p-6 shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mb-4 mt-2`}>{children}</p>
      <Link
        href={buttonInfo.link}
        className={`${buttonInfo.backgroundColor} inline-block rounded-lg px-4 py-2 text-white hover:opacity-80`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
