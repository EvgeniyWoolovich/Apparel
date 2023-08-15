import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
