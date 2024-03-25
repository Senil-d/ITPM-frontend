import { useSelector } from 'react-redux';
import { useEffect, useRef, useState} from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase.jsx';
import { useDispatch } from 'react-redux';
import {updateSupplierStart, updateSupplierSuccess, updateSupplierFailure, deleteSupplierStart, deleteSupplierSuccess, deleteSupplierFailure} from '../redux/supplier/supplierSlice.js';
import AlertDialog from '../components/AlertDialog.jsx';


export default function SupplierProfile() {
  const fileRef = useRef(null);
  const dispatch = useDispatch();
  const { currentSupplier,loading, error } = useSelector((state) => state.supplier);
  const [file, setFile] = useState(undefined);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [filePerc, setFilePerc] = useState(0);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  //.............................
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  //..............................
  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePic: downloadURL })
        );
      }
    );
  };

  //..............................
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //..............................
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateSupplierStart());
      const res = await fetch(`/api/supplier/update/${currentSupplier._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateSupplierFailure(data.message));
        return;
      }

      dispatch(updateSupplierSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateSupplierFailure(error.message));
    }
  };

//.................................................
const handleOpenDialog = async () => {
  setDialogOpen(true);
};

const handleCloseDialog = () => {
  setDialogOpen(false);
};

const handleDeleteSupplier = async () => {
    try {
      dispatch(deleteSupplierStart());
      const res = await fetch(`/api/supplier/delete/${currentSupplier._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteSupplierFailure(data.message));
        return;
      }
      else{
        dispatch(deleteSupplierSuccess(data));
      }
    }catch (error) {
      dispatch(deleteSupplierFailure(error.message));
    
  }
};

//....................................................
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>
      Supplier Profile
    </h1>

    <form onSubmit={handleUpdate} className='flex flex-col gap-4'>
      <input
            onChange={(e) => setFile(e.target.files[0])}
            type='file'
            ref={fileRef}
            hidden
            accept='image/*'
      />
      <img
        onClick={() => fileRef.current.click()}
        src={formData.profilePic || currentSupplier.profilePic}
        alt='profile'
        className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
      />
       <p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700'>
              Error! (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className='text-green-700'>Image successfully uploaded!</span>
          ) : (
            ''
          )}
        </p>
      <input
        type='text'
        placeholder='name'
        defaultValue={currentSupplier.suppliername}
        id='suppliername'
        className='border p-3 rounded-lg'
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder='email'
        defaultValue={currentSupplier.email}
        id='email'
        className='border p-3 rounded-lg'
        onChange={handleChange}
      />
      <input
        type='password'
        placeholder='password'
        id='password'
        className='border p-3 rounded-lg'
        onChange={handleChange}
      />
      <button
        disabled={loading}
        className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
      >
        {loading ? 'Loading...' : 'Update'}
      </button>

    </form>

    <div className='flex justify-between mt-5'>

      <span
        onClick={handleOpenDialog}
        className='text-red-700 cursor-pointer'
      >
        Delete account
      </span>
      <AlertDialog
        open={dialogOpen}
        handleClose={handleCloseDialog}
        handleConfirm={handleDeleteSupplier}
        title="Confirm Delete"
        content="Are you sure you want to delete this supplier account?"
      />

      <span className='text-red-700 cursor-pointer'>
        Sign out
      </span>
    </div>

    <p className='text-red-700 mt-5'>{error ? error : ''}</p>
    <p className='text-green-700 mt-5'>
      {updateSuccess ? 'Supplier is updated successfully!' : ''}
    </p>
          
  </div>
);
}
