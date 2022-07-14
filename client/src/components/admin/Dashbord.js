import React from "react";
import { Link } from 'react-router-dom'
import "../admin/dashbord.css";
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from "../../actions/userActions";


const Dashbord = () => {
  const Dispatch = useDispatch();
  const {isAuth} = useSelector ( (state)=> state.user)
  const {userInfo} = useSelector ( (state)=> state.user)
  const logout = (e) => {
    e.preventDefault();
    Dispatch(logoutAction());
  }
  return (
    <div id="dasho">
      <div id="dasho-two">
        <div id="linko-to">
          <nav id="navi">
            <div id="dasho-side">
              <span id="shrink-btn">
                <i id="bxo"></i>
              </span>
              <img src="https://www.linkpicture.com/q/user.jfif" id="logo" alt="" />
              <h3 id="hideo">SIILK</h3>
            </div>
            <div className="sideso-links"id="sidebaro">
              <ul id="ulo">
                <li id="ilo"><span id="linko">
                <i className="fa fa-user fa-lg " id="icone"></i>
                  <Link id ="lion" to='/dashbord'> Tableau de bord </Link>
                  </span>
                </li>
                
                <li id="ilo"><span id="linko">
                <i className="fa fa-shopping-cart fa-lg " id="icone"></i>
                   <Link id ="lion" to='/upload'>Ajouter des produits</Link></span>
                </li>
                <li id="ilo"> <span id="linko">
                  <i className="fa fa-clock-o fa-lg " id="icone" ></i>
                  <Link id ="lion" to='/product'>Liste des produits</Link></span>
                </li>
                <li id="ilo"><span id="linko">
                  <i className="fa fa-rocket fa-lg  " id="icone"></i>
                  <Link  onClick={logout} id ="lion" to='/admin'>Se déconnecter  </Link></span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Dashbord;
