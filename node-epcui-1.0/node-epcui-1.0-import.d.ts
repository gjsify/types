
import EpcUi10 from '@girs/node-epcui-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'EpcUi', ver?: '1.0'): typeof EpcUi10;
    }
}

export default NodeGtkGi;

