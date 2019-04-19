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


    // Submit the avatar form automatically once the file is selected
    $ ('#avatarInput').change (() => {
        $ ('#avatarForm').submit ();
    });


    const newTodo = $ ('input.new_entry_input');
    const addBtn = $ ('button.new_entry_btn');


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
        if (!target.is ($ ('span[name="editTodo"] > i.fa-pencil-alt'))) {
            // Set all other inputs to readonly
            $ ('input.entry_label').prop ('readonly', true);
        }
    });

});