const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    document.querySelector("header").style.backgroundColor = "black";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent"; // or any other default color
  }
});

function setImage(img) {
  hero.style.background = `linear-gradient(#00000071, #00000071), url('./img/${img}')`;
  hero.style.backgroundPosition = "center";
  hero.style.backgroundRepeat = "no-repeat";
  hero.style.backgroundSize = "cover";
}
function changeHeroImage() {
  let curIndex = Math.floor(Math.random() * images.length);
  setImage(images[curIndex]);
}

const menuList = document.querySelectorAll(".menu-list li a");
menuList.forEach((el) => {
  el.addEventListener("click", function () {
    handleActive(menuList);
    this.classList.add("active");
  });
});

document.querySelector(".gear i").onclick = function () {
  this.classList.toggle("spin");
  document.querySelector(".setting-box").classList.toggle("open-setting");
};

let bgIntervel;

function randomizeImgs() {
  let getImage = localStorage.getItem("images");
  if (getImage !== "false") {
    setImage(getImage);
    const yesOrNoBg = document.querySelectorAll(".option-bg span");
    yesOrNoBg[0].classList.remove("active");
    yesOrNoBg[1].classList.add("active");
  } else {
    bgIntervel = setInterval(changeHeroImage, 5000);
  }
}
randomizeImgs();

let mainColor = localStorage.getItem("color_option");
const colorList = document.querySelectorAll(".colors-list li");

if (mainColor) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  colorList.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.color === mainColor) li.classList.add("active");
  });
}

colorList.forEach((li) => {
  li.addEventListener("click", function (e) {
    localStorage.setItem("color_option", e.target.dataset.color);
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    handleActive(colorList);
    this.classList.add("active");
  });
});

const optionBg = document.querySelectorAll(".option-bg span");
let curIamge;

optionBg.forEach((el) => {
  el.addEventListener("click", function (e) {
    this.classList.add("active");
    optionBg.forEach((el) => {
      if (el != this) {
        el.classList.remove("active");
      }
    });
    if (e.target.dataset.background === "no") {
      localStorage.setItem("images", "1.jpg");
      clearInterval(bgIntervel);
    } else {
      localStorage.setItem("images", "false");
      randomizeImgs();
    }
  });
});

const imageList = document.querySelectorAll(".image-list li img");
imageList.forEach((img) => {
  img.addEventListener("click", function (e) {
    localStorage.setItem("images", e.target.dataset.images);
    setImage(e.target.dataset.images);
    clearInterval(bgIntervel);
    const yesOrNoBg = document.querySelectorAll(".option-bg span");
    yesOrNoBg[0].classList.remove("active");
    yesOrNoBg[1].classList.add("active");
  });
});

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  if (this.scrollY > 80) {
    document.querySelector("header").style.backgroundColor = "black";
  } else {
    document.querySelector("header").style.backgroundColor = "transparent"; // or any other default color
  }

  let skillsOffsetTop = ourSkills.offsetTop;
  let skillsOuterHeight = ourSkills.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  let allSkills = document.querySelectorAll(".skill-progress span");
  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  } else {
    allSkills.forEach((skill) => {
      skill.style.width = "0";
    });
  }
};

let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", function (e) {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    let popupImage = document.createElement("img");
    popupImage.src = this.src;
    if (img.alt !== null) {
      let heading = document.createElement("h3");
      let imgText = document.createTextNode(img.alt);
      heading.appendChild(imgText);
      popupBox.appendChild(heading);
    }
    popupBox.appendChild(popupImage);
    document.body.appendChild(popupBox);

    let closeSpan = document.createElement("span");

    closeSpan.innerHTML = "X";
    closeSpan.className = "closeSpan";
    popupBox.appendChild(closeSpan);
  });
});

document.addEventListener("click", function (e) {
  if (e.target.className === "closeSpan") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

const allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const yesOrNoBg = document.querySelectorAll(".show-bullets span");

yesOrNoBg.forEach((el) => {
  el.addEventListener("click", (e) => {
    handleActive(yesOrNoBg);
    // yesOrNoBg.forEach((el) => el.classList.remove("active"));
    el.classList.toggle("active");
    document.querySelector(".nav-bullets").classList.toggle("hidden");
  });
});

function handleActive(element) {
  element.forEach((el) => el.classList.remove("active"));
}

const toggleBtn = document.querySelector(".toggle-menu");
const links = document.querySelector(".menu-list");

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  links.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== links) {
    if (links.classList.contains("open")) {
      links.classList.remove("open");
      toggleBtn.classList.remove("menu-active");
    }
  }
});

links.onclick = function (e) {
  e.stopPropagation();
};

// window.onload = function () {
//   // changeHeroImage();

// };
