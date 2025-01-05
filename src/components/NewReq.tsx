import "../styles/newreq.css";

function NewReq() {
  return (
    <div className="createNewReq">
      <div className="creationForm">
        <div className="reqCreationHolder">
          <label htmlFor="reqName">Requisition Name</label>
          <input id="reqName" type="text"></input>
        </div>
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
      </div>
    </div>
  );
}

export default NewReq;
