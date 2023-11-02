
import AppIndicator301 from '@girs/node-appindicator3-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'AppIndicator3', ver?: '0.1'): typeof AppIndicator301;
    }
}

export default NodeGtkGi;

