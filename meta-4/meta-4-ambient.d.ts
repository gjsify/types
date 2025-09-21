declare module 'gi://Meta?version=4' {
    import Meta4 from '@girs/meta-4';
    export default Meta4;
}

declare module 'gi://Meta' {
    import Meta4 from 'gi://Meta?version=4';
    export default Meta4;
}
