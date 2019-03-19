export { main_page, second_page, third_page };

const main_page = function() {
  const headline = document.createElement("h1");
  headline.textContent = "Headline";
  const main_image = document.createElement("img");
  main_image.src = "../dist/sunflowers.jpg";
  const body_text = document.createElement("p");
  body_text.textContent = `Magna cupidatat Lorem velit voluptate
   mollit aute amet pariatur aliqua velit ipsum. Enim cupidatat 
   minim non deserunt officia culpa aliquip sunt commodo irure 
   consectetur nostrud. Commodo magna tempor Lorem id aute sint 
   eu. Ad aliqua dolor amet aute excepteur. Commodo incididunt 
   proident laborum eu minim Lorem amet ad velit cillum ut tempor. 
   Minim velit duis dolor duis mollit dolor Lorem culpa occaecat in.
   Fugiat aliqua voluptate amet proident. Irure veniam aute id ex 
   cupidatat magna laboris consectetur mollit ullamco id. Ea 
   adipisicing minim sint duis sit. Occaecat voluptate irure sint 
   aute duis ad minim occaecat nulla proident officia dolore magna 
   reprehenderit. Duis dolore incididunt dolore adipisicing ullamco 
   ex velit elit.`;

  const content = document.getElementById("content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  content.appendChild(headline);
  content.appendChild(main_image);
  content.appendChild(body_text);
};

const second_page = function() {
  const headline = document.createElement("h1");
  headline.textContent = "Second Page";
  const main_image = document.createElement("img");
  main_image.src = "../dist/sunflowers.jpg";
  main_image.style.opacity = "0.5";
  const body_text = document.createElement("p");
  body_text.textContent = `Nothing much to see here...`;

  const content = document.getElementById("content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  content.appendChild(headline);
  content.appendChild(main_image);
  content.appendChild(body_text);
};

const third_page = function() {
  const headline = document.createElement("h1");
  headline.textContent = "Third Page";
  const main_image = document.createElement("img");
  main_image.src = "../dist/sunflowers.jpg";
  main_image.style.opacity = "0.1";
  const body_text = document.createElement("p");
  body_text.textContent = `Almost gone!`;

  const content = document.getElementById("content");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  content.appendChild(headline);
  content.appendChild(main_image);
  content.appendChild(body_text);
};
