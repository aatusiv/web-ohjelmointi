const firstItem = document.createElement("li");
firstItem.textContent = "First item";

const secondItem = document.createElement("li");
secondItem.textContent = "Second item";

const thirdItem = document.createElement("li");
thirdItem.textContent = "Third item";

const target = document.querySelector("#target");
target.appendChild(firstItem);
target.appendChild(secondItem);
target.appendChild(thirdItem);

secondItem.classList.add("my-item");
