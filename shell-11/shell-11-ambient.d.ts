declare module 'gi://Shell?version=11' {
    import Shell11 from '@girs/shell-11';
    export default Shell11;
}

declare module 'gi://Shell' {
    import Shell11 from 'gi://Shell?version=11';
    export default Shell11;
}
