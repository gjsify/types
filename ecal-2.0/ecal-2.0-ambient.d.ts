
declare module 'gi://ECal?version=2.0' {
    import ECal from './ecal-2.0.d.ts';
    export default ECal;
}

declare module 'gi://ECal' {
    import ECal20 from 'gi://ECal?version=2.0';
    export default ECal20;
}


