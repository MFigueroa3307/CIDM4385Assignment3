const FormInput = (props) => {
    return React.createElement('div', {className: "form-group"}, 
        [
            React.createElement('label', 
                                {
                                    htmlFor: "InputEmail"
                                }, 
                                "Email address"
            ),
            React.createElement('input', 
                                {
                                    className: "form-control",
                                    type: "email",
                                    id: "InputEmail",
                                    placeholder: "Enter email"
                                },
            ),
            React.createElement('label', 
                                {
                                    htmlFor: "Inputzip"
                                }, 
                                "Zip Code"
            ),
            React.createElement('input', 
                                {
                                    className: "form-control",
                                    type: "ZipCode",
                                    id: "InputZip",
                                    placeholder: "Enter Zip Code"
                                },
            ),
        ]
    );
};