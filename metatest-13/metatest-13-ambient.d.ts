
declare module 'gi://MetaTest?version=13' {
    import MetaTest from '@girs/metatest-13';
    export default MetaTest;
}

declare module 'gi://MetaTest' {
    import MetaTest13 from 'gi://MetaTest?version=13';
    export default MetaTest13;
}


