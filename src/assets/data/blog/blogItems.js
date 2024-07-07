import thumb1 from "../../images/blog/blog-img.png";
import thumb2 from "../../images/blog/blog-img2.png";
import thumb3 from "../../images/blog/blog-img3.png";
import thumb4 from "../../images/blog/blog-img4.png";
import thumb5 from "../../images/blog/blog-img5.png";
import thumb6 from "../../images/blog/blog-img6.png";
import thumb7 from "../../images/blog/blog-img7.png";
import thumb8 from "../../images/blog/blog-img8.png";
import thumb9 from "../../images/blog/blog-img9.png";

import comic1 from "../../images/blog/suiduckz comic.png";
import comic2 from "../../images/blog/suiduckz comic ch2.png"; // Path to your second comic image
import comic3 from "../../images/blog/suiduckz comic ch3.png";
import comic4 from "../../images/blog/suiduckz comic ch4.png";
import comicsoon from "../../images/blog/soon.png";

const data = {
  posts: [
    {
      thumbnail: thumb1,
      author: "Le'canard",
      title: "Start The Journey#Vol 1",
      excerpt: "In a small town there lived six young Duckz Due to the boring life in the town, they agreed to embark on an adventure around Duckz Island.",
      chapters: [
        { title: "Chapter 1", date: "06/09/2024", comicImage: comic1 },
        { title: "Chapter 2", date: "06/16/2024", comicImage: comic2 },
        { title: "Chapter 3", date: "06/23/2024", comicImage: comic3 }, // New chapter
        { title: "Chapter 4", date: "06/30/2024", comicImage: comic4 },
      ],
    },
    {
      thumbnail: thumb2,
      author: "Le'canard",
      title: "Coming Soon",
      excerpt: "Coming Soon",
      chapters: [
        { title: "Chapter 1", date: "soon", comicImage: comicsoon },
      ],
    },
    {
      thumbnail: thumb3,
      author: "Le'canard",
      title: "Coming Soon",
      excerpt: "Coming Soon",
      chapters: [
        { title: "Chapter 1", date: "soon", comicImage: comicsoon },
      ],
    },
  ],
};

export default data;
