
import Parquet10 from '@girs/parquet-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Parquet', ver?: '1.0'): typeof Parquet10;
    }
}

export default NodeGtkGi;

