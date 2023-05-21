
import AppStreamGlib10 from '@girs/node-appstreamglib-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'AppStreamGlib', ver?: '1.0'): typeof AppStreamGlib10;
    }
}

export default NodeGtkGi;

