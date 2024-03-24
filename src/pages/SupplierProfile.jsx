import { useSelector } from 'react-redux';

export default function SupplierProfile() {
  const { currentSupplier } = useSelector((state) => state.supplier);
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>Supplier Profile</h1>
    <form className='flex flex-col gap-4'>
      <img
        src={currentSupplier.profilePic}
        alt='profile'
        className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
      />
      <input
        type='text'
        placeholder='name'
        id='suppliername'
        className='border p-3 rounded-lg'
      />
      <input
        type='email'
        placeholder='email'
        id='email'
        className='border p-3 rounded-lg'
      />
      <input
        type='password'
        placeholder='password'
        id='password'
        className='border p-3 rounded-lg'
      />
      <button
        className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
      >
        Update profile
      </button>
    </form>
    <div className='flex justify-between mt-5'>
      <span
        className='text-red-700 cursor-pointer'
      >
        Delete account
      </span>
      <span className='text-red-700 cursor-pointer'>
        Sign out
      </span>
    </div>
          
  </div>
);
}
