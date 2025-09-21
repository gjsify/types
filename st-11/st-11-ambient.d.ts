declare module 'gi://St?version=11' {
    import St11 from '@girs/st-11';
    export default St11;
}

declare module 'gi://St' {
    import St11 from 'gi://St?version=11';
    export default St11;
}
