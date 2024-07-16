
declare module 'gi://GPaste?version=2' {
    import GPaste from './gpaste-2.d.ts';
    export default GPaste;
}

declare module 'gi://GPaste' {
    import GPaste2 from 'gi://GPaste?version=2';
    export default GPaste2;
}


