declare module 'gi://SugarGestures?version=1.0' {
    import SugarGestures10 from '@girs/sugargestures-1.0';
    export default SugarGestures10;
}

declare module 'gi://SugarGestures' {
    import SugarGestures10 from 'gi://SugarGestures?version=1.0';
    export default SugarGestures10;
}
