import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="relative h-screen flex flex-col items-center">
      <Header />
      <div className="flex-1 w-[90vw] overflow-auto custom-scroll mb-8">
        <Content />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;
