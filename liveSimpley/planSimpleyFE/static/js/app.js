$ (function () {
    /**
     * Event handler for edit button (pencil)
     * Select previous textfield that has todo description
     * Set textfield to opposite of its current state readonly/write
     * Set cursor to end of line of on edit mode
     */
    $ ('span[name="editTodo"]').on ('click', evt => {
        // Select previous input field
        const prev = $ (evt.currentTarget).prev ('input.entry_label');
        // Returns a boolean of the readonly state of the input
        const ro = prev.prop ('readonly');
        // Set all other inputs to readonly
        $ ('input.entry_label').prop ('readonly', true);
        // Set previous input to the opposite of it's previous state
        // A trick to set the cursor at the end of the line. UX!!
        const oldDesc = prev.val ();
        prev.prop ('readonly', !ro).focus ().val ('').val (oldDesc);
    });
    /**
     * Event handler for submit buttons
     */
    $ ('button[type="submit"]').click (evt => {
        // Make sure event does not propagate
        evt.stopPropagation ();
    });

    $ ('form[action="/today"]').on ('submit', () => {
        const input = $ ('input.new_entry_input');
        if ($ (input).val () === '') {
            $ (input).addClass ('empty');
        }
        setTimeout (() => {
            $ (input).removeClass ('empty');
        }, 300);
    });

    // Submit the avatar form automatically once the file is selected
    $ ('#avatarInput').change (() => {
        $ ('#avatarForm').submit ();
    });

    const placeHolder = $ ('div.empty_entry_label');
    const emptyLabel = $ ('span.addTodo_placeholder');
    const addBtnPlaceholder = $ ('i.addTodo_placeholder');

    const newTodo = $ ('input.new_entry_input');
    const addBtn = $ ('button.new_entry_btn');

    newTodo.submit (() => {
        $ (this).css ('display', 'none');
        addBtn.css ('display', 'none');
    });

    // Capture 'Tab' keypress to display new todo entry
    $ (document).on ('keydown', evt => {
        const keyCode = evt.keyCode || evt.which;
        if (keyCode === 9) {
            addBtn.css ('display', 'block');
            newTodo.css ('display', 'block').focus ();
        }
    });

    $ (document).click (evt => {
        const target = $ (evt.target);
        // Show the input field if user clicks on placeholder and its children or the field itself
        if (target.is (placeHolder)
            || target.is (emptyLabel)
            || target.is (addBtnPlaceholder)
            || target.is (newTodo)) {
            addBtn.css ('display', 'block');
            newTodo.css ('display', 'block').focus ();
        } else {
            newTodo.val ('').css ('display', 'none');
            addBtn.css ('display', 'none');
        }
        if (!target.is ($ ('span[name="editTodo"] > i.fa-pencil-alt'))) {
            // Set all other inputs to readonly
            $ ('input.entry_label').prop ('readonly', true);
        }
    });

});