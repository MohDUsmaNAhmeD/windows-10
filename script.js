const apps = [
    {
      name: "Riot Client",
      icon: "https://cdn2.steamgriddb.com/file/sgdb-cdn/icon_thumb/ada216e157757c965a766aae6e21423a.png",
    },
    {
      name: "Vs Code",
      icon: "https://th.bing.com/th/id/R.0d84b8aa7707781792d65a7c4140aeac?rik=Yokffz4QVRfmEQ&pid=ImgRaw&r=0",
    },
    {
      name: "Chrome",
      icon: "https://th.bing.com/th/id/R.c66cd8c580afcc9722687222f4f362a3?rik=DfQAvl01uJ0DKA&pid=ImgRaw&r=0",
    },
    {
      name: "Access 2016",
      icon: "https://img.icons8.com/color/48/000000/microsoft-access-2019.png",
    },
    {
      name: "Android Studio",
      icon: "https://img.icons8.com/color/48/000000/android-studio--v3.png",
    },
    {
      name: "Calculator",
      icon: "https://img.icons8.com/color/48/000000/calculator--v1.png",
    },
    {
      name: "Calendar",
      icon: "https://img.icons8.com/color/48/000000/calendar--v1.png",
    },
    {
      name: "Camera",
      icon: "https://img.icons8.com/color/48/000000/camera--v1.png",
    },
    {
      name: "Excel 2016",
      icon: "https://img.icons8.com/color/48/000000/microsoft-excel-2019--v1.png",
    },
  ];

  function populateStartMenu() {
    const startMenuApps = document.getElementById("start-menu-apps");
    apps.forEach((app) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <img src="${app.icon}" alt="${app.name}">
                <span>${app.name}</span>
            `;
      li.onclick = () => openApp(app.name);
      startMenuApps.appendChild(li);
    });
  }

  function populateDesktop() {
    const desktopIcons = document.getElementById("desktop-icons");
    apps.slice(0, 4).forEach((app) => {
      const div = document.createElement("div");
      div.className = "desktop-icon";
      div.innerHTML = `
                <img src="${app.icon}" alt="${app.name}">
                <span>${app.name}</span>
            `;
      div.onclick = () => openApp(app.name);
      desktopIcons.appendChild(div);
    });
  }

  function openApp(appName) {
    document.getElementById("app-window").style.display = "block";
    document.getElementById("app-title").innerText = appName;
    document.getElementById(
      "app-content"
    ).innerHTML = `<h2>Welcome to ${appName}</h2><p>This is a placeholder for the ${appName} application.</p>`;
    toggleStartMenu(false);
  }

  function closeApp() {
    document.getElementById("app-window").style.display = "none";
  }

  function minimizeApp() {
    const appWindow = document.getElementById("app-window");
    appWindow.style.display = "none";
  }

  function maximizeApp() {
    const appWindow = document.getElementById("app-window");
    if (
      appWindow.style.width === "100%" &&
      appWindow.style.height === "100%"
    ) {
      appWindow.style.width = "800px";
      appWindow.style.height = "600px";
      appWindow.style.top = "50%";
      appWindow.style.left = "50%";
      appWindow.style.transform = "translate(-50%, -50%)";
    } else {
      appWindow.style.width = "100%";
      appWindow.style.height = "100%";
      appWindow.style.top = "0";
      appWindow.style.left = "0";
      appWindow.style.transform = "none";
    }
  }

  function toggleStartMenu(show) {
    const startMenu = document.getElementById("start-menu-panel");
    if (show === undefined) {
      startMenu.style.display =
        startMenu.style.display === "none" ? "block" : "none";
    } else {
      startMenu.style.display = show ? "block" : "none";
    }
  }

  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    document.getElementById(
      "current-time"
    ).innerText = `${hours}:${minutes} ${ampm}`;
  }

  function updateSystemIcons() {
    const wifiIcon = document.querySelector(".system-icons .wifi");
    const volumeIcon = document.querySelector(".system-icons .volume");
    const batteryIcon = document.querySelector(".system-icons .battery");

    // Update WiFi, Volume, and Battery icons as needed
    // (you can add the logic to update these icons based on the system's status)
    wifiIcon.title = "WiFi: Connected";
    volumeIcon.title = "Volume: 80%";
    batteryIcon.title = "Battery: 100%";
  }

  setInterval(updateTime, 1000);
  updateTime();
  populateStartMenu();
  populateDesktop();
  document.addEventListener("click", function (event) {
    const startMenu = document.getElementById("start-menu-panel");
    const startButton = document.querySelector(".start-menu img");
    if (!startMenu.contains(event.target) && event.target !== startButton) {
      toggleStartMenu(false);
    }
  });