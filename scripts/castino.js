 const popup = document.getElementById("popup");
  const toggleBtn = document.querySelector(".js-all-goods");
  const closeBtn = document.getElementById("closeBtn");

  toggleBtn.addEventListener("click", () => {
    popup.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  // Optional: close when clicking outside the content
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });