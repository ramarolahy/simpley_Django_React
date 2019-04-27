import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {logout} from "../../actions/authenticate";

class Header extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        return (
            <Fragment>
                <form id="avatarForm" action="" method="POST">
                    <div id="radial-container">
                        <div className="avatar" style={{backgroundImage:`url('../../../static/images/avatar.png')`}}>
                            {/*<input id="avatarInput" type="file" name="avatar" style={{display: 'none'}}/>*/}
                            {/*<label htmlFor="avatarInput"><i className="fas fa-camera-retro"/></label>*/}
                            <div className="wrap navbar-nav">
                                <input id="checking" type="checkbox" style={{display: 'none'}}/>
                                {/*<a className="blob nav-link"><i className="fas nav-btn fa-cog"/></a>*/}
                                {/*<a className="blob nav-link"><i className="fas nav-btn fa-wallet"/></a>*/}
                            </div>
                        </div>
                    </div>
                <a className="blob nav-link" id="logout" onClick={this.props.logout}><i className="fas nav-btn fa-door-open"/></a>
                </form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer
});

export default connect(mapStateToProps, {logout})(Header);