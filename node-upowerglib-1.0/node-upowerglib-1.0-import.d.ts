
import UPowerGlib10 from '@girs/upowerglib-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'UPowerGlib', ver?: '1.0'): typeof UPowerGlib10;
    }
}

export default NodeGtkGi;

