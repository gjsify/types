
declare module 'gi://ECal?version=2.0' {
    import ECal from '@girs/ecal-2.0';
    export default ECal;
}

declare module 'gi://ECal' {
    import ECal20 from 'gi://ECal?version=2.0';
    export default ECal20;
}


