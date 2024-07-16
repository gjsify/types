
declare module 'gi://Adw?version=1' {
    import Adw from './adw-1.d.ts';
    export default Adw;
}

declare module 'gi://Adw' {
    import Adw1 from 'gi://Adw?version=1';
    export default Adw1;
}


