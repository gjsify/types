
import GstRtp10 from '@girs/gstrtp-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstRtp', ver?: '1.0'): typeof GstRtp10;
    }
}

export default NodeGtkGi;

