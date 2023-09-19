
import AppStreamBuilder10 from '@girs/node-appstreambuilder-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'AppStreamBuilder', ver?: '1.0'): typeof AppStreamBuilder10;
    }
}

export default NodeGtkGi;

