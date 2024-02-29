
import './App.css'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Register from './Signup/Register'
import { useEffect, useState } from 'react';

function App() {

  

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",   
  })
  const [check ,setCheck] = useState(false)
  const [error, setError] = useState({})

  const [success, setSuccess] = useState("")


  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log(name);
    console.log(value);
    setData({ ...data, [name]: value })

  }

  const termsCheck = (e)=>{
     
    setCheck(e.target.checked)
    console.log(check);

  }




  const handleSubmit = (e) => {
    e.preventDefault()


    let validate = {}

    if (!data.username) {
      validate.username = ' *username is required'

    }
    else if (!data.username.match(/^[0-9A-Za-z]{3,8}$/)) {
      validate.username = ' *username must be 3-8 characters in length and should only contain letters and numbers'
    }


    if (!data.email) {
      validate.email = '*Email is required'
    }
    else if (!data.email.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)) {
      validate.email = '*invalid email'
    }

    if (!data.password) {
      validate.password = '*password is required'
    }
    else if (data.password.length <= 6) {
      validate.password = ' *password should contain atleast 6 characters'

    }


    if (!data.confirmPassword) {
      validate.confirmPassword = '*please confirm the password'
    }
    else if (data.confirmPassword !== data.password) {
      validate.confirmPassword = '*passwords not matched'
    }

    if(!check){
      validate.check ='*required'
    }

    setError(validate)

    if (Object.keys(validate).length == 0) {
      setSuccess(`SIGN UP SUCCESSFULL 🎉`)
      display.style.display = "block";
      head.style.display = "none";     
      
    }




  }




  return (
    <div>
      <div style={{ height: '110vh', width: '100%' }} className='d-flex justify-content-center align-items-center body '>

        <div div className='p-4  col-md-8 col-lg-6 col-xl-4  rounded shadow' style={{ backgroundColor: ` rgba(255, 255, 255, 0.735)` }}>
          <div id='head'>
            <h2 className='text-center mb-5 fw-bold'>SIGN UP</h2>
          </div>
          <div id='display' className='success w-100 p-2'>
            <h5 className='text-center text-success'>{success}</h5>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='mb-4 '>
              <TextField
                label="Username" name='username'
                id="outlined-start-adornment"
                sx={{ width: '100%' }} value={data.username} onChange={(e) => handleChange(e)}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><AccountCircleOutlinedIcon /></InputAdornment>,
                }} />
              {error.username && <p style={{ color: 'red' }}>{error.username}</p>}

            </div>


            <div className='mb-4 '>
              <TextField
                label="E-mail" name='email' value={data.email} onChange={(e) => handleChange(e)}
                id="outlined-start-adornment"
                sx={{ width: '100%' }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><MailOutlineRoundedIcon /></InputAdornment>,
                }} />
              {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
            </div>

            <div className='mb-4 '>
              <TextField
                label="Password"
                name='password' value={data.password} onChange={(e) => handleChange(e)}
                id="outlined-start-adornment"
                sx={{ width: '100%' }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><HttpsOutlinedIcon /></InputAdornment>,
                }} />
              {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
            </div>

            <div className='mb-4 '>
              <TextField
                type="password" label="Confirm password" name='confirmPassword' value={data.confirmPassword} onChange={(e) => handleChange(e)}
                id="outlined-start-adornment"
                sx={{ width: '100%' }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><HttpsOutlinedIcon /></InputAdornment>,
                }} />
              {error.confirmPassword && <p style={{ color: 'red' }}>{error.confirmPassword}</p>}
            </div>


            <div className='form-check mb-3'>
              <input type="checkbox" value="" id="flexCheckDefault" checked={check} onChange={termsCheck} />
              <a href='' style={{ textDecoration: 'none' }} className='form-check-label ms-2' >
                *I agree to all terms and conditions
              </a>
              {error.check && <p style={{ color: 'red' }}>{error.check}</p>}
            </div>




            <div className='mb-4 '>
              <Button variant="contained" type='submit' className='w-100 p-2' style={{ height: `50px` }}>REGISTER</Button>
            </div>
          </form>
          <h5 className=' text-center'>Already a user ?  <a style={{ textDecoration: 'none' }} href=" ">Sign in</a></h5>
        </div>
      </div>


    </div>
  )
}

export default App
