declare module 'gi://Meta?version=7' {
    import Meta7 from '@girs/meta-7';
    export default Meta7;
}

declare module 'gi://Meta' {
    import Meta7 from 'gi://Meta?version=7';
    export default Meta7;
}
