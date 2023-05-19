
import Gdaui50 from '@girs/gdaui-5.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gdaui', ver?: '5.0'): typeof Gdaui50;
    }
}

export default NodeGtkGi;

