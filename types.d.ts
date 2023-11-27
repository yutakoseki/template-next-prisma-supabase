export type User = {
    id: string;
    name: String?;
    email: string;
    password: string;
    emailVerified: DateTime?;
    image: String?;
    accounts: Account[];
    sessions: Session[];
};
