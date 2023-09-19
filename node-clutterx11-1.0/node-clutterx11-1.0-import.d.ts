
import ClutterX1110 from '@girs/node-clutterx11-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ClutterX11', ver?: '1.0'): typeof ClutterX1110;
    }
}

export default NodeGtkGi;

