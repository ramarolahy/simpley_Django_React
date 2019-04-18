import React, {Component, Fragment} from 'react';

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
                                <a className="blob nav-link" href="#"><i className="fas nav-btn fa-cog"/></a>
                                <a className="blob nav-link" href="#"><i className="fas nav-btn fa-wallet"/></a>
                                <a className="blob nav-link" href="#"><i className="fas nav-btn fa-door-open"/></a>
                            </div>
                        </div>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default Header;