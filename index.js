// Vanilla JS implementation to run without React
document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");

  root.innerHTML = `
  <div class="App">
    <div class="background-hearts"></div>
    <div class="falling-hearts"></div>
    <div class="container">
      <div class="content">
        <h1 class="title">Happy Valentine's Day</h1>
        <button class="magic-button">💌 Click here my love💌</button>

        <div class="message-container" style="display:none;">
          <p class="message">To My Forever Valentine ❤️</p>
          <p class="message-sub">
           Dear Vichu ❤️,<br/><br/>
            Here is my promise for a lifetime — no matter what happens, I will always be there for you. From now on, it’s not “you” or “me,” it’s “us.” We will grow together, laugh together, chase our goals together, and make a beautiful journey together.<br/><br/>
            Words can’t explain how much I love you, but my actions always will. I wish we always understand each other — that’s our love language.<br/><br/>
            Ethuva irundhalum pathukalam.<br/><br/>
            I love you endlessly ❤️

          </p>
          <button class="magic-button again">Again with love💕</button>
        </div>
      </div>
    </div>
  </div>
  `;

  // Create background hearts
  const bgContainer = document.querySelector(".background-hearts");
  for (let i = 0; i < 15; i++) {
    const d = document.createElement("div");
    d.className = "heart-bg";
    d.style.left = `${i * 6.7}%`;
    d.style.opacity = `${0.1 + Math.random() * 0.2}`;
    d.style.animationDelay = `${i * 0.3}s`;
    d.textContent = "❤️";
    bgContainer.appendChild(d);
  }

  const fallingContainer = document.querySelector(".falling-hearts");
  const magicButton = document.querySelector(".magic-button");
  const againButton = document.querySelector(".magic-button.again");
  const messageContainer = document.querySelector(".message-container");

  function createFallingHearts(count = 20) {
    for (let i = 0; i < count; i++) {
      const h = document.createElement("div");
      h.className = "falling-heart";
      const left = Math.random() * 100;
      const delay = Math.random() * 0.5;
      h.style.left = `${left}%`;
      h.style.animationDelay = `${delay}s`;
      h.textContent = "❤️";
      fallingContainer.appendChild(h);
      h.addEventListener("animationend", () => h.remove());
    }
  }

  magicButton.addEventListener("click", () => {
    magicButton.style.display = "none";
    messageContainer.style.display = "block";
    createFallingHearts(20);
  });

  againButton.addEventListener("click", () => {
    magicButton.style.display = "";
    messageContainer.style.display = "none";
    // clear remaining falling hearts
    fallingContainer.innerHTML = "";
  });
});
