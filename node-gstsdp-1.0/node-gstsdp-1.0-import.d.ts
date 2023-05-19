
import GstSdp10 from '@girs/gstsdp-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstSdp', ver?: '1.0'): typeof GstSdp10;
    }
}

export default NodeGtkGi;

