
import Mtk14 from '@girs/node-mtk-14';

declare global {
    interface NodeGtkGi {
        require(ns: 'Mtk', ver?: '14'): typeof Mtk14;
    }
}

export default NodeGtkGi;

