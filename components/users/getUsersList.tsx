// プレイヤーごとの石の情報を管理する
export default async function GetUsersList() {
    // APIのURL
    // const url = 'https://quantum-tic-tac-entangle.vercel.app/api/user';
    // local用
    const url = 'http://localhost:3000/api/user';

    // APIへリクエスト
    const res = await fetch(url, {
        cache: 'no-store',
    });
    // レスポンスボディを取り出す
    const data = await res.json();

    return data;
}
