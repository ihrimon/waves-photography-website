import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Subscription from '../Subscription/Subscription';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Brands></Brands>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;