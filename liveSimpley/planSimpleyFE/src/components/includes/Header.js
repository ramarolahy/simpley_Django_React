import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <form id="avatarForm" action="" method="POST">
                    <div id="radial-container">
                        <div className="avatar" style={{backgroundImage: "url('')"}}>
                            <input id="avatarInput" type="file" name="avatar" style={{display: 'none'}}/>
                            <label htmlFor="avatarInput"><i className="fas fa-camera-retro"/></label>
                            <div className="wrap navbar-nav">
                                <input id="checking" type="checkbox" style={{display: 'none'}}/>
                                <Link className="blob nav-link" to="#"><i className="fas nav-btn fa-cog"/></Link>
                                <Link className="blob nav-link" to="#"><i className="fas nav-btn fa-wallet"/></Link>
                                <Link className="blob nav-link" to="/logout"><i className="fas nav-btn fa-door-open"/></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default Header;