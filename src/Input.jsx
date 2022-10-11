import React from "react";

import FormikHOC from "./FormikHOC";

function Input({ name, label, id, className, ...rest }) {

    const field = useField(name);

        const [data, meta, helpers] = field;

        const { value, onBlur, onChange } = data;
        const { error, touched } = meta;

    
    let borderClass = " border-gray-300 focus:border-indigo-500  ";

    if (error && touched) {
        borderClass = "border-red-500 ";

    }

    return (
        <div>
            <label htmlFor={id} className="sr-only"> 
                {label}
            </label>
            <input
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                className= {"relative block w-full appearance-none rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-1 focus:outline-none focus:ring-indigo-500 sm:text-sm " +
                className +
                " " +
                borderClass}
                {...rest}
            />
            {touched && error && <div className=" text-red-700 ">{error}</div>}
                
        </div>
    );
}

export const FormikInput = FormikHOC(Input);

export default Input;
