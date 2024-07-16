
declare module 'gi://Shell?version=0.1' {
    import Shell from './shell-0.1.d.ts';
    export default Shell;
}

declare module 'gi://Shell' {
    import Shell01 from 'gi://Shell?version=0.1';
    export default Shell01;
}


