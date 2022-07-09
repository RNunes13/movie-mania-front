import { IGenre } from "./Genres.interface";

export class Genres {
  genres: IGenre[];

  constructor(args: IGenre[] = []) {
    const genres = this.#createGenres(args)

    this.genres = genres
  }

  #createGenres(genres: IGenre[] = []) {
    return [].concat(genres as []).map(this.#createGenre)
  }

  #createGenre(genre: IGenre = {}) {
    return new Genre(genre)
  }
}

export class Genre implements IGenre {
  constructor(args: IGenre) {
    Object.assign(this, args)
  }
}
