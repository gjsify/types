declare module 'gi://Meta?version=10' {
    import Meta10 from '@girs/meta-10';
    export default Meta10;
}

declare module 'gi://Meta' {
    import Meta10 from 'gi://Meta?version=10';
    export default Meta10;
}
