declare module 'gi://GPasteGtk?version=3' {
    import GPasteGtk3 from '@girs/gpastegtk-3';
    export default GPasteGtk3;
}

declare module 'gi://GPasteGtk' {
    import GPasteGtk3 from 'gi://GPasteGtk?version=3';
    export default GPasteGtk3;
}
