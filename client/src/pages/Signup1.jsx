import {useEffect} from "react";
import "../pages/signup.css";
import {useNavigate, Link} from 'react-router-dom'
import {useForm} from "react-hook-form";
import  {useDispatch ,useSelector} from 'react-redux';
import {register as registerAction} from '../actions/userActions'
const Signup1 = () => {
  const dispatch = useDispatch()
  const {register , handleSubmit } = useForm();
  const registerNewUser= (data,nav) => {
    dispatch(registerAction(data,nav ));
  };
  const nav= useNavigate()
  {/*const {isAuth}= useSelector(state =>state.user.userInfo);
  useEffect (()=>{
    if(isAuth) nav('/');
  }, [isAuth,nav]);*/}
    return (
        <div className="wrapper signe-1">
          <div className="container2">
            <div className="col-right-1">
              <div className="signe-form">
                <h2>S'inscrire</h2>
                <form onSubmit={handleSubmit(registerNewUser)}>
                <p>
                    <input type="text" placeholder="Nom" required {...register('name')} />
                  </p>
                  <p>
                    <input type="Email" placeholder="Email" required {...register('email')}/>
                  </p>
                  <p>
                    <input type="password" placeholder=" Password" required {...register('password')}/>
                  </p>
                  
                  
                  <p>
                    <input type="submit" defaultValue="Signup" />
                  </p>
                  <p className="social-text">Ou Inscrivez-vous avec les plateformes sociales</p>
        <div className="social-media">
          <a href="#" className="social-icon">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin-in" />
          </a>
          </div>
                </form>
              </div>
            </div>
            <div className="col-left-1">
              <div className="signe-text">
                <h2>Un de nous?</h2>
                <Link to='/connection'  >  
                <button className="btn transparent" id="sign-in-btn"> S'inscrire</button> 
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      );
    }
    export default Signup1;