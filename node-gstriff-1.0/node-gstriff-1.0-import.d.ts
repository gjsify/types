
import GstRiff10 from '@girs/node-gstriff-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstRiff', ver?: '1.0'): typeof GstRiff10;
    }
}

export default NodeGtkGi;

