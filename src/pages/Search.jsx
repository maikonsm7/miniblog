import { useQuery } from "../hooks/useQuery"

const Search = () => {
    const query = useQuery()
    const search = query.get('p')
    return(
        <div>
            <h3>Search</h3>
            <p>{search}</p>
        </div>
    )
}

export default Search