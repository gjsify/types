
import Gitg10 from '@girs/gitg-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gitg', ver?: '1.0'): typeof Gitg10;
    }
}

export default NodeGtkGi;

