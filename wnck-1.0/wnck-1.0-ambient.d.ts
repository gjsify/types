
declare module 'gi://Wnck?version=1.0' {
    import Wnck from './wnck-1.0.d.ts';
    export default Wnck;
}

declare module 'gi://Wnck' {
    import Wnck10 from 'gi://Wnck?version=1.0';
    export default Wnck10;
}


