
declare module 'gi://MetaTest?version=12' {
    import MetaTest from '@girs/metatest-12';
    export default MetaTest;
}

declare module 'gi://MetaTest' {
    import MetaTest12 from 'gi://MetaTest?version=12';
    export default MetaTest12;
}


