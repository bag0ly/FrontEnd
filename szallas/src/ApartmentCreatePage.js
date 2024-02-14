import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export function ApartmentCreatePage() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://nodejs.sulla.hu/data', {
        name: event.target.elements.name.value,
        hostname: event.target.elements.hostname.value,
        location: event.target.elements.location.value,
        price: event.target.elements.price.value,
        minimum_nights: event.target.elements.minimum_nights.value,
      }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });

      console.log('Success:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='p-5 content bg-whitesmoke text-center'>
      <form onSubmit={handleSubmit}>
        <div className='form-group row pb-3'>
          <label className='col-sm-3 col-form-label'> Name: </label>
          <div>
            <input type='text' name='name' className='form-control' required />
          </div>
        </div>
        <div className='form-group row pb-3'>
          <label className='col-sm-3 col-form-label'> Hostname: </label>
          <div>
            <input type='text' name='hostname' className='form-control' required />
          </div>
        </div>
        <div className='form-group row pb-3'>
          <label className='col-sm-3 col-form-label'> Location: </label>
          <div>
            <input type='text' name='location' className='form-control' required />
          </div>
        <div className='form-group row pb-3'>
          <label className='col-sm-3 col-form-label'> Price: </label>
          <div>
            <input type='number' name='price' className='form-control' required />
          </div>
        </div>
        </div>
        <div className='form-group row pb-3'>
          <label className='col-sm-3 col-form-label'> Minimum Nights: </label>
          <div>
            <input type='text' name='minimum_nights' className='form-control' required />
          </div>
        </div>
        <button type='submit' className='btn btn-success'>
          Küldés
        </button>
      </form>
    </div>
  );
}
