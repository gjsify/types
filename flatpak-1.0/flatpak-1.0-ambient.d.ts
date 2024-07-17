
declare module 'gi://Flatpak?version=1.0' {
    const Flatpak10: typeof import('./flatpak-1.0.js').default
    export default Flatpak10;
}

declare module 'gi://Flatpak' {
    const Flatpak10: typeof import('./flatpak-1.0.js').default
    export default Flatpak10;
}


