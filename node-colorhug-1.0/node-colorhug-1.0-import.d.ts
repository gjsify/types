
import ColorHug10 from '@girs/colorhug-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ColorHug', ver?: '1.0'): typeof ColorHug10;
    }
}

export default NodeGtkGi;

