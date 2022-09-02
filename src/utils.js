const generateUIID = () => {
    return Array.from(Array(4),() => (Math.random()+1).toString(36).substring(5)).join('-')
}

const numberToViever = (num) => {
    const result = Math.floor(num / 1000);
    if(result >= 1) return `${result.toFixed(1)} K`;
    return num.toString();
}

export {
    generateUIID,
    numberToViever
}