export interface IMovieItem {
  Id: string
  Date: Date
  Title: string
  Category: string
  Duration: string
  MpaRating: string
  TitleImage: string
  Description: string
  ReleaseYear: string
  CoverImage?: string
  VideoUrl?: string
}

export interface IMovies {
  Featured: any
  TendingNow: IMovieItem[]
}
