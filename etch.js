  let style = "classic";

  function classic() {
    style = "classic";
  }
  function szin() {
    style = "szin";
  }
  function rad() {
    style = "rad";
  }
  function torl() {
    const allDivs = document.querySelectorAll("#con div div");
    allDivs.forEach(function(div) {
      div.style.backgroundColor = "rgba(255, 255, 255, 0)";
    });
  }
  
function kicsi() {
  const container = document.getElementById("con");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < 100; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.style.display = "flex";
    rowDiv.style.alignItems = "center";
    for (let j = 0; j < 100; j++) {
      let newDiv = document.createElement("div");
      newDiv.style.border = "1.5px solid rgba(255, 255, 255, .1)";
      newDiv.style.width = (window.innerWidth * 0.005) + "px";
      newDiv.style.height = (window.innerWidth * 0.005) + "px";
      newDiv.addEventListener("mouseenter", function(e) {
        if (e.buttons === 1) {
        if (style === "classic") {
          newDiv.style.backgroundColor = "black";
        } else if (style === "rad") {
          newDiv.style.backgroundColor = "rgba(255, 255, 255, 0)";
        } else if (style === "szin") {
          const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
          newDiv.style.backgroundColor = rainbow[Math.floor(Math.random() * 7)];
        }
      }
    });
    rowDiv.appendChild(newDiv);
  }
  container.appendChild(rowDiv);
}

container.style.height = container.offsetWidth + "px";



window.addEventListener("resize", function() {
  const allDivs = document.querySelectorAll("#con div div");
  allDivs.forEach(function(div) {
    div.style.width = (window.innerWidth * 0.005) + "px";
    div.style.height = (window.innerWidth * 0.005) + "px";
  });
  container.style.height = container.offsetWidth + "px";
});
}
  
  
  function kozep() {
    const container = document.getElementById("con");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    for (let i = 0; i < 50; i++) {
      let rowDiv = document.createElement("div");
      rowDiv.style.display = "flex";
      rowDiv.style.alignItems = "center";
      for (let j = 0; j < 50; j++) {
        let newDiv = document.createElement("div");
        newDiv.style.border = "1.5px solid rgba(255, 255, 255, .1";
        newDiv.style.width = (window.innerWidth * 0.01) + "px";
        newDiv.style.height = (window.innerWidth * 0.01) + "px";
        newDiv.addEventListener("mouseenter", function(e) {
          if (e.buttons === 1) {
          if (style === "classic") {
            newDiv.style.backgroundColor = "black";
          } else if (style === "rad") {
            newDiv.style.backgroundColor = "rgba(255, 255, 255, 0)";
          } else if (style === "szin") {
            const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
            newDiv.style.backgroundColor = rainbow[Math.floor(Math.random() * 7)];
          }
        }
      });
        rowDiv.appendChild(newDiv);
      }
      container.appendChild(rowDiv);
    }
  
    container.style.height = container.offsetWidth + "px";
  
    window.addEventListener("resize", function() {
      const allDivs = document.querySelectorAll("#con div div");
      allDivs.forEach(function(div) {
        div.style.width = (window.innerWidth * 0.01) + "px";
        div.style.height = (window.innerWidth * 0.01) + "px";
      });
      container.style.height = container.offsetWidth + "px";
    });
  }

  function nagy() {
    const container = document.getElementById("con");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    for (let i = 0; i < 25; i++) {
      let rowDiv = document.createElement("div");
      rowDiv.style.display = "flex";
      rowDiv.style.alignItems = "center";
      for (let j = 0; j < 25; j++) {
        let newDiv = document.createElement("div");
        newDiv.style.border = "1.5px solid rgba(255, 255, 255, .1";
        newDiv.style.width = (window.innerWidth * 0.02) + "px";
        newDiv.style.height = (window.innerWidth * 0.02) + "px";
        newDiv.addEventListener("mouseenter", function(e) {
          if (e.buttons === 1) {
          if (style === "classic") {
            newDiv.style.backgroundColor = "black";
          } else if (style === "rad") {
            newDiv.style.backgroundColor = "rgba(255, 255, 255, 0)";
          } else if (style === "szin") {
            const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
            newDiv.style.backgroundColor = rainbow[Math.floor(Math.random() * 7)];
          }
        }
      });
        rowDiv.appendChild(newDiv);
      }
      container.appendChild(rowDiv);
    }
  
    container.style.height = container.offsetWidth + "px";
  
    window.addEventListener("resize", function() {
      const allDivs = document.querySelectorAll("#con div div");
      allDivs.forEach(function(div) {
        div.style.width = (window.innerWidth * 0.02) + "px";
        div.style.height = (window.innerWidth * 0.02) + "px";
      });
      container.style.height = container.offsetWidth + "px";
    });
  }