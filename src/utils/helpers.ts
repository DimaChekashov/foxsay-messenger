export const getDate = (seconds: number) => {
    return new Date(seconds * 1000).toLocaleString(
        "ru-RU",
        {
            month: "short",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric"
        }
    );
}