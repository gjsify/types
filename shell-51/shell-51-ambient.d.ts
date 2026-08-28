
declare module 'gi://Shell?version=51' {
    import Shell51 from '@girs/shell-51';
    export default Shell51;
}

declare module 'gi://Shell' {
    import Shell51 from 'gi://Shell?version=51';
    export default Shell51;
}


