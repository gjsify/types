
declare module 'gi://MetaTest?version=17' {
    import MetaTest17 from '@girs/metatest-17';
    export default MetaTest17;
}

declare module 'gi://MetaTest' {
    import MetaTest17 from 'gi://MetaTest?version=17';
    export default MetaTest17;
}


