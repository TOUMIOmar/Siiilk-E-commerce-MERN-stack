import React from "react";
import "../admin/listpro.css";
import CustomPopup2 from "../Pop up/CustomPopup2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getProducts, deleteProduct } from "../../actions/productActions";
import Dashbord from "./Dashbord";
import ProoductEdit from "./ProductEdit";

export const ListPro = () => {
  const dispatch = useDispatch();
  const { productList, loading } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [modal, setModal] = useState(false);

  const popupCloseHandler = (e) => {
    setModal(e);
  };
  const handleDeleteProduct = (prodId) => {
    dispatch(deleteProduct(prodId));
    alert("Votre produit a été supprimé avec succès !")
  };

  return (
    <div id ="comp"style={{ display: "flex" }}>
      <Dashbord />
      <div id="all">
        {loading && <div className="spinner-box">
        <div className="pulse-container">  
          <div className="pulse-bubble pulse-bubble-1" />
          <div className="pulse-bubble pulse-bubble-2" />
          <div className="pulse-bubble pulse-bubble-3" />
        </div>
      </div>}
        <div className="bo"> <h3 id="texte-center">Liste des produits</h3>
        <div id="roww">
          <div id="col-m">
            <div id="table-w">
              <table id="tablee">
               
                  <thead id="theadd">
                    <tr id="head">
                      <th>Image</th>
                      <th>Produit</th>
                      <th>Description</th>
                      <th>Quantiter</th>
                      <th>Prix</th>
                      <th>Action</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {productList.map((el) => (
                     <tbody id="coll">
                    <tr id="alert">
                      <td>
                        
                          <img id="image" src={el.image} alt="product-img" />
                      </td>
                      <td>
                        <div id="txt">
                          <span>{el.title}</span>
                        </div>
                      </td>
                      <td id="txt">{el.desc}</td>
                      <td id="txt">
                        <div id="txt">
                          <span>{el.qty}</span>
                        </div>
                      </td>
                      <td id="txt">{el.price}</td>
                      <td>
                        <button onClick={(e) => setModal(!modal)} id="editt"> Éditer  </button>
                           <CustomPopup2
               onClose={popupCloseHandler}
               show={modal}
              >
                  <ProoductEdit product={el} />
              </CustomPopup2>
                       
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteProduct(el._id)}
                          id="deletee"
                        >
                          Supprimer
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div> </div>
      </div>
    </div>
  );
};
export default ListPro;
