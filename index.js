function clockRunner() {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("MyClockId").textContent = `${hours} : ${minutes} : ${seconds}`;
}
clockRunner();
setInterval(clockRunner, 1000);
