
import EDataCal20 from '@girs/edatacal-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'EDataCal', ver?: '2.0'): typeof EDataCal20;
    }
}

export default NodeGtkGi;

