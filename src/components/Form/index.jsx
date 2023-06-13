import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchParagraphs } from "@/reducers/generatorReducer";

const Form = () => {
  const [number, setNumber] = useState(4);
  const [format, setFormat] = useState("text");

  const { status } = useSelector((state) => state.generator);
  const dispatch = useDispatch();

  const handleSubmit = (e) => e.preventDefault();
  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleFormatChange = (e) => setFormat(e.target.value);

  useEffect(() => {
    dispatch(fetchParagraphs({ number, format }));
  }, [number, format, dispatch]);

  return (
    <form className="pt-4 flex items-center gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-white" htmlFor="number">
          Paragraphs
        </label>
        <input
          id="number"
          type="number"
          value={number}
          onChange={handleNumberChange}
          disabled={status === "loading"}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-white" htmlFor="number">
          Include HTML
        </label>
        <select
          value={format}
          onChange={handleFormatChange}
          disabled={status === "loading"}
        >
          <option value="html">Yes</option>
          <option value="text">No</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
