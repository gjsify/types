
declare module 'gi://Bump?version=0.1' {
    import Bump from '@girs/bump-0.1';
    export default Bump;
}

declare module 'gi://Bump' {
    import Bump01 from 'gi://Bump?version=0.1';
    export default Bump01;
}


