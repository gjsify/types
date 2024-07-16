
declare module 'gi://Graphene?version=1.0' {
    import Graphene from './graphene-1.0.d.ts';
    export default Graphene;
}

declare module 'gi://Graphene' {
    import Graphene10 from 'gi://Graphene?version=1.0';
    export default Graphene10;
}


