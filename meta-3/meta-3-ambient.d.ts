declare module 'gi://Meta?version=3' {
    import Meta3 from '@girs/meta-3';
    export default Meta3;
}

declare module 'gi://Meta' {
    import Meta3 from 'gi://Meta?version=3';
    export default Meta3;
}
