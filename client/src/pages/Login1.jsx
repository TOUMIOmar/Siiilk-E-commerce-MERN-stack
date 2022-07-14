//import {useEffect,useState} from "react";
import "../pages/login.css";
import {Link, useNavigate} from 'react-router-dom'
import {useForm} from "react-hook-form";
import  {useDispatch ,useSelector} from 'react-redux';
import {login as loginAction} from '../actions/userActions'




const Login1 = () => {


  const dispatch = useDispatch()
  const {register , handleSubmit } = useForm();
  const loginUser= (data) => {
    dispatch(loginAction(data ));
  };
  //const nav= useNavigate()
  const {isAuth}= useSelector(state =>state.user);
  {/*useEffect (()=>{
    if(isAuth) nav('/');
  }, [isAuth,nav]);
    */}
    return (
        

        <div className="wrapper login-1">
          <div className="container-login">
            <div className="col-left">
              <div className="login-text">
                <h2>Bienvenu</h2>
                <p>Créez votre compte.<br />C'est totalement gratuit.</p>
               
                <Link to='/creecompte' className="btn">S'inscrire</Link>
              </div>
            </div>
            <div className="col-right">
              <div className="login-form">
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit(loginUser)}>
                  <p>
                    <input type="text" placeholder="Nom d'utilisateur ou Email" required {...register('email')} />
                  </p>
                  <p>
                    <label>Password<span>*</span></label>
                    <input type="password" placeholder="Entrer le mot de passe" required {...register('password')} />
                  </p>
                  <p>
                    <input type="submit" defaultValue="LOGIN" />
                  </p>
                  <p>
                    <span >Mot de passe oublié?</span>
                  </p>
                
        
                </form>
              </div>
            </div>
          </div>
        </div>
        
      );
    }
    export default Login1;