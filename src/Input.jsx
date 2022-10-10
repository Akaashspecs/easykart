import React from "react";
import { useField } from "formik";

function Input({ name, label, id, className, ...rest }) {

    const field = useField(name);

    const [data, meta, helpers] = field;

    const { value, onBlur, onChange} = data;
    const { error, touched } = meta;

    let borderClass = " border-gray-300 focus:border-indigo-500 ";

    if (error && touched) {
        borderClass = "border-red-500";

    }
    return (
        <div>
            <label htmlFor={id} className="sr-only"> 
                {label}
            </label>
            <input
                id={id}
                value={valu}
        </div>
    )
}