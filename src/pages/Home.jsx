import styles from './Home.module.css'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../hooks/useFetchDocuments'
import Post from '../components/post/Post'

const Home = () => {
    const [query, setQuery] = useState('')
    const {documents: posts, loading} = useFetchDocuments('posts')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(query){
            return Navigate(`/search?q=${query}`)
        }
    }
    return(
        <div className={styles.search_form}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" value={query} onChange={e => setQuery(e.target.value)} placeholder='Buscar por tag'/>
                <button className='btn'>Pesquisar</button>
            </form>
            <div className={styles.posts}>
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Não foram encontrados posts</p>
                        <Link to='/posts/create'>Criar primeiro post</Link>
                    </div>
                )}
                {loading && <p>Carregando...</p>}
                {posts && posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </div>
    )
}

export default Home