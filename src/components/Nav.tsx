import { useNavigate } from "react-router";
import "../styles/nav.css";

function Nav() {
  const navigate = useNavigate();

  const handleNewReqClick = () => {
    navigate("/newreq");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="navBar">
      <div className="leftSide">
        <h1>banner</h1>
      </div>
      <div className="rightSide">
        <button onClick={handleHomeClick}>Home</button>
        <button onClick={handleNewReqClick}>Create new req</button>
        <button>button</button>
        <button>button</button>
      </div>
    </div>
  );
}

export default Nav;
