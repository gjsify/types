
import GSSDP10 from '@girs/gssdp-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GSSDP', ver?: '1.0'): typeof GSSDP10;
    }
}

export default NodeGtkGi;

