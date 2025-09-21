declare module 'gi://St?version=10' {
    import St10 from '@girs/st-10';
    export default St10;
}

declare module 'gi://St' {
    import St10 from 'gi://St?version=10';
    export default St10;
}
