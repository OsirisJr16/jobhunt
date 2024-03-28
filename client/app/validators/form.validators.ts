const textValidators = (name : string)=> {
    return name.trim() !== ""
}
const numberValidators =(name :number) => {
    return name!==0 ;
}


const valid =  {textValidators ,numberValidators} ; 

export default valid ;