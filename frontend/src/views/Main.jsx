import React from 'react';
import {ReactComponent as Icon} from '../icons/icon-restaurant.svg';

const backgroundURL = "https://images.unsplash.com/photo-1513618364580-fe1596762e8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

export default function Main(props) {
    return (
        <div style={
            {
                backgroundImage: `url(${backgroundURL})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover'
            }
        } className="bg-gray-500 h-screen flex flex-col justify-between">
            {/* This is the header section */}
            <div className="pl-16 sm:pl-20 pt-16 pb-8 bg-black bg-opacity-25">
                <Icon className="h-12 w-12 text-orange-500 bg-white rounded-lg p-1 fill-current" />
                <span className="block mt-5 text-2xl text-white leading-none font-semibold">
                    Welcome all
                    <br />
                    foodies!
                </span>
            </div>

            {/* This is the buttons */}
            <div className="flex flex-col items-center space-y-3 mb-16 px-16 sm:px-20">
                <button className="px-3 py-2 w-full rounded-full bg-orange-500 text-white">Sign up</button>
                <button className="px-3 py-2 w-full rounded-full bg-white text-orange-500">Sign in</button>
            </div>
        </div>
    );
}