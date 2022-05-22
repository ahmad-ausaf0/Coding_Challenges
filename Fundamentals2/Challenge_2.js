function calcTip(Bill) {
    return (Bill >= 50 && Bill <= 300 ? Bill * 0.15 : Bill * 0.2);
}

const bills = [350, 450, 200];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, total);