import "../admin/logadmin.css";
import  {useDispatch ,useSelector} from 'react-redux';
import { login as loginAction } from '../../actions/userActions';
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";


const LogAdmin = () => {
  const {isAuth,userInfo}= useSelector(state =>state.user);
  const dispatch = useDispatch()
  const loginUser= (data) => {
    dispatch(loginAction(data ));
   
  };
  const nav = useNavigate();
  const {register , handleSubmit } = useForm();
  return (
    <div className="adminy-all logy_input">
      <div className="adminy-body">
        <div className="adminy-row">
          <div className="coly-lg-3" />
          <div className=" logyiny-box">
            <div className="logyiny-key">
              <i className="fa fa-key" aria-hidden="true" />
            </div>
            <div className=" logyiny-title">Panneau d'administration</div>
            <div className=" logyiny-formy">
              <div className=" logyiny-formy">
                <form onSubmit={handleSubmit(loginUser)}>
                  <div className="formy-group " >
                    <label className="formy-control-label">Nom d'utilisateur</label>
                    <input type="text" className="formy-control" required {...register('email')}/>
                  </div>
                  <div className="formy-group">
                    <label className="formy-control-label">Mot de passe</label>
                    <input type="password" className="formy-control" required {...register('password')} />
                  </div>
                  <div className="logyinybttm">
                    <div className="logyiny-text">{/* Error Message */}</div>
                    <div className="logyiny-button">
                      <button type="submit" className="btny-outline-primary">
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {(isAuth && userInfo.role==="admin")? nav('/dashbord'):<></>}
    </div>
  );
};
export default LogAdmin;
