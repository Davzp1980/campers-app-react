import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchTrucks = createAsyncThunk(
  'trucks/getAll',
  async function (
    { limit, page, transmission, AC, bathroom, kitchen, TV, form },
    thunkAPI
  ) {
    // console.log(TV);
    //?transmission=${transmission}&form=${form}&AC=${AC}&bathroom=${bathroom}&kitchen=${kitchen}&TV=${TV}
    try {
      const res = await axios.get('', {
        params: {
          limit,
          page,
          transmission,
          AC,
          bathroom,
          kitchen,
          TV,
          form,
        },
      });

      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
