const Form = () => {
  return (
    <form className="pt-4 flex items-center gap-4">
      <div className="flex flex-col">
        <label className="text-white" htmlFor="number">
          Paragraphs
        </label>
        <input id="number" type="number" value={4} />
      </div>

      <div className="flex flex-col">
        <label className="text-white" htmlFor="number">
          Include HTML
        </label>
        <select value="no">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
