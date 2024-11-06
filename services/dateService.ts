export const getDate = ()=>{
    const d:Date = new Date()
    return `${d.getHours()}:${d.getMinutes().toString().padStart(2,"0")}` 
}