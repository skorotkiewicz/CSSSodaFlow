import "./App.scss";
import Footer from "./components/Footer";
import Panel from "./components/Panel";

const App = () => {
  return (
    <div className="App">
      <header>
        <h2>CssSodaFlow</h2>
      </header>
      <main>
        <Panel />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
