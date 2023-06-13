import { useSelector } from "react-redux";

// components
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const Paragraph = () => {
  const { paragraphs, status, error } = useSelector((state) => state.generator);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed") {
    return <Error error={error} />;
  }

  return (
    <div className="mt-8 py-12 px-8 bg-neutral-700 text-white rounded-md">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Paragraph;
