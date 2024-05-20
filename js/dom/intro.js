// let myB = document.createElement("p");
// myBText = document.createTextNode("this p is created with js ");
// myB.appendChild(myBText);
// document.body.appendChild(myB);
// let test = document.getElementById("test");
// test.innerHTML = "Changed by js ";
// const test2 = document.getElementsByTagName("p");
// console.log(test2.length);
// test2[0].innerHTML = "changed by js";

const body = document.body;
// body.append("hello world");
// body.append("hello world", "bye world");
// body.appendChild("hello world");
const div = document.createElement("div");
// div.innerHTML = "hello world";
div.innerText = "hi dania";
// div.textContent = "hi dania 2 ";
body.append(div);
