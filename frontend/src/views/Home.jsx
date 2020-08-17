import React from 'react';
import {ReactComponent as Like} from '../icons/icon-thumb-up.svg';
import {ReactComponent as Dislike} from '../icons/icon-thumb-down.svg';

export default function Home(props) {
    const posts = [
        {
            post_id: 0,
            caption: "Just went to iHop, bomb french toast!",
            image_url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
            likes: 10,
            dislikes: 5
        },
        {
            post_id: 1,
            caption: "My friend's wedding food was soooooo goooood!!!!!",
            image_url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            likes: 50,
            dislikes: 25
        },
        {
            post_id: 2,
            caption: "I could never go vegan...",
            image_url: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
            likes: 100,
            dislikes: 100
        },
        {
            post_id: 2,
            caption: "I could never go vegan...",
            image_url: "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
            likes: 100,
            dislikes: 100
        },
        {
            post_id: 0,
            caption: "Just went to iHop, bomb french toast!",
            image_url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
            likes: 10,
            dislikes: 5
        },
        {
            post_id: 1,
            caption: "My friend's wedding food was soooooo goooood!!!!!",
            image_url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            likes: 50,
            dislikes: 25
        }
    ]

    const left = [];

    const right = [];

    for(let i = 0; i < posts.length; ++i) {
        const post = posts[i];

        const card = (
            <div
                key={i}
                className="inline-block self-start w-32 bg-white shadow-lg">
                <div>
                    <img src={post.image_url} />
                </div>
                <div className="px-3 py-2 h-16">
                    <label
                        style={{
                            textOverflow: 'ellipsis'
                        }} className="inline-block w-full overflow-hidden whitespace-no-wrap text-xs">
                        {
                            post.caption
                        }
                    </label>
                    <div className="flex justify-center">
                        <div className="flex items-center space-x-2">
                            <Like className="h-3 w-3 fill-current text-green-300" />
                            <span className="text-xs w-8 text-left">
                                {post.likes}
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Dislike className="h-3 w-3 fill-current text-red-300" />
                            <span className="text-xs w-8 text-left">
                                {post.dislikes}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
        // you're even
        if(i % 2 == 0) {
            // add to left column
            left.push(card);
        } else {
            // add to right column
            right.push(card);
        }
    }

    return (
        <div className="flex justify-center space-x-5 pt-5 pb-20">
            <div className="flex flex-col space-y-5">
                {left}
            </div>
            <div className="flex flex-col space-y-5">
                {right}
            </div>
        </div>
    );
}