import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch services data
export const fetchServices = createAsyncThunk('services/fetchServices', async () => {
  const response = await axios.get('http://localhost:8000/api/get-services');
  return response.data;
});

const servicesSlice = createSlice({
  name: 'services',
  initialState: { services: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched services to the array
        console.log(action.payload.services)
          const hm=action.payload.services.map((e,i)=>{
              return{
                id: e.id,
                title: e.title,
                slug: e.slug,
                smallDescription: e.smallDescription,
                image: 'http://127.0.0.1:8000/storage/'+e.image,
                icon:'http://127.0.0.1:8000/storage/'+e.icon,
                bigDescription: e.bigDescription,
                // list:e.list.split(','),
                list:['array','test'],
                date:new Date(e.created_at).toLocaleDateString('en-US') 
              }
            })
        // state.services = state.services.concat(action.payload);
        state.services = hm;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default servicesSlice.reducer;
