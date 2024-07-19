declare module 'gi://Shell?version=12' {
    import Shell12 from '@girs/shell-12';
    export default Shell12;
}

declare module 'gi://Shell' {
    import Shell12 from 'gi://Shell?version=12';
    export default Shell12;
}
