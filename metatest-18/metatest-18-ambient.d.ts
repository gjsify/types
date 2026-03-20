declare module 'gi://MetaTest?version=18' {
    import MetaTest18 from '@girs/metatest-18';
    export default MetaTest18;
}

declare module 'gi://MetaTest' {
    import MetaTest18 from 'gi://MetaTest?version=18';
    export default MetaTest18;
}
