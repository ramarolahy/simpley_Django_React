import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


class Summary extends Component {
    render() {
        return (
            <div className="container--summary">
                <div className="wrap--info py-2">
                    <h6>Budget this week:<span className="info--amount"> $300.00</span></h6>
                </div>
                <div className="wrap--info py-2">
                    <h6>Left over:<span className="info--amount"> $150.00</span></h6>
                </div>
                <div className="wrap--info info--planned_expenses py-2">
                    <h6>Planned expenses:</h6><span className="info--amount amount--planned_expenses"> $50.00</span>
                </div>
            </div>
        );
    }
}

export default Summary;