import React, { useState } from 'react';
import classNames from 'classnames';
import ReCAPTCHA from "react-google-recaptcha";

const LoginForm = (props) => {
  const [active, setActive] = useState("login");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'login') {
      setLogin(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();

    if (recaptchaValue) {
      // Continue with the login logic
      props.onLogin(e, login, password);
    } else {
      console.error("Please complete the reCAPTCHA");
      // You might want to show an error message to the user
    }
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();

    if (recaptchaValue) {
      // Continue with the registration logic
      props.onRegister(e, firstName, lastName, login, password);
    } else {
      console.error("Please complete the reCAPTCHA");
      // You might want to show an error message to the user
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <button className={classNames("nav-link", active === "login" ? "active" : "")} id="tab-login"
              onClick={() => setActive("login")}>Login</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className={classNames("nav-link", active === "register" ? "active" : "")} id="tab-register"
              onClick={() => setActive("register")}>Register</button>
          </li>
        </ul>

        <div className="tab-content">
          <div className={classNames("tab-pane", "fade", active === "login" ? "show active" : "")} id="pills-login" >
            <form onSubmit={onSubmitLogin}>
              <div className="form-outline mb-4">
                <input type="login" id="loginName" name="login" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="loginName">Username</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="loginPassword" autoComplete="true" name="password" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="loginPassword">Password</label>
              </div>

              <ReCAPTCHA
                sitekey="your-recaptcha-site-key"
                onChange={(value) => setRecaptchaValue(value)}
              />

              <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
            </form>
          </div>
          <div className={classNames("tab-pane", "fade", active === "register" ? "show active" : "")} id="pills-register" >
            <form onSubmit={onSubmitRegister}>
              <div className="form-outline mb-4">
                <input type="text" id="firstName" name="firstName" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="firstName">First name</label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" id="lastName" name="lastName" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="lastName">Last name</label>
              </div>

              <div className="form-outline mb-4">
                <input type="text" id="login" name="login" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="login">Username</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="registerPassword" autoComplete="true" name="password" className="form-control" onChange={onChangeHandler} />
                <label className="form-label" htmlFor="registerPassword">Password</label>
              </div>

              <ReCAPTCHA
                sitekey="your-recaptcha-site-key"
                onChange={(value) => setRecaptchaValue(value)}
              />

              <button type="submit" className="btn btn-primary btn-block mb-3">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;








// import * as React from 'react';
// import classNames from 'classnames';

// export default class LoginForm extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             active: "login",
//             firstName: "",
//             lastName: "",
//             login: "",
//             password: "",
//             onLogin: props.onLogin,
//             onRegister: props.onRegister
//         };
//     };

//     onChangeHandler = (event) => {
//         let name = event.target.name;
//         let value = event.target.value;
//         this.setState({[name] : value});
//     };

//     onSubmitLogin = (e) => {
//         this.state.onLogin(e, this.state.login, this.state.password);
//     };

//     onSubmitRegister = (e) => {
//         this.state.onRegister(e, this.state.firstName, this.state.lastName, this.state.login, this.state.password);
//     };

//     render() {
//         return (
//         <div className="row justify-content-center">
//             <div className="col-4">
//             <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
//               <li className="nav-item" role="presentation">
//                 <button className={classNames("nav-link", this.state.active === "login" ? "active" : "")} id="tab-login"
//                   onClick={() => this.setState({active: "login"})}>Login</button>
//               </li>
//               <li className="nav-item" role="presentation">
//                 <button className={classNames("nav-link", this.state.active === "register" ? "active" : "")} id="tab-register"
//                   onClick={() => this.setState({active: "register"})}>Register</button>
//               </li>
//             </ul>

//             <div className="tab-content">
//               <div className={classNames("tab-pane", "fade", this.state.active === "login" ? "show active" : "")} id="pills-login" >
//                 <form onSubmit={this.onSubmitLogin}>

//                   <div className="form-outline mb-4">
//                     <input type="login" id="loginName" name= "login" className="form-control" onChange={this.onChangeHandler}/>
//                     <label className="form-label" htmlFor="loginName">Username</label>
//                   </div>

//                   <div className="form-outline mb-4">
//                     <input type="password" id="loginPassword" autoComplete="true" name="password" className="form-control" onChange={this.onChangeHandler}/>
//                     <label className="form-label" htmlFor="loginPassword">Password</label>
//                   </div>

//                   <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

//                 </form>
//               </div>
//               <div className={classNames("tab-pane", "fade", this.state.active === "register" ? "show active" : "")} id="pills-register" >
//                 <form onSubmit={this.onSubmitRegister}>

//                   <div className="form-outline mb-4">
//                     <input type="text" id="firstName" name="firstName" className="form-control" onChange={this.onChangeHandler}/>
//                     <label className="form-label" htmlFor="firstName">First name</label>
//                   </div>

//                   <div className="form-outline mb-4">
//                     <input type="text" id="lastName" name="lastName" className="form-control" onChange={this.onChangeHandler}/>
//                     <label className="form-label" htmlFor="lastName">Last name</label>
//                   </div>

//                   <div className="form-outline mb-4">
//                     <input type="text" id="login" name="login" className="form-control" onChange={this.onChangeHandler}/>
//                     <label className="form-label" htmlFor="login">Username</label>
//                   </div>

//                   <div className="form-outline mb-4">
//                     <input type="password" id="registerPassword" autoComplete="true" name="password" className="form-control" onChange={this.onChangeHandler}/>
//                     <label className="form-label" htmlFor="registerPassword">Password</label>
//                   </div>

//                   <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
//                 </form>
//               </div>
//             </div>
//             </div>
//         </div>
//         );
//     };

// }