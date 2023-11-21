// プレイヤーごとの石の情報を管理する
export default function Stone(countPlayer1: number) {
    let stoneProbability: number = 0;

    // 90%
    if (countPlayer1 % 4 === 0) {
        stoneProbability = 90;
    }
    // 70%
    if ((countPlayer1 - 1) % 4 === 0) {
        stoneProbability = 70;
    }
    // 30%
    if ((countPlayer1 - 2) % 4 === 0) {
        stoneProbability = 30;
    }
    // 10%
    if ((countPlayer1 - 3) % 4 === 0) {
        stoneProbability = 10;
    }

    return stoneProbability;
}
