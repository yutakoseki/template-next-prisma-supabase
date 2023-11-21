export const winningPatterns: number[][] = [
    // 横一列
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6],
    [3, 4, 5, 6, 7],
    [4, 5, 6, 7, 8],
    [5, 6, 7, 8, 9],
    [6, 7, 8, 9, 10],
    [7, 8, 9, 10, 11],
    [8, 9, 10, 11, 12],
    [9, 10, 11, 12, 13],
    [10, 11, 12, 13, 14],
    [11, 12, 13, 14, 15],
    [12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21],
    [18, 19, 20, 21, 22],
    [19, 20, 21, 22, 23],
    [20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29],
    [26, 27, 28, 29, 30],
    [27, 28, 29, 30, 31],
    [28, 29, 30, 31, 32],
    [33, 34, 35, 36, 37],
    [34, 35, 36, 37, 38],
    [35, 36, 37, 38, 39],
    [36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45],
    [42, 43, 44, 45, 46],
    [43, 44, 45, 46, 47],
    [44, 45, 46, 47, 48],
    [49, 50, 51, 52, 53],
    [50, 51, 52, 53, 54],
    [51, 52, 53, 54, 55],
    [52, 53, 54, 55, 56],
    [57, 58, 59, 60, 61],
    [58, 59, 60, 61, 62],
    [59, 60, 61, 62, 63],
    [60, 61, 62, 63, 64],
    // 縦一列
    [1, 9, 17, 25, 33],
    [2, 10, 18, 26, 34],
    [3, 11, 19, 27, 35],
    [4, 12, 20, 28, 36],
    [5, 13, 21, 29, 37],
    [6, 14, 22, 30, 38],
    [7, 15, 23, 31, 39],
    [8, 16, 24, 32, 40],
    [9, 17, 25, 33, 41],
    [10, 18, 26, 34, 42],
    [11, 19, 27, 35, 43],
    [12, 20, 28, 36, 44],
    [13, 21, 29, 37, 45],
    [14, 22, 30, 38, 46],
    [15, 23, 31, 39, 47],
    [16, 24, 32, 40, 48],
    [17, 25, 33, 41, 49],
    [18, 26, 34, 42, 50],
    [19, 27, 35, 43, 51],
    [20, 28, 36, 44, 52],
    [21, 29, 37, 45, 53],
    [22, 30, 38, 46, 54],
    [23, 31, 39, 47, 55],
    [24, 32, 40, 48, 56],
    [25, 33, 41, 49, 57],
    [26, 34, 42, 50, 58],
    [27, 35, 43, 51, 59],
    [28, 36, 44, 52, 60],
    [29, 37, 45, 53, 61],
    [30, 38, 46, 54, 62],
    [31, 39, 47, 55, 63],
    [32, 40, 48, 56, 64],
    // 斜め
    [1, 10, 19, 28, 37],
    [2, 11, 20, 29, 38],
    [3, 12, 21, 30, 39],
    [4, 13, 22, 31, 40],
    [9, 18, 27, 36, 45],
    [10, 19, 28, 37, 46],
    [11, 20, 29, 38, 47],
    [12, 21, 30, 39, 48],
    [17, 26, 35, 44, 53],
    [18, 27, 36, 45, 54],
    [19, 28, 37, 46, 55],
    [20, 29, 38, 47, 56],
    [25, 34, 43, 52, 61],
    [26, 35, 44, 53, 62],
    [27, 36, 45, 54, 63],
    [28, 37, 46, 55, 64],
    // 逆斜め
    [5, 12, 19, 26, 33],
    [6, 13, 20, 27, 34],
    [7, 14, 21, 28, 35],
    [8, 15, 22, 29, 36],
    [9, 16, 23, 30, 37],
    [10, 17, 24, 31, 38],
    [11, 18, 25, 32, 39],
    [12, 19, 26, 33, 40],
    [13, 20, 27, 34, 41],
    [14, 21, 28, 35, 42],
    [15, 22, 29, 36, 43],
    [16, 23, 30, 37, 44],
    [17, 24, 31, 38, 45],
    [18, 25, 32, 39, 46],
    [19, 26, 33, 40, 47],
    [20, 27, 34, 41, 48],
    [21, 28, 35, 42, 49],
    [22, 29, 36, 43, 50],
    [23, 30, 37, 44, 51],
    [24, 31, 38, 45, 52],
    [25, 32, 39, 46, 53],
    [26, 33, 40, 47, 54],
    [27, 34, 41, 48, 55],
    [28, 35, 42, 49, 56],
    [29, 36, 43, 50, 57],
    [30, 37, 44, 51, 58],
    [31, 38, 45, 52, 59],
    [32, 39, 46, 53, 60],
    [33, 40, 47, 54, 61],
    [34, 41, 48, 55, 62],
    [35, 42, 49, 56, 63],
    [36, 43, 50, 57, 64],
];

export function checkWin(stoneArray: number[]): boolean {
    for (const pattern of winningPatterns) {
        if (isSubset(stoneArray, pattern)) {
            console.log('勝ちパターン: ', pattern);
            return true;
        }
    }
    console.log('勝敗はついていません');
    return false;
}

function isSubset(stone: number[], pattern: number[]): boolean {
    return pattern.every((element) => stone.includes(element));
}
