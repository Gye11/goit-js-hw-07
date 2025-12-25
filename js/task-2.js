const gallery = document.querySelector(".gallery");

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg",
    alt: "Orange and White Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg",
    alt: "Group of Horses Running",
  },
];

const markup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="360"></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
