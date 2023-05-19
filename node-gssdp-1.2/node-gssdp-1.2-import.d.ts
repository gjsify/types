
import GSSDP12 from '@girs/gssdp-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'GSSDP', ver?: '1.2'): typeof GSSDP12;
    }
}

export default NodeGtkGi;

