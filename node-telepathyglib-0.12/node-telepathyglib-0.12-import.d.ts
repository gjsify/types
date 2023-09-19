
import TelepathyGLib012 from '@girs/node-telepathyglib-0.12';

declare global {
    interface NodeGtkGi {
        require(ns: 'TelepathyGLib', ver?: '0.12'): typeof TelepathyGLib012;
    }
}

export default NodeGtkGi;

