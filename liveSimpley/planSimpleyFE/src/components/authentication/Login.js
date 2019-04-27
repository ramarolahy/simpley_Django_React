import React, {Component, Fragment} from 'react';
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from "../../actions/authenticate";

class Login extends Component {
    // Component level state
    state = {
        username: '',
        password: '',
    };

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    onSubmit = evt => {
        evt.preventDefault();
        this.props.login(this.state.username, this.state.password)
    };

    onChange = evt => {
        this.setState({[evt.target.name]: evt.target.value});
    }

  render() {
        if(this.props.isAuthenticated) { return <Redirect to={"/"}/>}
        const { username, password } = this.state;
        return (
           <Fragment>
               <svg className={"big-log"} viewBox={"0 0 10 2"}>
                  <text className="svg_path"  x="5" y="1" alignmentBaseline="middle" textAnchor="middle" fontSize="1" fill="none" strokeWidth=".02" stroke="#fff" fontFamily="Pacifico, sans-serif" letterSpacing="0.02px">
                      Simpley
                  </text>
               </svg>
               <p className="welcome-text text-white text-center">
                    Welcome to Simpley, a simple and easy way to plan your day!
               </p>
               <div className="card bg-transparent border-0 px-5 py-5">
                   <form id="loginForm" className="mx-auto" onSubmit={this.onSubmit}>
                       <div className="form-group">
                           <label htmlFor="username" className="text-white">Username</label>
                           <input type="text" name="username" className="form-control" id="username" autoComplete="off"
                                  placeholder="Enter username" onChange={this.onChange} value={username} required/>
                       </div>
                        <div className="form-group">
                           <label htmlFor="password" className="text-white">Password</label>
                           <input type="password" name="password" className="form-control" id="password"
                                  autoComplete="off" placeholder="Enter password"  onChange={this.onChange} value={password}  required/>
                       </div>
                       <button type="submit" id="signup" className="btn btn-primary mt-4">Enter</button>
                       <p className={"signup-invite text-center pt-3"}>
                           <span className="text-white">Still need an account? <Link to="/signup">Signup here.</Link></span>
                       </p>
                   </form>
               </div>
           </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);