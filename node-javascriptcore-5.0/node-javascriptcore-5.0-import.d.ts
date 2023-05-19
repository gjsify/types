
import JavaScriptCore50 from '@girs/javascriptcore-5.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'JavaScriptCore', ver?: '5.0'): typeof JavaScriptCore50;
    }
}

export default NodeGtkGi;

