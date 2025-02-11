import About from "./components/About/About";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Help from "./components/Help/Help";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Main></Main>
      <Feature></Feature>
      <Pricing></Pricing>
      <About></About>
      <Help></Help>
      <Footer></Footer>
    </>
  );
}

export default App;
