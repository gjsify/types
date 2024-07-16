
declare module 'gi://St?version=15' {
    import St from './st-15.d.ts';
    export default St;
}

declare module 'gi://St' {
    import St15 from 'gi://St?version=15';
    export default St15;
}


