// Imports
import React, { useState, useEffect } from 'react';
import Greeter from './components/Greeter'


const App = () => {
    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    const handleLoadButton = () => {
        setLoaded((loaded) => !loaded);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (loaded === false) {
        return (
            <>
                <h1>Website loading...</h1>
                <button onClick={handleLoadButton} className='btn btn-info'>Load website</button>
            </>
        )
    }
    return (
        <div className='container'>
            <h1>Reacting to React!</h1>
            <Greeter phrase='Welcome Mr.' name='Josh' />
            <Greeter phrase='Hello there' name='Andrew' />
            <Greeter phrase='Glad you are here' name='Mitzi' />
            <input type="text" placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
            <p>You are logging in as: {username}</p>
        </div>
    )
}

export default App;