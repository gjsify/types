declare module 'gi://St?version=15' {
    import St15 from '@girs/st-15';
    export default St15;
}

declare module 'gi://St' {
    import St15 from 'gi://St?version=15';
    export default St15;
}
