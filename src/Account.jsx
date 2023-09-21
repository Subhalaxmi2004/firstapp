
import React,{useState} from "react";
import {NavLink} from 'react-router-dom'
import "./index.css";
import { Icon } from 'react-icons-kit';
import {basic_eye} from 'react-icons-kit/linea/basic_eye';
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed';
import {arrows_circle_check} from 'react-icons-kit/linea/arrows_circle_check';
import {basic_exclamation} from 'react-icons-kit/linea/basic_exclamation';

const Account = () =>{
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
        setpassVali("password is valid");
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
          cpValidate();
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
        console.log(fullname);
        if (fullname.password !== fullname.confirmp) {
            setConfirm("Passwords are not the same");
          } else {
            setConfirm("");}
    };
    const [confirm,setConfirm] = useState("");
   const cpValidate = () =>{
    if(fullname.password !== fullname.confirmp){
        setConfirm("passwords are not same");}
        else{
            setConfirm("");
        }
    }
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

 return(
    <>
    <div className="outer_box">
    <div className="inner_box">
    < form onSubmit={onSubmit}>
        <div className="header">
            <div className="text">Create Your Account</div>
            <div className="underline"></div>
        </div>
        <input type="text" required
        placeholder="Full Name"
        name='fname'
        onChange={inputEvent} 
            value={fullname.fname}
        />
        <br/>
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
        <main className="tracker-box">
            <div className={lowerColor?'validated':'not_validated'}>
            {
                lowerColor?(
                    <span className="list-icon green">
                        <Icon icon={arrows_circle_check}/>
                    </span>
                ):(
                    <span className="list-icon">
                        <Icon icon={basic_exclamation}/>
                    </span>
                )
            }at least one lowercase</div>
            <div className={upperColor?'validated':'not_validated'}>
            {
                upperColor?(
                    <span className="list-icon green">
                        <Icon icon={arrows_circle_check}/>
                    </span>
                ):(
                    <span className="list-icon">
                        <Icon icon={basic_exclamation}/>
                    </span>
                )}
                at least one uppercase</div>
            <div 
            className={numberColor?'validated':'not_validated'}>
            {
                numberColor?(
                    <span className="list-icon green">
                        <Icon icon={arrows_circle_check}/>
                    </span>
                ):(
                    <span className="list-icon">
                        <Icon icon={basic_exclamation}/>
                    </span>
                )}
            at least one number</div>
            <div 
            className={charColor?'validated':'not validated'}>
            {
                charColor?(
                    <span className="list-icon green">
                        <Icon icon={arrows_circle_check}/>
                    </span>
                ):(
                    <span className="list-icon">
                        <Icon icon={basic_exclamation}/>
                    </span>
                )}
            at least special character</div>
            <div 
            className={eightCharColor?'validated':'not validated'}>
            {
                eightCharColor?(
                    <span className="list-icon green">
                        <Icon icon={arrows_circle_check}/>
                    </span>
                ):(
                    <span className="list-icon">
                        <Icon icon={basic_exclamation}/>
                    </span>
                )}
            8 characters</div>
        </main>
        <br/>
        <span className="xr">{passVali}</span>
        <br/>
        <input type="password" required
        placeholder=" Confirm Password"
        name='confirmp'
        onChange={inputEvent} 
            value={fullname.confirmp}
        />
        <br/>
        <span className="cp">{confirm}</span>
        <br/>
        <div className="check">
        <input type="checkbox" id="checkbox"/>
        <label for="checkbox">Remember Me</label>
    </div>
    <br/>
         <button type="submit" onClick={emailValidate}>submit </button>
        </form>
    <div className="member">
    Already have an account?<NavLink to="/Login">Login</NavLink>
    </div>
    <div className="submit-container">
        <NavLink to="/" className="submit">Create Account </NavLink>
        <NavLink to="/Login" className="submit">Log in</NavLink>
    </div>
</div>
    </div>
</>
);
};
export default Account;
