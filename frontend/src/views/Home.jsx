import React from 'react';
import PostCardLayout from '../components/PostCardLayout';
import InputField from '../components/InputField';
import Button from '../components/Button';

const posts = [
    {
        post_id: 0,
        user_id: 1,
        caption: "Just went to iHop, bomb french toast!",
        image_url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        likes: 10,
        dislikes: 5
    },
    {
        post_id: 0,
        user_id: 1,
        caption: "Just went to iHop, bomb french toast!",
        image_url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        likes: 10,
        dislikes: 5
    },
    {
        post_id: 0,
        user_id: 1,
        caption: "Just went to iHop, bomb french toast!",
        image_url: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80",
        likes: 10,
        dislikes: 5
    }
];

export default function Home(props) {
    //const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        // fetch(
        //     'http://localhost:9000/posts?user_id=1',
        //     {
        //         method: 'GET'
        //     }
        // )
        // .then(response => response.json())
        // .then(json => {
        //     for(let i = 0; i < json.posts.length; ++i) {
        //         json.posts[i].image_url = json.posts[i].image_url.replace("3000", "9000");
        //     }
        //     setPosts(json.posts);
        // })
        // .catch(err => {
        //     console.log(err)
        // });
    }, []);

    /**
     * 
     * @param {React.FormEvent<HTMLFormElement>} ev 
     */
    const onSubmit = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        console.log(formData);
    };

    console.log("Home.jsx rendered");

    return (
        <div>
            <div className="bg-gray-200 mx-4 my-4">
                <form method="post" encType="multipart/form-data" onSubmit={onSubmit}>
                    <span className="block text-gray-900 font-semibold uppercase tracking-wider">Create Post</span>
                    <input id="image_url" type="file" accept="image/png, image/jpeg" />
                    <InputField label="Caption" />
                    <Button text="Submit" buttonStyle={Button.styles.contained} />
                </form>
            </div>
            <PostCardLayout posts={posts} />
        </div>
    );
}