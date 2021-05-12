import React from 'react';
import Organisation from './organisation';
import Join from './joinWithUsHome';
import Quote from './getQuote';


const HomeBody = () => {

    return (
        <div>
        <Quote />
        <Join />
        <Organisation />
        </div>
    )
}

export default HomeBody;