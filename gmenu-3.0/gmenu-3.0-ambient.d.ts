
declare module 'gi://GMenu?version=3.0' {
    import GMenu30 from '@girs/gmenu-3.0';
    export default GMenu30;
}

declare module 'gi://GMenu' {
    export * from 'gi://GMenu?version=3.0';
}


