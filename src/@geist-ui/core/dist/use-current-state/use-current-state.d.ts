import { Dispatch, MutableRefObject, SetStateAction } from 'react';
export declare type CurrentStateType<S> = [S, Dispatch<SetStateAction<S>>, MutableRefObject<S>];
declare const useCurrentState: <S>(initialState: S | (() => S)) => CurrentStateType<S>;
export default useCurrentState;
