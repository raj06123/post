import React,{useState, useEffect} from "react";
import axios from 'axios';
import Post from "../components/Post";

const Feed = () => {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const incomingPosts1 = await axios.get("http://www.mocky.io/v2/59b3f0b0100000e30b236b7e");
            const incomingPosts2 = await axios.get("http://www.mocky.io/v2/59ac28a9100000ce0bf9c236");
            const incomingPosts3 = await axios.get("http://www.mocky.io/v2/59ac293b100000d60bf9c239");

            setPosts([...posts,...incomingPosts1.data.posts,...incomingPosts2.data.posts,...incomingPosts3.data.posts]);
        }
        fetchPosts();
    }, []);

    console.log(posts);
    return (
        <div>
            {posts.length > 0 && posts.map((post,index) => (
                <Post 
                key = {index}
                id = {post.id}
                event_date = {post.event_date}
                thumbnail_image = {post.thumbnail_image}
                likes = {post.likes}
                views = {post.views}
                 />
            ))}
        </div>
    )
}

export default Feed;