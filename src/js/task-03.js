const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const list = document.querySelector(".gallery");

let items = [];

images.map(({ url, alt }) => {
  // string template sreation
  const item = `<li><img src="${url}" alt="${alt}" /></li>`;

  // string templates into one array [items]
  items.push(item);
});

// get rid of commas
const ItemsInStr = items.join("");

// Insert to DOM
list.insertAdjacentHTML("beforeend", ItemsInStr);

// Add some styles
list.style.display = "flex";
list.style.listStyle = "none";
list.style.columnGap = "10px";

const imgs = document.querySelectorAll("img");
for (const img of imgs) {
  img.style.height = "20vh";
}
