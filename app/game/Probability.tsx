// ひっくり変える確率を求める
export default function Probability(observer: number[]) {
    let probability: number = 0;
    let reversedStone: number[] = [];
    for (let i = 1; i <= 32; i++) {
        // 90%
        if ((i - 1) % 4 === 0) {
            probability = Math.random();
            if (probability > 0.9) {
                reversedStone.push(observer[i - 1]);
            }
            continue;
        }
        // 70%
        if ((i - 2) % 4 === 0) {
            probability = Math.random();
            if (probability > 0.7) {
                reversedStone.push(observer[i - 1]);
            }
            continue;
        }
        // 30%
        if ((i - 3) % 4 === 0) {
            probability = Math.random();
            if (probability > 0.3) {
                reversedStone.push(observer[i - 1]);
            }
            continue;
        }
        // 10%
        if ((i - 4) % 4 === 0) {
            probability = Math.random();
            if (probability > 0.1) {
                reversedStone.push(observer[i - 1]);
            }
            continue;
        }
    }
    return reversedStone;
}
