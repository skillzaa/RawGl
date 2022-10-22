import checkZeroToHundred from "./checkZeroToHundred.js";
export default function perc2glCoord(perc, check = false) {
    if (check == true) {
        checkZeroToHundred(perc);
    }
    return ((2 / 100) * perc) - 1;
}
