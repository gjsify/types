declare module 'gi://InputPad?version=1.1' {
    import InputPad11 from '@girs/inputpad-1.1';
    export default InputPad11;
}

declare module 'gi://InputPad' {
    import InputPad11 from 'gi://InputPad?version=1.1';
    export default InputPad11;
}
