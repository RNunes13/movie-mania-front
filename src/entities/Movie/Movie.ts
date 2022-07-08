import { IMovie } from "./Movie.interface";

export class Movies {
  movies: IMovie[];

  constructor(args: IMovie[] = []) {
    const movies = this.#createMovies(args)

    this.movies = movies
  }

  #createMovies(movies: IMovie[] = []) {
    return [].concat(movies as []).map(this.#createMovie)
  }

  #createMovie(genre: IMovie = {}) {
    return new Movie(genre)
  }
}

export class Movie implements IMovie {
  constructor(args: IMovie) {
    Object.assign(this, args)
  }
}
