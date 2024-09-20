declare module 'gi://Gimp?version=3.0' {
    import Gimp30 from '@girs/gimp-3.0';
    export default Gimp30;
}

declare module 'gi://Gimp' {
    import Gimp30 from 'gi://Gimp?version=3.0';
    export default Gimp30;
}
