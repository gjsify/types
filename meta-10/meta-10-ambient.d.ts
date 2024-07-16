
declare module 'gi://Meta?version=10' {
    import Meta from './meta-10.d.ts';
    export default Meta;
}

declare module 'gi://Meta' {
    import Meta10 from 'gi://Meta?version=10';
    export default Meta10;
}


