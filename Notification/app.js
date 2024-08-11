document.addEventListener("DOMContentLoaded", () => {
  const notifyButton = document.getElementById("notifyButton");
  notifyButton.addEventListener("click", () => {
    showNotification("Hello!", {
      body: "This is a browser notification example.",
      icon: "icon.png",
    });
  });
});

function showNotification(title, options) {
  if (!("Notification" in window)) {
    console.error("This browser does not support notifications.");
    return;
  }

  if (Notification.permission === "granted") {
    new Notification(title, options);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(title, options);
      }
    });
  }
}
