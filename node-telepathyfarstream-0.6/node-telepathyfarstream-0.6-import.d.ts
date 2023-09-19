
import TelepathyFarstream06 from '@girs/node-telepathyfarstream-0.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'TelepathyFarstream', ver?: '0.6'): typeof TelepathyFarstream06;
    }
}

export default NodeGtkGi;

