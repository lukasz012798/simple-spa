import React from "react";

const Login = (props) => {
  console.log(props);
  return (
    <div>
      <label htmlFor="">
        Podaj login
        <input type="text" />
      </label>
      <br />
      <label htmlFor="">
        Podaj hasło
        <input type="password" />
      </label>
      <br />
      <button>Zaloguj</button>
    </div>
  );
};

export default Login;
