import React from 'react'
import { Link } from 'react-router-dom'
import '../Style.css'
import { addToCart } from "../actions/CartActions";
import {useDispatch} from 'react-redux';


const Card = ({Card}) => {
    //console.log(Card)

    
  return (
    <div className="container">
    <div className="card">
        <div className="imgBx">
            <img style={{height:"300px",width:"300px"}} src={Card.image} alt="nike-air-shoe"></img>
        </div>

        <div className="contentBx">

            <h2>{Card.title}</h2>

            <div className="size">
                <h3>Taille:</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
            </div>

            <div className="color">
                <h3>Couleur:</h3>
                <span></span>
                <span></span>
                <span></span>
            </div >
            <Link to={Card._id}>Choix Des Options</Link>
            {/* <button onClick={addCart}> panier </button> */}
        </div>
    </div>
</div>
  )
}

export default Card