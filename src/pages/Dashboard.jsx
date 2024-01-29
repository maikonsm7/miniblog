import styles from './Dashboard.module.css'
import { Link } from 'react-router-dom'
import {useAuthValue} from '../context/AuthContext'
import {useFetchDocuments} from '../hooks/useFetchDocuments'
const Dashboard = () => {
    const {user} = useAuthValue()
    return(
        <div>
            <h3>Dashboard</h3>
        </div>
    )
}

export default Dashboard