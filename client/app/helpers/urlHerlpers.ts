import { useRouter } from "next/router" ; 

export function getRoleFromUrl() : string | null {
    const router = useRouter() ; 
    const { query } = router ; 

    const role  = query.role ? String(query.role) : null ; 
    return role ; 
}