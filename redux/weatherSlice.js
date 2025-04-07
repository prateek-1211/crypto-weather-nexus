import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchWeatherAPI } from '../utils/api'

export const fetchWeather = createAsyncThunk('weather/fetch', async (city) => {
  const data = await fetchWeatherAPI(city)
  return { city, data }
})

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {},
  extraReducers: builder => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      const { city, data } = action.payload
      state[city] = data
    })
  }
})

export default weatherSlice.reducer
