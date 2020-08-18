import React, { useState } from 'react';
import PostCardLayout from '../components/PostCardLayout';

const posts = [
    {
        post_id: 0,
        user_id: 1,
        caption: "Just went to iHop, bomb french toast!",
        image_url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        likes: 10,
        dislikes: 5
    }
];

export default function Likes(props) {
    return <PostCardLayout posts={posts} />
}