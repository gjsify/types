declare module 'gi://GIRepository?version=2.0' {
    import GIRepository20 from '@girs/girepository-2.0';
    export default GIRepository20;
}

declare module 'gi://GIRepository' {
    import GIRepository20 from 'gi://GIRepository?version=2.0';
    export default GIRepository20;
}
