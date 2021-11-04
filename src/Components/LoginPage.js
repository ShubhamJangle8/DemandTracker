import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import login1 from '../img/login1.svg'

function LoginPage() {
  const [err, setErr] = useState({
    email: false,
    password: false
  });

  const [rform, setRform] = useState({
    email: '',
    password: ''
  });
  const [pform, setPform] = useState({
    email: '',
    password: ''
  });
  const [pmo, setPmo] = useState(false)

  const handleClassName = () => {
    console.log('click')
    setPmo(pmo ? false : true)
  }

  const handleRChange = (e) => {
    let name = e.target.name;
    setErr({ ...err, [name]: false });
    setRform({ ...rform, [e.target.name]: e.target.value });
  }

  const handlePChange = (e) => {
    let name = e.target.name;
    setErr({ ...err, [name]: false });
    setPform({ ...pform, [e.target.name]: e.target.value });
  }

  return (
    <div className={pmo ? 'container pmo-mode' : 'container'}>
      <div className='forms-container'>
        <div className="req-pmo">
          {/* {
            !pmo ?  */}
          <form action="#" className="req-form was-validated">
            <h2 className="title mb-5">Log in as Requestor</h2>
            <div className="input-field form-group">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Email id" name="email" value={rform.email} onChange={handleRChange} id='input1' required/>
              <div className='valid-feedback'>Correct</div>
              <div className='invalid-feedback'>Incorrect</div>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" value={rform.password} onChange={handleRChange} required/>
            </div>
            <NavLink activeClassName='login' className="nav-link btn solid" to='/req'>Login</NavLink>
          </form>
          {/* : */}
          <form action="#" className="pmo-form">
            <h2 className="title mb-5">Log in as PMO</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="email" placeholder="Username" name="email" value={pform.email} onChange={handlePChange} id='input2'required />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" value={pform.password} onChange={handlePChange} required/>
            </div>
            <NavLink activeClassName='login' className="nav-link btn solid" to='/pmo'>Login</NavLink>
          </form>
          {/* } */}

        </div>
        <div className='panels-container'>
          <div className='panel left-panel'>
            <div className='content'>
              <h1 className='my'>Requestor</h1>
              <button className='btn transparent' id='pmo-btn' onClick={handleClassName}>Login as PMO Team</button>
            </div>
            <img src={login1} className='image img-rotate' alt=''></img>
          </div>
          <div className='panel right-panel'>
            <div className='content'>
              <h1 className='my'>PMO Team</h1>
              <button className='btn transparent' id='req-btn' onClick={handleClassName}>Login as Requestor</button>
            </div>
            <img src={login1} className='image' alt=''></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
