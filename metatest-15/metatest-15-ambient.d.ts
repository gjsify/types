
declare module 'gi://MetaTest?version=15' {
    import MetaTest15 from '@girs/metatest-15';
    export default MetaTest15;
}

declare module 'gi://MetaTest' {
    import MetaTest15 from 'gi://MetaTest?version=15';
    export default MetaTest15;
}


