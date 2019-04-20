import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
    // Component level state
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };

    onSubmit = evt => {
        evt.preventDefault();
        console.log('submit');
    };

    onChange = evt => this.setState({ [evt.target.name]: evt.target.value });

    render() {
        const { username, email, password, password2 } = this.state;
        return (
           <Fragment>
               <svg className={"big-log"} viewBox={"0 0 10 2"}>
                  <text x="5" y="1" alignmentBaseline="middle" textAnchor="middle" fontSize="1" fill="none" strokeWidth=".02" stroke="#fff" fontFamily="Pacifico, sans-serif" letterSpacing="0.02px">
                      Simpley
                  </text>
               </svg>
                <p className="welcome-text text-white text-center">
                    Welcome to Simpley, a simple and easy way to plan your day!
               </p>
               <div className="card bg-transparent border-0 px-5 py-5">
                   <form id="signupForm" className="mx-auto" onSubmit={this.onSubmit}>
                       <div className="form-group">
                           <label htmlFor="username" className="text-white">Username</label>
                           <input type="text" name="username" className="form-control" id="username" autoComplete="off"
                                  placeholder="Enter username" onChange={this.onChange} value={username} required/>
                       </div>
                        <div className="form-group">
                           <label htmlFor="email" className="text-white">Email</label>
                           <input type="text" name="email" className="form-control" id="email"
                                  autoComplete="off" placeholder="Enter email" onChange={this.onChange} value={email}  required/>
                           <small id="emailHelp" className="form-text text-muted"> We'll never share your email with anyone else</small>
                       </div>
                        <div className="form-group">
                           <label htmlFor="password" className="text-white">Password</label>
                           <input type="text" name="password" className="form-control" id="password"
                                  autoComplete="off" placeholder="Enter password"  onChange={this.onChange} value={password}  required/>
                       </div>
                        <div className="form-group">
                           <label htmlFor="password2" className="text-white">Confirm password</label>
                           <input type="text" name="password2" className="form-control" id="password2"
                                  autoComplete="off" placeholder="Enter password again"  onChange={this.onChange} value={password2}  required/>
                       </div>
                       <button type="submit" id="signup" className="btn btn-primary mt-4">Live Simpley</button>
                       <p className={"login-invite text-center pt-3"}>
                           <span className="text-white">Already have an account? <Link to="/login">Login here.</Link></span>
                       </p>
                   </form>
               </div>
           </Fragment>
        );
    }
}

export default Signup;