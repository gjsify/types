declare module 'gi://AppStream?version=1.0' {
    import AppStream10 from '@girs/appstream-1.0';
    export default AppStream10;
}

declare module 'gi://AppStream' {
    import AppStream10 from 'gi://AppStream?version=1.0';
    export default AppStream10;
}
