
import Freetype220 from '@girs/node-freetype2-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'freetype2', ver?: '2.0'): typeof Freetype220;
    }
}

export default NodeGtkGi;

