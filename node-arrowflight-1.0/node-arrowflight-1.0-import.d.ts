
import ArrowFlight10 from '@girs/arrowflight-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ArrowFlight', ver?: '1.0'): typeof ArrowFlight10;
    }
}

export default NodeGtkGi;

