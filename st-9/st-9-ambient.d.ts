declare module 'gi://St?version=9' {
    import St9 from '@girs/st-9';
    export default St9;
}

declare module 'gi://St' {
    import St9 from 'gi://St?version=9';
    export default St9;
}
