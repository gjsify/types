declare module 'gi://Arrow?version=1.0' {
    import Arrow10 from '@girs/arrow-1.0';
    export default Arrow10;
}

declare module 'gi://Arrow' {
    import Arrow10 from 'gi://Arrow?version=1.0';
    export default Arrow10;
}
