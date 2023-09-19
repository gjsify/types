
import Gdl3 from '@girs/node-gdl-3';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gdl', ver?: '3'): typeof Gdl3;
    }
}

export default NodeGtkGi;

