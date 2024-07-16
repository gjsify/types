
declare module 'gi://GIRepository?version=2.0' {
    import GIRepository from './girepository-2.0.d.ts';
    export default GIRepository;
}

declare module 'gi://GIRepository' {
    import GIRepository20 from 'gi://GIRepository?version=2.0';
    export default GIRepository20;
}


