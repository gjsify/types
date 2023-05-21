
import JavaScriptCore41 from '@girs/node-javascriptcore-4.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'JavaScriptCore', ver?: '4.1'): typeof JavaScriptCore41;
    }
}

export default NodeGtkGi;

