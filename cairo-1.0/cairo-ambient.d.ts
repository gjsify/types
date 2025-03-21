declare module 'gi://cairo?version=1.0' {
    import cairo from 'cairo';
    export default cairo;
}

declare module 'gi://cairo' {
    import cairo from 'gi://cairo?version=1.0';
    export default cairo;
}
