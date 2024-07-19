declare module 'gi://AvahiCore?version=0.6' {
    import AvahiCore06 from '@girs/avahicore-0.6';
    export default AvahiCore06;
}

declare module 'gi://AvahiCore' {
    import AvahiCore06 from 'gi://AvahiCore?version=0.6';
    export default AvahiCore06;
}
