import React, {ReactElement} from 'react';
const headingStyle ={
    fontSize: '4em'
};

const bodyStyle={
    fontSize: '2.5em'
};

const al =(
    <div className='slide'>
        <h1 style ={headingStyle}>Styling in React</h1>
        <hr />
        <ul style={bodyStyle}>
            <li>Style using Css </li>
            <li>Style using Inline</li>

        </ul>
    </div>
);

export default al