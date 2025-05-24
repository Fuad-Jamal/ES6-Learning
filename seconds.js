function formatDuration(seconds) {
    if (seconds === 0) return "0 seconds";
    const units = [
        { name: "year", secs: 31536000 },
        { name: "day", secs: 86400 },
        { name: "hour", secs: 3600 },
        { name: "minute", secs: 60 },
        { name: "second", secs: 1 }
    ];
    let parts = [];
    for (let i = 0; i < units.length; i++) {
        let count = Math.floor(seconds / units[i].secs);
        if (count > 0) {
            seconds = seconds % units[i].secs;
            let label = units[i].name;
            if (count !== 1) label += "s";
            parts.push(count + " " + label);
        }
    }
    if (parts.length === 1) {
        return parts[0];
    } else {
        return parts.slice(0, -1).join(", ") + " and " + parts[parts.length - 1];
    }
}
console.log(formatDuration(2424244)); // "0 seconds"