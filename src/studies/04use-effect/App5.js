import { useEffect, useState } from "react"

export function App5() {

    const [posts, setPosts] = useState([]);
    const [rand, setRand] = useState(0);
    
    const handleClick = () => {
        setRand(Math.floor(Math.random() * (15 - 3 + 1)) + 3);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${rand}`)
        .then(response => response.json())
        .then(data => setPosts(data))
    }, [rand])

    

    return(
        <>
        <button onClick={handleClick}>update</button>

        {posts.map(post => 
            <li key={post.id}>
                {post.title}
            </li>
        )}
        </>
    )
}