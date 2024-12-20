export const getDate = ()=>{
    const d:Date = new Date()
    return `${d.getHours()}:${d.getMinutes().toString().padStart(2,"0")}` 
}

export const DAYS = ["DIM","LUN","MAR","MER","JEU","VEN","SAM"]

export const dayToDDMM = (date:Date)=>{
    return `${date.getDate().toString().padStart(2,"0")}/ ${(date.getMonth()+1).toString().padStart(2,"0")}`
}