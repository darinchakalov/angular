// export class Article {
//   constructor(
//     public title: string,
//     public description: string,
//     public author: string,
//     public imageUrl: string
//   ) {}
// }

export class Article {
  title: string;
  description: string;
  author: string;
  imageUrl: string;

  constructor(
    title: string,
    description: string,
    author: string,
    imageUrl: string
  ) {
    this.title = title;
    this.description = description;
    this.author = author;
    this.imageUrl = imageUrl;
  }
}
