import "../styles/index.scss";
import Recipes from "./Recipes";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";
const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>hey React</h1>
        </section>
        <img src={sword} alt="swort" width="250px" />
        <img src={swordSvg} alt="swort" width="250px" />
      </main>
      <Recipes />
    </>
  );
};

export default App;
