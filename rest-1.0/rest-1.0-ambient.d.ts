declare module 'gi://Rest?version=1.0' {
    import Rest10 from '@girs/rest-1.0';
    export default Rest10;
}

declare module 'gi://Rest' {
    import Rest10 from 'gi://Rest?version=1.0';
    export default Rest10;
}
