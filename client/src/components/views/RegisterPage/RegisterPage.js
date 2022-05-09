import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [HandPhone, setHandPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onHandPhoneHandler = (event) => {
    setHandPhone(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
      handphone: HandPhone,
    };
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("Failed to sign up");
      }
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={styles.Box}>
        <div className={styles.title}>회원가입</div>
        <div className={styles.Box}>
          <div className={styles.SignUpForm}>
            <div className={styles.info}>
              이메일
              <input
                type="email"
                className={styles.input}
                value={Email}
                onChange={onEmailHandler}
              />
            </div>

            <div className={styles.info}>
              이름
              <input
                type="text"
                className={styles.input}
                value={Name}
                onChange={onNameHandler}
              />
            </div>

            <div className={styles.info}>
              비밀번호
              <input
                type="password"
                className={styles.input}
                value={Password}
                onChange={onPasswordHandler}
              />
            </div>

            <div className={styles.info}>
              비밀번호 확인
              <input
                type="password"
                className={styles.input}
                value={ConfirmPassword}
                onChange={onConfirmPasswordHandler}
              />
            </div>

            <div className={styles.info}>
              전화번호
              <input
                type="text"
                className={styles.input}
                value={HandPhone}
                onChange={onHandPhoneHandler}
              />
            </div>

            <div className={styles.info2}>
              <button type="submit">회원 가입</button>
              <Link to="/">뒤로가기</Link>
            </div>
          </div>
        </div>
        {/* <div className={styles.SignUpForm}>
        <div style={
        styles.title}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                    <div className={styles.info}>이메일
                        <input type='email' className={styles.input}  value={Email} onChange={onEmailHandler} />
                        </div>

                    <div className={styles.info}>이름
                        <input type='text' className={styles.input}  value={Name} onChange={onNameHandler} />
                        </div>

                    <div className={styles.info}>비밀번호
                        <input type='password' className={styles.input}  value={Password} onChange={onPasswordHandler} />
                        </div>

                    <div className={styles.info}>비밀번호 확인
                        <input type='password' className={styles.input}  value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                        </div>

                    <div className={styles.info}>전화번호
                        <input type='text' className={styles.input}  value={HandPhone} onChange={onHandPhoneHandler} />
                        </div> */}
      </div>
    </form>
  );
}

export default RegisterPage;
