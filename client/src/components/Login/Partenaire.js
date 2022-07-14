import React from 'react'
import {useForm} from "react-hook-form";
import  {useDispatch ,useSelector} from 'react-redux';
import { register as registerAction } from '../../actions/userActions';

import './Partenaire.css'




const Partenaire = () => {

 
  const {isAuth}= useSelector(state =>state.user);
  const dispatch = useDispatch()
  const {register , handleSubmit } = useForm();
  const registerNewUser= (data,nav) => {
    
    dispatch(registerAction(data,nav ));
  };



  return (
    <div className="container-login sign-up-mode" >
  <div className="forms-container">
  <div className="signin-signup">
      <form action="#" className="sign-up-form" onSubmit={handleSubmit(registerNewUser)}>
        <h2 className="title">S'inscrire</h2>
        <div className="input-field">
                  <i className="fas fa-user" />
                  <input type="text" placeholder="Nom" required {...register('name')}/>
                </div>
                
                <div className="input-field">
                  <i className="fas fa-envelope" />
                  <input type="email" placeholder="E-mail" required {...register('email')}/>
                </div>
                <div className="input-field">
                  <i className="fa fa-comments-o" aria-hidden="true" />
                  <input type="text" placeholder="Description" required {...register('desc')}/>
                </div>
                <div className="input-field">
                  <i className="fa fa-picture-o" aria-hidden="true" />
                  <input type="text" placeholder="Image" required {...register('img')}/>
                </div>

                <div className="input-field">
                  <i className="fa fa-user-circle" aria-hidden="true"/>
                  <input value="Partenaire" type="text" placeholder="Tapez partenaire ici" required {...register('role')}/>
                </div>

                <div className="input-field">
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Mot de passe" required {...register('password')}/>
                </div>
        <input type="submit" className="btn" defaultValue="Sign up" />
      </form>
    </div>
    <div className="panels-container">
    <div className="panel left-panel">
      <div className="content-c">
        <h3>Nouveau ici ?</h3>
        <p>
        S'inscrire maintenant !
        </p>

      </div>
      <img src="https://www.linkpicture.com/q/log_1.svg" className="image" alt="" />
    </div>
    <div className="panel right-panel">
      <div className="content-c">
        
        <h3>Un de nous ?</h3>
        <p style={{fontSize:"17px"}}>
        Faites votre propre design et gagnez de l'argent !!<br/>
        Sois créatif
        </p>
        
      </div>
      <img src="https://www.linkpicture.com/q/register.svg" className="image" alt="" />
    </div>
  </div>
  </div>
 



</div>
  )
}

export default Partenaire