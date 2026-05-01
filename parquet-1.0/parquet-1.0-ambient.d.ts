
declare module 'gi://Parquet?version=1.0' {
    import Parquet10 from '@girs/parquet-1.0';
    export default Parquet10;
}

declare module 'gi://Parquet' {
    import Parquet10 from 'gi://Parquet?version=1.0';
    export default Parquet10;
}


