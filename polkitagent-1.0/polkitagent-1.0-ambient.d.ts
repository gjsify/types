declare module 'gi://PolkitAgent?version=1.0' {
    import PolkitAgent10 from '@girs/polkitagent-1.0';
    export default PolkitAgent10;
}

declare module 'gi://PolkitAgent' {
    import PolkitAgent10 from 'gi://PolkitAgent?version=1.0';
    export default PolkitAgent10;
}
