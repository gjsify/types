
declare module 'gi://Meta?version=11' {
    import Meta from './meta-11.d.ts';
    export default Meta;
}

declare module 'gi://Meta' {
    import Meta11 from 'gi://Meta?version=11';
    export default Meta11;
}


