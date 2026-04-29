declare module 'gi://Shell?version=18' {
    import Shell18 from '@girs/shell-18';
    export default Shell18;
}

declare module 'gi://Shell' {
    import Shell18 from 'gi://Shell?version=18';
    export default Shell18;
}
