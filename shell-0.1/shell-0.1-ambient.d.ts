declare module 'gi://Shell?version=0.1' {
    import Shell01 from '@girs/shell-0.1';
    export default Shell01;
}

declare module 'gi://Shell' {
    import Shell01 from 'gi://Shell?version=0.1';
    export default Shell01;
}
