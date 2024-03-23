import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export default function SupplierHeader() {
  return (
    <header className='bg-gray-900'>
     <div className='justify-between flex items-center max-w-6xl mx-auto p-4'>

       {/* web site name */}
       <Link to='/landing-page'>
       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap justify-start flex-1'>
         <span className='text-slate-100'>TRAVE</span>
         <span className='text-slate-700'>RSE</span>
       </h1>
       </Link>

       {/* Search bar
       <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
         <input type='text'placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
         <FaSearch className='text-slate-600'/> 
       </form> */}

       {/* Navigation bar */}
       <ul className='flex gap-6'>
         
         <Link to='/supplier-signin'>
           <li className='text-white font-semibold hover:underline'>Sign in</li>
         </Link>
       </ul>
       
     </div>
    </header>
  )
}
