declare module 'gi://EDataCal?version=2.0' {
    import EDataCal20 from '@girs/edatacal-2.0';
    export default EDataCal20;
}

declare module 'gi://EDataCal' {
    import EDataCal20 from 'gi://EDataCal?version=2.0';
    export default EDataCal20;
}
