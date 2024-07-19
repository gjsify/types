declare module 'gi://Flatpak?version=1.0' {
    import Flatpak10 from '@girs/flatpak-1.0';
    export default Flatpak10;
}

declare module 'gi://Flatpak' {
    import Flatpak10 from 'gi://Flatpak?version=1.0';
    export default Flatpak10;
}
