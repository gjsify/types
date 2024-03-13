
declare module 'gi://MetaTest?version=13' {
    import MetaTest13 from '@girs/metatest-13';
    export default MetaTest13;
}

declare module 'gi://MetaTest' {
    export * from 'gi://MetaTest?version=13';
}


