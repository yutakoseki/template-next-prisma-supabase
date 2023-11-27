import React from 'react';
import { useSession, signIn } from 'next-auth/react';
import Logout from './Logout';

export default function Login() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status !== 'authenticated') {
        return (
            <div>
                <p>あなたはログインしていません</p>
                <div>
                    <button onClick={() => signIn('google', {}, { prompt: 'login' })}>
                        Googleでログイン
                    </button>
                </div>
                <div>
                    <button onClick={() => signIn('github', {}, { prompt: 'login' })}>
                        Githubでログイン
                    </button>
                </div>
                <div>
                    <button onClick={() => signIn('Sign in', {}, { prompt: 'login' })}>
                        メールアドレスでログイン
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div>ログイン中です</div>
                <div>
                    <Logout />
                </div>
            </>
        );
    }
}
