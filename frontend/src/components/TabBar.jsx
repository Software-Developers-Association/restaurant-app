import React from 'react';
import {ReactComponent as Photo} from '../icons/icon-add-photo.svg';
import {ReactComponent as Rest} from '../icons/icon-restaurant.svg';

export default function TabBar(props) {
    const tabs = [
        {
            label: "Recent",
            icon: Photo
        },
        {
            label: 'Likes',
            icon: Rest
        },
        {
            label: 'Bookmarks',
            icon: Photo
        }
    ];

    return (
        <div
            style={{
                backgroundColor: '#FFFFFFEE'
            }}
            className="fixed bottom-0 left-0 w-full flex justify-around items-center bg-white shadow-2xl h-16">
            {
                tabs.map((tab, index) => {
                    return (
                        <button key={index} className="flex flex-col items-center">
                            <tab.icon className="h-5 w-5 fill-current text-black text-opacity-50" />
                            <span className="text-xs text-black text-opacity-50">
                                {tab.label}
                            </span>
                        </button>
                    );
                })
            }
        </div>
    );
}