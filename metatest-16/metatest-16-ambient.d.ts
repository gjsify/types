declare module 'gi://MetaTest?version=16' {
    import MetaTest16 from '@girs/metatest-16';
    export default MetaTest16;
}

declare module 'gi://MetaTest' {
    import MetaTest16 from 'gi://MetaTest?version=16';
    export default MetaTest16;
}
