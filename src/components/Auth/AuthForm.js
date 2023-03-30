import { useState, useRef, useContext, Fragment } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../Store/Auth-Context";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCj67mf85p6dFLu4vqdAh3ongsmb6zQwRU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCj67mf85p6dFLu4vqdAh3ongsmb6zQwRU";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed !";
            /*if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }*/
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate("/store", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Fragment>
      <p
        className="display-5 text-center p-3 bg-secondary mt-1 text-white"
        style={{ fontSize: "6em", fontFamily: "bold" }}
      >
        The Generics
      </p>
      <section className={classes.auth}>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.actions}>
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"}</button>
            )}
            {isLoading && <p>Sending Request...</p>}
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default AuthForm;
