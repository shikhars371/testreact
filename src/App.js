import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {

    const [value, setCount] = React.useState(0);
    const [value2, setCount2] = React.useState(0);

    return (

        <div className="main">
            <textarea rows="3" style={{margin: "15px"}} onChange={e => setCount(e.target.value)} ></textarea>
            <p>{value}</p>
            <p>{value.length}</p>

            <textarea rows="3" style={{margin: "15px"}} onChange={e => setCount2(e.target.value)} ></textarea>
            <p>{value2}</p>
            <p>{value2.length}</p>

            {((value === value2) ? <p>Same</p> : <p>Not same</p>)}

        </div>

    );
}

export default App;