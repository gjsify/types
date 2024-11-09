/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GObject from '@girs/gobject-2.0';

export namespace P11Kit {
    /**
     * P11Kit-1.0
     */

    /**
     * Error codes returned by various functions. The functions each clearly state
     * which error codes they are capable of returning.
     */

    /**
     * Error codes returned by various functions. The functions each clearly state
     * which error codes they are capable of returning.
     */
    export namespace UriResult {
        export const $gtype: GObject.GType<UriResult>;
    }

    enum UriResult {
        OK,
        UNEXPECTED,
        BAD_SCHEME,
        BAD_ENCODING,
        BAD_SYNTAX,
        BAD_VERSION,
        NOT_FOUND,
    }
    const PIN_FALLBACK: string;
    const URI_SCHEME: string;
    const URI_SCHEME_LEN: number;
    /**
     * In PKCS\#11 structures many strings are encoded in a strange way. The string
     * is placed in a fixed length buffer and then padded with spaces.
     *
     * This function copies the space padded string into a normal null-terminated
     * string. The result is owned by the caller.
     *
     * <informalexample><programlisting>
     * CK_INFO info;
     * char *description;
     *    ...
     * description = p11_kit_space_strdup (info->libraryDescription, sizeof (info->libraryDescription));
     * </programlisting></informalexample>
     * @param string Pointer to string block
     * @param max_length Maximum length of string block
     * @returns The newly allocated string, or %NULL if memory could not be allocated.
     */
    function space_strdup(string: number, max_length: number): string;
    /**
     * In PKCS\#11 structures many strings are encoded in a strange way. The string
     * is placed in a fixed length buffer and then padded with spaces.
     *
     * This function determines the actual length of the string. Since the string
     * is not null-terminated you need to pass in the size of buffer as max_length.
     * The string will never be longer than this buffer.
     *
     * <informalexample><programlisting>
     * CK_INFO info;
     * size_t length;
     *    ...
     * length = p11_kit_space_strlen (info->libraryDescription, sizeof (info->libraryDescription));
     * </programlisting></informalexample>
     * @param string Pointer to string block
     * @param max_length Maximum length of string block
     * @returns The length of the space padded string.
     */
    function space_strlen(string: number, max_length: number): number;
    /**
     * Lookup a message for the uri error code. These codes are the P11_KIT_URI_XXX
     * error codes that can be returned from p11_kit_uri_parse() or
     * p11_kit_uri_format(). As a special case %NULL, will be returned for
     * %P11_KIT_URI_OK.
     * @param code The error code
     * @returns The message for the error code. This string is owned by the p11-kit library.
     */
    function uri_message(code: number): string;
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
     * @param string The string to parse
     * @param uri_type The type of URI that is expected
     * @param uri The blank URI to parse the values into
     * @returns %P11_KIT_URI_OK if the URI was parsed successfully. %P11_KIT_URI_BAD_SCHEME if this was not a PKCS\#11 URI. %P11_KIT_URI_BAD_SYNTAX if the URI syntax was bad. %P11_KIT_URI_NO_MEMORY if memory allocation failed. %P11_KIT_URI_BAD_VERSION if a version number was bad. %P11_KIT_URI_BAD_ENCODING if the URI encoding was invalid.
     */
    function uri_parse(string: string, uri_type: UriType | null, uri: Uri): number;
    interface pin_destroy_func {
        (data: any): void;
    }
    /**
     * Flags that are passed to p11_kit_pin_request() and registered callbacks.
     */

    /**
     * Flags that are passed to p11_kit_pin_request() and registered callbacks.
     */
    export namespace PinFlags {
        export const $gtype: GObject.GType<PinFlags>;
    }

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

    /**
     * A PKCS\#11 URI can represent different kinds of things. This flag is used by
     * p11_kit_uri_parse() to denote in what context the URI will be used.
     *
     * The various types can be combined.
     */
    export namespace UriType {
        export const $gtype: GObject.GType<UriType>;
    }

    enum UriType {
        OBJECT,
        TOKEN,
        MODULE,
        MODULE_WITH_VERSION,
        OBJECT_ON_TOKEN,
        OBJECT_ON_TOKEN_AND_MODULE,
        ANY,
    }
    /**
     * A structure representing a PKCS\#11 PIN. There are no public fields
     * visible in this structure. Use the various accessor functions.
     */
    abstract class Pin {
        static $gtype: GObject.GType<Pin>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Get the length of the PIN value from a P11KitPin.
         * @returns the length of the PIN value.
         */
        get_length(): number;
        /**
         * Get the PIN value from a P11KitPin. `length` will be set to the
         * length of the value.
         *
         * The value returned is owned by the P11KitPin and should not be modified.
         * It remains valid as long as a reference to the PIN is held. The PIN value
         * will not contain an extra null-terminator character.
         * @param length a location to return the value length
         * @returns the value for the PIN.
         */
        get_value(length: number): number;
        /**
         * Remove a reference from a P11KitPin. When all references have been removed
         * then the PIN will be freed and will no longer be in memory.
         */
        unref(): void;
    }

    /**
     * A structure representing a PKCS\#11 URI. There are no public fields
     * visible in this structure. Use the various accessor functions.
     */
    abstract class Uri {
        static $gtype: GObject.GType<Uri>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Lookup a message for the uri error code. These codes are the P11_KIT_URI_XXX
         * error codes that can be returned from p11_kit_uri_parse() or
         * p11_kit_uri_format(). As a special case %NULL, will be returned for
         * %P11_KIT_URI_OK.
         * @param code The error code
         */
        static message(code: number): string;
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
         * @param string The string to parse
         * @param uri_type The type of URI that is expected
         * @param uri The blank URI to parse the values into
         */
        static parse(string: string, uri_type: UriType, uri: Uri): number;

        // Methods

        /**
         * Get the unrecognized flag for this URI.
         *
         * The unrecognized flag is automatically set to 1 when during parsing any part
         * of the URI is unrecognized. If the unrecognized flag is set to 1, then
         * matching against this URI will always fail.
         * @returns 1 if unrecognized flag is set, 0 otherwise.
         */
        any_unrecognized(): number;
        clear_attributes(): void;
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
         * @param uri_type The type of URI that should be produced.
         * @param string Location to store a newly allocated string.
         * @returns %P11_KIT_URI_OK if the URI was formatted successfully. %P11_KIT_URI_NO_MEMORY if memory allocation failed.
         */
        format(uri_type: UriType | null, string: string): number;
        /**
         * Free a PKCS\#11 URI.
         */
        free(): void;
        /**
         * Get the 'pin-source' part of the URI. This is used by some applications to
         * lookup a PIN for logging into a PKCS\#11 token.
         * @returns The pin-source or %NULL if not present.
         */
        get_pin_source(): string;
        get_pinfile(): string;
        /**
         * Set the 'pin-source' part of the URI. This is used by some applications to
         * lookup a PIN for logging into a PKCS\#11 token.
         * @param pin_source The new pin-source
         */
        set_pin_source(pin_source: string): void;
        set_pinfile(pinfile: string): void;
        /**
         * Set the unrecognized flag on this URI.
         *
         * The unrecognized flag is automatically set to 1 when during parsing any part
         * of the URI is unrecognized. If the unrecognized flag is set to 1, then
         * matching against this URI will always fail.
         * @param unrecognized The new unregognized flag value
         */
        set_unrecognized(unrecognized: number): void;
    }

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default P11Kit;

// END
