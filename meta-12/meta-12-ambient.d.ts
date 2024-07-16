
declare module 'gi://Meta?version=12' {
    import Meta from './meta-12.d.ts';
    export default Meta;
}

declare module 'gi://Meta' {
    import Meta12 from 'gi://Meta?version=12';
    export default Meta12;
}


