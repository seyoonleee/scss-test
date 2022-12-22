import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
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
            <Link to='/main'>
              <button className='login-btn btn-light-blue'>로그인</button>
            </Link>
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
