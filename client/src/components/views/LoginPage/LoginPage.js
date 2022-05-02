import React, { useState } from "react";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { useNavigate, Link } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      } else {
        alert("Error˝");
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.background}>
        <div className={styles.loginBox}>
          <div className={styles.loginForm}>
            <h1>로그인</h1>
            <label>Email</label>
            <input
              className={styles.input}
              type="Email"
              onChange={onEmailHandler}
              required
            />
            <label>Password</label>
            <input
              className={styles.input}
              type="Password"
              onChange={onPasswordHandler}
              required
            />
            <button className={styles.button} type="submit">
              로그인
            </button>
            <div>
              <p>아직 계정이 없으신가요?</p>
              <Link to="/register">회원가입</Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginPage;
