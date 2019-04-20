import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addActivity} from "../../actions/activities";

class AddActivityForm extends Component {
    // Make sure props get the correct types
    // See https://reactjs.org/docs/typechecking-with-proptypes.html for typechecking
    // Here using in class propType checking
    static propTypes = {
        addActivity: PropTypes.func.isRequired
    };

    state = {
        title: ''
    };
    /**
     * Method to handle input onchange and set State to input value
     * @param evt
     */
    onChange = evt => this.setState({ [evt.target.name]: evt.target.value });

    /**
     * Method to handle form submit to add activity
     * Get current state and assign to title
     * @param evt
     */
    onSubmit = evt => {
        evt.preventDefault();
        const {title} = this.state;
        const activity = {title};
        this.props.addActivity(activity);
        this._newEntryInput.value="";
        this._newEntryInput.focus();
        // this._newEntryInput.style.display = 'none';
        // this._newEntryBtn.style.display = "none";
    };

    /**
     * Event handler to display/hide new entry input
     * @param evt
    */
    // handleInputFocus = (evt) => {
    //     const target = evt.target;
    //     evt.stopPropagation();
    //         if( target === this._emptyEntryLabel ||
    //             target === this._iconAddTodoPlaceholder ||
    //             target === this._spanAddTodoPlaceholder ||
    //             target === this._newEntryInput) {
    //
    //             this._newEntryInput.style.display = "block";
    //             this._newEntryInput.focus();
    //             this._newEntryBtn.style.display = "block";
    //         } else {
    //             this._newEntryInput.value = '';
    //             this._newEntryInput.blur();
    //             this._newEntryInput.style.display = "none";
    //             this._newEntryBtn.style.display = "none";
    //         }
    // };
    //
    // componentDidMount() {
    //     document.addEventListener('click', this.handleInputFocus, false);
    // }
    //
    // componentWillUnmount() {
    //     document.removeEventListener('click', this.handleInputFocus, false);
    // }

    render() {
        return (
            <div className={"empty_entry_item_wrap"}>
                <form onSubmit={this.onSubmit}>
                    {/*<div className={"empty_entry_label"} ref={ el => this._emptyEntryLabel = el}>*/}
                    {/*    <i className={"fas fa-plus addTodo_placeholder"} ref={ el => this._iconAddTodoPlaceholder = el}/>*/}
                    {/*    <span className={"addTodo_placeholder"} ref={ el => this._spanAddTodoPlaceholder = el}>*/}
                    {/*        What else do you need todo? ...*/}
                    {/*    </span>*/}
                    {/*</div>*/}
                    <input type="text" className={"new_entry_input"} style={{display: "block"}} ref={ el => this._newEntryInput = el} name="title" autoComplete="off"
                    placeholder={"Take over the world ..."} onChange={this.onChange}/>
                    <button type="submit" className={"all_btn new_entry_btn"} style={{display: "block"}}  ref={ el => this._newEntryBtn = el} name={"addTodo"}>
                        <i className={"fas fa-plus addTodo"} />
                    </button>
                </form>
            </div>
        );
    }
}

// We do not need mapStateToProps since we are only performing an action (no props needed)

export default connect(null, { addActivity })(AddActivityForm);