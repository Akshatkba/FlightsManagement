function compareTime(t1, t2){
    let Datetime1 = new Date(t1);
    let Datetime2 = new Date(t2);
    return Datetime1.getTime() > Datetime2.getTime(); 
}

module.exports = {
    compareTime
}