import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc, collection} from "firebase/firestore";


export const useUpdateDocument = (docCollection) => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const [cancelled, setCancelled] = useState(false)

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }

    const updateDocument = async(id, data) => {
        checkIfIsCancelled()
        setLoading(true)
        setError(false)
        try {
            const docRef = await doc(db, docCollection, id)
            const updatedDocument = await updateDoc(docRef, data)

            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])

    return {updateDocument, loading, error}
}