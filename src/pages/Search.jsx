import React from "react"
import { useQuery } from "../hooks/useQuery"
import { useFetchDocuments } from "../hooks/useFetchDocuments"
import Post from "../components/post/Post"
import { Link } from "react-router-dom"

const Search = () => {
    const query = useQuery()
    const search = query.get('q')
    const {documents: posts} = useFetchDocuments('posts', search)

    return(
        <div>
            <h3>Search</h3>
            <div>
                {posts && posts.length === 0 && (
                    <>
                    <p>Não foram encontrados posts...</p>
                    <Link to="/">
                    Voltar
                    </Link>
                    </>
                )}
                {posts && posts.map(post => (
                    <Post key={post.uid} post={post}/>
                ))}
            </div>
        </div>
    )
}

export default Search