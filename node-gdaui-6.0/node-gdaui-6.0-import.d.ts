
import Gdaui60 from '@girs/gdaui-6.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gdaui', ver?: '6.0'): typeof Gdaui60;
    }
}

export default NodeGtkGi;

