import styles from './Dashboard.module.css'
import { Link } from 'react-router-dom'
import {useAuthValue} from '../context/AuthContext'
import {useFetchDocuments} from '../hooks/useFetchDocuments'
const Dashboard = () => {
    const {user} = useAuthValue()
    const uid = user.uid
    const {documents: posts, loading} = useFetchDocuments('posts', null, uid)
    return(
        <div>
            <h3>Dashboard</h3>
            <p>Gerencie seus posts</p>
            {posts && posts.length === 0 ? (
                <dir className={styles.noposts}>
                    <p>Nao foram encontrados posts</p>
                    <Link to="/posts/create" className='btn'>Criar primeiro post</Link>
                </dir>
            ):(
                <div>
                    <p>Tem posts!</p>
                </div>
            )}
            {loading && <p>Carregando...</p>}
            {posts && posts.map(post => <h4>{post.title}</h4>)}
        </div>
    )
}

export default Dashboard