
declare module 'gi://St?version=1.0' {
    import St from './st-1.0.d.ts';
    export default St;
}

declare module 'gi://St' {
    import St10 from 'gi://St?version=1.0';
    export default St10;
}


