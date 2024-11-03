import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                src={bannerImg}
                className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-4xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                <p className="py-6">
                Books to freshen up your bookshelf</p>
                <button className="btn bg-[#23BE0A]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;