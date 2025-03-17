import { useState } from "react";
import style from "./LoginPage.module.css";
import Registration from "./Registration";
import SignUp from "./SignUp";

function LoginPage() {
  const [isRegistration, setIsRegistration] = useState(false);

  const handleChangeRegistration = () => {
    setIsRegistration((prev) => !prev);
  };

  return (
    <div className={style.enviroment}>
      {isRegistration ? (
        <Registration handleChangeRegistration={handleChangeRegistration} />
      ) : (
        <SignUp handleChangeRegistration={handleChangeRegistration} />
      )}
    </div>
  );
}

export default LoginPage;
