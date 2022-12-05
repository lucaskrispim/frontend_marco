
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  const onChangeInput = (e:React.FormEvent<HTMLInputElement>) =>{
    
    if (e.currentTarget.id === 'email'){
      setEmail(e.currentTarget.value)
    }else{
      setPassword(e.currentTarget.value)
    }

  }

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    
    try {
      //const response = await doLogin(email, password)

      localStorage.setItem('token', "abc")
      
      navigate('/settings')

    } catch (error) {
      e.currentTarget.reset()
      setError(`Invalid user and/or password!`)
    }
}

  return (
    <main>
      <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex aling-items-center">
        <div className="container">
          <p className="text-center">

            <div className="col-12 d-flex aling-items-center justify-content-center my-3" >
              <div className="bg-white shadow border-0 rounded border-ligth p-4 p-lg-5 w-100 fmxw-500" >
                <div className="text-center text-md-center mb-4 mt-md-0" >
                  <h1 className="mb-0 h3" > Sign in to our platform </h1>
                </div>
                <form action="#" className="mb-0 h3" onSubmit={(e) => onSubmit(e)}>

                  <div className="form-group mb-4">
                    <label htmlFor="email">Your Email</label>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </span>
                      <input type="email" className="form-control" placeholder="example@company.com" id="email" required onChange={(e) => onChangeInput(e)} autoFocus/>
                    </div>
                  </div>

                  <div className="form-group">

                    <div className="form-group mb-4">
                      <label htmlFor="password">Your Password</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon2">
                          <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                        </span>
                        <input type="password" placeholder="Password" className="form-control" id="password" required onChange={(e) => onChangeInput(e) } />
                      </div>
                    </div>



                    <div className="d-flex justify-content-between align-items-top mb-4">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="remember" />
                        <label className="form-check-label mb-0" htmlFor="remember">
                          Remember me
                        </label>
                      </div>
                      <div><a href="./forgot-password.html" className="small text-right">Lost password?</a></div>
                    </div>

                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-gray-800">Sign in</button>
                  </div>
                  {
                    error? 
                    <div className="alert alert-danger mt-2" >{error}</div>:<React.Fragment></React.Fragment>
                  }
                </form>
              </div>
            </div>

          </p>
        </div>
      </section>
    </main>
  )
}

export default Login;