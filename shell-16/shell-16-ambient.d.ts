declare module 'gi://Shell?version=16' {
    import Shell16 from '@girs/shell-16';
    export default Shell16;
}

declare module 'gi://Shell' {
    import Shell16 from 'gi://Shell?version=16';
    export default Shell16;
}
