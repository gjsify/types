
import AppStream10 from '@girs/appstream-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'AppStream', ver?: '1.0'): typeof AppStream10;
    }
}

export default NodeGtkGi;

