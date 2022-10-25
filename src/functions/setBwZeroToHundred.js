export default function setBwZeroToHundred(n) {
    if (n > 100) {
        n = 100;
    }
    else if (n < 0) {
        n = 0;
    }
    return n;
}
