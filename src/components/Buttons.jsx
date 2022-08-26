import React from "react";

const Button = (props) => {
    const name = props.name
    const id = props.id
    const scrollToTop = () => window.scrollTo({ top: 800, behavior: "smooth" });
    
    return(
        <div>
            <button onClick={scrollToTop} id={id}>
                {name}
            </button>
        </div>
    )
}


export default Button;
