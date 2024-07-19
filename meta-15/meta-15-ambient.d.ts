declare module 'gi://Meta?version=15' {
    import Meta15 from '@girs/meta-15';
    export default Meta15;
}

declare module 'gi://Meta' {
    import Meta15 from 'gi://Meta?version=15';
    export default Meta15;
}
