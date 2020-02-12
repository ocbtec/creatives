import React, { Fragment } from "react";

const BubbleAnimation = () => {
  let stopBubbles = false;
  let colors = [
    "#5d5b6a",
    "#758184",
    "#cfb495",
    "#f5cdaa",
    "#fce2db",
    "#f1c6d3",
    "#e4a3d4",
    "#c295d8"
  ];

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let bubbleContainer = document.createElement("div");
  const bubbles = () => {
    let bubble = document.createElement("div");
    bubble.className = "bubble";
    bubbleContainer.appendChild(bubble);

    let bubbleSize = getRandomInt(5, 70);
    let randomFactor1 = getRandomInt(0, 5);
    let randomFactor2 = getRandomInt(0, 5);

    bubble.style.cssText = `width: ${bubbleSize +
      randomFactor1}px; height: ${bubbleSize +
      randomFactor2}px; position: absolute;
        top: ${getRandomInt(2, 100)}%;
        left: ${getRandomInt(2, 100)}%;
        background: -webkit-radial-gradient(70% 30%, white, ${
          colors[getRandomInt(0, 7)]
        }, #1c192f);
        border-radius: 50%;
        `;
    document.body.appendChild(bubbleContainer);
    animateBubbles(bubble);
  };

  const animateBubbles = bubble => {
    let time = 5000;
    bubble.animate(
      [
        {
          transform: `translate(${getRandomInt(-50, 50)}px, ${getRandomInt(
            -50,
            50
          )}px) scale(${getRandomInt(0.5, 2)})`,
          opacity: `0.8`
        },
        {
          transform: `translate(${getRandomInt(-50, 50)}px, ${getRandomInt(
            -50,
            50
          )}px) scale(${getRandomInt(0.5, 2)})`,
          opacity: `0`
        }
      ],
      {
        duration: time,
        fill: "forwards"
      }
    );

    let randomTime = getRandomInt(10, 300);
    setTimeout(() => {
      stopBubbles === false && bubbles();
    }, randomTime);
    setTimeout(() => {
      bubble.className = "bubble delete-bubble";
      bubbleDelete();
    }, time);
  };

  const bubbleDelete = () => {
    let bubbleArray = document.querySelectorAll(".delete-bubble");
    for (let i = 0; i < bubbleArray.length; i++) {
      bubbleArray[i].remove();
    }
  };

  const killBubbles = () => {
    stopBubbles = true;
    let bubbleArray = document.querySelectorAll(".bubble");
    for (let i = 0; i < bubbleArray.length; i++) {
      bubbleArray[i].remove();
    }
  };

  setTimeout(() => {
    bubbles();
  }, 5000);

  return <Fragment />;
};

export default BubbleAnimation;
