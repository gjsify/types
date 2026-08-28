
declare module 'gi://MetaTest?version=51' {
    import MetaTest51 from '@girs/metatest-51';
    export default MetaTest51;
}

declare module 'gi://MetaTest' {
    import MetaTest51 from 'gi://MetaTest?version=51';
    export default MetaTest51;
}


