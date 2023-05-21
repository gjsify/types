
import ICalGLib30 from '@girs/node-icalglib-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ICalGLib', ver?: '3.0'): typeof ICalGLib30;
    }
}

export default NodeGtkGi;

