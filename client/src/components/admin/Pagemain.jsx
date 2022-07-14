import "../admin/pagemain.css";
import Dashbord from "./Dashbord"
const Pagemain = () => {
  return (
    <div style={{display:"flex"}}>
    <Dashbord/>
      <div class="containerty-center">
        <div class="wrappery__dashboard">
          <div class="wrappery__dashbord_title">
            <h2 id="titry">Tableau de bord</h2>
            <p className=" texty">
            Content de te revoir, <span id="sp">Gargouri gargoroo</span >
            </p>
          </div>
        </div>
        <div className="listy-card">
        <table className="rwdy-table">
          <tbody><tr className="titi">
              <th id="thh">Nom du clien</th>
              <th id="thh">Produit</th>
              <th id="thh">Date</th>
              <th id="thh">Prix</th>
            </tr>
            <tr className="titi">
              <td id="tdd" data-th="Client Name">Skander Gargouri</td>
              <td id="tdd" data-th="Product">T-Shirt</td>
              <td  id="tdd" data-th="Date">07/04/2022</td>
              <td  id="tdd" data-th="Price">25DT</td>
            </tr>
            <tr className="titi">
              <td  id="tdd" data-th="Client Name">Sami</td>
              <td  id="tdd" data-th="Product">Hoddie</td>
              <td  id="tdd" data-th="Date">15/02/2022</td>
              <td  id="tdd" data-th="Price">40DT</td>
            </tr>
            <tr className="titi">
              <td id="tdd" data-th="Client Name">Omar</td>
              <td id="tdd" data-th="Product">T-Shirt</td>
              <td id="tdd" data-th="Date">20/03/2022</td>
              <td  id="tdd" data-th="Price">39DT</td>
            </tr>
          </tbody></table>
        </div>
        <div className="contenty-pagemain">
        {/* start first contenty */}
        <div className="first-boxy">
          <div className="boxy one"><span id="sp" >190</span >
            <p className="pp">Le nombre de pages vues</p>
          </div>
          <div className="boxy tow"><span id="sp">50</span >
            <p className="pp">Le nombre d'inscrits</p>
          </div>
        </div>
        <div className="secound-boxy">
          <div className="boxy three"><span id="sp">140</span >
            <p className="pp">Le nombre de tous les articles </p>
          </div>
          <div className="boxy four"><span id="sp">550</span >
            <p className="pp">Le nombre de tous les commentaires d'articles</p>
          </div>
        </div>
        {/* end first contenty */}
        {/* start second contenty */}
        <div className="secound-contenty">
          <div className="head-contenty">
            <h3 id="ti">Articles vendus ce mois-ci</h3>
          </div>
          <div className="items-contenty">
            <div className="di">Hoddie Anime Category <span id="sp">100</span ></div>
            <hr />
            <div className="di">Hoddie Simple <span id="sp">95</span ></div>
            <hr />
            <div className="di">T-Shirt <span id="sp">40</span ></div>
            <hr />
            <div className="di">T-Shirt Anime <span id="sp">20</span ></div>
          </div>
        </div>
        {/* start second contenty */}
      </div>

      </div>
    </div>
  );
};
export default Pagemain;
