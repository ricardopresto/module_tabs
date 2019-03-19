import { main_page, second_page, third_page } from "./pages";

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

tab1.addEventListener("click", main_page);
tab2.addEventListener("click", second_page);
tab3.addEventListener("click", third_page);
