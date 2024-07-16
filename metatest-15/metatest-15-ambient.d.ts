
declare module 'gi://MetaTest?version=15' {
    import MetaTest from './metatest-15.d.ts';
    export default MetaTest;
}

declare module 'gi://MetaTest' {
    import MetaTest15 from 'gi://MetaTest?version=15';
    export default MetaTest15;
}


