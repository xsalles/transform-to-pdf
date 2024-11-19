import html2pdf from "html2pdf.js";
import "./styles.css";
import Pikachu from "./images/pikachu.png";

function App() {
  async function handleOnClick() {
    const element = document.querySelector("#container");
    html2pdf(element);
  }
  return (
    <div id="container">
      <h1>Título</h1>
      <h2>Subtítulo</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        voluptatem eaque veniam laudantium ratione dolores error, quasi labore
        incidunt voluptatum placeat neque sed doloribus minima, ipsam a eos
        magni accusantium? Porro quo sequi corrupti consequuntur ipsam libero
        impedit ea ipsum facilis recusandae placeat eius adipisci est culpa unde
        voluptatem totam, modi, dolor cumque praesentium eaque necessitatibus?
        Consequuntur ex dolor dolorem? Est animi, nam, tenetur, aliquam minus
        natus alias architecto laborum iste ex quaerat doloribus rerum dolorem.
        Tenetur vero, quod consequuntur et rerum distinctio ipsa nemo ducimus
        possimus, pariatur eum natus? Quasi reprehenderit assumenda vel
        laboriosam debitis dolor aspernatur eaque fugiat error autem, sapiente
        nostrum illo, incidunt pariatur quo fugit eligendi temporibus. Earum
        omnis, officiis repellat ducimus cum eos corrupti fuga. Excepturi, saepe
        tempore officia corporis non est cum consequuntur sapiente dicta vero
        autem beatae ea minima. Saepe nulla ea hic neque debitis nemo eum minus
        explicabo, inventore aperiam molestias ad.
      </p>
      <img src={Pikachu} alt="pikachu" />
      <button onClick={handleOnClick}>Convert HTML to PDF</button>
    </div>
  );
}

export default App;
