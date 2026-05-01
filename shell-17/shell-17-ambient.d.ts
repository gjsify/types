
declare module 'gi://Shell?version=17' {
    import Shell17 from '@girs/shell-17';
    export default Shell17;
}

declare module 'gi://Shell' {
    import Shell17 from 'gi://Shell?version=17';
    export default Shell17;
}


