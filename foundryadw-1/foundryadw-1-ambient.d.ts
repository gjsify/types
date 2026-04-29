declare module 'gi://FoundryAdw?version=1' {
    import FoundryAdw1 from '@girs/foundryadw-1';
    export default FoundryAdw1;
}

declare module 'gi://FoundryAdw' {
    import FoundryAdw1 from 'gi://FoundryAdw?version=1';
    export default FoundryAdw1;
}
