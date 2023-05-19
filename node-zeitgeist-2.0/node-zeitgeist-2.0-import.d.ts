
import Zeitgeist20 from '@girs/zeitgeist-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Zeitgeist', ver?: '2.0'): typeof Zeitgeist20;
    }
}

export default NodeGtkGi;

