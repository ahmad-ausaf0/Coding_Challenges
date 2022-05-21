const Bill = 350;
if (Bill < 50) {
    console.log(`The Bill was ${Bill}, the tip was waived off for you! ✌ So, the total value was ${Bill} Only.`);
}
else {
    const tip = Bill >= 50 && Bill <= 300 ? Bill * 0.15 : Bill * 0.2;
    console.log(`The Bill was ${Bill}, the tip was ${tip} and the total value was ${Bill + tip} Only.`);
}
