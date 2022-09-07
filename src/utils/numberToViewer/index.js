export const numberToViewer = (num) => {
    const result = Math.floor(num / 1000);
    if(result >= 1) return `${result.toFixed(1)} K`;
    return num.toString();
}