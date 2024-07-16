
declare module 'gi://Parquet?version=1.0' {
    import Parquet from './parquet-1.0.d.ts';
    export default Parquet;
}

declare module 'gi://Parquet' {
    import Parquet10 from 'gi://Parquet?version=1.0';
    export default Parquet10;
}


