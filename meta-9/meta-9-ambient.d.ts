declare module 'gi://Meta?version=9' {
    import Meta9 from '@girs/meta-9';
    export default Meta9;
}

declare module 'gi://Meta' {
    import Meta9 from 'gi://Meta?version=9';
    export default Meta9;
}
