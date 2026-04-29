declare module 'gi://AgsGui?version=8.0' {
    import AgsGui80 from '@girs/agsgui-8.0';
    export default AgsGui80;
}

declare module 'gi://AgsGui' {
    import AgsGui80 from 'gi://AgsGui?version=8.0';
    export default AgsGui80;
}
