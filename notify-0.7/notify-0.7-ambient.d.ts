
declare module 'gi://Notify?version=0.7' {
    import Notify from './notify-0.7.d.ts';
    export default Notify;
}

declare module 'gi://Notify' {
    import Notify07 from 'gi://Notify?version=0.7';
    export default Notify07;
}


