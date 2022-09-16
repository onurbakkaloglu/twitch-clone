export const numberToViewer = (num) => {
    const result = num / 1000;
    if(result >= 1) return `${result.toFixed(1).replace(".",",")} B`;
    return num.toString();
}