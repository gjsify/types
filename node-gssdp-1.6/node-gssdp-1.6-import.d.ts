
import GSSDP16 from '@girs/gssdp-1.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'GSSDP', ver?: '1.6'): typeof GSSDP16;
    }
}

export default NodeGtkGi;

