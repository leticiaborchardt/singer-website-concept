import { Image } from "./image.model";

export interface Artist {
    id: string,
    name: string,
    type: string,
    genres: string[],
    images: Image[],
    popularity: number
}