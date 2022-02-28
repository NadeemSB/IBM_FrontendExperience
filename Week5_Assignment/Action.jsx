export const addEntry=(entry)=>{
    return {
    type: "Add_Entry",
    entry:entry
    }
}
export const deleteEntry=(id)=>{
    return{
    type: "Delete_Entry",
    id:id
    }
}