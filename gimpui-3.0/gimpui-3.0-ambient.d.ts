declare module 'gi://GimpUi?version=3.0' {
    import GimpUi30 from '@girs/gimpui-3.0';
    export default GimpUi30;
}

declare module 'gi://GimpUi' {
    import GimpUi30 from 'gi://GimpUi?version=3.0';
    export default GimpUi30;
}
