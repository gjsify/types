declare module 'gi://FoundryGtk?version=1' {
    import FoundryGtk1 from '@girs/foundrygtk-1';
    export default FoundryGtk1;
}

declare module 'gi://FoundryGtk' {
    import FoundryGtk1 from 'gi://FoundryGtk?version=1';
    export default FoundryGtk1;
}
