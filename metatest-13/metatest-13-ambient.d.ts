
declare module 'gi://MetaTest?version=13' {
    import MetaTest from './metatest-13.d.ts';
    export default MetaTest;
}

declare module 'gi://MetaTest' {
    import MetaTest13 from 'gi://MetaTest?version=13';
    export default MetaTest13;
}


