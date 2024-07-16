
declare module 'gi://Polkit?version=1.0' {
    import Polkit from './polkit-1.0.d.ts';
    export default Polkit;
}

declare module 'gi://Polkit' {
    import Polkit10 from 'gi://Polkit?version=1.0';
    export default Polkit10;
}


