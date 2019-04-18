import React, {Component} from 'react';

class AddActivityForm extends Component {
    render() {
        return (
            <div className={"empty_entry_item_wrap"}>
                <form action="" method={"POST"}>
                    <div className={"empty_entry_label"}>
                        <i className={"fas fa-plus addTodo_placeholder"}/>
                        <span className={"addTodo_placeholder"}>What else do you need todo? ...</span>
                    </div>
                    <input type="text" className={"new_entry_input"} name={"newTodo"} autoComplete={"off"}
                    placeholder={"Take over the world ..."} required/>
                    <button type="submit" className={"all_btn new_entry_btn"} name={"addTodo"}>
                        <i className={"fas fa-plus addTodo"}/>
                    </button>
                </form>
            </div>
        );
    }
}

export default AddActivityForm;