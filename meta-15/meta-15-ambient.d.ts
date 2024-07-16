
declare module 'gi://Meta?version=15' {
    import Meta from './meta-15.d.ts';
    export default Meta;
}

declare module 'gi://Meta' {
    import Meta15 from 'gi://Meta?version=15';
    export default Meta15;
}


