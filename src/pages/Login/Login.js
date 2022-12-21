// import logo from "./logo.svg";
import "./Login.css";

// function App() {
//   return <h1>Hello World</h1>;
// }

const Login = () => {
  return (
    <>
      <div class='overall-container'>
        <section class='login-section'>
          {/* <!-- logo container --> */}
          <div class='logo-container'>Westagram</div>
          {/* <!-- form --> */}
          <form class='loginForm'>
            <input
              class='user-id'
              type='text'
              placeholder='전화번호, 사용자 이름 또는 이메일'
            />
            <input class='user-pw' type='password' placeholder='비밀번호' />
            <button class='login-btn btn-light-blue'>로그인</button>
          </form>
          {/* <!-- forgot container --> */}
          <div class='forgotpw-container'>
            <p>비밀번호를 잊으셨나요?</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
