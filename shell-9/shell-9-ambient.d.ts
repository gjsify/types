declare module 'gi://Shell?version=9' {
    import Shell9 from '@girs/shell-9';
    export default Shell9;
}

declare module 'gi://Shell' {
    import Shell9 from 'gi://Shell?version=9';
    export default Shell9;
}
