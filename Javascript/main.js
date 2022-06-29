"use strict";

const quoteId = document.querySelector(".quote_id span");
const quoteText = document.querySelector(".quote_q");
const quoteBtn = document.querySelector(".quote_dice");

async function randomAdvice() {
  quoteId.textContent = `loading..`;
  quoteText.textContent = `loading...`;

  const request = await fetch("https://api.adviceslip.com/advice");
  const response = await request.json();

  // wait for 2 seconds until the api cache is complete

  setTimeout(() => {
    quoteId.textContent = `#${response.slip.id}`;
    quoteText.textContent = response.slip.advice;
  }, 2000);
}

quoteBtn.addEventListener("click", randomAdvice);
