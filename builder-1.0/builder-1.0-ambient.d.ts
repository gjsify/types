
declare module 'gi://Builder?version=1.0' {
    import Builder from './builder-1.0.d.ts';
    export default Builder;
}

declare module 'gi://Builder' {
    import Builder10 from 'gi://Builder?version=1.0';
    export default Builder10;
}


