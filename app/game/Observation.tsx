import { winningPatterns } from './WinningPattern';
import { checkWin } from './WinningPattern';

type ObservationProps = {
    turn: string;
    player1: number[];
    player2: number[];
};

export default function Observation({ turn, player1, player2 }: ObservationProps) {
    let isWin: boolean = false;
    let winner = '';

    let firstPlayerStone: number[] = [];
    let secondPlayerStone: number[] = [];
    if (turn === 'Player1') {
        firstPlayerStone = player1;
        secondPlayerStone = player2;
    } else {
        firstPlayerStone = player2;
        secondPlayerStone = player1;
        turn = 'Player2';
    }

    // 先攻の判定
    debugger;
    isWin = checkWin(firstPlayerStone);

    if (isWin) {
        return turn;
    }

    // 後攻の判定
    isWin = checkWin(secondPlayerStone);

    if (isWin) {
        return turn;
    }
}
