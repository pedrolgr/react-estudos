import { useEffect, useState } from "react"

export function App5() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [posts])

    return(
        <>
        {posts.map(post => 
            <li key={post.id}>
                {post.title}
            </li>
        )}
        </>
    )
}