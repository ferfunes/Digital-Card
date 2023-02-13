import "./App.css";
import CardImage from "./components/CardImage";
import CardBody from "./components/CardBody";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="card-wraper">
        <CardImage />
        <CardBody />
        <Footer />
      </div>
    </div>
  );
}

export default App;
