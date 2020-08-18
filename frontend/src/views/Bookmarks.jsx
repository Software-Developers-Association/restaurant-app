import React, { useState } from 'react';
import PostCardLayout from '../components/PostCardLayout';

const posts = [
    {
        post_id: 4,
        user_id: 1,
        caption: "Just went to iHop, bomb french toast!",
        image_url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        likes: 10,
        dislikes: 5
    },
    {
        post_id: 5,
        user_id: 2,
        caption: "My friend's wedding food was soooooo goooood!!!!!",
        image_url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        likes: 50,
        dislikes: 25
    }
];

export default function Bookmarks(props) {
    return <PostCardLayout posts={posts} />
}