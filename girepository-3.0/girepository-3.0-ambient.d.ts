
declare module 'gi://GIRepository?version=3.0' {
    import GIRepository from './girepository-3.0.d.ts';
    export default GIRepository;
}

declare module 'gi://GIRepository' {
    import GIRepository30 from 'gi://GIRepository?version=3.0';
    export default GIRepository30;
}


