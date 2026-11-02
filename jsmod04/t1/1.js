"use strict";

const list = document.querySelector("#target")

list.innerHTML = `<li>First item</li>
<li>Second item</li>
<li>Third item</li>`

document.getElementsByTagName("li")[1].classList = "my-list"