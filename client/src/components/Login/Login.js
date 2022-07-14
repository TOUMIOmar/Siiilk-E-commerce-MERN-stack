import React, { useState } from "react";
import {useForm} from "react-hook-form";
import  {useDispatch ,useSelector} from 'react-redux';
import { register as registerAction } from '../../actions/userActions';
import { login as loginAction } from '../../actions/userActions';




import './login.css'


function Login() {
  const {isAuth,errors}= useSelector(state =>state.user);
  const dispatch = useDispatch()
  const {register , handleSubmit } = useForm();
  const loginUser= (data) => {
    dispatch(loginAction(data ));
   
  };
  const registerNewUser= (data,nav) => {
    dispatch(registerAction(data,nav ));
  };
  const [effet,addeffet]=useState("container-login")
  const [solvp,newsolvp]=useState(false)
  const addeffett=()=>{
    addeffet("container-login sign-up-mode")
    newsolvp(true)
  }
  const removeeffett=()=>{
    addeffet('container-login')
    newsolvp(false)
  }

  const navigate = () => {
    window.open('http://localhost:3000/Comptepartenaire')
  }
 

  return (
  <div className={effet} >
  <div className="forms-container">
  <div className="signin-signup">
    {!solvp? (<form  className="sign-in-form" onSubmit={handleSubmit(loginUser)}>
        <h2 className="title">S'identifier</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="Email" placeholder="E-mail" required {...register('email')}/>
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Mot de passe" required {...register('password')}/>
        </div>
        {errors && <p>{errors}</p>}
        <input  type="submit" defaultValue="Connexion" className="btn solid" />
        
      </form>): (<form  className="sign-up-form" onSubmit={handleSubmit(registerNewUser)}>
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
                  <i className="fas fa-lock" />
                  <input type="password" placeholder="Mot de passe" required {...register('password')}/>
                </div>
                <p onClick={navigate} style={{textDecoration :"underline",cursor:"pointer"}}>Créer un compte partenaire</p>
        {errors && <p>{errors}</p>}
        <input type="submit" className="btn" defaultValue="S'inscrire" />
      </form>)
    }
      

    
      
    </div>
  </div>
 
  <div className="panels-container">
    <div className="panel left-panel">
      <div className="content-c">
        <h3>Nouveau ici ?</h3>
       
        <button onClick={addeffett} className="btn-0 transparent" id="sign-up-btn" >
        S'inscrire
        </button>
      </div>
      <img src="https://www.linkpicture.com/q/log_1.svg" className="image" alt="" />
    </div>
    <div className="panel right-panel">
      <div className="content-c">
        <h3>Un de nous ?</h3>
  
        <button  onClick={removeeffett} className="btn-0 transparent" id="sign-in-btn">
        S'identifier
        </button>
      </div>
      <img src="https://www.linkpicture.com/q/register.svg" className="image" alt="" />
    </div>
  </div>
</div>
  );
}

export default Login;
