import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useQuery(){
    const {search} = useLocation() // pegar os parametros da URL

    return useMemo(() => new URLSearchParams(search), [search]) // essa funcao vai ser chamada sempre o que search for alterado
}