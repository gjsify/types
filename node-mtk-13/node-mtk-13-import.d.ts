
import Mtk13 from '@girs/node-mtk-13';

declare global {
    interface NodeGtkGi {
        require(ns: 'Mtk', ver?: '13'): typeof Mtk13;
    }
}

export default NodeGtkGi;

