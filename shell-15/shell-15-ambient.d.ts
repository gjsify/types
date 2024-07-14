
declare module 'gi://Shell?version=15' {
    import Shell from '@girs/shell-15';
    export default Shell;
}

declare module 'gi://Shell' {
    import Shell15 from 'gi://Shell?version=15';
    export default Shell15;
}


