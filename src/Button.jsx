import React from "react";
import { memo } from "react";

function Button({className, ...rest}) {

    return (
        
        <button
        {...rest}
        className={"rounded-md px-5 py-2 bg-indigo-700 text-white self-end " + className} 
        ></button>
        
    );
}

export default memo(Button);