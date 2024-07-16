
declare module 'gi://Bump?version=0.1' {
    import Bump from './bump-0.1.d.ts';
    export default Bump;
}

declare module 'gi://Bump' {
    import Bump01 from 'gi://Bump?version=0.1';
    export default Bump01;
}


