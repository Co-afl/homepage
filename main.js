//スワイパーの初期化
const mainSwiper = new Swiper(".main-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//スワイパーの初期化
const newsSwiper = new Swiper(".news-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

newsSwiper.on("slideChangeTransitionEnd", function () {
  const activeSlideIndex = newsSwiper.realIndex; // Get the index of the active slide

  // Show or hide news elements based on the active slide index
  const news1 = document.querySelector(".news1");
  const news2 = document.querySelector(".news2");
  const news3 = document.querySelector(".news3");

  // Hide all news elements
  news1.style.display = "none";
  news2.style.display = "none";
  news3.style.display = "none";

  // Show the appropriate news element based on the active slide index
  if (activeSlideIndex === 0) {
    news1.style.display = "block";
  } else if (activeSlideIndex === 1) {
    news2.style.display = "block";
  } else if (activeSlideIndex === 2) {
    news3.style.display = "block";
  }
});

//ハンバーガーメニュー
document.querySelector(".openbtn").addEventListener("click", function () {
  const overlay = document.getElementById("navOverlay");
  
  this.classList.toggle("active");
  overlay.classList.toggle("active");
});


//テキストタイピング
function TextTypingAnime() {
  const textTypingElements = document.querySelectorAll(".TextTyping");

  textTypingElements.forEach(function (element) {
    const elemPos = element.offsetTop - 50;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    let thisChild;

    if (scroll >= elemPos - windowHeight) {
      thisChild = element.children; // span要素を取得
      Array.from(thisChild).forEach(function (child, i) {
        const time = 100;
        // 時差で表示するためにdelayを指定し、時間後にfadeInで表示させる
        setTimeout(function () {
          child.style.display = "inline";
        }, time * i);
      });
    } else {
      thisChild = element.children;
      Array.from(thisChild).forEach(function (child) {
        child.style.display = "none"; // span要素を非表示にする
      });
    }
  });
}

// 画面をスクロールしたら動かしたい場合の記述
window.addEventListener("scroll", function () {
  TextTypingAnime(); // アニメーション用の関数を呼ぶ
});

// 画面が読み込まれたらすぐに動かしたい場合の記述
window.addEventListener("load", function () {
  const textTypingElements = document.querySelectorAll(".TextTyping");

  textTypingElements.forEach(function (element) {
    const text = element.innerHTML;
    let textbox = "";

    Array.from(text).forEach(function (t) {
      if (t !== " ") {
        textbox += "<span>" + t + "</span>";
      } else {
        textbox += t;
      }
    });

    element.innerHTML = textbox;
  });

  TextTypingAnime(); // アニメーション用の関数を呼ぶ
});

//main-contents-wrapperを下から表示
function showMainContents() {
  var mainContents = document.querySelector(".main-contents-wrapper");
  var elemPos = mainContents.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  var triggerPoint = windowHeight / 1.3;

  if (elemPos - triggerPoint <= 0) {
    mainContents.classList.add("show");
  }
}

window.addEventListener("scroll", showMainContents);
window.addEventListener("load", showMainContents);

//activities-titleを下から表示
function showActivities() {
  var mainContents = document.querySelector(".activities-title");
  var elemPos = mainContents.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;
  var triggerPoint = windowHeight / 1.5;

  if (elemPos - triggerPoint <= 0) {
    mainContents.classList.add("show");
  }
}

window.addEventListener("scroll", showActivities);
window.addEventListener("load", showActivities);
