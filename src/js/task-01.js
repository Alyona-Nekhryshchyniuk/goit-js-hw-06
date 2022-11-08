const catList = document.querySelectorAll(".item");
console.log(`Number of categories: ${catList.length}`);

const catArray = Array.from(catList);
for (const el of catArray) {
  console.log(`Category: ${el.querySelector("h2").textContent}`);
  console.log(`Elements: ${el.querySelectorAll("li").length}`);
}
