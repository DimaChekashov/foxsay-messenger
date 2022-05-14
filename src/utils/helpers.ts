export const getDate = (seconds: number) => {
    return new Date(seconds * 1000) + "";
}