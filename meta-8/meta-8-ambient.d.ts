declare module 'gi://Meta?version=8' {
    import Meta8 from '@girs/meta-8';
    export default Meta8;
}

declare module 'gi://Meta' {
    import Meta8 from 'gi://Meta?version=8';
    export default Meta8;
}
