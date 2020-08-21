import React, { useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {ReactComponent as Photo} from '../icons/icon-add-photo.svg';
import {ReactComponent as Rest} from '../icons/icon-restaurant.svg';

export default function TabBar(props) {
    const tabs = [
        {
            label: "Home",
            icon: Photo,
            route: '/home'
        },
        {
            label: "Recent",
            icon: Photo,
            route: '/recent'
        },
        {
            label: 'Likes',
            icon: Rest,
            route: '/likes'
        },
        {
            label: 'Bookmarks',
            icon: Photo,
            route: '/bookmarks'
        }
    ];

    const history = useHistory();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);

    return (
        <div>
            <div
                style={{
                    backgroundColor: '#FFFFFFEE'
                }}
                className="fixed bottom-0 left-0 w-full bg-white shadow-2xl h-16">
                <div className="flex justify-around items-center h-full max-w-sm mx-auto">
                    {
                        tabs.map((tab, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`flex flex-col items-center focus:outline-none ${tab.route === activeTab ? 'text-orange-400': 'text-black text-opacity-50'}`}
                                    onClick={() => {
                                        setActiveTab(tab.route);
                                        history.push(tab.route);
                                    }}>
                                    <tab.icon className="h-5 w-5 fill-current" />
                                    <span className="text-xs">
                                        {tab.label}
                                    </span>
                                </button>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}