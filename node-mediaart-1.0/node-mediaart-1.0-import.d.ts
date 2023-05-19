
import MediaArt10 from '@girs/mediaart-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'MediaArt', ver?: '1.0'): typeof MediaArt10;
    }
}

export default NodeGtkGi;

