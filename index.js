const timeFormatter = new Intl.DateTimeFormat("fa-IR", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZone: "Asia/Tehran"});
const dateFormatter = new Intl.DateTimeFormat("fa-IR", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Tehran"});
function dateAndTime() {
    const now = new Date();
    document.getElementById("time").textContent = timeFormatter.format(now);

    const dateParts = dateFormatter.formatToParts(now);
    const weekday = dateParts.find(x => x.type === "weekday").value;
    const day = dateParts.find(x => x.type === "day").value;
    const month = dateParts.find(x => x.type === "month").value;
    const year = dateParts.find(x => x.type === "year").value;
    document.getElementById("date").textContent = `${weekday} ${day} ${month} ${year}`;
}
dateAndTime();
setInterval(dateAndTime, 1000);
