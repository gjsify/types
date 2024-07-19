declare module 'gi://Wnck?version=1.0' {
    import Wnck10 from '@girs/wnck-1.0';
    export default Wnck10;
}

declare module 'gi://Wnck' {
    import Wnck10 from 'gi://Wnck?version=1.0';
    export default Wnck10;
}
