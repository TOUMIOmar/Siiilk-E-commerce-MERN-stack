import React,{useState} from 'react'
import '../Style.css'
import { Link } from 'react-router-dom';
import CustomPopup from './Pop up/CustomPopup';
import Login from './Login/Login'
import Signup from './Login/Signup'
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../actions/userActions';
import ShoppingCart from './ShoppingCart';






const Navbar = ({pro}) => {
  
  const Dispatch = useDispatch();
  const {isAuth} = useSelector ( (state)=> state.user)
  const {userInfo} = useSelector ( (state)=> state.user)
  const logout = (e) => {
    e.preventDefault();
    Dispatch(logoutAction());
  }
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [visibility3, setVisibility3] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
    setVisibility2(e);
    setVisibility3(e);
  };
  const[btnOpenstore,setbtnOpenstore]=useState("btn-Openstoren");
    const[btnOurstore,setbtnOurstore]=useState("btn-Ourstore");
    const animationbtnOpenstore=()=>{
        setbtnOurstore("btn-Ourstoren");
        setbtnOpenstore("btn-Openstore");
    }
    const animationbtnOurnstore=()=>{
        setbtnOpenstore("btn-Openstoren");
        setbtnOurstore("btn-Ourstore");
    }
  return (
    <div className='pos-Navbar'>
    <div className='Navbar'>
      <div className='Navpartone'>
        <Link to='/'><img src='https://www.linkpicture.com/q/silkok.png'></img></Link>
      </div>

      <div className='Navparttwo'> 
      {isAuth&&userInfo.role==="Partenaire" ? ( <div className='welcome-partenaire'>
        <Link style={{cursor:"pointer"}} to="/myspace" id="hovy" className='disabled-link'>Welcome  {userInfo.name}</Link>
        </div>) : (<></>)
       
        }
        
        <div className='panier'>
        
          <button onClick={(e) => setVisibility3(!visibility3)} ><i className="fas fa-shopping-cart"></i></button> <CustomPopup
               onClose={popupCloseHandler}
               show={visibility3}
              >
                  <ShoppingCart prop={pro}/>
              </CustomPopup>
        </div>
{!isAuth?(
        <div className='connecter'>
          
          
            <button id="hovy" onClick={(e) => setVisibility(!visibility)}> Connection</button>
              <CustomPopup
               onClose={popupCloseHandler}
               show={visibility}
              >
                <Login/>
              </CustomPopup>
              <span>   </span>
              <button id="hovy" onClick={(e) => setVisibility2(!visibility2)}>Crée un compte</button>
              <CustomPopup
               onClose={popupCloseHandler}
               show={visibility2}
              >
                <Signup/>
              </CustomPopup>
              
            
        </div>
        ) :( <div><div className='navbar-logout'>
        <button   onClick={logout}>Logout</button>
        </div> </div>)
}

      </div>
    </div>
    <nav className='nav'>
    <Link to='/'><button className={btnOurstore} onClick={animationbtnOurnstore} >NOTRE MAGASIN</button></Link>
    <Link to='/magasinouvert'><button className={btnOpenstore} onClick={animationbtnOpenstore}>MAGASIN OUVERT</button></Link>
   </nav>
   </div>
  )
}

export default Navbar