
declare module 'gi://St?version=13' {
    import St from './st-13.d.ts';
    export default St;
}

declare module 'gi://St' {
    import St13 from 'gi://St?version=13';
    export default St13;
}


