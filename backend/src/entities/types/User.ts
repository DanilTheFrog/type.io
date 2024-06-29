type UserLevelScore = {
    levelId: number;
    tiem: number;
    wpm: number;
    accuracy: number;
}

type UserData = {
    scores: {
        [key: string]: UserLevelScore
    }
}

type User = {
    id: bigint;
    email: string;
    passwordHash: string;
    data: any;
}

export default User;