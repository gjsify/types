declare module 'gi://Shell?version=14' {
    import Shell14 from '@girs/shell-14';
    export default Shell14;
}

declare module 'gi://Shell' {
    import Shell14 from 'gi://Shell?version=14';
    export default Shell14;
}
