
declare module 'gi://Shell?version=12' {
    import Shell from '@girs/shell-12';
    export default Shell;
}

declare module 'gi://Shell' {
    import Shell12 from 'gi://Shell?version=12';
    export default Shell12;
}


