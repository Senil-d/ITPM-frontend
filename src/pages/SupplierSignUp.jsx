import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';


export default function SupplierSignUp() {

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //........................................
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    );
  };
  
  //.........................................
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/sauth/signup', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

      const data = await res.json();
      console.log(data);
      if(data.success == false){
        setError(data.message);
        setLoading(false);
        return;
      }

      setLoading(false);
      setError(null);
      navigate('/supplier-signin');

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

        <input type='text' placeholder='Enter name' className='border p-3 rounded-lg' id= 'suppliername' onChange={handleChange}/>

        <input type='text' placeholder='Email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>

        <input type='text' placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...': 'Sign up'}
        </button>

      </form>

      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/supplier-signin"}>
          <span className='text-blue-700 hover:underline'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
