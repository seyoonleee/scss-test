// import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  // const goToMain = () => {
  //   // if (response.message === "valid user") {
  //   //   navigate("/main");
  //   // } else {
  //   //   alert("가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.");
  //   //   navigate("/signup");
  //   // }

  //   // console.log(navigate);

  //   navigate("/main");
  // };
  const goToMain = () => {
    // 3
    navigate("/main");
  };

  return (
    <>
      <div className='overall-container'>
        <section className='login-section'>
          {/* <!-- logo container --> */}
          <div className='logo-container'>Westagram</div>
          {/* <!-- form --> */}
          <form className='loginForm'>
            <input
              className='user-id'
              type='text'
              placeholder='전화번호, 사용자 이름 또는 이메일'
            />
            <input className='user-pw' type='password' placeholder='비밀번호' />
            <button className='login-btn btn-light-blue' onClick={goToMain}>
              로그인
            </button>
          </form>
          {/* <!-- forgot container --> */}
          <div className='forgotpw-container'>
            <p>비밀번호를 잊으셨나요?</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
