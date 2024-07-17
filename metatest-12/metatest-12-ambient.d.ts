
declare module 'gi://MetaTest?version=12' {
    import MetaTest12 from '@girs/metatest-12';
    export default MetaTest12;
}

declare module 'gi://MetaTest' {
    import MetaTest12 from 'gi://MetaTest?version=12';
    export default MetaTest12;
}


