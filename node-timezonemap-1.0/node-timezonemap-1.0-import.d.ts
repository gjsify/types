
import TimezoneMap10 from '@girs/node-timezonemap-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'TimezoneMap', ver?: '1.0'): typeof TimezoneMap10;
    }
}

export default NodeGtkGi;

