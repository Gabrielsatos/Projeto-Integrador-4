import { useState, useEffect } from "react";



const LogForm = validate => {
        
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
        
    const [errors, setErrs] = useState({});

    const [submiting, setSubmiting] = useState(false);

    const getChange = e => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        });
    }

    const waitChange = e => {
        e.preventDefault();

        setErrs(validate(values));
        setSubmiting(true);
    }

    return {getChange, values, waitChange, errors};
}

export default LogForm;