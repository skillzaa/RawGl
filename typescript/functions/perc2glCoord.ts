import checkZeroToHundred from "./checkZeroToHundred.js";


export default function perc2glCoord(perc :number):number{
    checkZeroToHundred(perc);
return ((2/100) * perc ) -1;
}