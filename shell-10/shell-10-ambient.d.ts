declare module 'gi://Shell?version=10' {
    import Shell10 from '@girs/shell-10';
    export default Shell10;
}

declare module 'gi://Shell' {
    import Shell10 from 'gi://Shell?version=10';
    export default Shell10;
}
