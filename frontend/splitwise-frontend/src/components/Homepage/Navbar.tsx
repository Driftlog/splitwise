import {Link} from 'react-router'
import splitwiseLogo from '../../assets/images/splitwise.png'

export default function Navbar() {

    return <nav className='flex justify-between items-center p-4'>
        <Link to='/' className='flex ml-2 gap-1 max-w-[550px] items-center'>
            <img className='max-w-1/10 w-full h-auto' alt='splitwise logo' src={splitwiseLogo}/>
            <span className='text-sm font-medium'>Splitwise</span>
        </Link>
        <ul className='flex justify-between gap-2 list-none mr-4 max-w-3/5'>
         <li className='max-w-full p-2'><Link to='/login'><span className='text-sm  text-green-500 whitespace-nowrap font-medium'>Log in</span></Link></li>
         <li className='max-w-full p-2'><Link to='/signUp'><span className='text-sm bg-teal-500 p-2 shadow-sm shadow-black text-white whitespace-nowrap font-medium'>Sign Up</span></Link></li>
        </ul>
    </nav>

}