type ObservationProps = {
    turn: string;
    player1: number[];
    player2: number[];
};

export default function Observation({turn, player1, player2}: ObservationProps) {
    let winner = "";

        let checkWinner = '';
        let checkFirstPlayer: number[] = [];
        let checkSecondPlayer: number[] = [];
        if(turn === 'Player1'){
            checkFirstPlayer = player1;
        }else{
            checkSecondPlayer = player2;
        }

        // 先攻の判定

        // 横方向判定
        // 昇順に並んでいるかを判定する関数
        function isAscending(array: number[]): boolean {
            return array.every((num, index, arr) => index === 0 || num === arr[index - 1] + 1);
        }

        // 横方向判定
        for (let i = 0; i < 8; i++) {
            const rowStart = i * 8 + 1;
            const rowEnd = rowStart + 7;
            let horizonArray: number[] = [];
            debugger;

            // 条件に合致した値を取得
            horizonArray = checkFirstPlayer.flatMap((value, index) => (value >= rowStart && value <= rowEnd) ? checkFirstPlayer[index] : []);

            // 一列の中で5個以上の数字がある場合はそれが連続しているかを判定
            if (horizonArray.length >= 5 && isAscending(horizonArray)) {
                // 連続している数が5個以上含まれている
                winner = 'Player1';
                console.log('連続している数が5個以上含まれています。');
                return;
            }
        }



        // 縦方向判定
        // for (let i = 0; i < 8; i++) {
        //     for (let j = 0; j < 4; j++) {
        //         const colSlice = checkFirstPlayer.slice(i + j * 8, i + j * 8 + 5);
        //         if (colSlice.length === 5 && colSlice.every((num) => num >= i + 1 && num <= i + 56)) {
        //             checkWinner = 'Player1';
        //             winner = checkWinner;
        //             return ;
        //         }
        //     }
        // }

        // 斜め方向判定
        // 斜め方向判定
        const diagonal1 = [4, 13, 22, 31, 40];
        const diagonal2 = [5, 12, 19, 26, 33];
        const diagonal3 = [3, 12, 21, 30, 39, 48];
        const diagonal4 = [2, 11, 20, 29, 38, 47, 56];
        const diagonal5 = [1, 10, 19, 28, 37, 46, 55, 64];
        const diagonal6 = [9, 18, 27, 36, 45, 54, 63];
        const diagonal7 = [17, 26, 35, 44, 53, 62];
        const diagonal8 = [25, 34, 43, 52, 61];
        const diagonal9 = [5, 12, 19, 26, 33];
        const diagonal10 = [6,13,20,27,34,41];
        const diagonal11 = [7,14,21,28,35,42,49];
        const diagonal12 = [8,15,22,29,36,43,50,5];
        const diagonal13 = [16,23,30,37,44,51,58];
        const diagonal14 = [32,39,46,53,60];

        const diagonals = [diagonal1, diagonal2, diagonal3, diagonal4, diagonal5, diagonal6, diagonal7, diagonal8, diagonal9, diagonal10, diagonal11, diagonal12, diagonal13, diagonal14];

        // for (const diagonal of diagonals) {
        //     for (let i = 0; i < 4; i++) {
        //         const diagonalSlice = checkFirstPlayer.filter((num) => diagonal.includes(num));
        //         if (diagonalSlice.length === 5) {
        //             checkWinner = 'Player1';
        //             winner = checkWinner;
        //             return ;
        //         }
        //     }
        // }

        // 後攻の判定
                // 横方向判定
        // checkSecondPlayerの配列の配列の中に1～8以下の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に9～16以下の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に17～24以下の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に25～32以下の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に33～40以下の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に41〜48以下の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に49～56以下の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に57～64以下の数字が5個以上ある

        // 縦方向判定
        // checkSecondPlayerの配列の配列の中に1,9,17,25,33,41,49,57の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に2,10,18,26,34,42,50,58の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に3,11,19,27,35,43,51,59の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に4,12,20,28,36,44,52,60の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に5,13,21,29,37,45,53,61の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に6,14,22,30,38,46,54,62の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に7,15,23,31,39,47,55,63の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に8,16,24,32,40,48,56,64の数字が5個以上ある

        // 斜め方向判定
        // checkSecondPlayerの配列の配列の中に4,13,22,31,40の数字がすべてある → 勝利

        // checkSecondPlayerの配列の配列の中に3,12,21,30,39,48の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に2,11,20,29,38,47,56の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に1,10,19,28,37,46,55,64の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に9,18,27,36,45,54,63の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に17,26,35,44,53,62の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に25,34,43,52,61の数字がすべてある → 勝利

        // checkSecondPlayerの配列の配列の中に5,12,19,26,33の数字がすべてある → 勝利

        // checkSecondPlayerの配列の配列の中に6,13,20,27,34,41の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に7,14,21,28,35,42,49の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に8,15,22,29,36,43,50,57の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に16,23,30,37,44,51,58の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に24,31,38,45,52,59の数字が5個以上ある

        // checkSecondPlayerの配列の配列の中に32,39,46,53,60の数字がすべてある → 勝利

    return (
        <div>
            {winner && <div>Winner: {winner}</div>}
        </div>
    );
}
