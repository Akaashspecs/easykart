import React from "react";
import { memo } from "react";

function Button(props) {

    return (
        <button
        {...props}
        className="rounded-md px-9 py-2 bg-indigo-700 text-white"
        ></button>
    );
}

export default memo(Button);