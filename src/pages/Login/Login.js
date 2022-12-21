// import logo from "./logo.svg";
import "./Login.css";

// function App() {
//   return <h1>Hello World</h1>;
// }

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
            <button className='login-btn btn-light-blue'>로그인</button>
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
