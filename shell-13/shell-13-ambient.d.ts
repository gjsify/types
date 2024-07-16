
declare module 'gi://Shell?version=13' {
    import Shell from './shell-13.d.ts';
    export default Shell;
}

declare module 'gi://Shell' {
    import Shell13 from 'gi://Shell?version=13';
    export default Shell13;
}


