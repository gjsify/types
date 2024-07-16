
declare module 'gi://Rest?version=0.7' {
    import Rest from './rest-0.7.d.ts';
    export default Rest;
}

declare module 'gi://Rest' {
    import Rest07 from 'gi://Rest?version=0.7';
    export default Rest07;
}


