
declare module 'gi://Signon?version=2.0' {
    import Signon from './signon-2.0.d.ts';
    export default Signon;
}

declare module 'gi://Signon' {
    import Signon20 from 'gi://Signon?version=2.0';
    export default Signon20;
}


