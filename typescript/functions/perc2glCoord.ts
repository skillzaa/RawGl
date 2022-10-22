import checkZeroToHundred from "./checkZeroToHundred.js";


export default function perc2glCoord(perc :number,check :boolean=false):number{
    if (check==true){
        checkZeroToHundred(perc);
    }
return ((2/100) * perc ) -1;
}