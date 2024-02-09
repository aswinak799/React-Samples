import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>I am Header</h1>
            <h2>count : {props.data}</h2>
        </div>
    );
};

export default Header;
