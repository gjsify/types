declare module 'gi://MetaTest?version=14' {
    import MetaTest14 from '@girs/metatest-14';
    export default MetaTest14;
}

declare module 'gi://MetaTest' {
    import MetaTest14 from 'gi://MetaTest?version=14';
    export default MetaTest14;
}
