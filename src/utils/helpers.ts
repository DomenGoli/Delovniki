export function getDateFormat(date: Date) {
        return new Intl.DateTimeFormat("sl-SI", {
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "short"
        }).format(date);
    }