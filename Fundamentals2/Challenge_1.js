const calAvg = (s1, s2, s3) => (s1 + s2 + s3) / 3;

let scoreDolphins = calAvg(85, 54, 41);
let scoreKoalas = calAvg(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ! (${avgDolphins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win ! (${avgKoalas} vs. ${avgDolphins})`);
    }
    else {
        console.log(`No one wins !`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
