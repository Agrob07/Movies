import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../redux/store"
import { getMovies } from "../../lib/helpers/getMovies"
import { IMovieItem } from "../../types/movies"

export interface MoviesState {
  featured: Partial<IMovieItem>
  trending: IMovieItem[]
  status: string
}

const initialState: MoviesState = {
  featured: {
    Id: "-1",
    Title: "no featured movies yet",
  },
  trending: [],
  status: "idle",
}

export const getMoviesAsync = createAsyncThunk(
  "movies/fetchMovies",
  async () => {
    const data = await getMovies()
    return data
  },
)

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setFeatured: (state, action) => {
      state.featured = action.payload
    },
    reorderTrending: (state, action) => {
      state.trending = [
        action.payload,
        ...state.trending.filter((movie) => movie.Id !== action.payload.Id),
      ]
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.featured = action.payload.Featured
        state.trending = action.payload.TendingNow
        state.status = "idle"
      })
      .addCase(getMoviesAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const { setFeatured, reorderTrending } = moviesSlice.actions

export const selectFeatured = (state: RootState) => state.movies.featured
export const selectTrending = (state: RootState) => state.movies.trending

export default moviesSlice.reducer
