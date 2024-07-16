
declare module 'gi://AppStream?version=1.0' {
    import AppStream from './appstream-1.0.d.ts';
    export default AppStream;
}

declare module 'gi://AppStream' {
    import AppStream10 from 'gi://AppStream?version=1.0';
    export default AppStream10;
}


