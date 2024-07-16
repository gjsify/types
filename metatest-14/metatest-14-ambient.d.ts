
declare module 'gi://MetaTest?version=14' {
    import MetaTest from './metatest-14.d.ts';
    export default MetaTest;
}

declare module 'gi://MetaTest' {
    import MetaTest14 from 'gi://MetaTest?version=14';
    export default MetaTest14;
}


