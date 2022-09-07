export const generateUIID = () => {
    return Array.from(Array(4),() => (Math.random()+1).toString(36).substring(5)).join('-')
}