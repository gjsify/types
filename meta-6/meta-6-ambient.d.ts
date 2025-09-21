declare module 'gi://Meta?version=6' {
    import Meta6 from '@girs/meta-6';
    export default Meta6;
}

declare module 'gi://Meta' {
    import Meta6 from 'gi://Meta?version=6';
    export default Meta6;
}
