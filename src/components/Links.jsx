import React from 'react';

const Links = (props) => {
    const url = props.url
    const type = props.type
    const email = props.email
    return(
        <div className='link'>
            <p> {type}
                <a href={url}>{email}</a>
            </p>
        </div>
    )
}

export default Links; 