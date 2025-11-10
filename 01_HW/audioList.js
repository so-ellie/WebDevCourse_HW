// Pause any other audio elements when one starts playing
document.addEventListener(
  "play",
  function (e) {
    if (e.target.tagName.toLowerCase() !== "audio") return;
    const players = document.querySelectorAll("audio");
    players.forEach((a) => {
      if (a !== e.target) a.pause();
    });
  },
  true
);
