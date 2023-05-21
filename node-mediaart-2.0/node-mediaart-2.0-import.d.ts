
import MediaArt20 from '@girs/node-mediaart-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'MediaArt', ver?: '2.0'): typeof MediaArt20;
    }
}

export default NodeGtkGi;

