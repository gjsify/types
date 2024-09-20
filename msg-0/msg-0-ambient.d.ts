declare module 'gi://Msg?version=0' {
    import Msg0 from '@girs/msg-0';
    export default Msg0;
}

declare module 'gi://Msg' {
    import Msg0 from 'gi://Msg?version=0';
    export default Msg0;
}
