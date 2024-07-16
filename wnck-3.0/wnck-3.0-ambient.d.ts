
declare module 'gi://Wnck?version=3.0' {
    import Wnck from './wnck-3.0.d.ts';
    export default Wnck;
}

declare module 'gi://Wnck' {
    import Wnck30 from 'gi://Wnck?version=3.0';
    export default Wnck30;
}


