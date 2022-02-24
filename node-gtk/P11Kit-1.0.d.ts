/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * P11Kit-1.0
 */

import type GObject from './GObject-2.0';

export namespace P11Kit {

/**
 * Error codes returned by various functions. The functions each clearly state
 * which error codes they are capable of returning.
 */
enum UriResult {
    OK,
    UNEXPECTED,
    BAD_SCHEME,
    BAD_ENCODING,
    BAD_SYNTAX,
    BAD_VERSION,
    NOT_FOUND,
}
/**
 * Flags that are passed to p11_kit_pin_request() and registered callbacks.
 */
enum PinFlags {
    USER_LOGIN,
    SO_LOGIN,
    CONTEXT_LOGIN,
    RETRY,
    MANY_TRIES,
    FINAL_TRY,
}
/**
 * A PKCS\#11 URI can represent different kinds of things. This flag is used by
 * p11_kit_uri_parse() to denote in what context the URI will be used.
 * 
 * The various types can be combined.
 */
enum UriType {
    OBJECT,
    TOKEN,
    MODULE,
    MODULE_WITH_VERSION,
    OBJECT_ON_TOKEN,
    OBJECT_ON_TOKEN_AND_MODULE,
    ANY,
}
const PIN_FALLBACK: string
const URI_SCHEME: string
const URI_SCHEME_LEN: number
function spaceStrdup(string: number, maxLength: number): string
function spaceStrlen(string: number, maxLength: number): number
function uriMessage(code: number): string
function uriParse(string: string, uriType: UriType, uri: Uri): number
/**
 * A function called to free or cleanup `data`.
 */
interface pin_destroy_func {
    (data: object): void
}
class Pin {
    /* Methods of P11Kit-1.0.P11Kit.Pin */
    /**
     * Get the length of the PIN value from a P11KitPin.
     */
    getLength(): number
    /**
     * Get the PIN value from a P11KitPin. `length` will be set to the
     * length of the value.
     * 
     * The value returned is owned by the P11KitPin and should not be modified.
     * It remains valid as long as a reference to the PIN is held. The PIN value
     * will not contain an extra null-terminator character.
     */
    getValue(length: number): number
    /**
     * Remove a reference from a P11KitPin. When all references have been removed
     * then the PIN will be freed and will no longer be in memory.
     */
    unref(): void
    static name: string
}
class Uri {
    /* Methods of P11Kit-1.0.P11Kit.Uri */
    /**
     * Get the unrecognized flag for this URI.
     * 
     * The unrecognized flag is automatically set to 1 when during parsing any part
     * of the URI is unrecognized. If the unrecognized flag is set to 1, then
     * matching against this URI will always fail.
     */
    anyUnrecognized(): number
    clearAttributes(): void
    /**
     * Format a PKCS\#11 URI into a string.
     * 
     * Fields which are zeroed out will not be included in the resulting string.
     * Attributes which are not present will also not be included.
     * 
     * The uri_type of URI specified limits the different parts of the resulting
     * URI. To format a URI containing all possible information use
     * %P11_KIT_URI_FOR_ANY
     * 
     * The resulting string should be freed with free().
     */
    format(uriType: UriType, string: string): number
    /**
     * Free a PKCS\#11 URI.
     */
    free(): void
    /**
     * Get the 'pin-source' part of the URI. This is used by some applications to
     * lookup a PIN for logging into a PKCS\#11 token.
     */
    getPinSource(): string
    getPinfile(): string
    /**
     * Set the 'pin-source' part of the URI. This is used by some applications to
     * lookup a PIN for logging into a PKCS\#11 token.
     */
    setPinSource(pinSource: string): void
    setPinfile(pinfile: string): void
    /**
     * Set the unrecognized flag on this URI.
     * 
     * The unrecognized flag is automatically set to 1 when during parsing any part
     * of the URI is unrecognized. If the unrecognized flag is set to 1, then
     * matching against this URI will always fail.
     */
    setUnrecognized(unrecognized: number): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Lookup a message for the uri error code. These codes are the P11_KIT_URI_XXX
     * error codes that can be returned from p11_kit_uri_parse() or
     * p11_kit_uri_format(). As a special case %NULL, will be returned for
     * %P11_KIT_URI_OK.
     */
    static message(code: number): string
    /**
     * Parse a PKCS\#11 URI string.
     * 
     * PKCS\#11 URIs can represent tokens, objects or modules. The uri_type argument
     * allows the caller to specify what type of URI is expected and the sorts of
     * things the URI should match. %P11_KIT_URI_FOR_ANY can be used to parse a URI
     * for any context. It's then up to the caller to make sense of the way that
     * it is used.
     * 
     * If the PKCS\#11 URI contains unrecognized URI parts or parts not applicable
     * to the specified context, then the unrecognized flag will be set. This will
     * prevent the URI from matching using the various match functions.
     */
    static parse(string: string, uriType: UriType, uri: Uri): number
}
}
export default P11Kit;