import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc} from "firebase/firestore";


export const useDeleteDocument = (docCollection) => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const [cancelled, setCancelled] = useState(false)

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    const deleteDocument = async(id) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(false)
        try {
           const deletedDocument = await deleteDoc(doc(db, docCollection, id))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])

    return {deleteDocument, loading, error}
}