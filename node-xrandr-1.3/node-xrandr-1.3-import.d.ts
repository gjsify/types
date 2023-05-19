
import Xrandr13 from '@girs/xrandr-1.3';

declare global {
    interface NodeGtkGi {
        require(ns: 'xrandr', ver?: '1.3'): typeof Xrandr13;
    }
}

export default NodeGtkGi;

