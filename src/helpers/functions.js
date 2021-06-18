// Transforma los checks seleccionados value "on" a boleano.
exports.castBooleanCheck = (str)=>{
    if(str === "on"){
        return true;
    } 
    return false;
}

