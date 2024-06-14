"use strict";

let list = document.querySelectorAll(".list");

list.forEach((mov) => {
  mov.addEventListener("click", function (e) {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }

    mov.className = "list active";
  });
});

//Income Charts
const ctxOne = document.getElementById("myChartOne");

new Chart(ctxOne, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: "# of Votes",
        data: [20, 30, 100, 60, 50, 90, 40, 30, 10],
        backgroundColor: "transparent",
        borderColor: "#FFC15E",
        tension: 0.4,
      },
    ],
  },
  options: {
    Responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// Outcome Charts
const ctxTwo = document.getElementById("myChartTwo");
new Chart(ctxTwo, {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 70, 40, 100, 120, 90],
        backgroundColor: "transparent",
        borderColor: "#8158fc",
        tension: 0.4,
      },
    ],
  },
  options: {
    Responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// weekly chart js code

const ctxThree = document.getElementById("myChartThree");

var mychart = new Chart(ctxThree, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "# This Week",
        data: [48, 23, 45, 67, 78, 76],
        backgroundColor: "#8158fc",
        borderRadius: 20,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        borderWidth: 1,
      },
      {
        label: "# Last Week",
        data: [48, 23, 45, 67, 78, 76],
        backgroundColor: "#FFC15E",
        borderRadius: 20,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        borderWidth: 1,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

function toggleData(value) {
  const visibilityData = mychart.isDatasetVisible(value);
  if (visibilityData == true) {
    mychart.hide(value);
  }
  if (visibilityData == false) {
    mychart.show(value);
  }
}

// Fourth canvas
const ctxFour = document.getElementById("myChartFour");

new Chart(ctxFour, {
  type: "doughnut",
  data: {
    labels: ["Monthly", "Groceries", "Subscrbing", "Tax", "Other"],
    datasets: [
      {
        label: "percent",
        data: [26, 34, 10, 15, 15],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

// swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

//switch theme

let themeSwitcher = document.querySelector(".switch-theme");

themeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("darkThemeColors");

  themeSwitcher.querySelector("span:nth-child(1)").classList.toggle("active");
  themeSwitcher.querySelector("span:nth-child(2)").classList.toggle("active");
});
