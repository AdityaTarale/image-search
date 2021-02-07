import React, { useState } from 'react';

function Search({ render }) {
    const [state, setState] = useState('');

    const searchImage = (e) => {
        e.preventDefault();
        render(state);
    };

    return (
        <form action='' onSubmit={searchImage}>
            <input
                type='text'
                onChange={(e) => setState(e.target.value)}
                placeholder='Search for image'
            />
            <button type='submit'>Search</button>
        </form>
    );
}

export default Search;
