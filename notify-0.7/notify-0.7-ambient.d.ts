
declare module 'gi://Notify?version=0.7' {
    import Notify07 from '@girs/notify-0.7';
    export default Notify07;
}

declare module 'gi://Notify' {
    export * from 'gi://Notify?version=0.7';
}


