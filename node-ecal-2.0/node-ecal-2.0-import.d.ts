
import ECal20 from '@girs/ecal-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ECal', ver?: '2.0'): typeof ECal20;
    }
}

export default NodeGtkGi;

