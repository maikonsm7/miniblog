import { Link } from 'react-router-dom'
import styles from './Post.module.css'

const Post = ({post}) => {
    return(
        <div className={styles.post}>
            <img src={post.image} alt={post.title} className={styles.img}/>
            <div className={styles.body}>
            <h4>{post.title}</h4>
            <p className={styles.createdby}>{post.createdBy}</p>
            <div className={styles.tags}>
                {post.tagsArray.map(tag => (<p key={tag}>#{tag}</p>))}
            </div>
            <Link to={`/posts/${post.id}`} className='btn'>Ler</Link>
            </div>
        </div>
    )
}

export default Post