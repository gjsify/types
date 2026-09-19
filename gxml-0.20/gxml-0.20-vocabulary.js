// The widget vocabulary of GXml-0.20 as runtime data.
//
// GENERATED — do not edit. Provenance: GXml-0.20 — dropped empty base(s): Gee.MapIterator Gee.Iterator Gee.BidirIterator Gee.ListIterator Gee.BidirListIterator — inlined base(s) their owner's vocabulary does not emit: Gee.MapEntry — prop(s) no TypeScript value satisfies: Gee.MapEntry.value
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GXml',
    version: '0.20',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Gee.MapIterator', 'Gee.Iterator', 'Gee.BidirIterator', 'Gee.ListIterator', 'Gee.BidirListIterator'],
    inlinedBases: ['Gee.MapEntry'],
    unsettableProps: ['Gee.MapEntry.value'],
    unresolvedProps: [],
    identifierPrefixes: ['GXml'],
    requiredVocabularies: ['@girs/gee-0.8/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GXmlBaseProperty: ['value'],
    GXmlCollection: ['element', 'items-type'],
    GXmlCssAttributeSelector: ['local-name', 'prefix'],
    GXmlCssElementSelector: ['local-name', 'prefix'],
    GXmlCssSelector: ['combiner', 'name', 'selector-type', 'value'],
    GXmlDateTime: ['format'],
    GXmlDomAttr: ['value'],
    GXmlDomCharacterData: ['data'],
    GXmlDomCustomEventInit: ['detail'],
    GXmlDomElement: ['class-name', 'id'],
    GXmlDomEventInit: ['bubbles', 'cancelable'],
    GXmlDomMutationObserverInit: ['attribute-filter', 'attribute-old-value', 'attributes', 'character-data', 'character-data-old-value', 'child-list', 'subtree'],
    GXmlDomNode: ['node-value', 'owner-document', 'text-content'],
    GXmlDomSettableTokenList: ['value'],
    GXmlDomTimeStamp: ['time'],
    GXmlDouble: ['decimals'],
    GXmlElement: ['parse-children', 'read-buffer', 'unparsed'],
    GXmlEnum: ['camel-case', 'enum-type', 'upper-case', 'use-nick'],
    GXmlHtmlDocument: ['html'],
    GXmlMap: ['attribute-key'],
    GXmlPairedMap: ['attribute-primary-key', 'attribute-secondary-key'],
    GXmlParser: ['backup', 'cancellable', 'indent'],
    GXmlProperty: ['value'],
    GXmlThreeMap: ['attribute-primary-key', 'attribute-secondary-key', 'attribute-third-key'],
    GXmlXCharacterData: ['str'],
    GXmlXDocument: ['backup', 'file', 'indent', 'ns-top', 'prefix-default-ns'],
    GXmlXElement: ['content'],
    GXmlXNode: ['value'],
    GXmlXProcessingInstruction: ['data'],
    GXmlXsdArrayString: ['simple-type', 'source'],
    GXmlXsdBaseAttribute: ['anotation'],
    GXmlXsdBaseContent: ['anotation'],
    GXmlXsdBaseType: ['anotation'],
    GXmlXsdComplexType: ['abstract', 'block', 'content-type', 'default-attributes-apply', 'final', 'mixed', 'name'],
    GXmlXsdElement: ['abstract', 'anotation', 'block', 'complex-type', 'default', 'final', 'fixed', 'form', 'max-occurs', 'min-occurs', 'name', 'nillable', 'object-type', 'ref', 'simple-type', 'substitution-group', 'target-namespace'],
    GXmlXsdExtension: ['base'],
    GXmlXsdSchema: ['complex-type-definitions', 'element-definitions', 'simple-type-definitions'],
    GXmlXsdSimpleType: ['annotation', 'final', 'list', 'name', 'restriction', 'union'],
    GXmlXsdTypeDefinition: ['annotation'],
    GXmlXsdTypeRestriction: ['base', 'enumerations', 'simple-type', 'white-spaces'],
    GXmlXsdTypeRestrictionDef: ['annotation'],
    GXmlXsdTypeRestrictionEnumeration: ['value'],
    GXmlXsdTypeRestrictionWhiteSpace: ['fixed', 'value'],
    GeeMapEntry: ['k-destroy-func', 'k-dup-func', 'k-type', 'v-destroy-func', 'v-dup-func', 'v-type', 'value'],
};

export const OWN_SIGNALS = {
    GXmlDomNodeIterator: ['accept-node'],
    GXmlDomTreeWalker: ['accept-node'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GXmlArrayList: ['GXmlArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlArrayString: ['GXmlArrayString', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlAttr: ['GXmlAttr', 'GXmlNode', 'GObject', 'GXmlDomAttr', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlBoolean: ['GXmlBoolean', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlCharacterData: ['GXmlCharacterData', 'GXmlNode', 'GObject', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomCharacterData', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlComment: ['GXmlComment', 'GXmlCharacterData', 'GXmlNode', 'GObject', 'GXmlDomComment', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomCharacterData', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlCssAttributeSelector: ['GXmlCssAttributeSelector', 'GXmlCssSelector', 'GObject'],
    GXmlCssElementSelector: ['GXmlCssElementSelector', 'GXmlCssSelector', 'GObject'],
    GXmlCssNotSelector: ['GXmlCssNotSelector', 'GXmlCssSelector', 'GObject'],
    GXmlCssSelector: ['GXmlCssSelector', 'GObject'],
    GXmlCssSelectorParser: ['GXmlCssSelectorParser', 'GObject'],
    GXmlCustomEvent: ['GXmlCustomEvent', 'GXmlEvent', 'GObject', 'GXmlDomEvent'],
    GXmlDate: ['GXmlDate', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlDateTime: ['GXmlDateTime', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlDocument: ['GXmlDocument', 'GXmlNode', 'GObject', 'GXmlDomParentNode', 'GXmlDomNonElementParentNode', 'GXmlDomDocument', 'GXmlDomXMLDocument', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlDocumentFragment: ['GXmlDocumentFragment', 'GXmlNode', 'GObject', 'GXmlDomParentNode', 'GXmlDomNonElementParentNode', 'GXmlDomDocumentFragment', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlDocumentType: ['GXmlDocumentType', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomDocumentType', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlDomCustomEventInit: ['GXmlDomCustomEventInit', 'GXmlDomEventInit', 'GObject'],
    GXmlDomElementList: ['GXmlDomElementList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomHTMLCollection', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlDomErrorName: ['GXmlDomErrorName', 'GObject'],
    GXmlDomEventInit: ['GXmlDomEventInit', 'GObject'],
    GXmlDomMutationObserverInit: ['GXmlDomMutationObserverInit', 'GObject'],
    GXmlDomNodeFilter: ['GXmlDomNodeFilter', 'GObject'],
    GXmlDomTimeStamp: ['GXmlDomTimeStamp', 'GObject'],
    GXmlDouble: ['GXmlDouble', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlElement: ['GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlElementAttributes: ['GXmlElementAttributes', 'GeeHashMap', 'GeeAbstractMap', 'GObject', 'GXmlDomNamedNodeMap', 'GeeTraversable', 'GeeIterable', 'GeeMap'],
    GXmlEnum: ['GXmlEnum', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlEnumeration: ['GXmlEnumeration'],
    GXmlEvent: ['GXmlEvent', 'GObject', 'GXmlDomEvent'],
    GXmlFloat: ['GXmlFloat', 'GXmlDouble', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlHTMLCollection: ['GXmlHTMLCollection', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomHTMLCollection', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlHashMap: ['GXmlHashMap', 'GXmlBaseCollection', 'GObject', 'GXmlMap', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlHashPairedMap: ['GXmlHashPairedMap', 'GXmlBaseCollection', 'GObject', 'GXmlPairedMap', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlHashThreeMap: ['GXmlHashThreeMap', 'GXmlBaseCollection', 'GObject', 'GXmlThreeMap', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlHtmlDocument: ['GXmlHtmlDocument', 'GXmlDocument', 'GXmlNode', 'GObject', 'GXmlDomParentNode', 'GXmlDomNonElementParentNode', 'GXmlDomDocument', 'GXmlDomXMLDocument', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlHtmlElement: ['GXmlHtmlElement', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlImplementation: ['GXmlImplementation', 'GObject', 'GXmlDomImplementation'],
    GXmlInt: ['GXmlInt', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlLXPathObject: ['GXmlLXPathObject', 'GObject', 'GXmlXPathObject'],
    GXmlNode: ['GXmlNode', 'GObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlNodeIterator: ['GXmlNodeIterator', 'GObject', 'GXmlDomNodeIterator'],
    GXmlNodeList: ['GXmlNodeList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomNodeList', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlProcessingInstruction: ['GXmlProcessingInstruction', 'GXmlCharacterData', 'GXmlNode', 'GObject', 'GXmlDomProcessingInstruction', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomCharacterData', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlRange: ['GXmlRange', 'GObject', 'GXmlDomRange'],
    GXmlSettableTokenList: ['GXmlSettableTokenList', 'GXmlTokenList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomSettableTokenList', 'GXmlDomTokenList', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlString: ['GXmlString', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlStringRef: ['GXmlStringRef', 'GObject', 'GXmlProperty'],
    GXmlText: ['GXmlText', 'GXmlCharacterData', 'GXmlNode', 'GObject', 'GXmlDomText', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomCharacterData', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlTokenList: ['GXmlTokenList', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomTokenList', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlTreeWalker: ['GXmlTreeWalker', 'GObject', 'GXmlDomTreeWalker'],
    GXmlXAttribute: ['GXmlXAttribute', 'GXmlXNode', 'GObject', 'GXmlDomAttr', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXCharacterData: ['GXmlXCharacterData', 'GXmlXNonDocumentChildNode', 'GXmlXChildNode', 'GXmlXNode', 'GObject', 'GXmlDomCharacterData', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXChildNode: ['GXmlXChildNode', 'GXmlXNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXComment: ['GXmlXComment', 'GXmlXCharacterData', 'GXmlXNonDocumentChildNode', 'GXmlXChildNode', 'GXmlXNode', 'GObject', 'GXmlDomComment', 'GXmlDomCharacterData', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXDocument: ['GXmlXDocument', 'GXmlXNode', 'GObject', 'GXmlDomParentNode', 'GXmlDomNonElementParentNode', 'GXmlDomDocument', 'GXmlDomXMLDocument', 'GXmlXPathContext', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXElement: ['GXmlXElement', 'GXmlXNonDocumentChildNode', 'GXmlXChildNode', 'GXmlXNode', 'GObject', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlXPathContext', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXHashMapAttr: ['GXmlXHashMapAttr', 'GeeAbstractMap', 'GObject', 'GXmlDomNamedNodeMap', 'GeeTraversable', 'GeeIterable', 'GeeMap'],
    GXmlXHashMapAttrEntry: ['GXmlXHashMapAttrEntry', 'GeeMapEntry', 'GObject'],
    GXmlXHashMapAttrIterator: ['GXmlXHashMapAttrIterator', 'GObject'],
    GXmlXHtmlDocument: ['GXmlXHtmlDocument', 'GXmlXDocument', 'GXmlXNode', 'GObject', 'GXmlDomHtmlDocument', 'GXmlDomParentNode', 'GXmlDomNonElementParentNode', 'GXmlDomDocument', 'GXmlDomXMLDocument', 'GXmlXPathContext', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXListChildren: ['GXmlXListChildren', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GXmlDomNodeList', 'GXmlDomHTMLCollection', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GXmlXListChildrenIterator: ['GXmlXListChildrenIterator', 'GObject', 'GeeTraversable'],
    GXmlXNonDocumentChildNode: ['GXmlXNonDocumentChildNode', 'GXmlXChildNode', 'GXmlXNode', 'GObject', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXParser: ['GXmlXParser', 'GObject', 'GXmlParser'],
    GXmlXProcessingInstruction: ['GXmlXProcessingInstruction', 'GXmlXCharacterData', 'GXmlXNonDocumentChildNode', 'GXmlXChildNode', 'GXmlXNode', 'GObject', 'GXmlDomProcessingInstruction', 'GXmlDomCharacterData', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXText: ['GXmlXText', 'GXmlXCharacterData', 'GXmlXNonDocumentChildNode', 'GXmlXChildNode', 'GXmlXNode', 'GObject', 'GXmlDomText', 'GXmlDomCharacterData', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomChildNode', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdAnnotation: ['GXmlXsdAnnotation', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdArrayString: ['GXmlXsdArrayString', 'GXmlArrayString', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlXsdAttribute: ['GXmlXsdAttribute', 'GXmlXsdBaseAttribute', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdAttributeGroup: ['GXmlXsdAttributeGroup', 'GXmlXsdBaseAttribute', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdBaseAttribute: ['GXmlXsdBaseAttribute', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdBaseContent: ['GXmlXsdBaseContent', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdBaseType: ['GXmlXsdBaseType', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdComplexContent: ['GXmlXsdComplexContent', 'GXmlXsdBaseContent', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdComplexType: ['GXmlXsdComplexType', 'GXmlXsdBaseType', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdElement: ['GXmlXsdElement', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdExtension: ['GXmlXsdExtension', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdList: ['GXmlXsdList', 'GXmlArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlXsdListComplexTypes: ['GXmlXsdListComplexTypes', 'GXmlXsdList', 'GXmlArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlXsdListElements: ['GXmlXsdListElements', 'GXmlXsdList', 'GXmlArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlXsdListSimpleTypes: ['GXmlXsdListSimpleTypes', 'GXmlXsdList', 'GXmlArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlXsdListTypeRestrictionEnumerations: ['GXmlXsdListTypeRestrictionEnumerations', 'GXmlXsdList', 'GXmlArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlXsdListTypeRestrictionWhiteSpaces: ['GXmlXsdListTypeRestrictionWhiteSpaces', 'GXmlXsdList', 'GXmlArrayList', 'GXmlBaseCollection', 'GObject', 'GXmlList', 'GeeTraversable', 'GeeIterable', 'GXmlCollection'],
    GXmlXsdOpenContent: ['GXmlXsdOpenContent', 'GXmlXsdBaseContent', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdSchema: ['GXmlXsdSchema', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdSimpleContent: ['GXmlXsdSimpleContent', 'GXmlXsdBaseContent', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdSimpleType: ['GXmlXsdSimpleType', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeDefinition: ['GXmlXsdTypeDefinition', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeList: ['GXmlXsdTypeList', 'GXmlXsdTypeDefinition', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestriction: ['GXmlXsdTypeRestriction', 'GXmlXsdTypeDefinition', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionAssertion: ['GXmlXsdTypeRestrictionAssertion', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionDef: ['GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionEnumeration: ['GXmlXsdTypeRestrictionEnumeration', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionExplicitTimezone: ['GXmlXsdTypeRestrictionExplicitTimezone', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionFractionDigits: ['GXmlXsdTypeRestrictionFractionDigits', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionLength: ['GXmlXsdTypeRestrictionLength', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionMaxExclusive: ['GXmlXsdTypeRestrictionMaxExclusive', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionMaxInclusive: ['GXmlXsdTypeRestrictionMaxInclusive', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionMaxLength: ['GXmlXsdTypeRestrictionMaxLength', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionMinExclusive: ['GXmlXsdTypeRestrictionMinExclusive', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionMinInclusive: ['GXmlXsdTypeRestrictionMinInclusive', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionMinLength: ['GXmlXsdTypeRestrictionMinLength', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionPattern: ['GXmlXsdTypeRestrictionPattern', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionTotalDigits: ['GXmlXsdTypeRestrictionTotalDigits', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionWhiteSpace: ['GXmlXsdTypeRestrictionWhiteSpace', 'GXmlXsdTypeRestrictionDef', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
    GXmlXsdTypeRestrictionWhiteSpaceFixed: ['GXmlXsdTypeRestrictionWhiteSpaceFixed', 'GXmlBoolean', 'GXmlBaseProperty', 'GObject', 'GXmlProperty'],
    GXmlXsdTypeUnion: ['GXmlXsdTypeUnion', 'GXmlXsdTypeDefinition', 'GXmlElement', 'GXmlNode', 'GObject', 'GXmlDomChildNode', 'GXmlDomNonDocumentTypeChildNode', 'GXmlDomParentNode', 'GXmlDomElement', 'GXmlObject', 'GXmlDomEventTarget', 'GXmlDomNode'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GXmlCssCombiner: ['null', 'none', 'inside', 'and', 'parent', 'after', 'preceded'],
    GXmlCssSelectorType: ['class', 'id', 'all', 'element', 'attribute', 'attribute-equal', 'attribute-contains', 'attribute-substring', 'attribute-starts-with', 'attribute-starts-with-word', 'attribute-ends-with', 'pseudo-class'],
    GXmlDomEventPhase: ['none', 'capturing-phase', 'at-target', 'bubbling-phase'],
    GXmlDomNodeFilterFilter: ['accept', 'reject', 'skip'],
    GXmlDomNodeNodeType: ['invalid', 'element-node', 'attribute-node', 'text-node', 'cdata-section-node', 'entity-reference-node', 'entity-node', 'processing-instruction-node', 'comment-node', 'document-node', 'document-type-node', 'document-fragment-node', 'notation-node'],
    GXmlDomRangeBoundaryPoints: ['start-to-start', 'start-to-end', 'end-to-end', 'end-to-start'],
    GXmlNodeType: ['invalid', 'element', 'attribute', 'text', 'cdata-section', 'entity-reference', 'entity', 'processing-instruction', 'comment', 'document', 'document-type', 'document-fragment', 'notation'],
    GXmlXPathObjectType: ['undefined', 'nodeset', 'boolean', 'number', 'string', 'point', 'range', 'locationset', 'users', 'xslt-tree'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'GXmlCssCombiner.after': 5,
    'GXmlCssCombiner.and': 3,
    'GXmlCssCombiner.inside': 2,
    'GXmlCssCombiner.none': 1,
    'GXmlCssCombiner.null': 0,
    'GXmlCssCombiner.parent': 4,
    'GXmlCssCombiner.preceded': 6,
    'GXmlCssSelectorType.all': 2,
    'GXmlCssSelectorType.attribute': 4,
    'GXmlCssSelectorType.attribute-contains': 6,
    'GXmlCssSelectorType.attribute-ends-with': 10,
    'GXmlCssSelectorType.attribute-equal': 5,
    'GXmlCssSelectorType.attribute-starts-with': 8,
    'GXmlCssSelectorType.attribute-starts-with-word': 9,
    'GXmlCssSelectorType.attribute-substring': 7,
    'GXmlCssSelectorType.class': 0,
    'GXmlCssSelectorType.element': 3,
    'GXmlCssSelectorType.id': 1,
    'GXmlCssSelectorType.pseudo-class': 11,
    'GXmlDomEventPhase.at-target': 1,
    'GXmlDomEventPhase.bubbling-phase': 2,
    'GXmlDomEventPhase.capturing-phase': 0,
    'GXmlDomEventPhase.none': 0,
    'GXmlDomNodeFilterFilter.accept': 1,
    'GXmlDomNodeFilterFilter.reject': 0,
    'GXmlDomNodeFilterFilter.skip': 1,
    'GXmlDomNodeNodeType.attribute-node': 0,
    'GXmlDomNodeNodeType.cdata-section-node': 2,
    'GXmlDomNodeNodeType.comment-node': 6,
    'GXmlDomNodeNodeType.document-fragment-node': 9,
    'GXmlDomNodeNodeType.document-node': 7,
    'GXmlDomNodeNodeType.document-type-node': 8,
    'GXmlDomNodeNodeType.element-node': 1,
    'GXmlDomNodeNodeType.entity-node': 4,
    'GXmlDomNodeNodeType.entity-reference-node': 3,
    'GXmlDomNodeNodeType.invalid': 0,
    'GXmlDomNodeNodeType.notation-node': 10,
    'GXmlDomNodeNodeType.processing-instruction-node': 5,
    'GXmlDomNodeNodeType.text-node': 1,
    'GXmlDomRangeBoundaryPoints.end-to-end': 1,
    'GXmlDomRangeBoundaryPoints.end-to-start': 2,
    'GXmlDomRangeBoundaryPoints.start-to-end': 0,
    'GXmlDomRangeBoundaryPoints.start-to-start': 0,
    'GXmlNodeType.attribute': 0,
    'GXmlNodeType.cdata-section': 2,
    'GXmlNodeType.comment': 6,
    'GXmlNodeType.document': 7,
    'GXmlNodeType.document-fragment': 9,
    'GXmlNodeType.document-type': 8,
    'GXmlNodeType.element': 1,
    'GXmlNodeType.entity': 4,
    'GXmlNodeType.entity-reference': 3,
    'GXmlNodeType.invalid': 0,
    'GXmlNodeType.notation': 10,
    'GXmlNodeType.processing-instruction': 5,
    'GXmlNodeType.text': 1,
    'GXmlXPathObjectType.boolean': 2,
    'GXmlXPathObjectType.locationset': 7,
    'GXmlXPathObjectType.nodeset': 1,
    'GXmlXPathObjectType.number': 3,
    'GXmlXPathObjectType.point': 5,
    'GXmlXPathObjectType.range': 6,
    'GXmlXPathObjectType.string': 4,
    'GXmlXPathObjectType.undefined': 0,
    'GXmlXPathObjectType.users': 8,
    'GXmlXPathObjectType.xslt-tree': 9,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'GXmlDomEventFlags.canceled-flag': 4,
    'GXmlDomEventFlags.dispatch-flag': 16,
    'GXmlDomEventFlags.initialized-flag': 8,
    'GXmlDomEventFlags.stop-immediate-propagation-flag': 2,
    'GXmlDomEventFlags.stop-propagation-flag': 1,
    'GXmlDomNodeDocumentPosition.contained-by': 32,
    'GXmlDomNodeDocumentPosition.contains': 16,
    'GXmlDomNodeDocumentPosition.disconnected': 2,
    'GXmlDomNodeDocumentPosition.following': 8,
    'GXmlDomNodeDocumentPosition.implementation-specific': 64,
    'GXmlDomNodeDocumentPosition.none': 1,
    'GXmlDomNodeDocumentPosition.preceding': 4,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'GXmlCssSelector.combiner': 'GXmlCssCombiner',
    'GXmlCssSelector.selector-type': 'GXmlCssSelectorType',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
