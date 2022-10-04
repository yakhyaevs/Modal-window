"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const openModal = document.querySelectorAll(".show-modal");

// Function for open modal
const open = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function for close modal
const close = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Show Modal
for (let i = 0; i < openModal.length; i++)
  openModal[i].addEventListener("click", open);

// Hide Modal
closeModal.addEventListener("click", close);
overlay.addEventListener("click", close);
