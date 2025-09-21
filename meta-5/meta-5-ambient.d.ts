declare module 'gi://Meta?version=5' {
    import Meta5 from '@girs/meta-5';
    export default Meta5;
}

declare module 'gi://Meta' {
    import Meta5 from 'gi://Meta?version=5';
    export default Meta5;
}
