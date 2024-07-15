
declare module 'gi://Shell?version=14' {
    import Shell from '@girs/shell-14';
    export default Shell;
}

declare module 'gi://Shell' {
    import Shell14 from 'gi://Shell?version=14';
    export default Shell14;
}


