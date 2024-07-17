
declare module 'gi://AppStream?version=1.0' {
    const AppStream10: typeof import('./appstream-1.0.js').default
    export default AppStream10;
}

declare module 'gi://AppStream' {
    const AppStream10: typeof import('./appstream-1.0.js').default
    export default AppStream10;
}


