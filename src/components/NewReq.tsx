import { useState } from "react";
import "../styles/newreq.css";

function NewReq() {
  const [reqState, setReqState] = useState<number>(0);

  const handleSubmitClick = () => {
    setReqState(1);
  };

  const handleBackClick = () => {
    setReqState(reqState - 1);
  };
  return (
    <div className="createNewReq">
      <div className="creationForm">
        <div className="reqCreationHolder">
          <label htmlFor="reqName">Requisition Name</label>
          <input id="reqName" type="text"></input>
        </div>
        <div className="reqCreationOne">
          <div className="reqCreationHolder">
            <label htmlFor="reqOrg">Job Org Family</label>
            <select id="reqOrg">
              <option selected={true}>Select one from below</option>
              <option>Engineering</option>
              <option>Product</option>
              <option>People</option>
              <option>Finance</option>
              <option>Legal</option>
              <option>Operations</option>
              <option>Other</option>
            </select>
          </div>
          <div className="reqCreationHolder">
            <label htmlFor="reqDesc">Requisition description</label>
            <textarea id="reqName"></textarea>
          </div>
          <div className="reqCreationHolder">
            <label htmlFor="hiringManager">Hiring manager</label>
            <input id="reqName" type="text"></input>
          </div>
          <div className="reqCreationHolder">
            <label htmlFor="taManager">Recruiter assigned</label>
            <input id="taManager" type="text"></input>
          </div>
          <div className="reqCreationTwo">
            <div className="reqCreationHolder"></div>
          </div>
        </div>

        <button className="submitReq" onClick={handleBackClick}>
          Back
        </button>
        <button className="submitReq" onClick={handleSubmitClick}>
          Next
        </button>
      </div>
      <div className="stageCreation">x</div>
    </div>
  );
}

export default NewReq;
