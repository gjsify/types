
declare module 'gi://GIRepository?version=3.0' {
    import GIRepository30 from '@girs/girepository-3.0';
    export default GIRepository30;
}

declare module 'gi://GIRepository' {
    import GIRepository30 from 'gi://GIRepository?version=3.0';
    export default GIRepository30;
}


