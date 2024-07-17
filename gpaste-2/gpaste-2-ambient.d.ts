
declare module 'gi://GPaste?version=2' {
    import GPaste2 from '@girs/gpaste-2';
    export default GPaste2;
}

declare module 'gi://GPaste' {
    import GPaste2 from 'gi://GPaste?version=2';
    export default GPaste2;
}


