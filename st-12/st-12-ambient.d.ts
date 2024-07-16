
declare module 'gi://St?version=12' {
    import St from './st-12.d.ts';
    export default St;
}

declare module 'gi://St' {
    import St12 from 'gi://St?version=12';
    export default St12;
}


