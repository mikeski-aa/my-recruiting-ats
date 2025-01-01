import { useState } from "react";

function LoginReg() {
  const [screen, setScreen] = useState<boolean>(false);

  const handleLoginSwitch = () => {
    setScreen(!screen);
  };

  return (
    <div className="logregcontainer">
      <div className={screen ? "login show" : "login hide"}>
        <div className="inputHolder">
          <label htmlFor="usernameInput">Email</label>
          <input id="usernameInput" type="email"></input>
        </div>
        <div className="inputHolder">
          <label htmlFor="passwordInput">Username</label>
          <input id="passwordInput" type="password"></input>
        </div>
        <div className="buttonHolderLogin">
          <button className="loginButton">Login</button>
          <button className="loginButton" onClick={handleLoginSwitch}>
            Register
          </button>
          <button className="loginButton">Guest Login</button>
        </div>
      </div>
      <div className={!screen ? "register show" : "register hide"}>
        <div className="inputHolder">
          <label htmlFor="emailInput">Email</label>
          <input id="emailInput" type="email"></input>
        </div>
        <div className="inputHolder">
          <label htmlFor="passwordInput">Username</label>
          <input id="passwordInput" type="password"></input>
        </div>
        <div className="inputHolder">
          <label htmlFor="passwordInputConfirm">Username</label>
          <input id="passwordInputConfirm" type="password"></input>
        </div>
        <div className="buttonHolderLogin">
          <button className="loginButton">Login</button>
          <button className="loginButton" onClick={handleLoginSwitch}>
            Register
          </button>
          <button className="loginButton">Guest Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginReg;
