import { useContext } from "react"
import { UserContext } from '../context/UserContext'
const Navbar=()=>{
const {userName} = useContext(UserContext)
return<>{userName}</>
}
export default Navbar