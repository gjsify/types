
declare module 'gi://Nemo?version=3.0' {
    import Nemo from './nemo-3.0.d.ts';
    export default Nemo;
}

declare module 'gi://Nemo' {
    import Nemo30 from 'gi://Nemo?version=3.0';
    export default Nemo30;
}


