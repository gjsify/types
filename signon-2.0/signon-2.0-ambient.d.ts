declare module 'gi://Signon?version=2.0' {
    import Signon20 from '@girs/signon-2.0';
    export default Signon20;
}

declare module 'gi://Signon' {
    import Signon20 from 'gi://Signon?version=2.0';
    export default Signon20;
}
