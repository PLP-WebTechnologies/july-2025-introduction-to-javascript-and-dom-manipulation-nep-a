const box = document.getElementById("box");
    const title = document.getElementById("title");

    document.getElementById("colorBtn").addEventListener("click", () => {
      box.style.background = box.style.background === "lightblue" ? "lightgray" : "lightblue";
    });

    document.getElementById("textBtn").addEventListener("click", () => {
      box.textContent = box.textContent === "You clicked me!" ? "Click a Button" : "You clicked me!";
      title.textContent = "DOM Updated!";
    });
