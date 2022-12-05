import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import oguzhansurat from './oguzhansurat.jpg'

class  Input extends React.Component {
     render(){
      return (
   <div>
      <FloatingLabel         
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control type="email" />
      </FloatingLabel>
      <FloatingLabel className="label" controlId="floatingPassword" label="Password"  >
        <Form.Control type="password"/>
      </FloatingLabel>
    </div>
  );}
}


class Login extends React.Component{
    render(){
      return(
           <card className="card card1">
           <div className='row '>
                 <div className="login1  col-sm-6 col-md-6 col-xs-12 ">
                   <img className="imglogin"  alt="" src={oguzhansurat}></img>
                 </div>
                 <div className="login2 col-sm-6 col-md-6 col-xs-12">
                   <img className="img"  alt="" src={ require('./3.svg').default }></img>
                   <h3 className="loginh3">Türkmenistanyň Oguz han adyndaky inžener-tehnologiýalar uniwersteti</h3>
                   <Input/>
                   <Button className="loginbutton" variant="primary" size="lg" href="#" type="submit" active>{''}
                      Login
                    </Button>
                </div>
           </div>
           </card>
            )
  }

}

export default Login