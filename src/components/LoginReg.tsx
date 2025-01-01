import { useState } from "react";

function LoginReg() {
  const [screen, setScreen] = useState<boolean>(false);

  return (
    <div className="logregcontainer">
      <div className={screen ? "login show" : "login hide"}></div>
      <div className={!screen ? "register show" : "register hide"}></div>
    </div>
  );
}

export default LoginReg;
