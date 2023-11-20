'use client';
import { useState } from "react";
import Observation from "./Observation";

export default function Board() {
    const [count, setCount] = useState<number>(1);
    const [turn, setTurn] = useState<string>("Player1");
    const [boardValues, setBoardValues] = useState(Array(64).fill(null));
    const [player1, setPlayer1] = useState<number[]>([]);
    const [player2, setPlayer2] = useState<number[]>([]);

    // 石打
    const handleClickEvent = (index: number) => {
        // カウントアップ
        setCount((prevCount) => prevCount + 1);

        const newBoardValues = [...boardValues];
        newBoardValues[index] = 1;
        setBoardValues(newBoardValues);

        // カウントが奇数回目か偶数回目かで分ける
        if (count % 2 === 0) {
            // 偶数回目
            if (!player2.includes(index + 1)) {
                setPlayer2((prevPlayer2) => [...prevPlayer2, index + 1]);
                setTurn("Player1");
            }
        } else {
            // 奇数回目
            if (!player1.includes(index + 1)) {
                setPlayer1((prevPlayer1) => [...prevPlayer1, index + 1]);
                setTurn("Player2");
            }
        }
    }

    // 観測
    const handleObservation = (turn: string) => {
        Observation({turn, player1, player2});
    }

    console.log('player1', player1);
    console.log('player2', player2);

    return (
        <>
            <div>{turn}</div>
            <div>{count}手目</div>
            <div className="bord text-center">
                {[...Array(8)].map((_, rowIndex) => (
                    <div className="board-row" key={rowIndex}>
                        {[...Array(8)].map((_, colIndex) => {
                            const index = rowIndex * 8 + colIndex;
                            const buttonValue = index + 1;

                            // 条件に基づいてクラスを組み合わせる
                            const buttonClass = `square w-20 h-20 border rounded-full ${
                                player1.includes(buttonValue) ? 'bg-red-500 text-white' : ''
                            } ${player2.includes(buttonValue) ? 'bg-blue-500 text-white' : ''}`;

                            return (
                                <button
                                    key={colIndex}
                                    className={buttonClass}
                                    value={buttonValue}
                                    onClick={() => handleClickEvent(index)}
                                >
                                    {buttonValue}
                                </button>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div><button value="observation" onClick={() => handleObservation(turn)}>観測</button></div>
        </>
    );
}
