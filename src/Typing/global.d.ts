import 'little-state-machine';

declare module 'little-state-machine' {
    interface GlobalState {
        pizza: {
            size: string;
            border: string;
            taste: string;
            points: number
        };
    }
}