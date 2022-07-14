import "../admin/request.css";
import Dashbord from "./Dashbord"

const Request = () => {
  return (
    <div style={{display:"flex"}}>
    <Dashbord/>
    <div id="formContainer">
      <div id="formHeader">
        <h3>Request Form</h3>
      </div>
      <form id="formBody" className="fileRequestForm FlowupLabels">
        <p className="rf_notice">
        Your information will be kept private and is only collected to satisfy
        our burning curiosity.
        </p>
        <div className="fl_wrap">
        <input className="fl_input" type="text" id="rf_name" placeholder=" FullName:" />
        </div>
        <div className="fl_wrap">
          <input
            className="fl_input"
            type="email"
            id="rf_email"
            placeholder="Email"
          />
        </div>
        <div className="fl_wrap">
          <input className="fl_input" type="text" id="rf_company" placeholder="Address:" />
        </div>
        <div className="fl_wrap">
          <input className="fl_input" type="tel" id="rf_phone" placeholder="Phone:" />
        </div>
        <div className="fl_wrap">
          <input className="fl_input" type="tel" id="rf_phone" placeholder="Notes:" />
        </div>
        <p>
          <input className="rf_submit" type="submit" defaultValue="Send" />
        </p>
      </form>
    </div>
    </div>
    
  );
};
export default Request;
