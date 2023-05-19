
import ICal30 from '@girs/ical-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ICal', ver?: '3.0'): typeof ICal30;
    }
}

export default NodeGtkGi;

