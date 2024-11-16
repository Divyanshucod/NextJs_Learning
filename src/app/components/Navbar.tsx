import { getServerSession } from 'next-auth'
import {FC} from 'react'

interface NavbarProps {
    
}

const Navbar: FC<NavbarProps> = async ({})=>{
    const session = await getServerSession()
    return <div></div>
}