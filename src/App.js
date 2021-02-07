import React, { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import Image from './components/Image';
import Search from './components/Search';

const initialState = {
    loading: true,
    images: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                images: action.payload,
            };
        case 'FETCH_ERROR':
            return {
                loading: false,
                images: [],
            };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [term, setTerm] = useState('');

    useEffect(() => {
        axios
            .get(
                `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
            )
            .then((response) => {
                dispatch({
                    type: 'FETCH_SUCCESS',
                    payload: response.data.hits,
                });
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR' });
            });
    }, [term]);

    const { loading, images } = state;

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Search render={(value) => setTerm(value)} />
            <Image images={images} />
            {images.length === 0 && !loading && (
                <div className='noResult'>No Images Found</div>
            )}
        </div>
    );
}

export default App;
