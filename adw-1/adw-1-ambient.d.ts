declare module 'gi://Adw?version=1' {
    import Adw1 from '@girs/adw-1';
    export default Adw1;
}

declare module 'gi://Adw' {
    import Adw1 from 'gi://Adw?version=1';
    export default Adw1;
}
