import {GlobalState} from 'little-state-machine';

export const clearAction = (state: GlobalState, payload: object) => ({
    pizza: {
        size: '',
        border: '',
        taste: '',
        points: 0
    }
})