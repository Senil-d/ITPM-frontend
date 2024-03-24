import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function SupplierHeader() {
  const { currentSupplier } = useSelector((state) => state.supplier);

  return (
    <header className='bg-gray-900'>
     <div className='justify-between flex items-center max-w-6xl mx-auto p-5'>

       {/* web site name */}
       <Link to='/landing-page'>
       <h1 className='font-bold text-sm sm:text-xl flex flex-wrap justify-start flex-1'>
         <span className='text-slate-100'>TRAVE</span>
         <span className='text-slate-700'>RSE</span>
       </h1>
       </Link>

       {/* Navigation bar */}
       <ul className='flex gap-6'> 
       <Link to='/supplier-profile'>
            {currentSupplier ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentSupplier.profilePic}
                alt='profile'
              />
            ) : (
              <li className=' text-white font-semibold hover:underline'> Sign in</li>
            )}
          </Link>
       </ul>
       
     </div>
    </header>
  )
}
