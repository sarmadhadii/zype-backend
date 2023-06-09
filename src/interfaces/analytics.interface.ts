export interface IAnalytics {
    played: number,
    letterConfidences: {
        [key: string]: {
            allowed: boolean,
            attemptedAmount: number,
            successfulAttempts: number
        }
    },
    scores: {
        date: Date,
        played: number,
        speed: number,
        letterConfidences: {
            [key: string]: {
                allowed: boolean,
                attemptedAmount: number,
                successfulAttempts: number
            }
        }
    }[]
}