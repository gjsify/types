declare module 'gi://Mx?version=2.0' {
    import Mx20 from '@girs/mx-2.0';
    export default Mx20;
}

declare module 'gi://Mx' {
    import Mx20 from 'gi://Mx?version=2.0';
    export default Mx20;
}
