
import Sushi10 from '@girs/node-sushi-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Sushi', ver?: '1.0'): typeof Sushi10;
    }
}

export default NodeGtkGi;

