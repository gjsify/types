
declare module 'gi://Shell?version=12' {
    import Shell from './shell-12.d.ts';
    export default Shell;
}

declare module 'gi://Shell' {
    import Shell12 from 'gi://Shell?version=12';
    export default Shell12;
}


