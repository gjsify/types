
declare module 'gi://NetworkManager?version=1.0' {
    import NetworkManager from '@girs/networkmanager-1.0';
    export default NetworkManager;
}

declare module 'gi://NetworkManager' {
    import NetworkManager10 from 'gi://NetworkManager?version=1.0';
    export default NetworkManager10;
}


