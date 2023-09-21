
import React,{useState} from "react";
import {NavLink} from 'react-router-dom';
import "./index.css";
const Login = () =>{
    const [type,settype] = useState("password");
    const [lower,setlower] = useState(false);
    const [upper,setupper] = useState(false);
    const [number,setnumber] = useState(false);
    const [char,setchar] = useState(false);
    const [eightchar,seteightchar] = useState(false);
    const [passVali, setpassVali] = useState("");
    const handleChange = (value) =>{
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const char = new RegExp('(?=.*[!@#\$%/^&*])');
        const eightchar = new RegExp('(?=.{8,})');
        if(lower.test(value)){
            setlower(true);
        }
        else{
            setlower(false);
        }
        if(upper.test(value)){
            setupper(true);
        }
        else{
            
            setupper(false);
        }
        if(number.test(value)){
            setnumber(true);
        }
        else{
            
            setnumber(false);
        }
        if(char.test(value)){
            setchar(true);
        }
        else{
            
            setchar(false);
        }
        if(eightchar.test(value)){
            seteightchar(true);
        }
        else{
            
            seteightchar(false);
        }
      const isLowerValid = lower.test(value);
  const isUpperValid = upper.test(value);
  const isNumberValid = number.test(value);
  const isCharValid = char.test(value);
  const isEightCharValid = eightchar.test(value);
setlower(isLowerValid);
  setupper(isUpperValid);
  setnumber(isNumberValid);
  setchar(isCharValid);
  seteightchar(isEightCharValid);

  const isValid =
    isLowerValid && isUpperValid && isNumberValid && isCharValid && isEightCharValid;

    
      if (isValid) {
        setpassVali("");
      } else {
        setpassVali("Password is invalid");
      }
    };
    const [lowerColor, setLowerColor] = useState(false);
    const [upperColor, setUpperColor] = useState(false);
    const [numberColor, setNumberColor] = useState(false);
    const [charColor, setCharColor] = useState(false);
    const [eightCharColor, setEightCharColor] = useState(false);
    const[fullname,setFullName] = useState({
        fname:"",
        email:"",
        password:"",
        Confirmp:"",

    });
      
const [message,setMessage] = useState("");
const emailValidate = () =>{
    
    const regEx = /[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (!regEx.test(email) && email !== "") {
      setMessage("Email is not valid");
    } else if (/[A-Z]/.test(email)) {
      setMessage("Email cannot contain uppercase letters");
    } else {
      setMessage("");
    }
};
    const [email,setemail] = useState("");
    const inputEvent = (event) => {
       
        const { value, name } = event.target;

        if (name === "email") {
          setemail(value); 
          emailValidate(); 
        } else if (name === "confirmp") {
          setFullName((preValue) => ({
            ...preValue,
            [name]: value,
          }));
        } else if (name === "password") {
          setFullName((preValue) => ({
            ...preValue,
            [name]: value,
          }));
          handleChange(value);
          const hasLowercase = /[a-z]/.test(value);
          const hasUppercase = /[A-Z]/.test(value);
          const hasNumber = /[0-9]/.test(value);
          const hasSpecialChar = /[!@#\$%/^&*]/.test(value);
          const hasEightChars = value.length >= 8;
          setLowerColor(hasLowercase);
          setUpperColor(hasUppercase);
          setNumberColor(hasNumber);
          setCharColor(hasSpecialChar);
          setEightCharColor(hasEightChars);
        } else {
          setFullName((preValue) => ({
            ...preValue,
            [name]: value,
          }));
        }
      };
    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(fullname);}
 return(
    <>
    <div className="outer_box">
    <div className="inner_box">
    < form onSubmit={onSubmit}>
        <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
        </div>
        <input type="email"
        placeholder="email"
        name='email'
        onChange={inputEvent}
            value={email}
        />
        <br/>
        <span className="email">{message}</span>
        <input type="password" required
        placeholder="Password (at least 8 character)"
        name='password'
        onChange={inputEvent} 
            value={fullname.password}
            className={passVali?'invalid':'valid'}
        />
        <br/>
        <span className="xr">{passVali}</span>
        <br/>
        <div className="check">
        <input type="checkbox" id="checkbox"/>
        <label for="checkbox">Remember Me</label>
    </div>
         <button type="submit" onClick={emailValidate}>submit </button>
        </form>
    <div className="member">
    Don't have an account?<NavLink to="/">Create Account</NavLink>
    </div>
    <div className="submit-container">
        <NavLink to="/" className="submit">Create Account</NavLink>
        <a href="/Login" className="submit"
        >Login</a>
    </div>
</div>
    </div>
</>
);
};
export default Login;
