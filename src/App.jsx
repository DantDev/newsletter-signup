import React from "react"
import ValidScreen from "./components/ValidScreen"
import iconList from "./assets/images/icon-list.svg"
import illustrationDesk from "./assets/images/illustration-sign-up-desktop.svg"
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg"

function App() {
const [validEmail,setValidEmail] = React.useState(false)
const [err , setErr] = React.useState(false)
const [email, setEmail] = React.useState("")
const [message,setMessage] = React.useState("")

const changeValidState = () => {
  setValidEmail(!validEmail)
}

const handleOnChange = (e) => {
  setEmail(e.target.value)
}

const emailValidation = () => {
  const regEx= /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
  if(regEx.test(email)){
    setMessage("")
    setValidEmail(true)
    setErr(false)
  }else if(!regEx.test(email)&& email !== "") {
    setMessage("Valid email required")
    setErr(true)
  }else{
    setMessage("Valid email required")
    setErr(true)
  }
}

  return (
    <div>
      {validEmail ? <ValidScreen email={email} changeValidState={changeValidState}/> :
      <div className="container">
      <div className="content-info">
        <h1 className="content-title">Stay updated!</h1>
        <p className="content-text">Join 60,000+ product managers receiving monthly updates on:</p>
        <div className="description-container">
          <div className="content-description">
            <img className="icon-list" src={iconList}/>
            <p className="content-description-text">Product discovery and building that matters</p>
          </div>
          <div className="content-description">
            <img className="icon-list" src={iconList}/>
            <p className="content-description-text">Measuring to ensure updates are a success</p>
          </div>
          <div className="content-description">
            <img className="icon-list" src={iconList}/>
            <p className="content-description-text">And much more!</p>
          </div>
        </div>
        <div className="input-container">
          <div className="input-info">
            <label className="input-label" htmlFor="">Email address</label>
            <p className="error-message">{message}</p>
          </div>
          <input 
          type="email" 
          placeholder="email@company.com" 
          value={email} 
          onChange={handleOnChange}
          className={err ? "error-input" : "input"}
          />
          <button className="submit-btn" onClick={emailValidation}>Subscribe to monthly newsletter</button>
        </div>
      </div>
      <div className="content-illustration">
        <img className="ilustration-desktop" src={illustrationDesk}/>
        <img className="ilustration-mobile" src={illustrationMobile}/>
      </div>
    </div>}
    </div>
  )
}

export default App
