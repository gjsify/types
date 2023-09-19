
import Gdm10 from '@girs/node-gdm-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gdm', ver?: '1.0'): typeof Gdm10;
    }
}

export default NodeGtkGi;

