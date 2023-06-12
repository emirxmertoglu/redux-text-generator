import Form from "@/components/Form";
import Paragraph from "@/components/Paragraph";

function App() {
  return (
    <div className="container mx-auto px-4">
      <header className="py-8">
        <h1 className="mb-8 text-5xl text-center text-white">
          Redux Text Generator App
        </h1>
        <hr />
        <Form />
        <Paragraph />
      </header>
    </div>
  );
}

export default App;
