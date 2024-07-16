
declare module 'gi://Rest?version=1.0' {
    import Rest from './rest-1.0.d.ts';
    export default Rest;
}

declare module 'gi://Rest' {
    import Rest10 from 'gi://Rest?version=1.0';
    export default Rest10;
}


