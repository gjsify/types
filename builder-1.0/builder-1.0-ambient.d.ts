
declare module 'gi://Builder?version=1.0' {
    import Builder10 from '@girs/builder-1.0';
    export default Builder10;
}

declare module 'gi://Builder' {
    export * from 'gi://Builder?version=1.0';
}


