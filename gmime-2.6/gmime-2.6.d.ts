/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GMime {
    /**
     * GMime-2.6
     */

    /**
     * The trust value of a certificate.
     */

    /**
     * The trust value of a certificate.
     */
    export namespace CertificateTrust {
        export const $gtype: GObject.GType<CertificateTrust>;
    }

    enum CertificateTrust {
        /**
         * No trust assigned.
         */
        NONE,
        /**
         * Never trust this certificate.
         */
        NEVER,
        /**
         * Undefined trust for this certificate.
         */
        UNDEFINED,
        /**
         * Trust this certificate maginally.
         */
        MARGINAL,
        /**
         * Trust this certificate fully.
         */
        FULLY,
        /**
         * Trust this certificate ultimately.
         */
        ULTIMATE,
    }
    /**
     * A cipher algorithm.
     */

    /**
     * A cipher algorithm.
     */
    export namespace CipherAlgo {
        export const $gtype: GObject.GType<CipherAlgo>;
    }

    enum CipherAlgo {
        /**
         * The default (or unknown) cipher.
         */
        DEFAULT,
        /**
         * The IDEA cipher.
         */
        IDEA,
        /**
         * The 3DES cipher.
         */
        '3DES',
        /**
         * The CAST5 cipher.
         */
        CAST5,
        /**
         * The Blowfish cipher.
         */
        BLOWFISH,
        /**
         * The AES (aka RIJANDALE) cipher.
         */
        AES,
        /**
         * The AES-192 cipher.
         */
        AES192,
        /**
         * The AES-256 cipher.
         */
        AES256,
        /**
         * The Twofish cipher.
         */
        TWOFISH,
        /**
         * The Camellia-128 cipher.
         */
        CAMELLIA128,
        /**
         * The Camellia-192 cipher.
         */
        CAMELLIA192,
        /**
         * The Camellia-256 cipher.
         */
        CAMELLIA256,
    }
    /**
     * A Content-Transfer-Encoding enumeration.
     */

    /**
     * A Content-Transfer-Encoding enumeration.
     */
    export namespace ContentEncoding {
        export const $gtype: GObject.GType<ContentEncoding>;
    }

    enum ContentEncoding {
        /**
         * Default transfer encoding.
         */
        DEFAULT,
        /**
         * 7bit text transfer encoding.
         */
        '7BIT',
        /**
         * 8bit text transfer encoding.
         */
        '8BIT',
        /**
         * Binary transfer encoding.
         */
        BINARY,
        /**
         * Base64 transfer encoding.
         */
        BASE64,
        /**
         * Quoted-printable transfer encoding.
         */
        QUOTEDPRINTABLE,
        /**
         * Uuencode transfer encoding.
         */
        UUENCODE,
    }
    /**
     * A hash algorithm.
     */

    /**
     * A hash algorithm.
     */
    export namespace DigestAlgo {
        export const $gtype: GObject.GType<DigestAlgo>;
    }

    enum DigestAlgo {
        /**
         * The default hash algorithm.
         */
        DEFAULT,
        /**
         * The MD5 hash algorithm.
         */
        MD5,
        /**
         * The SHA-1 hash algorithm.
         */
        SHA1,
        /**
         * The RIPEMD-160 hash algorithm.
         */
        RIPEMD160,
        /**
         * The MD2 hash algorithm.
         */
        MD2,
        /**
         * The TIGER-192 hash algorithm.
         */
        TIGER192,
        /**
         * The HAVAL-5-160 hash algorithm.
         */
        HAVAL5160,
        /**
         * The SHA-256 hash algorithm.
         */
        SHA256,
        /**
         * The SHA-384 hash algorithm.
         */
        SHA384,
        /**
         * The SHA-512 hash algorithm.
         */
        SHA512,
        /**
         * The SHA-224 hash algorithm.
         */
        SHA224,
        /**
         * The MD4 hash algorithm.
         */
        MD4,
    }
    /**
     * Used with functions like g_mime_filter_best_encoding() and
     * g_mime_object_encode() as the 'constraint' argument. These values
     * provide a means of letting the filter know what the encoding
     * constraints are for the stream.
     */

    /**
     * Used with functions like g_mime_filter_best_encoding() and
     * g_mime_object_encode() as the 'constraint' argument. These values
     * provide a means of letting the filter know what the encoding
     * constraints are for the stream.
     */
    export namespace EncodingConstraint {
        export const $gtype: GObject.GType<EncodingConstraint>;
    }

    enum EncodingConstraint {
        /**
         * The stream data must fit within the 7bit ASCII range.
         */
        '7BIT',
        /**
         * The stream data may have bytes with the high bit set, but no null bytes.
         */
        '8BIT',
        /**
         * The stream may contain any binary data.
         */
        BINARY,
    }
    /**
     * The mode for a #GMimeFilterFrom filter.
     */

    /**
     * The mode for a #GMimeFilterFrom filter.
     */
    export namespace FilterFromMode {
        export const $gtype: GObject.GType<FilterFromMode>;
    }

    enum FilterFromMode {
        /**
         * Default mode.
         */
        DEFAULT,
        /**
         * Escape 'From ' lines with a '>'
         */
        ESCAPE,
        /**
         * QP-Encode 'From ' lines
         */
        ARMOR,
    }
    /**
     * The mode for the #GMimeFilterGZip filter.
     */

    /**
     * The mode for the #GMimeFilterGZip filter.
     */
    export namespace FilterGZipMode {
        export const $gtype: GObject.GType<FilterGZipMode>;
    }

    enum FilterGZipMode {
        /**
         * Compress (zip) mode.
         */
        ZIP,
        /**
         * Uncompress (unzip) mode.
         */
        UNZIP,
    }
    /**
     * A public-key algorithm.
     */

    /**
     * A public-key algorithm.
     */
    export namespace PubKeyAlgo {
        export const $gtype: GObject.GType<PubKeyAlgo>;
    }

    enum PubKeyAlgo {
        /**
         * The default public-key algorithm.
         */
        DEFAULT,
        /**
         * The RSA algorithm.
         */
        RSA,
        /**
         * An encryption-only RSA algorithm.
         */
        RSA_E,
        /**
         * A signature-only RSA algorithm.
         */
        RSA_S,
        /**
         * An encryption-only ElGamal algorithm.
         */
        ELG_E,
        /**
         * The DSA algorithm.
         */
        DSA,
        /**
         * The ElGamal algorithm.
         */
        ELG,
    }
    /**
     * A message recipient type.
     */

    /**
     * A message recipient type.
     */
    export namespace RecipientType {
        export const $gtype: GObject.GType<RecipientType>;
    }

    enum RecipientType {
        /**
         * Represents the recipients in the To: header.
         */
        TO,
        /**
         * Represents the recipients in the Cc: header.
         */
        CC,
        /**
         * Represents the recipients in the Bcc: header.
         */
        BCC,
    }
    /**
     * Relative seek position.
     */

    /**
     * Relative seek position.
     */
    export namespace SeekWhence {
        export const $gtype: GObject.GType<SeekWhence>;
    }

    enum SeekWhence {
        /**
         * Seek relative to the beginning of the stream.
         */
        SET,
        /**
         * Seek relative to the current position in the stream.
         */
        CUR,
        /**
         * Seek relative to the end of the stream.
         */
        END,
    }
    /**
     * A value representing the signature status for a particular
     * #GMimeSignature.
     */

    /**
     * A value representing the signature status for a particular
     * #GMimeSignature.
     */
    export namespace SignatureStatus {
        export const $gtype: GObject.GType<SignatureStatus>;
    }

    enum SignatureStatus {
        /**
         * Good signature.
         */
        GOOD,
        /**
         * An error occurred.
         */
        ERROR,
        /**
         * Bad signature.
         */
        BAD,
    }
    /**
     * The buffering mode for a #GMimeStreamBuffer stream.
     */

    /**
     * The buffering mode for a #GMimeStreamBuffer stream.
     */
    export namespace StreamBufferMode {
        export const $gtype: GObject.GType<StreamBufferMode>;
    }

    enum StreamBufferMode {
        /**
         * Cache all reads.
         */
        CACHE_READ,
        /**
         * Read in 4k blocks.
         */
        BLOCK_READ,
        /**
         * Write in 4k blocks.
         */
        BLOCK_WRITE,
    }
    /**
     * GMime's binary age.
     */
    const BINARY_AGE: number;
    /**
     * Standard attachment disposition.
     */
    const DISPOSITION_ATTACHMENT: string;
    /**
     * Standard inline disposition.
     */
    const DISPOSITION_INLINE: string;
    /**
     * Initialization flag to enable workarounds for badly formed rfc2047
     * encoded-words.
     */
    const ENABLE_RFC2047_WORKAROUNDS: number;
    /**
     * Initialization flag that hints to the rfc2047 encoder to use only
     * the configured user-charsets (set via g_mime_set_user_charsets())
     * instead of trying to first use iso-8859-1.
     */
    const ENABLE_USE_ONLY_USER_CHARSETS: number;
    /**
     * A bit flag for g_mime_filter_enriched_new() which signifies that
     * the filter should expect Rich Text (aka RTF).
     */
    const FILTER_ENRICHED_IS_RICHTEXT: number;
    /**
     * Cites text by prepending "&gt; " to each cited line.
     */
    const FILTER_HTML_CITE: number;
    /**
     * Wrap email addresses in "mailto:" href tags.
     */
    const FILTER_HTML_CONVERT_ADDRESSES: number;
    /**
     * Convert new-lines ('\n') into &lt;br&gt; tags.
     */
    const FILTER_HTML_CONVERT_NL: number;
    /**
     * Preserve whitespace by converting spaces into their appropriate
     * html entities.
     */
    const FILTER_HTML_CONVERT_SPACES: number;
    /**
     * Wrap detected URLs in &lt;a href=...&gt; tags.
     */
    const FILTER_HTML_CONVERT_URLS: number;
    /**
     * Converts 8bit characters to '?'.
     */
    const FILTER_HTML_ESCAPE_8BIT: number;
    /**
     * Change the colour of citation text.
     */
    const FILTER_HTML_MARK_CITATION: number;
    /**
     * Wrap stream in &lt;pre&gt; tags.
     */
    const FILTER_HTML_PRE: number;
    /**
     * GMime's interface age.
     */
    const INTERFACE_AGE: number;
    /**
     * GMime's major version.
     */
    const MAJOR_VERSION: number;
    /**
     * GMime's micro version.
     */
    const MICRO_VERSION: number;
    /**
     * GMime's minor version.
     */
    const MINOR_VERSION: number;
    /**
     * State for the g_mime_encoding_uudecode_step() function, denoting that
     * the 'begin' line has been found.
     */
    const UUDECODE_STATE_BEGIN: number;
    /**
     * State for the g_mime_encoding_uudecode_step() function, denoting that
     * the end of the UU encoded block has been found.
     */
    const UUDECODE_STATE_END: number;
    /**
     * Initial state for the g_mime_encoding_uudecode_step() function.
     */
    const UUDECODE_STATE_INIT: number;
    const UUDECODE_STATE_MASK: number;
    /**
     * State bit that denotes the yEnc filter has found the =ybegin line.
     */
    const YDECODE_STATE_BEGIN: number;
    /**
     * State bit that denotes yEnc filter has begun decoding the actual
     * yencoded content and will continue to do so until an =yend line is
     * found (or until there is nothing left to decode).
     */
    const YDECODE_STATE_DECODE: number;
    /**
     * State bit that denoates that g_mime_ydecode_step() has finished
     * decoding.
     */
    const YDECODE_STATE_END: number;
    /**
     * State bit that denotes the yEnc filter has reached an end-of-line.
     *
     * This state is for internal use only.
     */
    const YDECODE_STATE_EOLN: number;
    /**
     * State bit that denotes the yEnc filter has reached an escape
     * sequence.
     *
     * This state is for internal use only.
     */
    const YDECODE_STATE_ESCAPE: number;
    /**
     * Initial state for the g_mime_ydecode_step() function.
     */
    const YDECODE_STATE_INIT: number;
    /**
     * State bit that denotes the yEnc filter has found the =ypart
     * line. (Note: not all yencoded blocks have one)
     */
    const YDECODE_STATE_PART: number;
    /**
     * Initial state for the crc and pcrc state variables.
     */
    const YENCODE_CRC_INIT: number;
    /**
     * Initial state for the g_mime_ydecode_step() function.
     */
    const YENCODE_STATE_INIT: number;
    /**
     * Computes the best charset to use to encode this text buffer.
     * @param inbuf a UTF-8 text buffer
     * @param inlen input buffer length
     * @returns the charset name best suited for the input text or %NULL if it is US-ASCII safe.
     */
    function charset_best(inbuf: string, inlen: number): string;
    /**
     * Attempts to find a canonical charset name for `charset`.
     *
     * Note: Will normally return the same value as
     * g_mime_charset_iconv_name() unless the system iconv does not use
     * the canonical ISO charset names (such as using ISO8859-1 rather
     * than the canonical form ISO-8859-1).
     * @param charset charset name
     * @returns a canonical charset name for @charset.
     */
    function charset_canon_name(charset: string): string;
    /**
     * Attempts to find an iconv-friendly charset name for `charset`.
     * @param charset charset name
     * @returns an iconv-friendly charset name for @charset.
     */
    function charset_iconv_name(charset: string): string;
    /**
     * Maps the ISO-8859-# charset to the equivalent Windows-CP125#
     * charset.
     * @param isocharset ISO-8859-# charset
     * @returns equivalent Windows charset.
     */
    function charset_iso_to_windows(isocharset: string): string;
    /**
     * Attempts to find a specific language code that is specific to
     * `charset`. Currently only handles CJK and Russian/Ukranian
     * charset->lang mapping. Everything else will return %NULL.
     * @param charset charset name
     * @returns a language code that is specific to @charset, or %NULL on fail.
     */
    function charset_language(charset: string): string;
    /**
     * Gets the user's locale charset (or iso-8859-1 by default).
     *
     * Note: This function is deprecated. Use g_mime_locale_charset()
     * instead.
     * @returns the user's locale charset (or iso-8859-1 by default).
     */
    function charset_locale_name(): string;
    /**
     * Initializes character set maps.
     *
     * Note: g_mime_init() calls this routine for you.
     */
    function charset_map_init(): void;
    /**
     * Frees internal lookup tables created in g_mime_charset_map_init().
     */
    function charset_map_shutdown(): void;
    /**
     * Attempts to find an iconv-friendly charset name for `charset`.
     *
     * Note: This function is deprecated. Use g_mime_charset_iconv_name()
     * instead.
     * @param charset charset name
     * @returns an iconv-friendly charset name for @charset.
     */
    function charset_name(charset: string): string;
    /**
     * Checks that the GMime library version meets the requirements of the
     * required version.
     * @param major Minimum major version
     * @param minor Minimum minor version
     * @param micro Minimum micro version
     * @returns %TRUE if the requirement is met or %FALSE otherwise.
     */
    function check_version(major: number, minor: number, micro: number): boolean;
    /**
     * Gets the appropriate #GMimeContentEncoding enumeration value based
     * on the input string.
     * @param str a string representing a Content-Transfer-Encoding value
     * @returns the #GMimeContentEncoding specified by @str or #GMIME_CONTENT_ENCODING_DEFAULT on error.
     */
    function content_encoding_from_string(str: string): ContentEncoding;
    /**
     * Gets the string value of the content encoding.
     * @param encoding a #GMimeContentEncoding
     * @returns the encoding type as a string or %NULL on error. Available values for the encoding are: #GMIME_CONTENT_ENCODING_DEFAULT, #GMIME_CONTENT_ENCODING_7BIT, #GMIME_CONTENT_ENCODING_8BIT, #GMIME_CONTENT_ENCODING_BINARY, #GMIME_CONTENT_ENCODING_BASE64, #GMIME_CONTENT_ENCODING_QUOTEDPRINTABLE and #GMIME_CONTENT_ENCODING_UUENCODE.
     */
    function content_encoding_to_string(encoding: ContentEncoding | null): string;
    /**
     * Decodes a chunk of base64 encoded data.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been decoded
     * @returns the number of bytes decoded (which have been dumped in @outbuf).
     */
    function encoding_base64_decode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Base64 encodes the input stream to the output stream. Call this
     * when finished encoding data with g_mime_encoding_base64_encode_step()
     * to flush off the last little bit.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_base64_encode_close(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Base64 encodes a chunk of data. Performs an 'encode step', only
     * encodes blocks of 3 characters to the output at a time, saves
     * left-over state in state and save (initialise to 0 on first
     * invocation).
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_base64_encode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Decodes a block of quoted-printable encoded data. Performs a
     * 'decode step' on a chunk of QP encoded data.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been decoded
     * @returns the number of bytes decoded.
     */
    function encoding_quoted_decode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Quoted-printable encodes a block of text. Call this when finished
     * encoding data with g_mime_encoding_quoted_encode_step() to flush off
     * the last little bit.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_quoted_encode_close(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Quoted-printable encodes a block of text. Performs an 'encode
     * step', saves left-over state in state and save (initialise to -1 on
     * first invocation).
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_quoted_encode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Uudecodes a chunk of data. Performs a 'decode step' on a chunk of
     * uuencoded data. Assumes the "begin mode filename" line has
     * been stripped off.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been decoded
     * @returns the number of bytes decoded.
     */
    function encoding_uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
    /**
     * Uuencodes a chunk of data. Call this when finished encoding data
     * with g_mime_encoding_uuencode_step() to flush off the last little bit.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param uubuf temporary buffer of 60 bytes
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_uuencode_close(
        inbuf: number,
        inlen: number,
        outbuf: number,
        uubuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Uuencodes a chunk of data. Performs an 'encode step', only encodes
     * blocks of 45 characters to the output at a time, saves left-over
     * state in `uubuf,` `state` and `save` (initialize to 0 on first
     * invocation).
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output stream
     * @param uubuf temporary buffer of 60 bytes
     * @param state holds the number of bits that are stored in @save
     * @param save leftover bits that have not yet been encoded
     * @returns the number of bytes encoded.
     */
    function encoding_uuencode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        uubuf: number,
        state: number,
        save: number,
    ): number;
    /**
     * Initialize GMime's iconv cache. This *MUST* be called before any
     * gmime-iconv interfaces will work correctly.
     *
     * Note: this function is called for you by g_mime_init().
     */
    function iconv_init(): void;
    /**
     * Allocates a new string buffer containing `str` in UTF-8.
     * @param str string in locale charset
     * @returns a new string buffer containing @str converted to UTF-8.
     */
    function iconv_locale_to_utf8(str: string): string;
    /**
     * Allocates a new string buffer containing the first `n` bytes of
     * `str` converted to UTF-8.
     * @param str string in locale charset
     * @param n number of bytes to convert
     * @returns a new string buffer containing the first @n bytes of @str converted to UTF-8.
     */
    function iconv_locale_to_utf8_length(str: string, n: number): string;
    /**
     * Frees internal iconv caches created in g_mime_iconv_init().
     *
     * Note: this function is called for you by g_mime_shutdown().
     */
    function iconv_shutdown(): void;
    /**
     * Allocates a new string buffer containing `str` converted to the
     * user's locale charset.
     * @param str string in UTF-8 charset
     * @returns a new string buffer containing @str converted to the user's locale charset.
     */
    function iconv_utf8_to_locale(str: string): string;
    /**
     * Allocates a new string buffer containing the first `n` bytes of
     * `str` converted to the user's locale charset.
     * @param str string in UTF-8 charset
     * @param n number of bytes to convert
     * @returns a new string buffer containing the first @n bytes of @str converted to the user's locale charset.
     */
    function iconv_utf8_to_locale_length(str: string, n: number): string;
    /**
     * Initializes GMime.
     *
     * Note: Calls g_mime_charset_map_init() and g_mime_iconv_init() as
     * well.
     * @param flags initialization flags
     */
    function init(flags: number): void;
    /**
     * Gets the user's locale charset (or iso-8859-1 by default).
     * @returns the user's locale charset (or iso-8859-1 by default).
     */
    function locale_charset(): string;
    /**
     * Gets the user's locale language code (or %NULL by default).
     * @returns the user's locale language code (or %NULL by default).
     */
    function locale_language(): string;
    /**
     * Appends a reference to msgid to the list of references.
     * @param refs the address of a #GMimeReferences list
     * @param msgid a message-id string
     */
    function references_append(refs: References, msgid: string): void;
    /**
     * Clears the #GMimeReferences list and resets it to %NULL.
     * @param refs address of a #GMimeReferences list
     */
    function references_clear(refs: References): void;
    /**
     * Set a list of charsets for GMime to use as a hint for encoding and
     * decoding headers. The charset list should be in order of preference
     * (e.g. most preferred first, least preferred last).
     * @param charsets an array of user-preferred charsets
     */
    function set_user_charsets(charsets: string): void;
    /**
     * Frees internally allocated tables created in g_mime_init(). Also
     * calls g_mime_charset_map_shutdown() and g_mime_iconv_shutdown().
     */
    function shutdown(): void;
    /**
     * Get the list of user-preferred charsets set with
     * g_mime_set_user_charsets().
     * @returns an array of user-set charsets or %NULL if none set.
     */
    function user_charsets(): string[];
    /**
     * Determines the best content encoding for the first `len` bytes of
     * `text`.
     * @param text text to encode
     * @param len text length
     * @returns a #GMimeContentEncoding that is determined to be the best encoding type for the specified block of text. ("best" in this particular case means smallest output size)
     */
    function utils_best_encoding(text: number, len: number): ContentEncoding;
    /**
     * Attempts to convert text in an unknown 8bit/multibyte charset into
     * UTF-8 by finding the charset which will convert the most bytes into
     * valid UTF-8 characters as possible. If no exact match can be found,
     * it will choose the best match and convert invalid byte sequences
     * into question-marks (?) in the returned string buffer.
     * @param text input text in   unknown 8bit/multibyte character set
     * @returns a UTF-8 string representation of @text.
     */
    function utils_decode_8bit(text: Uint8Array | string): string;
    /**
     * Decodes a msg-id as defined by rfc822.
     * @param message_id string containing a message-id
     * @returns the addr-spec portion of the msg-id.
     */
    function utils_decode_message_id(message_id: string): string;
    /**
     * Generates a unique Message-Id.
     * @param fqdn Fully qualified domain name
     * @returns a unique string in an addr-spec format suitable for use as a Message-Id.
     */
    function utils_generate_message_id(fqdn: string): string;
    /**
     * Decodes the rfc822 date string and saves the GMT offset into
     * `tz_offset` if non-NULL.
     * @param str input date string
     * @returns the time_t representation of the date string specified by @str or (time_t) %0 on error. If @tz_offset is non-NULL, the value of the timezone offset will be stored.
     */
    function utils_header_decode_date(str: string): [number, number];
    /**
     * Decodes an rfc2047 encoded 'phrase' header.
     *
     * Note: See g_mime_set_user_charsets() for details on how charset
     * conversion is handled for unencoded 8bit text and/or wrongly
     * specified rfc2047 encoded-word tokens.
     * @param phrase header to decode
     * @returns a newly allocated UTF-8 string representing the the decoded header.
     */
    function utils_header_decode_phrase(phrase: string): string;
    /**
     * Decodes an rfc2047 encoded 'text' header.
     *
     * Note: See g_mime_set_user_charsets() for details on how charset
     * conversion is handled for unencoded 8bit text and/or wrongly
     * specified rfc2047 encoded-word tokens.
     * @param text header text to decode
     * @returns a newly allocated UTF-8 string representing the the decoded header.
     */
    function utils_header_decode_text(text: string): string;
    /**
     * Encodes a 'phrase' header according to the rules in rfc2047.
     * @param phrase phrase to encode
     * @returns the encoded 'phrase'. Useful for encoding internet addresses.
     */
    function utils_header_encode_phrase(phrase: string): string;
    /**
     * Encodes a 'text' header according to the rules in rfc2047.
     * @param text text to encode
     * @returns the encoded header. Useful for encoding headers like "Subject".
     */
    function utils_header_encode_text(text: string): string;
    /**
     * Folds a structured header according to the rules in rfc822.
     * @param header header field and value string
     * @returns an allocated string containing the folded header. WARNING: This function is obsolete. Use g_mime_utils_structured_header_fold() instead.
     */
    function utils_header_fold(header: string): string;
    /**
     * Allocates a string buffer containing the rfc822 formatted date
     * string represented by `time` and `tz_offset`.
     * @param date time_t date representation
     * @param tz_offset Timezone offset
     * @returns a valid string representation of the date.
     */
    function utils_header_format_date(date: number, tz_offset: number): string;
    /**
     * Quotes `string` as needed according to the rules in rfc2045.
     * @param str input string
     * @returns an allocated string containing the escaped and quoted (if needed to be) input string. The decision to quote the string is based on whether or not the input string contains any 'tspecials' as defined by rfc2045.
     */
    function utils_quote_string(str: string): string;
    /**
     * Folds a structured header according to the rules in rfc822.
     * @param header header field and value string
     * @returns an allocated string containing the folded header.
     */
    function utils_structured_header_fold(header: string): string;
    /**
     * Determines if `text` contains 8bit characters within the first `len`
     * bytes.
     * @param text text to check for 8bit chars
     * @param len text length
     * @returns %TRUE if the text contains 8bit characters or %FALSE otherwise.
     */
    function utils_text_is_8bit(text: number, len: number): boolean;
    /**
     * Unquotes and unescapes a string.
     * @param str input string
     */
    function utils_unquote_string(str: string): void;
    /**
     * Folds an unstructured header according to the rules in rfc822.
     * @param header header field and value string
     * @returns an allocated string containing the folded header.
     */
    function utils_unstructured_header_fold(header: string): string;
    /**
     * Performs a 'decode step' on a chunk of yEncoded data of length
     * `inlen` pointed to by `inbuf` and writes to `outbuf`. Assumes the =ybegin
     * and =ypart lines have already been stripped off.
     *
     * To get the crc32 value of the part, use #GMIME_YENCODE_CRC_FINAL
     * (`pcrc)`. If there are more parts, you should reuse `crc` without
     * re-initializing. Once all parts have been decoded, you may get the
     * combined crc32 value of all the parts using #GMIME_YENCODE_CRC_FINAL
     * (`crc)`.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state ydecode state
     * @param pcrc part crc state
     * @param crc crc state
     * @returns the number of bytes decoded.
     */
    function ydecode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        pcrc: number,
        crc: number,
    ): number;
    /**
     * Call this function when finished encoding data with
     * g_mime_yencode_step() to flush off the remaining state.
     *
     * #GMIME_YENCODE_CRC_FINAL (`pcrc)` will give you the crc32 of the
     * encoded "part". If there are more "parts" to encode, you should
     * re-use `crc` when encoding the next "parts" and then use
     * #GMIME_YENCODE_CRC_FINAL (`crc)` to get the combined crc32 value of
     * all the parts.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state yencode state
     * @param pcrc part crc state
     * @param crc crc state
     * @returns the number of bytes encoded.
     */
    function yencode_close(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        pcrc: number,
        crc: number,
    ): number;
    /**
     * Performs an yEncode 'encode step' on a chunk of raw data of length
     * `inlen` pointed to by `inbuf` and writes to `outbuf`.
     *
     * `state` should be initialized to #GMIME_YENCODE_STATE_INIT before
     * beginning making the first call to this function. Subsequent calls
     * should reuse `state`.
     *
     * Along the same lines, `pcrc` and `crc` should be initialized to
     * #GMIME_YENCODE_CRC_INIT before using.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state yencode state
     * @param pcrc part crc state
     * @param crc crc state
     * @returns the number of bytes encoded.
     */
    function yencode_step(
        inbuf: number,
        inlen: number,
        outbuf: number,
        state: number,
        pcrc: number,
        crc: number,
    ): number;
    interface HeaderForeachFunc {
        (name: string, value: string): void;
    }
    interface HeaderWriter {
        (stream: Stream, name: string, value: string): number;
    }
    interface ObjectForeachFunc {
        (parent: Object, part: Object): void;
    }
    interface ParserHeaderRegexFunc {
        (parser: Parser, header: string, value: string, offset: number): void;
    }
    interface PasswordRequestFunc {
        (ctx: CryptoContext, user_id: string, prompt_ctx: string, reprompt: boolean, response: Stream): boolean;
    }
    /**
     * Bit flags to enable charset and/or encoding scanning to make
     * educated guesses as to what the best charset and/or encodings to
     * use for the content passed through the filter.
     */

    /**
     * Bit flags to enable charset and/or encoding scanning to make
     * educated guesses as to what the best charset and/or encodings to
     * use for the content passed through the filter.
     */
    export namespace FilterBestFlags {
        export const $gtype: GObject.GType<FilterBestFlags>;
    }

    enum FilterBestFlags {
        /**
         * Enable best-charset detection.
         */
        CHARSET,
        /**
         * Enable best-encoding detection.
         */
        ENCODING,
    }
    /**
     * Possible errors that a #GMimeSignature could have.
     */

    /**
     * Possible errors that a #GMimeSignature could have.
     */
    export namespace SignatureError {
        export const $gtype: GObject.GType<SignatureError>;
    }

    enum SignatureError {
        /**
         * No error.
         */
        NONE,
        /**
         * Expired signature.
         */
        EXPSIG,
        /**
         * No public key found.
         */
        NO_PUBKEY,
        /**
         * Expired signature key.
         */
        EXPKEYSIG,
        /**
         * Revoked signature key.
         */
        REVKEYSIG,
        /**
         * Unsupported algorithm.
         */
        UNSUPP_ALGO,
    }
    namespace Certificate {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object containing useful information about a certificate.
     */
    class Certificate extends GObject.Object {
        static $gtype: GObject.GType<Certificate>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Certificate.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        pubkey_algo: PubKeyAlgo;
        digest_algo: DigestAlgo;
        trust: CertificateTrust;
        issuer_serial: string;
        issuer_name: string;
        fingerprint: string;
        created: number;
        expires: number;
        keyid: string;
        email: string;
        name: string;

        // Constructors

        constructor(properties?: Partial<Certificate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Certificate;

        // Signals

        connect<K extends keyof Certificate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Certificate.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Certificate.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Certificate.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Certificate.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Certificate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the creation date of the certificate's key.
         * @returns the creation date of the certificate's key or %-1 if unknown.
         */
        get_created(): number;
        /**
         * Get the digest algorithm used by the certificate.
         * @returns the digest algorithm used by the certificate or #GMIME_DIGEST_ALGO_DEFAULT if unspecified.
         */
        get_digest_algo(): DigestAlgo;
        /**
         * Get the certificate's email.
         * @returns the certificate's email or %NULL if unspecified.
         */
        get_email(): string;
        /**
         * Get the expiration date of the certificate's key.
         * @returns the expiration date of the certificate's key or %-1 if unknown.
         */
        get_expires(): number;
        /**
         * Get the certificate's key fingerprint.
         * @returns the certificate's key fingerprint or %NULL if unspecified.
         */
        get_fingerprint(): string;
        /**
         * Get the certificate's issuer name.
         * @returns the certificate's issuer name or %NULL if unspecified.
         */
        get_issuer_name(): string;
        /**
         * Get the certificate's issuer serial.
         * @returns the certificate's issuer serial or %NULL if unspecified.
         */
        get_issuer_serial(): string;
        /**
         * Get the certificate's key id.
         * @returns the certificate's key id or %NULL if unspecified.
         */
        get_key_id(): string;
        /**
         * Get the certificate's name.
         * @returns the certificate's name or %NULL if unspecified.
         */
        get_name(): string;
        /**
         * Get the public-key algorithm used by the certificate.
         * @returns the public-key algorithm used by the certificate or #GMIME_PUBKEY_ALGO_DEFAULT if unspecified.
         */
        get_pubkey_algo(): PubKeyAlgo;
        /**
         * Get the certificate trust.
         * @returns the certificate trust.
         */
        get_trust(): CertificateTrust;
        /**
         * Set the creation date of the certificate's key.
         * @param created creation date
         */
        set_created(created: number): void;
        /**
         * Set the digest algorithm used by the certificate.
         * @param algo a #GMimeDigestAlgo
         */
        set_digest_algo(algo: DigestAlgo | null): void;
        /**
         * Set the certificate's email.
         * @param email certificate's email
         */
        set_email(email: string): void;
        /**
         * Set the expiration date of the certificate's key.
         * @param expires expiration date
         */
        set_expires(expires: number): void;
        /**
         * Set the certificate's key fingerprint.
         * @param fingerprint fingerprint string
         */
        set_fingerprint(fingerprint: string): void;
        /**
         * Set the certificate's issuer name.
         * @param issuer_name certificate's issuer name
         */
        set_issuer_name(issuer_name: string): void;
        /**
         * Set the certificate's issuer serial.
         * @param issuer_serial certificate's issuer serial
         */
        set_issuer_serial(issuer_serial: string): void;
        /**
         * Set the certificate's key id.
         * @param key_id key id
         */
        set_key_id(key_id: string): void;
        /**
         * Set the certificate's name.
         * @param name certificate's name
         */
        set_name(name: string): void;
        /**
         * Set the public-key algorithm used by the certificate.
         * @param algo a #GMimePubKeyAlgo
         */
        set_pubkey_algo(algo: PubKeyAlgo | null): void;
        /**
         * Set the certificate trust.
         * @param trust a #GMimeCertificateTrust value
         */
        set_trust(trust: CertificateTrust | null): void;
    }

    namespace CertificateList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A collection of #GMimeCertificate objects.
     */
    class CertificateList extends GObject.Object {
        static $gtype: GObject.GType<CertificateList>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: CertificateList.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        array: any[];

        // Constructors

        constructor(properties?: Partial<CertificateList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CertificateList;

        // Signals

        connect<K extends keyof CertificateList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CertificateList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CertificateList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CertificateList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CertificateList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CertificateList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a #GMimeCertificate to the #GMimeCertificateList.
         * @param cert a #GMimeCertificate
         * @returns the index of the added #GMimeCertificate.
         */
        add(cert: Certificate): number;
        /**
         * Clears the list of addresses.
         */
        clear(): void;
        /**
         * Checks whether or not the specified #GMimeCertificate is contained within
         * the #GMimeCertificateList.
         * @param cert a #GMimeCertificate
         * @returns %TRUE if the specified #GMimeCertificate is contained within the specified #GMimeCertificateList or %FALSE otherwise.
         */
        contains(cert: Certificate): boolean;
        /**
         * Gets the #GMimeCertificate at the specified index.
         * @param index index of #GMimeCertificate to get
         * @returns the #GMimeCertificate at the specified index or %NULL if the index is out of range.
         */
        get_certificate(index: number): Certificate;
        /**
         * Gets the index of the specified #GMimeCertificate inside the
         * #GMimeCertificateList.
         * @param cert a #GMimeCertificate
         * @returns the index of the requested #GMimeCertificate within the #GMimeCertificateList or %-1 if it is not contained within the #GMimeCertificateList.
         */
        index_of(cert: Certificate): number;
        /**
         * Inserts a #GMimeCertificate into the #GMimeCertificateList at the specified
         * index.
         * @param index index to insert at
         * @param cert a #GMimeCertificate
         */
        insert(index: number, cert: Certificate): void;
        /**
         * Gets the length of the list.
         * @returns the number of #GMimeCertificate objects in the list.
         */
        length(): number;
        /**
         * Removes a #GMimeCertificate from the #GMimeCertificateList.
         * @param cert a #GMimeCertificate
         * @returns %TRUE if the specified #GMimeCertificate was removed or %FALSE otherwise.
         */
        remove(cert: Certificate): boolean;
        /**
         * Removes a #GMimeCertificate from the #GMimeCertificateList at the specified
         * index.
         * @param index index to remove
         * @returns %TRUE if an #GMimeCertificate was removed or %FALSE otherwise.
         */
        remove_at(index: number): boolean;
        /**
         * Sets the #GMimeCertificate at the specified index to `cert`.
         * @param index index of #GMimeCertificate to set
         * @param cert a #GMimeCertificate
         */
        set_certificate(index: number, cert: Certificate): void;
    }

    namespace ContentDisposition {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A data structure representing a Content-Disposition.
     */
    class ContentDisposition extends GObject.Object {
        static $gtype: GObject.GType<ContentDisposition>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: ContentDisposition.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;
        disposition: string;

        // Constructors

        constructor(properties?: Partial<ContentDisposition.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContentDisposition;

        static new_from_string(str: string): ContentDisposition;

        // Signals

        connect<K extends keyof ContentDisposition.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentDisposition.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContentDisposition.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentDisposition.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContentDisposition.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContentDisposition.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the disposition or %NULL on fail.
         * @returns the disposition string which is probably one of #GMIME_DISPOSITION_ATTACHMENT or #GMIME_DISPOSITION_INLINE.
         */
        get_disposition(): string;
        /**
         * Gets the parameter value specified by `name` if it's available.
         * @param name parameter name
         * @returns the value of the requested parameter or %NULL if the parameter is not set. If the parameter is set, the returned string will be in UTF-8.
         */
        get_parameter(name: string): string;
        /**
         * Gets the Content-Disposition parameter list.
         * @returns the list of #GMimeParam's set on @disposition.
         */
        get_params(): Param;
        /**
         * Determines if a Content-Disposition has a value of "attachment".
         * @returns %TRUE if the value matches "attachment", otherwise %FALSE.
         */
        is_attachment(): boolean;
        /**
         * Sets the disposition to `value` which may be one of
         * #GMIME_DISPOSITION_ATTACHMENT or #GMIME_DISPOSITION_INLINE or, by
         * your choice, any other string which would indicate how the MIME
         * part should be displayed by the MUA.
         * @param value disposition value
         */
        set_disposition(value: string): void;
        /**
         * Sets a parameter on the Content-Disposition.
         *
         * Note: The `name` should be in US-ASCII while the `value` should be in
         * UTF-8.
         * @param name parameter name
         * @param value parameter value
         */
        set_parameter(name: string, value: string): void;
        /**
         * Sets the Content-Disposition's parameter list.
         * @param params a list of #GMimeParam objects
         */
        set_params(params: Param): void;
        /**
         * Allocates a string buffer containing the Content-Disposition header
         * represented by the disposition object `disposition`.
         * @param fold fold header if needed
         * @returns a string containing the disposition header
         */
        to_string(fold: boolean): string;
    }

    namespace ContentType {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A data structure representing a Content-Type.
     */
    class ContentType extends GObject.Object {
        static $gtype: GObject.GType<ContentType>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: ContentType.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;
        type: string;
        subtype: string;

        // Constructors

        constructor(properties?: Partial<ContentType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: string, subtype: string): ContentType;

        static new_from_string(str: string): ContentType;

        // Signals

        connect<K extends keyof ContentType.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentType.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContentType.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContentType.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContentType.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContentType.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the Content-Type's media sub-type.
         * @returns the Content-Type's media sub-type.
         */
        get_media_subtype(): string;
        /**
         * Gets the Content-Type's media type.
         * @returns the Content-Type's media type.
         */
        get_media_type(): string;
        /**
         * Gets the parameter value specified by `name` if it's available.
         * @param name parameter name (aka attribute)
         * @returns the value of the requested parameter or %NULL if the parameter is not set. If the parameter is set, the returned string will be in UTF-8.
         */
        get_parameter(name: string): string;
        /**
         * Gets the Content-Type's parameter list.
         * @returns the Content-Type's parameter list.
         */
        get_params(): Param;
        /**
         * Compares the given type and subtype with that of the given mime
         * type object.
         * @param type MIME type to compare against
         * @param subtype MIME subtype to compare against
         * @returns TRUE if the MIME types match or FALSE otherwise. You may use "*" in place of @type and/or @subtype as a wilcard.
         */
        is_type(type: string, subtype: string): boolean;
        /**
         * Sets the Content-Type's media subtype.
         * @param subtype media subtype
         */
        set_media_subtype(subtype: string): void;
        /**
         * Sets the Content-Type's media type.
         * @param type media type
         */
        set_media_type(type: string): void;
        /**
         * Sets a parameter on the Content-Type.
         *
         * Note: The `name` should be in US-ASCII while the `value` should be in
         * UTF-8.
         * @param name parameter name (aka attribute)
         * @param value parameter value
         */
        set_parameter(name: string, value: string): void;
        /**
         * Sets the Content-Type's parameter list.
         * @param params a list of #GMimeParam objects
         */
        set_params(params: Param): void;
        /**
         * Allocates a string buffer containing the type and subtype defined
         * by the `mime_type`.
         * @returns an allocated string containing the type and subtype of the content-type in the format: type/subtype.
         */
        to_string(): string;
    }

    namespace CryptoContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A crypto context for use with MIME.
     */
    class CryptoContext extends GObject.Object {
        static $gtype: GObject.GType<CryptoContext>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: CryptoContext.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        request_passwd: PasswordRequestFunc;

        // Constructors

        constructor(properties?: Partial<CryptoContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CryptoContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CryptoContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CryptoContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CryptoContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CryptoContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CryptoContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Decrypts the ciphertext input stream and writes the resulting
         * cleartext to the output stream.
         *
         * If the encrypted input stream was also signed, the returned
         * #GMimeDecryptResult will have a non-%NULL list of signatures, each with a
         * #GMimeSignatureStatus (among other details about each signature).
         *
         * On success, the returned #GMimeDecryptResult will contain a list of
         * certificates, one for each recipient, that the original encrypted stream
         * was encrypted to.
         *
         * Note: It *may* be possible to maliciously design an encrypted stream such
         * that recursively decrypting it will result in an endless loop, causing
         * a denial of service attack on your application.
         * @param istream input/ciphertext stream
         * @param ostream output/cleartext stream
         */
        vfunc_decrypt(istream: Stream, ostream: Stream): DecryptResult;
        /**
         * Decrypts the ciphertext input stream using a specific session key
         * and writes the resulting cleartext to the output stream. If
         * `session_key` is non-%NULL, but is not valid for the ciphertext, the
         * decryption will fail even if other available secret key material
         * may have been able to decrypt it. If `session_key` is %NULL, this
         * does the same thing as g_mime_crypto_context_decrypt().
         *
         * When non-%NULL, `session_key` should be a %NULL-terminated string,
         * such as the one returned by g_mime_decrypt_result_get_session_key()
         * from a previous decryption.
         *
         * If the encrypted input stream was also signed, the returned
         * #GMimeDecryptResult will have a non-%NULL list of signatures, each with a
         * #GMimeSignatureStatus (among other details about each signature).
         *
         * On success, the returned #GMimeDecryptResult will contain a list of
         * certificates, one for each recipient, that the original encrypted stream
         * was encrypted to.
         *
         * Note: It *may* be possible to maliciously design an encrypted stream such
         * that recursively decrypting it will result in an endless loop, causing
         * a denial of service attack on your application.
         * @param session_key session key to use
         * @param istream input/ciphertext stream
         * @param ostream output/cleartext stream
         */
        vfunc_decrypt_session(session_key: string, istream: Stream, ostream: Stream): DecryptResult;
        /**
         * Gets the digest id based on the digest name.
         * @param name digest name
         */
        vfunc_digest_id(name: string): DigestAlgo;
        /**
         * Gets the digest name based on the digest id `digest`.
         * @param digest digest id
         */
        vfunc_digest_name(digest: DigestAlgo): string;
        /**
         * Encrypts (and optionally signs) the cleartext input stream and
         * writes the resulting ciphertext to the output stream.
         * @param sign sign as well as encrypt
         * @param userid key id (or email address) to use when signing (assuming @sign is %TRUE)
         * @param digest digest algorithm to use when signing
         * @param recipients an array of recipient key ids   and/or email addresses
         * @param istream cleartext input stream
         * @param ostream ciphertext output stream
         */
        vfunc_encrypt(
            sign: boolean,
            userid: string,
            digest: DigestAlgo,
            recipients: string[],
            istream: Stream,
            ostream: Stream,
        ): number;
        /**
         * Exports the keys/certificates in `keys` to the stream `ostream` from
         * the key/certificate database controlled by `ctx`.
         * @param keys an array of key ids
         * @param ostream output stream
         */
        vfunc_export_keys(keys: string[], ostream: Stream): number;
        /**
         * Gets the encryption protocol for the crypto context.
         */
        vfunc_get_encryption_protocol(): string;
        /**
         * Gets the key exchange protocol for the crypto context.
         */
        vfunc_get_key_exchange_protocol(): string;
        /**
         * Gets whether or not the `ctx` is configured to retrieve a session
         * key during decryption (see g_mime_decrypt_result_get_session_key()).
         */
        vfunc_get_retrieve_session_key(): boolean;
        /**
         * Gets the signature protocol for the crypto context.
         */
        vfunc_get_signature_protocol(): string;
        /**
         * Imports a stream of keys/certificates contained within `istream`
         * into the key/certificate database controlled by `ctx`.
         * @param istream input stream (containing keys)
         */
        vfunc_import_keys(istream: Stream): number;
        /**
         * Configures whether `ctx` should produce a session key during future
         * decryption operations (see
         * g_mime_decrypt_result_get_session_key()).
         * @param retrieve_session_key whether to retrieve session keys during decryption
         */
        vfunc_set_retrieve_session_key(retrieve_session_key: boolean): number;
        /**
         * Signs the input stream and writes the resulting signature to the output stream.
         * @param userid private key to use to sign the stream
         * @param digest digest algorithm to use
         * @param istream input stream
         * @param ostream output stream
         */
        vfunc_sign(userid: string, digest: DigestAlgo, istream: Stream, ostream: Stream): number;
        /**
         * Verifies the signature. If `istream` is a clearsigned stream,
         * you should pass %NULL as the sigstream parameter. Otherwise
         * `sigstream` is assumed to be the signature stream and is used to
         * verify the integirity of the `istream`.
         * @param digest digest algorithm used, if known
         * @param istream input stream
         * @param sigstream optional detached-signature stream
         */
        vfunc_verify(digest: DigestAlgo, istream: Stream, sigstream: Stream): SignatureList;

        // Methods

        /**
         * Decrypts the ciphertext input stream and writes the resulting
         * cleartext to the output stream.
         *
         * If the encrypted input stream was also signed, the returned
         * #GMimeDecryptResult will have a non-%NULL list of signatures, each with a
         * #GMimeSignatureStatus (among other details about each signature).
         *
         * On success, the returned #GMimeDecryptResult will contain a list of
         * certificates, one for each recipient, that the original encrypted stream
         * was encrypted to.
         *
         * Note: It *may* be possible to maliciously design an encrypted stream such
         * that recursively decrypting it will result in an endless loop, causing
         * a denial of service attack on your application.
         * @param istream input/ciphertext stream
         * @param ostream output/cleartext stream
         * @returns a #GMimeDecryptResult on success or %NULL on error.
         */
        decrypt(istream: Stream, ostream: Stream): DecryptResult;
        /**
         * Decrypts the ciphertext input stream using a specific session key
         * and writes the resulting cleartext to the output stream. If
         * `session_key` is non-%NULL, but is not valid for the ciphertext, the
         * decryption will fail even if other available secret key material
         * may have been able to decrypt it. If `session_key` is %NULL, this
         * does the same thing as g_mime_crypto_context_decrypt().
         *
         * When non-%NULL, `session_key` should be a %NULL-terminated string,
         * such as the one returned by g_mime_decrypt_result_get_session_key()
         * from a previous decryption.
         *
         * If the encrypted input stream was also signed, the returned
         * #GMimeDecryptResult will have a non-%NULL list of signatures, each with a
         * #GMimeSignatureStatus (among other details about each signature).
         *
         * On success, the returned #GMimeDecryptResult will contain a list of
         * certificates, one for each recipient, that the original encrypted stream
         * was encrypted to.
         *
         * Note: It *may* be possible to maliciously design an encrypted stream such
         * that recursively decrypting it will result in an endless loop, causing
         * a denial of service attack on your application.
         * @param session_key session key to use
         * @param istream input/ciphertext stream
         * @param ostream output/cleartext stream
         * @returns a #GMimeDecryptResult on success or %NULL on error.
         */
        decrypt_session(session_key: string, istream: Stream, ostream: Stream): DecryptResult;
        /**
         * Gets the digest id based on the digest name.
         * @param name digest name
         * @returns the equivalent digest id or #GMIME_DIGEST_ALGO_DEFAULT on fail.
         */
        digest_id(name: string): DigestAlgo;
        /**
         * Gets the digest name based on the digest id `digest`.
         * @param digest digest id
         * @returns the equivalent digest name or %NULL on fail.
         */
        digest_name(digest: DigestAlgo | null): string;
        /**
         * Encrypts (and optionally signs) the cleartext input stream and
         * writes the resulting ciphertext to the output stream.
         * @param sign sign as well as encrypt
         * @param userid key id (or email address) to use when signing (assuming @sign is %TRUE)
         * @param digest digest algorithm to use when signing
         * @param recipients an array of recipient key ids   and/or email addresses
         * @param istream cleartext input stream
         * @param ostream ciphertext output stream
         * @returns %0 on success or %-1 on fail.
         */
        encrypt(
            sign: boolean,
            userid: string,
            digest: DigestAlgo | null,
            recipients: string[],
            istream: Stream,
            ostream: Stream,
        ): number;
        /**
         * Exports the keys/certificates in `keys` to the stream `ostream` from
         * the key/certificate database controlled by `ctx`.
         * @param keys an array of key ids
         * @param ostream output stream
         * @returns %0 on success or %-1 on fail.
         */
        export_keys(keys: string[], ostream: Stream): number;
        /**
         * Gets the encryption protocol for the crypto context.
         * @returns the encryption protocol or %NULL if not supported.
         */
        get_encryption_protocol(): string;
        /**
         * Gets the key exchange protocol for the crypto context.
         * @returns the key exchange protocol or %NULL if not supported.
         */
        get_key_exchange_protocol(): string;
        /**
         * Gets whether or not the `ctx` is configured to retrieve a session
         * key during decryption (see g_mime_decrypt_result_get_session_key()).
         * @returns %TRUE if the @ctx is configured to retrieve a session key or %FALSE otherwise.
         */
        get_retrieve_session_key(): boolean;
        /**
         * Gets the signature protocol for the crypto context.
         * @returns the signature protocol or %NULL if not supported.
         */
        get_signature_protocol(): string;
        /**
         * Imports a stream of keys/certificates contained within `istream`
         * into the key/certificate database controlled by `ctx`.
         * @param istream input stream (containing keys)
         * @returns %0 on success or %-1 on fail.
         */
        import_keys(istream: Stream): number;
        /**
         * Configures whether `ctx` should produce a session key during future
         * decryption operations (see
         * g_mime_decrypt_result_get_session_key()).
         * @param retrieve_session_key whether to retrieve session keys during decryption
         * @returns %0 on success or %-1 on fail.
         */
        set_retrieve_session_key(retrieve_session_key: boolean): number;
        /**
         * Signs the input stream and writes the resulting signature to the output stream.
         * @param userid private key to use to sign the stream
         * @param digest digest algorithm to use
         * @param istream input stream
         * @param ostream output stream
         * @returns the #GMimeDigestAlgo used on success (useful if @digest is specified as #GMIME_DIGEST_ALGO_DEFAULT) or %-1 on fail.
         */
        sign(userid: string, digest: DigestAlgo | null, istream: Stream, ostream: Stream): number;
        /**
         * Verifies the signature. If `istream` is a clearsigned stream,
         * you should pass %NULL as the sigstream parameter. Otherwise
         * `sigstream` is assumed to be the signature stream and is used to
         * verify the integirity of the `istream`.
         * @param digest digest algorithm used, if known
         * @param istream input stream
         * @param sigstream optional detached-signature stream
         * @returns a #GMimeSignatureList object containing the status of each signature or %NULL on error.
         */
        verify(digest: DigestAlgo | null, istream: Stream, sigstream: Stream): SignatureList;
    }

    namespace DataWrapper {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A wrapper for a stream which may be encoded.
     */
    class DataWrapper extends GObject.Object {
        static $gtype: GObject.GType<DataWrapper>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: DataWrapper.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        encoding: ContentEncoding;
        stream: Stream;

        // Constructors

        constructor(properties?: Partial<DataWrapper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DataWrapper;

        static new_with_stream(stream: Stream, encoding: ContentEncoding): DataWrapper;

        // Signals

        connect<K extends keyof DataWrapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataWrapper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DataWrapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataWrapper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DataWrapper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataWrapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Writes the raw (decoded) data to the output stream.
         * @param stream output stream
         */
        vfunc_write_to_stream(stream: Stream): number;

        // Methods

        /**
         * Gets the encoding type of the stream wrapped by `wrapper`.
         * @returns the encoding type of the internal stream.
         */
        get_encoding(): ContentEncoding;
        /**
         * Gets a reference to the stream wrapped by `wrapper`.
         * @returns a reference to the internal stream.
         */
        get_stream(): Stream;
        /**
         * Sets the encoding type of the internal stream.
         * @param encoding encoding
         */
        set_encoding(encoding: ContentEncoding | null): void;
        /**
         * Replaces the wrapper's internal stream with `stream`. Don't forget,
         * if `stream` is not of the same encoding as the old stream, you'll
         * want to call g_mime_data_wrapper_set_encoding() as well.
         *
         * Note: caller is responsible for its own reference on
         * `stream`.
         * @param stream a #GMimeStream
         */
        set_stream(stream: Stream): void;
        /**
         * Writes the raw (decoded) data to the output stream.
         * @param stream output stream
         * @returns the number of bytes written or %-1 on failure.
         */
        write_to_stream(stream: Stream): number;
    }

    namespace DecryptResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object containing the results from decrypting an encrypted stream.
     */
    class DecryptResult extends GObject.Object {
        static $gtype: GObject.GType<DecryptResult>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: DecryptResult.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        recipients: CertificateList;
        signatures: SignatureList;
        cipher: CipherAlgo;
        mdc: DigestAlgo;
        session_key: string;

        // Constructors

        constructor(properties?: Partial<DecryptResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DecryptResult;

        // Signals

        connect<K extends keyof DecryptResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DecryptResult.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DecryptResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DecryptResult.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DecryptResult.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DecryptResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the cipher algorithm used.
         * @returns the cipher algorithm used.
         */
        get_cipher(): CipherAlgo;
        /**
         * Get the mdc digest algorithm used.
         * @returns the mdc digest algorithm used.
         */
        get_mdc(): DigestAlgo;
        /**
         * Gets the list of certificates that the stream had been encrypted to.
         * @returns a #GMimeCertificateList.
         */
        get_recipients(): CertificateList;
        /**
         * Get the session_key used for this decryption, if the underlying
         * crypto context is capable of and (configured to) retrieve session
         * keys during decryption.  See, for example,
         * g_mime_crypto_context_set_retrieve_session_key().
         * @returns the session_key digest algorithm used, or NULL if no session key was requested or found.
         */
        get_session_key(): string;
        /**
         * Gets a list of signatures if the encrypted stream had also been signed.
         * @returns a #GMimeSignatureList or %NULL if the stream was not signed.
         */
        get_signatures(): SignatureList;
        /**
         * Set the cipher algorithm used.
         * @param cipher a #GMimeCipherAlgo
         */
        set_cipher(cipher: CipherAlgo | null): void;
        /**
         * Set the mdc digest algorithm used.
         * @param mdc a #GMimeDigestAlgo
         */
        set_mdc(mdc: DigestAlgo | null): void;
        /**
         * Sets the list of certificates that the stream had been encrypted to.
         * @param recipients A #GMimeCertificateList
         */
        set_recipients(recipients: CertificateList): void;
        /**
         * Set the session_key to be returned by this decryption result.
         * @param session_key a pointer to a null-terminated string representing the session key
         */
        set_session_key(session_key: string): void;
        /**
         * Sets the list of signatures.
         * @param signatures A #GMimeSignatureList
         */
        set_signatures(signatures: SignatureList): void;
    }

    namespace Filter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Base class for filters used by #GMimeStreamFilter.
     */
    abstract class Filter extends GObject.Object {
        static $gtype: GObject.GType<Filter>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Filter.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;
        outreal: Uint8Array;
        outbuf: string;
        outptr: string;
        outsize: number;
        outpre: number;
        backbuf: string;
        backsize: number;
        backlen: number;

        // Constructors

        constructor(properties?: Partial<Filter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Filter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Filter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Filter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Filter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Completes the filtering.
         * @param inbuf input buffer
         * @param prespace prespace buffer length
         */
        vfunc_complete(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Copies `filter` into a new GMimeFilter object.
         */
        vfunc_copy(): Filter;
        /**
         * Filters the input data and writes it to `out`.
         * @param inbuf input buffer
         * @param prespace prespace buffer length
         */
        vfunc_filter(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Resets the filter.
         */
        vfunc_reset(): void;

        // Methods

        /**
         * Sets number of bytes backed up on the input, new calls replace
         * previous ones
         * @param data data to backup
         */
        backup(data: Uint8Array | string): void;
        /**
         * Completes the filtering.
         * @param inbuf input buffer
         * @param prespace prespace buffer length
         */
        complete(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Copies `filter` into a new GMimeFilter object.
         * @returns a duplicate of @filter.
         */
        copy(): Filter;
        /**
         * Filters the input data and writes it to `out`.
         * @param inbuf input buffer
         * @param prespace prespace buffer length
         */
        filter(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Resets the filter.
         */
        reset(): void;
        /**
         * Ensure this much size is available for filter output (if required)
         * @param size requested size for the output buffer
         * @param keep %TRUE if existing data in the output buffer should be kept
         */
        set_size(size: number, keep: boolean): void;
    }

    namespace FilterBasic {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A basic encoder/decoder filter for the MIME encodings.
     */
    class FilterBasic extends Filter {
        static $gtype: GObject.GType<FilterBasic>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterBasic.SignalSignatures;

        // Fields

        parent_object: Filter;

        // Constructors

        constructor(properties?: Partial<FilterBasic.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](encoding: ContentEncoding, encode: boolean): FilterBasic;

        // Signals

        connect<K extends keyof FilterBasic.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterBasic.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterBasic.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterBasic.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterBasic.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterBasic.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterBest {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for calculating the best encoding and/or charset to encode
     * the data passed through it.
     */
    class FilterBest extends Filter {
        static $gtype: GObject.GType<FilterBest>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterBest.SignalSignatures;

        // Fields

        parent_object: Filter;
        flags: FilterBestFlags;
        count0: number;
        count8: number;
        total: number;
        maxline: number;
        linelen: number;
        frombuf: Uint8Array;
        fromlen: number;
        hadfrom: number;
        startline: number;
        midline: number;

        // Constructors

        constructor(properties?: Partial<FilterBest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: FilterBestFlags): FilterBest;

        // Signals

        connect<K extends keyof FilterBest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterBest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterBest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterBest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterBest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterBest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Calculates the best charset for encoding the stream filtered
         * through the `best` filter.
         * @returns a pointer to a string containing the name of the charset best suited for the text filtered through @best.
         */
        charset(): string;
        /**
         * Calculates the most efficient Content-Transfer-Encoding for the
         * stream filtered through `best` that fits within the encoding
         * `constraint`.
         * @param constraint a #GMimeEncodingConstraint
         * @returns the best encoding for the stream filtered by @best.
         */
        encoding(constraint: EncodingConstraint | null): ContentEncoding;
    }

    namespace FilterCRLF {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter to convert between line-ending formats and encode/decode
     * lines beginning with a '.'.
     */
    class FilterCRLF extends Filter {
        static $gtype: GObject.GType<FilterCRLF>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterCRLF.SignalSignatures;

        // Fields

        parent_object: Filter;
        encode: boolean;
        dots: boolean;
        saw_cr: boolean;
        saw_lf: boolean;
        saw_dot: boolean;

        // Constructors

        constructor(properties?: Partial<FilterCRLF.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](encode: boolean, dots: boolean): FilterCRLF;

        // Signals

        connect<K extends keyof FilterCRLF.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterCRLF.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterCRLF.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterCRLF.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterCRLF.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterCRLF.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterCharset {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter to convert between charsets.
     */
    class FilterCharset extends Filter {
        static $gtype: GObject.GType<FilterCharset>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterCharset.SignalSignatures;

        // Fields

        parent_object: Filter;
        from_charset: string;
        to_charset: string;

        // Constructors

        constructor(properties?: Partial<FilterCharset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](from_charset: string, to_charset: string): FilterCharset;

        // Signals

        connect<K extends keyof FilterCharset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterCharset.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterCharset.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterCharset.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterCharset.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterCharset.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterEnriched {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for converting text/enriched or text/richtext textual
     * streams into text/html.
     */
    class FilterEnriched extends Filter {
        static $gtype: GObject.GType<FilterEnriched>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterEnriched.SignalSignatures;

        // Fields

        parent_object: Filter;
        flags: number;
        nofill: number;

        // Constructors

        constructor(properties?: Partial<FilterEnriched.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: number): FilterEnriched;

        // Signals

        connect<K extends keyof FilterEnriched.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterEnriched.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterEnriched.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterEnriched.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterEnriched.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterEnriched.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterFrom {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for armoring or escaping lines beginning with "From ".
     */
    class FilterFrom extends Filter {
        static $gtype: GObject.GType<FilterFrom>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterFrom.SignalSignatures;

        // Fields

        parent_object: Filter;
        mode: FilterFromMode;
        midline: boolean;

        // Constructors

        constructor(properties?: Partial<FilterFrom.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mode: FilterFromMode): FilterFrom;

        // Signals

        connect<K extends keyof FilterFrom.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterFrom.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterFrom.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterFrom.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterFrom.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterFrom.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterGZip {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for compresing or decompressing a gzip stream.
     */
    class FilterGZip extends Filter {
        static $gtype: GObject.GType<FilterGZip>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterGZip.SignalSignatures;

        // Fields

        parent_object: Filter;
        priv: any;
        mode: FilterGZipMode;
        level: number;

        // Constructors

        constructor(properties?: Partial<FilterGZip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mode: FilterGZipMode, level: number): FilterGZip;

        // Signals

        connect<K extends keyof FilterGZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterGZip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterGZip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterGZip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterGZip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterGZip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterHTML {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for converting text/plain into text/html.
     */
    class FilterHTML extends Filter {
        static $gtype: GObject.GType<FilterHTML>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterHTML.SignalSignatures;

        // Fields

        parent_object: Filter;
        scanner: any;
        flags: number;
        colour: number;
        column: number;
        pre_open: number;

        // Constructors

        constructor(properties?: Partial<FilterHTML.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: number, colour: number): FilterHTML;

        // Signals

        connect<K extends keyof FilterHTML.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterHTML.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterHTML.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterHTML.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterHTML.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterHTML.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterMd5 {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for calculating the MD5 checksum of a stream.
     */
    class FilterMd5 extends Filter {
        static $gtype: GObject.GType<FilterMd5>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterMd5.SignalSignatures;

        // Fields

        parent_object: Filter;
        priv: any;

        // Constructors

        constructor(properties?: Partial<FilterMd5.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FilterMd5;

        // Signals

        connect<K extends keyof FilterMd5.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterMd5.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterMd5.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterMd5.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterMd5.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterMd5.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Outputs the md5 digest into `digest`.
         * @param digest output buffer of at least 16 bytes
         */
        get_digest(digest: number): void;
    }

    namespace FilterStrip {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for stripping whitespace from the end of lines.
     */
    class FilterStrip extends Filter {
        static $gtype: GObject.GType<FilterStrip>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterStrip.SignalSignatures;

        // Fields

        parent_object: Filter;

        // Constructors

        constructor(properties?: Partial<FilterStrip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FilterStrip;

        // Signals

        connect<K extends keyof FilterStrip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterStrip.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterStrip.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterStrip.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterStrip.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterStrip.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FilterWindows {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for detecting whether or not a text stream claimed to be
     * iso-8859-X is really that charset or if it is really a
     * Windows-CP125x charset.
     */
    class FilterWindows extends Filter {
        static $gtype: GObject.GType<FilterWindows>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterWindows.SignalSignatures;

        // Fields

        parent_object: Filter;
        is_windows: boolean;
        claimed_charset: string;

        // Constructors

        constructor(properties?: Partial<FilterWindows.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](claimed_charset: string): FilterWindows;

        // Signals

        connect<K extends keyof FilterWindows.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterWindows.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterWindows.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterWindows.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterWindows.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterWindows.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Determines whether or not a Windows-CP125# charset has been
         * detected so far.
         * @returns %TRUE if the filtered stream has been detected to contain Windows-CP125# characters or %FALSE otherwise.
         */
        is_windows_charset(): boolean;
        /**
         * Figures out the real charset that the text is encoded in based on whether or not Windows-CP125# characters were found.
         * @returns a const string pointer to the claimed charset if filtered text stream was found not to contain any Windows-CP125# characters or the proper Windows-CP125# charset.
         */
        real_charset(): string;
    }

    namespace FilterYenc {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for yEncoding or yDecoding a stream.
     */
    class FilterYenc extends Filter {
        static $gtype: GObject.GType<FilterYenc>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: FilterYenc.SignalSignatures;

        // Fields

        parent_object: Filter;
        encode: boolean;
        part: number;
        state: number;
        pcrc: number;
        crc: number;

        // Constructors

        constructor(properties?: Partial<FilterYenc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](encode: boolean): FilterYenc;

        // Signals

        connect<K extends keyof FilterYenc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterYenc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FilterYenc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FilterYenc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FilterYenc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FilterYenc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the computed crc or (guint32) -1 on fail.
         * @returns the computed crc or (guint32) -1 on fail.
         */
        get_crc(): number;
        /**
         * Get the computed part crc or (guint32) -1 on fail.
         * @returns the computed part crc or (guint32) -1 on fail.
         */
        get_pcrc(): number;
        /**
         * Sets the current crc32 value on the yEnc filter `yenc` to `crc`.
         * @param crc crc32
         */
        set_crc(crc: number): void;
        /**
         * Sets the current state of the yencoder/ydecoder
         * @param state encode/decode state
         */
        set_state(state: number): void;
    }

    namespace GpgContext {
        // Signal signatures
        interface SignalSignatures extends CryptoContext.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends CryptoContext.ConstructorProps {}
    }

    /**
     * A GnuPG crypto context.
     */
    class GpgContext extends CryptoContext {
        static $gtype: GObject.GType<GpgContext>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: GpgContext.SignalSignatures;

        // Fields

        parent_object: CryptoContext;
        auto_key_retrieve: boolean;
        always_trust: boolean;
        use_agent: boolean;
        path: string;
        retrieve_session_key: boolean;
        version: number;

        // Constructors

        constructor(properties?: Partial<GpgContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof GpgContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GpgContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GpgContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GpgContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GpgContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GpgContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whther or not gpg should always trust keys when encrypting.
         * @returns %TRUE if gpg should always trust keys when encrypting or %FALSE otherwise.
         */
        get_always_trust(): boolean;
        /**
         * Gets whether or not gpg should auto-retrieve keys from a keyserver
         * when verifying signatures.
         * @returns %TRUE if gpg should auto-retrieve keys from a keyserver or %FALSE otherwise.
         */
        get_auto_key_retrieve(): boolean;
        /**
         * Gets whether or not gpg should attempt to use the gpg-agent when
         * requesting credentials.
         * @returns %TRUE if the gpg-agent should be used when requesting credentials or %FALSE otherwise.
         */
        get_use_agent(): boolean;
        /**
         * Sets whether or not gpg should always trust keys when encrypting.
         * @param always_trust %TRUE if gpg should always trust keys when encrypting
         */
        set_always_trust(always_trust: boolean): void;
        /**
         * Sets whether or not gpg should auto-retrieve keys from a keyserver
         * when verifying signatures.
         * @param auto_key_retrieve %TRUE if gpg should auto-retrieve keys from a keys server
         */
        set_auto_key_retrieve(auto_key_retrieve: boolean): void;
        /**
         * Sets whether or not gpg should attempt to use the gpg-agent when
         * requesting credentials.
         * @param use_agent use agent flag
         */
        set_use_agent(use_agent: boolean): void;
    }

    namespace InternetAddress {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An RFC 2822 Address object.
     */
    abstract class InternetAddress extends GObject.Object {
        static $gtype: GObject.GType<InternetAddress>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: InternetAddress.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;
        name: string;

        // Constructors

        constructor(properties?: Partial<InternetAddress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof InternetAddress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddress.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InternetAddress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddress.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InternetAddress.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InternetAddress.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_to_string(flags: number, linelen: number, out: GLib.String): void;

        // Methods

        /**
         * Gets the display name of the #InternetAddress.
         * @returns the name of the mailbox or group in a form suitable for display if available or %NULL otherwise. If the name is available, the returned string will be in UTF-8.
         */
        get_name(): string;
        /**
         * Set the display name of the #InternetAddress.
         *
         * Note: The `name` string should be in UTF-8.
         * @param name the display name for the address group or mailbox
         */
        set_name(name: string): void;
        /**
         * Allocates a string containing the contents of the #InternetAddress
         * object.
         * @param encode %TRUE if the address should be rfc2047 encoded
         * @returns the #InternetAddress object as an allocated string in rfc822 format.
         */
        to_string(encode: boolean): string;
    }

    namespace InternetAddressGroup {
        // Signal signatures
        interface SignalSignatures extends InternetAddress.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends InternetAddress.ConstructorProps {}
    }

    /**
     * An RFC 2822 Group address.
     */
    class InternetAddressGroup extends InternetAddress {
        static $gtype: GObject.GType<InternetAddressGroup>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: InternetAddressGroup.SignalSignatures;

        // Fields

        parent_object: InternetAddress;
        members: InternetAddressList;

        // Constructors

        constructor(properties?: Partial<InternetAddressGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): InternetAddressGroup;

        // Signals

        connect<K extends keyof InternetAddressGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InternetAddressGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InternetAddressGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InternetAddressGroup.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a contact to the internet address group.
         * @param member a #InternetAddress
         * @returns the index of the newly added member.
         */
        add_member(member: InternetAddress): number;
        /**
         * Gets the #InternetAddressList containing the group members of an
         * rfc822 group address.
         * @returns a #InternetAddressList containing the members of @group.
         */
        get_members(): InternetAddressList;
        /**
         * Set the members of the internet address group.
         * @param members a #InternetAddressList
         */
        set_members(members: InternetAddressList): void;
    }

    namespace InternetAddressList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A collection of #InternetAddress objects.
     */
    class InternetAddressList extends GObject.Object {
        static $gtype: GObject.GType<InternetAddressList>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: InternetAddressList.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;
        array: any[];

        // Constructors

        constructor(properties?: Partial<InternetAddressList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InternetAddressList;

        // Signals

        connect<K extends keyof InternetAddressList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InternetAddressList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InternetAddressList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InternetAddressList.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Construct a list of internet addresses from the given string.
         * @param str a string containing internet addresses
         */
        static parse_string(str: string): InternetAddressList;

        // Methods

        /**
         * Adds an #InternetAddress to the #InternetAddressList.
         * @param ia a #InternetAddress
         * @returns the index of the added #InternetAddress.
         */
        add(ia: InternetAddress): number;
        /**
         * Adds all of the addresses in `append` to `list`.
         * @param append a #InternetAddressList
         */
        append(append: InternetAddressList): void;
        /**
         * Clears the list of addresses.
         */
        clear(): void;
        /**
         * Checks whether or not the specified #InternetAddress is contained
         * within the #InternetAddressList.
         * @param ia a #InternetAddress
         * @returns %TRUE if the specified #InternetAddress is contained within the specified #InternetAddressList or %FALSE otherwise.
         */
        contains(ia: InternetAddress): boolean;
        /**
         * Gets the #InternetAddress at the specified index.
         * @param index index of #InternetAddress to get
         * @returns the #InternetAddress at the specified index or %NULL if the index is out of range.
         */
        get_address(index: number): InternetAddress;
        /**
         * Gets the index of the specified #InternetAddress inside the
         * #InternetAddressList.
         * @param ia a #InternetAddress
         * @returns the index of the requested #InternetAddress within the #InternetAddressList or %-1 if it is not contained within the #InternetAddressList.
         */
        index_of(ia: InternetAddress): number;
        /**
         * Inserts an #InternetAddress into the #InternetAddressList at the
         * specified index.
         * @param index index to insert at
         * @param ia a #InternetAddress
         */
        insert(index: number, ia: InternetAddress): void;
        /**
         * Gets the length of the list.
         * @returns the number of #InternetAddress objects in the list.
         */
        length(): number;
        /**
         * Inserts all of the addresses in `prepend` to the beginning of `list`.
         * @param prepend a #InternetAddressList
         */
        prepend(prepend: InternetAddressList): void;
        /**
         * Removes an #InternetAddress from the #InternetAddressList.
         * @param ia a #InternetAddress
         * @returns %TRUE if the specified #InternetAddress was removed or %FALSE otherwise.
         */
        remove(ia: InternetAddress): boolean;
        /**
         * Removes an #InternetAddress from the #InternetAddressList at the
         * specified index.
         * @param index index to remove
         * @returns %TRUE if an #InternetAddress was removed or %FALSE otherwise.
         */
        remove_at(index: number): boolean;
        /**
         * Sets the #InternetAddress at the specified index to `ia`.
         * @param index index of #InternetAddress to set
         * @param ia a #InternetAddress
         */
        set_address(index: number, ia: InternetAddress): void;
        /**
         * Allocates a string buffer containing the rfc822 formatted addresses
         * in `list`.
         * @param encode %TRUE if the address should be rfc2047 encoded
         * @returns a string containing the list of addresses in rfc822 format or %NULL if no addresses are contained in the list.
         */
        to_string(encode: boolean): string;
        /**
         * Writes the rfc2047-encoded rfc822 formatted addresses in `list` to
         * `str,` folding appropriately.
         * @param str string to write to
         */
        writer(str: GLib.String): void;
    }

    namespace InternetAddressMailbox {
        // Signal signatures
        interface SignalSignatures extends InternetAddress.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends InternetAddress.ConstructorProps {}
    }

    /**
     * An RFC 2822 Mailbox address.
     */
    class InternetAddressMailbox extends InternetAddress {
        static $gtype: GObject.GType<InternetAddressMailbox>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: InternetAddressMailbox.SignalSignatures;

        // Fields

        parent_object: InternetAddress;
        addr: string;

        // Constructors

        constructor(properties?: Partial<InternetAddressMailbox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, addr: string): InternetAddressMailbox;

        // Signals

        connect<K extends keyof InternetAddressMailbox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressMailbox.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InternetAddressMailbox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InternetAddressMailbox.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InternetAddressMailbox.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InternetAddressMailbox.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the addr-spec of the internet address mailbox.
         * @returns the address of the mailbox.
         */
        get_addr(): string;
        /**
         * Set the mailbox address.
         * @param addr contact's email address
         */
        set_addr(addr: string): void;
    }

    namespace Message {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * A MIME Message object.
     */
    class Message extends Object {
        static $gtype: GObject.GType<Message>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Message.SignalSignatures;

        // Fields

        parent_object: Object;
        recipients: InternetAddressList;
        mime_part: Object;
        message_id: string;
        reply_to: string;
        subject: string;
        from: string;
        date: number;
        tz_offset: number;

        // Constructors

        constructor(properties?: Partial<Message.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](pretty_headers: boolean): Message;
        // Conflicted with GMime.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Message.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Message.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a recipient of a chosen type to the MIME message.
         *
         * Note: The `name` (and `addr)` strings should be in UTF-8.
         * @param type A #GMimeRecipientType
         * @param name The recipient's name (or %NULL)
         * @param addr The recipient's address
         */
        add_recipient(type: RecipientType | null, name: string, addr: string): void;
        /**
         * Recursively calls `callback` on each of the mime parts in the mime message.
         * @param callback function to call on each of the mime parts   contained by the mime message
         */
        foreach(callback: ObjectForeachFunc): void;
        /**
         * Gets the complete list of recipients for `message`.
         * @returns a newly allocated #InternetAddressList containing all recipients of the message or %NULL if no recipients are set.
         */
        get_all_recipients(): InternetAddressList;
        /**
         * Attempts to identify the MIME part containing the body of the
         * message.
         * @returns a #GMimeObject containing the textual content that appears to be the main body of the message. Note: This function is NOT guarenteed to always work as it makes some assumptions that are not necessarily true. It is recommended that you traverse the MIME structure yourself.
         */
        get_body(): Object;
        /**
         * Stores the date in time_t format in `date`. If `tz_offset` is
         * non-%NULL, then the timezone offset in will be stored in
         * `tz_offset`.
         */
        get_date(): [number, number];
        /**
         * Gets the message's sent-date in string format.
         * @returns a newly allocated string containing the Date header value.
         */
        get_date_as_string(): string;
        /**
         * Gets the Message-Id header of `message`.
         * @returns the Message-Id of a message.
         */
        get_message_id(): string;
        /**
         * Gets the toplevel MIME part contained within `message`.
         * @returns the toplevel MIME part of @message.
         */
        get_mime_part(): Object;
        /**
         * Gets a list of recipients of the specified `type` from the `message`.
         * @param type A #GMimeRecipientType
         * @returns a list of recipients of the specified @type from the @message.
         */
        get_recipients(type: RecipientType | null): InternetAddressList;
        /**
         * Gets the Reply-To address from `message`.
         * @returns the sender's Reply-To address in a form suitable for display or %NULL if no Reply-To address is set. If not %NULL, the returned string will be in UTF-8.
         */
        get_reply_to(): string;
        /**
         * Gets the email address of the sender from `message`.
         * @returns the sender's name and address of the @message in a form suitable for display or %NULL if no sender is set. If not %NULL, the returned string will be in UTF-8.
         */
        get_sender(): string;
        /**
         * Gets the subject of the `message`.
         * @returns the subject of the @message in a form suitable for display or %NULL if no subject is set. If not %NULL, the returned string will be in UTF-8.
         */
        get_subject(): string;
        /**
         * Splits `message` into an array of #GMimeMessage objects each
         * containing a single #GMimeMessagePartial object containing
         * `max_size` bytes or fewer. `nparts` is set to the number of
         * #GMimeMessagePartial objects created.
         * @param max_size max size
         * @param nparts number of parts
         * @returns an array of #GMimeMessage objects and sets @nparts to the number of messages returned or %NULL on fail.
         */
        partial_split_message(max_size: number, nparts: number): Message;
        /**
         * Sets the Date header on a MIME Message.
         * @param date a date to be used in the Date header
         * @param tz_offset timezone offset (in +/- hours)
         */
        set_date(date: number, tz_offset: number): void;
        /**
         * Sets the sent-date of the message.
         * @param str a date string
         */
        set_date_as_string(str: string): void;
        /**
         * Set the Message-Id on a message.
         * @param message_id message-id (addr-spec portion)
         */
        set_message_id(message_id: string): void;
        /**
         * Set the root-level MIME part of the message.
         * @param mime_part The root-level MIME Part
         */
        set_mime_part(mime_part: Object): void;
        /**
         * Set the sender's Reply-To address on the `message`.
         *
         * Note: The `reply_to` string should be the raw encoded email
         * address. It is probably best to use an #InternetAddress to
         * construct and encode this value.
         * @param reply_to The Reply-To address
         */
        set_reply_to(reply_to: string): void;
        /**
         * Set the sender's name and address on the MIME Message.
         * (ex: "\"Joe Sixpack\" &lt;joe`sixpack`.org&gt;")
         *
         * Note: The `sender` string should be the raw encoded email
         * address. It is probably best to use an #InternetAddress to
         * construct and encode this value.
         * @param sender The name and address of the sender
         */
        set_sender(sender: string): void;
        /**
         * Set the subject of a `message`.
         *
         * Note: The `subject` string should be in UTF-8.
         * @param subject Subject string
         */
        set_subject(subject: string): void;
    }

    namespace MessagePart {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * A message/rfc822 or message/news MIME part.
     */
    class MessagePart extends Object {
        static $gtype: GObject.GType<MessagePart>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: MessagePart.SignalSignatures;

        // Fields

        parent_object: Object;
        message: Message;

        // Constructors

        constructor(properties?: Partial<MessagePart.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](subtype: string): MessagePart;
        // Conflicted with GMime.Object.new

        static ['new'](...args: never[]): any;

        static new_with_message(subtype: string, message: Message): MessagePart;

        // Signals

        connect<K extends keyof MessagePart.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessagePart.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MessagePart.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessagePart.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MessagePart.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessagePart.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the message object on the message part object `part`.
         * @returns the message part contained within @part.
         */
        get_message(): Message;
        /**
         * Sets the `message` object on the message part object `part`.
         * @param message message
         */
        set_message(message: Message): void;
    }

    namespace MessagePartial {
        // Signal signatures
        interface SignalSignatures extends Part.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Part.ConstructorProps {}
    }

    /**
     * A message/partial MIME part.
     */
    class MessagePartial extends Part {
        static $gtype: GObject.GType<MessagePartial>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: MessagePartial.SignalSignatures;

        // Fields

        parent_object: Part;
        number: number;
        total: number;
        id: string;

        // Constructors

        constructor(properties?: Partial<MessagePartial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](id: string, number: number, total: number): MessagePartial;
        // Conflicted with GMime.Part.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof MessagePartial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessagePartial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MessagePartial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessagePartial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MessagePartial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessagePartial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Reconstructs the GMimeMessage from the given message/partial parts
         * in `partials`.
         * @param partials an array of message/partial mime parts
         * @param num the number of elements in @partials
         */
        static reconstruct_message(partials: MessagePartial, num: number): Message;

        // Methods

        /**
         * Gets the message/partial id parameter value.
         * @returns the message/partial id or %NULL on fail.
         */
        get_id(): string;
        /**
         * Gets the message/partial part number.
         * @returns the message/partial part number or %-1 on fail.
         */
        get_number(): number;
        /**
         * Gets the total number of message/partial parts needed to
         * reconstruct the original message.
         * @returns the total number of message/partial parts needed to reconstruct the original message or -1 on fail.
         */
        get_total(): number;
    }

    namespace Multipart {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * A base MIME multipart object.
     */
    class Multipart extends Object {
        static $gtype: GObject.GType<Multipart>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Multipart.SignalSignatures;

        // Fields

        parent_object: Object;
        children: any[];
        boundary: string;
        preface: string;
        postface: string;

        // Constructors

        constructor(properties?: Partial<Multipart.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Multipart;

        static new_with_subtype(subtype: string): Multipart;

        // Signals

        connect<K extends keyof Multipart.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Multipart.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Multipart.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Multipart.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Multipart.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Multipart.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Appends a mime part to `multipart`.
         * @param part a #GMimeObject
         */
        vfunc_add(part: Object): void;
        /**
         * Removes all subparts from `multipart`.
         */
        vfunc_clear(): void;
        /**
         * Checks if `part` is contained within `multipart`.
         * @param part a #GMimeObject
         */
        vfunc_contains(part: Object): boolean;
        /**
         * Gets the boundary on the multipart. If the internal boundary is
         * %NULL, then an auto-generated boundary will be set on the multipart
         * and returned.
         */
        vfunc_get_boundary(): string;
        /**
         * Gets the number of parts contained within `multipart`.
         */
        vfunc_get_count(): number;
        /**
         * Gets the part at the specified `index` within the multipart.
         * @param index the 0-based index of the part
         */
        vfunc_get_part(index: number): Object;
        /**
         * Gets the 0-based index of `part` within `multipart`.
         * @param part a #GMimeObject
         */
        vfunc_index_of(part: Object): number;
        /**
         * Inserts `part` into `multipart` at the specified `index`.
         * @param index the 0-based index to insert the part
         * @param part a #GMimeObject
         */
        vfunc_insert(index: number, part: Object): void;
        /**
         * Removes the specified `part` from `multipart`.
         * @param part a #GMimeObject
         */
        vfunc_remove(part: Object): boolean;
        /**
         * Removes the part at the specified `index` from `multipart`.
         * @param index the 0-based index of the part to remove
         */
        vfunc_remove_at(index: number): Object;
        /**
         * Sets `boundary` as the boundary on the multipart. If `boundary` is
         * %NULL, then a boundary will be auto-generated for you.
         * @param boundary boundary or %NULL to autogenerate one
         */
        vfunc_set_boundary(boundary: string): void;

        // Methods

        /**
         * Appends a mime part to `multipart`.
         * @param part a #GMimeObject
         */
        add(part: Object): void;
        /**
         * Removes all subparts from `multipart`.
         */
        clear(): void;
        /**
         * Checks if `part` is contained within `multipart`.
         * @param part a #GMimeObject
         * @returns %TRUE if @part is a subpart of @multipart or %FALSE otherwise.
         */
        contains(part: Object): boolean;
        /**
         * Recursively calls `callback` on each of `multipart'`s subparts.
         * @param callback function to call for each of @multipart's   subparts.
         */
        foreach(callback: ObjectForeachFunc): void;
        /**
         * Gets the boundary on the multipart. If the internal boundary is
         * %NULL, then an auto-generated boundary will be set on the multipart
         * and returned.
         * @returns the boundary on the multipart.
         */
        get_boundary(): string;
        /**
         * Gets the number of parts contained within `multipart`.
         * @returns the number of parts contained within @multipart.
         */
        get_count(): number;
        /**
         * Gets the part at the specified `index` within the multipart.
         * @param index the 0-based index of the part
         * @returns the part at position @index.
         */
        get_part(index: number): Object;
        /**
         * Gets the postface on the multipart.
         * @returns a pointer to the postface string on the multipart.
         */
        get_postface(): string;
        /**
         * Gets the preface on the multipart.
         * @returns a pointer to the preface string on the multipart.
         */
        get_preface(): string;
        /**
         * Gets the mime part with the content-id `content_id` from the
         * multipart `multipart`.
         * @param content_id the content id of the part to look for
         * @returns the #GMimeObject whose content-id matches the search string, or %NULL if a match cannot be found.
         */
        get_subpart_from_content_id(content_id: string): Object;
        /**
         * Gets the 0-based index of `part` within `multipart`.
         * @param part a #GMimeObject
         * @returns the 0-based index of @part within @multipart or %-1 if not found.
         */
        index_of(part: Object): number;
        /**
         * Inserts `part` into `multipart` at the specified `index`.
         * @param index the 0-based index to insert the part
         * @param part a #GMimeObject
         */
        insert(index: number, part: Object): void;
        /**
         * Removes the specified `part` from `multipart`.
         * @param part a #GMimeObject
         * @returns %TRUE if the part was removed or %FALSE otherwise.
         */
        remove(part: Object): boolean;
        /**
         * Removes the part at the specified `index` from `multipart`.
         * @param index the 0-based index of the part to remove
         * @returns the mime part that was removed or %NULL if the part was not contained within the multipart.
         */
        remove_at(index: number): Object;
        /**
         * Replaces the part at the specified `index` within `multipart` with
         * `replacement`.
         * @param index the 0-based index of the part to replace
         * @param replacement a #GMimeObject to use as the replacement
         * @returns the part that was replaced or %NULL if the part was not contained within the multipart.
         */
        replace(index: number, replacement: Object): Object;
        /**
         * Sets `boundary` as the boundary on the multipart. If `boundary` is
         * %NULL, then a boundary will be auto-generated for you.
         * @param boundary boundary or %NULL to autogenerate one
         */
        set_boundary(boundary: string): void;
        /**
         * Sets the postface on the multipart.
         * @param postface postface
         */
        set_postface(postface: string): void;
        /**
         * Sets the preface on the multipart.
         * @param preface preface
         */
        set_preface(preface: string): void;
    }

    namespace MultipartEncrypted {
        // Signal signatures
        interface SignalSignatures extends Multipart.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Multipart.ConstructorProps {}
    }

    /**
     * A multipart/encrypted MIME part.
     */
    class MultipartEncrypted extends Multipart {
        static $gtype: GObject.GType<MultipartEncrypted>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: MultipartEncrypted.SignalSignatures;

        // Fields

        parent_object: Multipart;

        // Constructors

        constructor(properties?: Partial<MultipartEncrypted.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MultipartEncrypted;

        // Signals

        connect<K extends keyof MultipartEncrypted.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultipartEncrypted.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MultipartEncrypted.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultipartEncrypted.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MultipartEncrypted.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MultipartEncrypted.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Attempts to decrypt the encrypted MIME part contained within the
         * multipart/encrypted object `mpe` using the `ctx` decryption context.
         *
         * If `result` is non-%NULL, then on a successful decrypt operation, it will be
         * updated to point to a newly-allocated #GMimeDecryptResult with signature
         * status information as well as a list of recipients that the part was
         * encrypted to.
         * @param ctx decryption context
         * @param result a #GMimeDecryptionResult
         * @returns the decrypted MIME part on success or %NULL on fail. If the decryption fails, an exception will be set on @err to provide information as to why the failure occured.
         */
        decrypt(ctx: CryptoContext, result: DecryptResult): Object;
        /**
         * Attempts to decrypt the encrypted MIME part contained within the
         * multipart/encrypted object `mpe` using the `ctx` decryption context
         * trying only the supplied session key.  If `session_key` is
         * non-%NULL, but is not valid for the ciphertext, the decryption will
         * fail even if other available secret key material may have been able
         * to decrypt it. If `session_key` is %NULL, this does the same thing
         * as g_mime_multipart_encrypted_decrypt().
         *
         * When non-%NULL, `session_key` should be a %NULL-terminated string,
         * such as the one returned by g_mime_decrypt_result_get_session_key()
         * from a previous decryption.
         *
         * If `result` is non-%NULL, then on a successful decrypt operation, it will be
         * updated to point to a newly-allocated #GMimeDecryptResult with signature
         * status information as well as a list of recipients that the part was
         * encrypted to.
         * @param ctx decryption context
         * @param session_key session key to use
         * @param result a #GMimeDecryptionResult
         * @returns the decrypted MIME part on success or %NULL on fail. If the decryption fails, an exception will be set on @err to provide information as to why the failure occured.
         */
        decrypt_session(ctx: CryptoContext, session_key: string, result: DecryptResult): Object;
        /**
         * Attempts to encrypt (and conditionally sign) the `content` MIME part
         * to the public keys of `recipients` using the `ctx` encryption
         * context. If successful, the encrypted #GMimeObject is set as the
         * encrypted part of the multipart/encrypted object `mpe`.
         * @param content MIME part to encrypt
         * @param ctx encryption context
         * @param sign %TRUE if the content should also be signed or %FALSE otherwise
         * @param userid user id to use for signing (only used if @sign is %TRUE)
         * @param digest digest algorithm to use when signing
         * @param recipients an array of recipients to encrypt to
         * @returns %0 on success or %-1 on fail. If the encryption fails, an exception will be set on @err to provide information as to why the failure occured.
         */
        encrypt(
            content: Object,
            ctx: CryptoContext,
            sign: boolean,
            userid: string,
            digest: DigestAlgo | null,
            recipients: string[],
        ): number;
    }

    namespace MultipartSigned {
        // Signal signatures
        interface SignalSignatures extends Multipart.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Multipart.ConstructorProps {}
    }

    /**
     * A multipart/signed MIME part.
     */
    class MultipartSigned extends Multipart {
        static $gtype: GObject.GType<MultipartSigned>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: MultipartSigned.SignalSignatures;

        // Fields

        parent_object: Multipart;

        // Constructors

        constructor(properties?: Partial<MultipartSigned.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MultipartSigned;

        // Signals

        connect<K extends keyof MultipartSigned.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultipartSigned.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MultipartSigned.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultipartSigned.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MultipartSigned.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MultipartSigned.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Attempts to sign the `content` MIME part with `userid'`s private key
         * using the `ctx` signing context with the `digest` algorithm. If
         * successful, the signed #GMimeObject is set as the signed part of
         * the multipart/signed object `mps`.
         * @param content MIME part to sign
         * @param ctx encryption crypto context
         * @param userid user id to sign with
         * @param digest preferred digest algorithm
         * @returns %0 on success or %-1 on fail. If the signing fails, an exception will be set on @err to provide information as to why the failure occured.
         */
        sign(content: Object, ctx: CryptoContext, userid: string, digest: DigestAlgo | null): number;
        /**
         * Attempts to verify the signed MIME part contained within the
         * multipart/signed object `mps` using the `ctx` crypto context.
         * @param ctx encryption crypto context
         * @returns a new #GMimeSignatureList object on success or %NULL on fail. If the verification fails, an exception will be set on @err to provide information as to why the failure occured.
         */
        verify(ctx: CryptoContext): SignatureList;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Base class for all MIME parts.
     */
    abstract class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Object.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        disposition: ContentDisposition;
        content_type: ContentType;
        content_id: string;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](content_type: ContentType): Object;

        static new_type(type: string, subtype: string): Object;

        // Signals

        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Registers the object type `object_type` for use with the
         * g_mime_object_new_type() convenience function.
         *
         * Note: You may use the wildcard "*" to match any type and/or
         * subtype.
         * @param type mime type
         * @param subtype mime subtype
         * @param object_type object type
         */
        static register_type(type: string, subtype: string, object_type: GObject.GType): void;
        static type_registry_init(): void;
        static type_registry_shutdown(): void;

        // Virtual methods

        /**
         * Appends a raw, unprocessed header to the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * g_mime_utils_header_encode_text().
         * @param header header name
         * @param value header value
         */
        vfunc_append_header(header: string, value: string): void;
        /**
         * Calculates and sets the most efficient Content-Transfer-Encoding
         * for this #GMimeObject and all child parts based on the `constraint`
         * provided.
         * @param constraint a #GMimeEncodingConstraint
         */
        vfunc_encode(constraint: EncodingConstraint): void;
        /**
         * Gets the raw, unprocessed value of the first header with the specified name.
         * @param header header name
         */
        vfunc_get_header(header: string): string;
        /**
         * Allocates a string buffer containing all of the MIME object's raw
         * headers.
         */
        vfunc_get_headers(): string;
        /**
         * Prepends a raw, unprocessed header to the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * g_mime_utils_header_encode_text().
         * @param header header name
         * @param value header value
         */
        vfunc_prepend_header(header: string, value: string): void;
        /**
         * Removed the specified header if it exists.
         * @param header header name
         */
        vfunc_remove_header(header: string): boolean;
        /**
         * Sets the content-type for the specified MIME object and then
         * serializes it to the Content-Type header field.
         * @param content_type a #GMimeContentType object
         */
        vfunc_set_content_type(content_type: ContentType): void;
        /**
         * Sets an arbitrary raw, unprocessed header on the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * g_mime_utils_header_encode_text().
         * @param header header name
         * @param value header value
         */
        vfunc_set_header(header: string, value: string): void;
        /**
         * Write the contents of the MIME object to `stream`.
         * @param stream stream
         */
        vfunc_write_to_stream(stream: Stream): number;

        // Methods

        /**
         * Appends a raw, unprocessed header to the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * g_mime_utils_header_encode_text().
         * @param header header name
         * @param value header value
         */
        append_header(header: string, value: string): void;
        /**
         * Calculates and sets the most efficient Content-Transfer-Encoding
         * for this #GMimeObject and all child parts based on the `constraint`
         * provided.
         * @param constraint a #GMimeEncodingConstraint
         */
        encode(constraint: EncodingConstraint | null): void;
        /**
         * Gets the #GMimeContentDisposition for the specified MIME object.
         * @returns the #GMimeContentDisposition set on the MIME object.
         */
        get_content_disposition(): ContentDisposition;
        /**
         * Gets the value of the Content-Disposition parameter specified by
         * `name,` or %NULL if the parameter does not exist.
         * @param name parameter name
         * @returns the value of the requested content-disposition param or %NULL if the param doesn't exist. If the param is set, the returned string will be in UTF-8.
         */
        get_content_disposition_parameter(name: string): string;
        /**
         * Gets the Content-Id of the MIME object or NULL if one is not set.
         * @returns a const pointer to the Content-Id header.
         */
        get_content_id(): string;
        /**
         * Gets the #GMimeContentType object for the given MIME object or
         * %NULL on fail.
         * @returns the content-type object for the specified MIME object.
         */
        get_content_type(): ContentType;
        /**
         * Gets the value of the content-type param `name` set on the MIME part
         * `object`.
         * @param name param name
         * @returns the value of the requested content-type param or %NULL if the param doesn't exist. If the param is set, the returned string will be in UTF-8.
         */
        get_content_type_parameter(name: string): string;
        /**
         * Gets the MIME object's disposition if set or %NULL otherwise.
         * @returns the disposition string which is probably one of #GMIME_DISPOSITION_ATTACHMENT or #GMIME_DISPOSITION_INLINE.
         */
        get_disposition(): string;
        /**
         * Gets the raw, unprocessed value of the first header with the specified name.
         * @param header header name
         * @returns the raw, unprocessed value of the requested header if it exists or %NULL otherwise. Note: The returned value should be decoded with a function such as g_mime_utils_header_decode_text() before displaying to the user.
         */
        get_header(header: string): string;
        /**
         * Get the header list for `object`.
         * @returns the #GMimeHeaderList for @object. Do not free this pointer when you are done with it.
         */
        get_header_list(): HeaderList;
        /**
         * Allocates a string buffer containing all of the MIME object's raw
         * headers.
         * @returns an allocated string containing all of the raw MIME headers. Note: The returned string will not be suitable for display.
         */
        get_headers(): string;
        /**
         * Prepends a raw, unprocessed header to the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * g_mime_utils_header_encode_text().
         * @param header header name
         * @param value header value
         */
        prepend_header(header: string, value: string): void;
        /**
         * Removed the specified header if it exists.
         * @param header header name
         * @returns %TRUE if the header was removed or %FALSE if it could not be found.
         */
        remove_header(header: string): boolean;
        /**
         * Set the content disposition for the specified mime part and then
         * serializes it to the Content-Disposition header field.
         * @param disposition a #GMimeContentDisposition object
         */
        set_content_disposition(disposition: ContentDisposition): void;
        /**
         * Add a content-disposition parameter to the specified mime part.
         *
         * Note: The `name` string should be in US-ASCII while the `value`
         * string should be in UTF-8.
         * @param name parameter name
         * @param value parameter value
         */
        set_content_disposition_parameter(name: string, value: string): void;
        /**
         * Sets the Content-Id of the MIME object.
         * @param content_id content-id (addr-spec portion)
         */
        set_content_id(content_id: string): void;
        /**
         * Sets the content-type for the specified MIME object and then
         * serializes it to the Content-Type header field.
         * @param content_type a #GMimeContentType object
         */
        set_content_type(content_type: ContentType): void;
        /**
         * Sets the content-type param `name` to the value `value`.
         *
         * Note: The `name` string should be in US-ASCII while the `value`
         * string should be in UTF-8.
         * @param name param name
         * @param value param value
         */
        set_content_type_parameter(name: string, value: string): void;
        /**
         * Sets the disposition to `disposition` which may be one of
         * #GMIME_DISPOSITION_ATTACHMENT or #GMIME_DISPOSITION_INLINE or, by
         * your choice, any other string which would indicate how the MIME
         * part should be displayed by the MUA.
         * @param disposition disposition ("attachment" or "inline")
         */
        set_disposition(disposition: string): void;
        /**
         * Sets an arbitrary raw, unprocessed header on the MIME object.
         *
         * Note: `value` should be encoded with a function such as
         * g_mime_utils_header_encode_text().
         * @param header header name
         * @param value header value
         */
        set_header(header: string, value: string): void;
        /**
         * Allocates a string buffer containing the contents of `object`.
         * @returns an allocated string containing the contents of the mime object.
         */
        to_string(): string;
        /**
         * Write the contents of the MIME object to `stream`.
         * @param stream stream
         * @returns the number of bytes written or %-1 on fail.
         */
        write_to_stream(stream: Stream): number;
    }

    namespace Parser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A MIME parser context.
     */
    class Parser extends GObject.Object {
        static $gtype: GObject.GType<Parser>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Parser.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        priv: any;

        // Constructors

        constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Parser;

        static new_with_stream(stream: Stream): Parser;

        // Signals

        connect<K extends keyof Parser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Parser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Parser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Parser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Parser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Constructs a MIME message from `parser`.
         * @returns a MIME message or %NULL on fail.
         */
        construct_message(): Message;
        /**
         * Constructs a MIME part from `parser`.
         * @returns a MIME part based on @parser or %NULL on fail.
         */
        construct_part(): Object;
        /**
         * Tests the end-of-stream indicator for `parser'`s internal stream.
         * @returns %TRUE on EOS or %FALSE otherwise.
         */
        eos(): boolean;
        /**
         * Gets the mbox-style From-line of the most recently parsed message
         * (gotten from g_mime_parser_construct_message()).
         * @returns the mbox-style From-line of the most recently parsed message or %NULL on error.
         */
        get_from(): string;
        /**
         * Gets the offset of the most recently parsed mbox-style From-line
         * (gotten from g_mime_parser_construct_message()).
         * @returns the offset of the most recently parsed mbox-style From-line or %-1 on error.
         */
        get_from_offset(): number;
        /**
         * Gets the stream offset of the beginning of the headers of the most
         * recently parsed message.
         * @returns the offset of the beginning of the headers of the most recently parsed message or %-1 on error.
         */
        get_headers_begin(): number;
        /**
         * Gets the stream offset of the end of the headers of the most
         * recently parsed message.
         * @returns the offset of the end of the headers of the most recently parsed message or %-1 on error.
         */
        get_headers_end(): number;
        /**
         * Gets whether or not the underlying stream is persistent.
         * @returns %TRUE if the @parser will leave the content on disk or %FALSE if it will load the content into memory.
         */
        get_persist_stream(): boolean;
        /**
         * Gets whether or not `parser` is set to use Content-Length for
         * determining the offset of the end of the message.
         * @returns whether or not @parser is set to use Content-Length for determining the offset of the end of the message.
         */
        get_respect_content_length(): boolean;
        /**
         * Gets whether or not `parser` is set to scan mbox-style From-lines.
         * @returns whether or not @parser is set to scan mbox-style From-lines.
         */
        get_scan_from(): boolean;
        /**
         * Initializes `parser` to use `stream`.
         *
         * WARNING: Initializing a parser with a stream is comparable to
         * selling your soul (`stream)` to the devil (`parser)`. You are
         * basically giving the parser complete control of the stream, this
         * means that you had better not touch the stream so long as the
         * parser is still using it. This means no reading, writing, seeking,
         * or resetting of the stream. Anything that will/could change the
         * current stream's offset is PROHIBITED.
         *
         * It is also recommended that you not use g_mime_stream_tell()
         * because it will not necessarily give you the current `parser` offset
         * since `parser` handles its own internal read-ahead buffer. Instead,
         * it is recommended that you use g_mime_parser_tell() if you have a
         * reason to need the current offset of the `parser`.
         * @param stream raw message or part stream
         */
        init_with_stream(stream: Stream): void;
        /**
         * Sets whether or not the `parser'`s underlying stream is persistent.
         *
         * If `persist` is %TRUE, the `parser` will attempt to construct
         * messages/parts whose content will remain on disk rather than being
         * loaded into memory so as to reduce memory usage. This is the default.
         *
         * If `persist` is %FALSE, the `parser` will always load message content
         * into memory.
         *
         * Note: This attribute only serves as a hint to the `parser`. If the
         * underlying stream does not support seeking, then this attribute
         * will be ignored.
         *
         * By default, this feature is enabled if the underlying stream is seekable.
         * @param persist persist attribute
         */
        set_persist_stream(persist: boolean): void;
        /**
         * Sets whether or not `parser` should respect Content-Length headers
         * when deciding where to look for the start of the next message. Only
         * used when the parser is also set to scan for From-lines.
         *
         * Most notably useful when parsing broken Solaris mbox files (See
         * http://www.jwz.org/doc/content-length.html for details).
         *
         * By default, this feature is disabled.
         * @param respect_content_length %TRUE if the parser should use Content-Length headers or %FALSE otherwise.
         */
        set_respect_content_length(respect_content_length: boolean): void;
        /**
         * Sets whether or not `parser` should scan mbox-style From-lines.
         *
         * By default, this feature is disabled.
         * @param scan_from %TRUE to scan From-lines or %FALSE otherwise
         */
        set_scan_from(scan_from: boolean): void;
        /**
         * Gets the current stream offset from the parser's internal stream.
         * @returns the current stream offset from the parser's internal stream or %-1 on error.
         */
        tell(): number;
    }

    namespace Part {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * A leaf-node MIME part object.
     */
    class Part extends Object {
        static $gtype: GObject.GType<Part>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Part.SignalSignatures;

        // Fields

        parent_object: Object;
        encoding: ContentEncoding;
        content_description: string;
        content_location: string;
        content_md5: string;
        content: DataWrapper;

        // Constructors

        constructor(properties?: Partial<Part.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Part;

        static new_with_type(type: string, subtype: string): Part;

        // Signals

        connect<K extends keyof Part.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Part.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Part.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Part.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Part.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Part.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Sets the content object on the mime part.
         * @param content a #GMimeDataWrapper content object
         */
        vfunc_set_content_object(content: DataWrapper): void;

        // Methods

        /**
         * Calculates the most efficient content encoding for the `mime_part`
         * given the `constraint`.
         * @param constraint a #GMimeEncodingConstraint
         * @returns the best content encoding for the specified mime part.
         */
        get_best_content_encoding(constraint: EncodingConstraint | null): ContentEncoding;
        /**
         * Gets the value of the Content-Description for the specified mime
         * part if it exists or %NULL otherwise.
         * @returns the content description for the specified mime part.
         */
        get_content_description(): string;
        /**
         * Gets the content encoding of the mime part.
         * @returns the content encoding for the specified mime part.
         */
        get_content_encoding(): ContentEncoding;
        /**
         * Gets the content-id of the specified mime part if it exists, or
         * %NULL otherwise.
         * @returns the content id for the specified mime part.
         */
        get_content_id(): string;
        /**
         * Gets the value of the Content-Location header if it exists, or
         * %NULL otherwise.
         * @returns the content location for the specified mime part.
         */
        get_content_location(): string;
        /**
         * Gets the md5sum contained in the Content-Md5 header of the
         * specified mime part if it exists, or %NULL otherwise.
         * @returns the content md5 for the specified mime part.
         */
        get_content_md5(): string;
        /**
         * Gets the internal data-wrapper of the specified mime part, or %NULL
         * on error.
         * @returns the data-wrapper for the mime part's contents.
         */
        get_content_object(): DataWrapper;
        /**
         * Gets the filename of the specificed mime part, or %NULL if the
         * `mime_part` does not have the filename or name parameter set.
         * @returns the filename of the specified @mime_part or %NULL if neither of the parameters is set. If a file name is set, the returned string will be in UTF-8.
         */
        get_filename(): string;
        /**
         * Determines whether or not the part is an attachment based on the
         * value of the Content-Disposition header.
         * @returns %TRUE if the part is an attachment, otherwise %FALSE.
         */
        is_attachment(): boolean;
        /**
         * Set the content description for the specified mime part.
         * @param description content description
         */
        set_content_description(description: string): void;
        /**
         * Set the content encoding for the specified mime part.
         * @param encoding a #GMimeContentEncoding
         */
        set_content_encoding(encoding: ContentEncoding | null): void;
        /**
         * Set the content id for the specified mime part.
         * @param content_id content id
         */
        set_content_id(content_id: string): void;
        /**
         * Set the content location for the specified mime part.
         * @param content_location content location
         */
        set_content_location(content_location: string): void;
        /**
         * Set the content md5 for the specified mime part.
         * @param content_md5 content md5 or %NULL to generate the md5 digest.
         */
        set_content_md5(content_md5: string): void;
        /**
         * Sets the content object on the mime part.
         * @param content a #GMimeDataWrapper content object
         */
        set_content_object(content: DataWrapper): void;
        /**
         * Sets the "filename" parameter on the Content-Disposition and also sets the
         * "name" parameter on the Content-Type.
         *
         * Note: The `filename` string should be in UTF-8.
         * @param filename the file name
         */
        set_filename(filename: string): void;
        /**
         * Verify the content md5 for the specified mime part.
         * @returns %TRUE if the md5 is valid or %FALSE otherwise. Note: will return %FALSE if the mime part does not contain a Content-MD5.
         */
        verify_content_md5(): boolean;
    }

    namespace Pkcs7Context {
        // Signal signatures
        interface SignalSignatures extends CryptoContext.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends CryptoContext.ConstructorProps {}
    }

    /**
     * A PKCS7 crypto context.
     */
    class Pkcs7Context extends CryptoContext {
        static $gtype: GObject.GType<Pkcs7Context>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Pkcs7Context.SignalSignatures;

        // Fields

        parent_object: CryptoContext;
        priv: any;

        // Constructors

        constructor(properties?: Partial<Pkcs7Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Pkcs7Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pkcs7Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pkcs7Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pkcs7Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pkcs7Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pkcs7Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the `always_trust` flag on the pkcs7 context.
         * @returns the @always_trust flag on the pkcs7 context.
         */
        get_always_trust(): boolean;
        /**
         * Sets the `always_trust` flag on the pkcs7 context which is used for
         * encryption.
         * @param always_trust always trust flag
         */
        set_always_trust(always_trust: boolean): void;
    }

    namespace Signature {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object containing useful information about a signature.
     */
    class Signature extends GObject.Object {
        static $gtype: GObject.GType<Signature>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Signature.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        status: SignatureStatus;
        errors: SignatureError;
        cert: Certificate;
        created: number;
        expires: number;

        // Constructors

        constructor(properties?: Partial<Signature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Signature;

        // Signals

        connect<K extends keyof Signature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Signature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Signature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Signature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Signature.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Signature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the signature's certificate.
         * @returns the signature's certificate.
         */
        get_certificate(): Certificate;
        /**
         * Get the creation date of the signature.
         * @returns the creation date of the signature or %-1 if unknown.
         */
        get_created(): number;
        /**
         * Get the signature errors. If the #GMimeSignatureStatus returned from
         * g_mime_signature_get_status() is not #GMIME_SIGNATURE_STATUS_GOOD, then the
         * errors may provide a clue as to why.
         * @returns a bitfield of errors.
         */
        get_errors(): SignatureError;
        /**
         * Get the expiration date of the signature.
         * @returns the expiration date of the signature or %-1 if unknown.
         */
        get_expires(): number;
        /**
         * Get the signature status.
         * @returns the signature status.
         */
        get_status(): SignatureStatus;
        /**
         * Set the signature's certificate.
         * @param cert a #GMimeCertificate
         */
        set_certificate(cert: Certificate): void;
        /**
         * Set the creation date of the signature.
         * @param created creation date
         */
        set_created(created: number): void;
        /**
         * Set the errors on the signature.
         * @param errors a #GMimeSignatureError
         */
        set_errors(errors: SignatureError | null): void;
        /**
         * Set the expiration date of the signature.
         * @param expires expiration date
         */
        set_expires(expires: number): void;
        /**
         * Set the status on the signature.
         * @param status a #GMimeSignatureStatus
         */
        set_status(status: SignatureStatus | null): void;
    }

    namespace SignatureList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A collection of #GMimeSignature objects.
     */
    class SignatureList extends GObject.Object {
        static $gtype: GObject.GType<SignatureList>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: SignatureList.SignalSignatures;

        // Fields

        parent_object: GObject.Object;
        array: any[];

        // Constructors

        constructor(properties?: Partial<SignatureList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SignatureList;

        // Signals

        connect<K extends keyof SignatureList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SignatureList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SignatureList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SignatureList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SignatureList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SignatureList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a #GMimeSignature to the #GMimeSignatureList.
         * @param sig a #GMimeSignature
         * @returns the index of the added #GMimeSignature.
         */
        add(sig: Signature): number;
        /**
         * Clears the list of addresses.
         */
        clear(): void;
        /**
         * Checks whether or not the specified #GMimeSignature is contained within
         * the #GMimeSignatureList.
         * @param sig a #GMimeSignature
         * @returns %TRUE if the specified #GMimeSignature is contained within the specified #GMimeSignatureList or %FALSE otherwise.
         */
        contains(sig: Signature): boolean;
        /**
         * Gets the #GMimeSignature at the specified index.
         * @param index index of #GMimeSignature to get
         * @returns the #GMimeSignature at the specified index or %NULL if the index is out of range.
         */
        get_signature(index: number): Signature;
        /**
         * Gets the index of the specified #GMimeSignature inside the
         * #GMimeSignatureList.
         * @param sig a #GMimeSignature
         * @returns the index of the requested #GMimeSignature within the #GMimeSignatureList or %-1 if it is not contained within the #GMimeSignatureList.
         */
        index_of(sig: Signature): number;
        /**
         * Inserts a #GMimeSignature into the #GMimeSignatureList at the specified
         * index.
         * @param index index to insert at
         * @param sig a #GMimeSignature
         */
        insert(index: number, sig: Signature): void;
        /**
         * Gets the length of the list.
         * @returns the number of #GMimeSignature objects in the list.
         */
        length(): number;
        /**
         * Removes a #GMimeSignature from the #GMimeSignatureList.
         * @param sig a #GMimeSignature
         * @returns %TRUE if the specified #GMimeSignature was removed or %FALSE otherwise.
         */
        remove(sig: Signature): boolean;
        /**
         * Removes a #GMimeSignature from the #GMimeSignatureList at the specified
         * index.
         * @param index index to remove
         * @returns %TRUE if an #GMimeSignature was removed or %FALSE otherwise.
         */
        remove_at(index: number): boolean;
        /**
         * Sets the #GMimeSignature at the specified index to `sig`.
         * @param index index of #GMimeSignature to set
         * @param sig a #GMimeSignature
         */
        set_signature(index: number, sig: Signature): void;
    }

    namespace Stream {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Abstract I/O stream class.
     */
    abstract class Stream extends GObject.Object {
        static $gtype: GObject.GType<Stream>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Stream.SignalSignatures;

        // Fields

        parent_object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Stream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Stream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Stream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Stream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Closes the stream.
         */
        vfunc_close(): number;
        /**
         * Tests the end-of-stream indicator for `stream`.
         */
        vfunc_eos(): boolean;
        /**
         * Sync's the stream to disk.
         */
        vfunc_flush(): number;
        /**
         * Gets the length of the stream.
         */
        vfunc_length(): number;
        /**
         * Attempts to read up to `len` bytes from `stream` into `buf`.
         * @param buf buffer
         */
        vfunc_read(buf: Uint8Array | string): number;
        /**
         * Resets the stream.
         */
        vfunc_reset(): number;
        /**
         * Repositions the offset of the stream `stream` to
         * the argument `offset` according to the
         * directive `whence` as follows:
         *
         *     #GMIME_STREAM_SEEK_SET: Seek `offset` bytes relative to
         *     the beginning (bound_start) of the stream.
         *
         *     #GMIME_STREAM_SEEK_CUR: Seek `offset` bytes relative to the
         *     current offset of the stream.
         *
         *     #GMIME_STREAM_SEEK_END: Seek `offset` bytes relative to the
         *     end of the stream (bound_end if non-negative).
         * @param offset positional offset
         * @param whence seek directive
         */
        vfunc_seek(offset: number, whence: SeekWhence): number;
        /**
         * Creates a new substream of `stream` with bounds `start` and `end`.
         * @param start start boundary
         * @param end end boundary
         */
        vfunc_substream(start: number, end: number): Stream;
        /**
         * Gets the current offset within the stream.
         */
        vfunc_tell(): number;
        /**
         * Attempts to write up to `len` bytes of `buf` to `stream`.
         * @param buf buffer
         * @param len buffer length
         */
        vfunc_write(buf: string, len: number): number;

        // Methods

        /**
         * Reads in at most one less than `max` characters from `stream` and
         * stores them into the buffer pointed to by `buf`. Reading stops after
         * an EOS or newline ('\n'). If a newline is read, it is stored into
         * the buffer. A '\0' is stored after the last character in the
         * buffer.
         * @param buf line buffer
         * @param max max length of a line
         * @returns the number of characters read into @buf on success or %-1 on fail.
         */
        buffer_gets(buf: string, max: number): number;
        /**
         * Reads a single line into `buffer`.
         * @param buffer output buffer
         */
        buffer_readln(buffer: Uint8Array | string): void;
        /**
         * Closes the stream.
         * @returns %0 on success or %-1 on fail.
         */
        close(): number;
        /**
         * Initializes a new stream with bounds `start` and `end`.
         * @param start start boundary
         * @param end end boundary
         */
        construct(start: number, end: number): void;
        /**
         * Tests the end-of-stream indicator for `stream`.
         * @returns %TRUE on EOS or %FALSE otherwise.
         */
        eos(): boolean;
        /**
         * Sync's the stream to disk.
         * @returns %0 on success or %-1 on fail.
         */
        flush(): number;
        /**
         * Gets the length of the stream.
         * @returns the length of the stream or %-1 if unknown.
         */
        length(): number;
        /**
         * Attempts to read up to `len` bytes from `stream` into `buf`.
         * @param buf buffer
         * @returns the number of bytes read or %-1 on fail.
         */
        read(buf: Uint8Array | string): number;
        /**
         * Resets the stream.
         * @returns %0 on success or %-1 on fail.
         */
        reset(): number;
        /**
         * Repositions the offset of the stream `stream` to
         * the argument `offset` according to the
         * directive `whence` as follows:
         *
         *     #GMIME_STREAM_SEEK_SET: Seek `offset` bytes relative to
         *     the beginning (bound_start) of the stream.
         *
         *     #GMIME_STREAM_SEEK_CUR: Seek `offset` bytes relative to the
         *     current offset of the stream.
         *
         *     #GMIME_STREAM_SEEK_END: Seek `offset` bytes relative to the
         *     end of the stream (bound_end if non-negative).
         * @param offset positional offset
         * @param whence seek directive
         * @returns the resultant position on success or %-1 on fail.
         */
        seek(offset: number, whence: SeekWhence | null): number;
        /**
         * Set the bounds on a stream.
         * @param start start boundary
         * @param end end boundary
         */
        set_bounds(start: number, end: number): void;
        /**
         * Creates a new substream of `stream` with bounds `start` and `end`.
         * @param start start boundary
         * @param end end boundary
         * @returns a substream of @stream with bounds @start and @end.
         */
        substream(start: number, end: number): Stream;
        /**
         * Gets the current offset within the stream.
         * @returns the current position within the stream or %-1 on fail.
         */
        tell(): number;
        /**
         * Attempts to write up to `len` bytes of `buf` to `stream`.
         * @param buf buffer
         * @param len buffer length
         * @returns the number of bytes written or %-1 on fail.
         */
        write(buf: string, len: number): number;
        /**
         * Writes `string` to `stream`.
         * @param str string to write
         * @returns the number of bytes written or %-1 on fail.
         */
        write_string(str: string): number;
        /**
         * Attempts to write the source stream to the destination stream.
         * @param dest destination stream
         * @returns the number of bytes written or %-1 on fail.
         */
        write_to_stream(dest: Stream): number;
        /**
         * Writes at most `count` blocks described by `vector` to `stream`.
         * @param vector a #GMimeStreamIOVector
         * @param count number of vector elements
         * @returns the number of bytes written or %-1 on fail.
         */
        writev(vector: StreamIOVector, count: number): number;
    }

    namespace StreamBuffer {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A buffered stream wrapper around any #GMimeStream object.
     */
    class StreamBuffer extends Stream {
        static $gtype: GObject.GType<StreamBuffer>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: StreamBuffer.SignalSignatures;

        // Fields

        parent_object: Stream;
        mode: StreamBufferMode;
        source: Stream;
        buffer: string;
        bufptr: string;
        bufend: string;
        buflen: number;

        // Constructors

        constructor(properties?: Partial<StreamBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Stream, mode: StreamBufferMode): StreamBuffer;

        // Signals

        connect<K extends keyof StreamBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamBuffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamBuffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamBuffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamBuffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamBuffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StreamCat {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A concatenation of other #GMimeStream objects.
     */
    class StreamCat extends Stream {
        static $gtype: GObject.GType<StreamCat>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: StreamCat.SignalSignatures;

        // Fields

        parent_object: Stream;
        sources: any;
        current: any;

        // Constructors

        constructor(properties?: Partial<StreamCat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamCat;

        // Signals

        connect<K extends keyof StreamCat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamCat.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamCat.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamCat.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamCat.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamCat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds the `source` stream to the `cat`.
         * @param source a source stream
         * @returns %0 on success or %-1 on fail.
         */
        add_source(source: Stream): number;
    }

    namespace StreamFile {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A #GMimeStream wrapper around standard-c FILE pointers.
     */
    class StreamFile extends Stream {
        static $gtype: GObject.GType<StreamFile>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: StreamFile.SignalSignatures;

        // Fields

        parent_object: Stream;
        owner: boolean;
        fp: any;

        // Constructors

        constructor(properties?: Partial<StreamFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fp?: any | null): StreamFile;

        static new_for_path(path: string, mode: string): StreamFile;

        static new_with_bounds(fp: any | null, start: number, end: number): StreamFile;

        // Signals

        connect<K extends keyof StreamFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamFile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether or not `stream` owns the backend FILE pointer.
         * @returns %TRUE if @stream owns the backend FILE pointer or %FALSE otherwise.
         */
        get_owner(): boolean;
        /**
         * Sets whether or not `stream` owns the backend FILE pointer.
         *
         * Note: `owner` should be %TRUE if the stream should fclose() the
         * backend FILE pointer when destroyed or %FALSE otherwise.
         * @param owner %TRUE if this stream should own the FILE pointer or %FALSE otherwise
         */
        set_owner(owner: boolean): void;
    }

    namespace StreamFilter {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A #GMimeStream which passes data through any #GMimeFilter objects.
     */
    class StreamFilter extends Stream {
        static $gtype: GObject.GType<StreamFilter>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: StreamFilter.SignalSignatures;

        // Fields

        parent_object: Stream;
        priv: any;
        source: Stream;

        // Constructors

        constructor(properties?: Partial<StreamFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stream: Stream): StreamFilter;

        // Signals

        connect<K extends keyof StreamFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds `filter` to `stream`. Filters are applied in the same order in
         * which they are added.
         * @param filter a #GMimeFilter
         * @returns an id for the filter.
         */
        add(filter: Filter): number;
        /**
         * Removed a filter from the stream based on the id (as returned from
         * filter_add).
         * @param id filter id
         */
        remove(id: number): void;
    }

    namespace StreamFs {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A #GMimeStream wrapper around POSIX file descriptors.
     */
    class StreamFs extends Stream {
        static $gtype: GObject.GType<StreamFs>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: StreamFs.SignalSignatures;

        // Fields

        parent_object: Stream;
        owner: boolean;

        // This field conflicts with a function in a parent class or interface.
        eos: boolean | any;
        fd: number;

        // Constructors

        constructor(properties?: Partial<StreamFs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fd: number): StreamFs;

        static new_for_path(path: string, flags: number, mode: number): StreamFs;

        static new_with_bounds(fd: number, start: number, end: number): StreamFs;

        // Signals

        connect<K extends keyof StreamFs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFs.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamFs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamFs.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamFs.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamFs.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether or not `stream` owns the backend file descriptor.
         * @returns %TRUE if @stream owns the backend file descriptor or %FALSE otherwise.
         */
        get_owner(): boolean;
        /**
         * Sets whether or not `stream` owns the backend file descriptor.
         *
         * Note: `owner` should be %TRUE if the stream should close() the
         * backend file descriptor when destroyed or %FALSE otherwise.
         * @param owner %TRUE if this stream should own the file descriptor or %FALSE otherwise
         */
        set_owner(owner: boolean): void;
    }

    namespace StreamGIO {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A #GMimeStream wrapper around GLib's GIO streams.
     */
    class StreamGIO extends Stream {
        static $gtype: GObject.GType<StreamGIO>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: StreamGIO.SignalSignatures;

        // Fields

        parent_object: Stream;
        ostream: Gio.OutputStream;
        istream: Gio.InputStream;
        file: Gio.File;
        owner: boolean;

        // This field conflicts with a function in a parent class or interface.
        eos: boolean | any;

        // Constructors

        constructor(properties?: Partial<StreamGIO.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: Gio.File): StreamGIO;

        static new_with_bounds(file: Gio.File, start: number, end: number): StreamGIO;

        // Signals

        connect<K extends keyof StreamGIO.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamGIO.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamGIO.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamGIO.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamGIO.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamGIO.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether or not `stream` owns the backend #GFile.
         * @returns %TRUE if @stream owns the backend #GFile or %FALSE otherwise.
         */
        get_owner(): boolean;
        /**
         * Sets whether or not `stream` owns the backend GIO pointer.
         *
         * Note: `owner` should be %TRUE if the stream should close() the
         * backend file descriptor when destroyed or %FALSE otherwise.
         * @param owner %TRUE if this stream should own the #GFile or %FALSE otherwise
         */
        set_owner(owner: boolean): void;
    }

    namespace StreamMem {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A memory-backed #GMimeStream.
     */
    class StreamMem extends Stream {
        static $gtype: GObject.GType<StreamMem>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: StreamMem.SignalSignatures;

        // Fields

        parent_object: Stream;
        buffer: Uint8Array;
        owner: boolean;

        // Constructors

        constructor(properties?: Partial<StreamMem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamMem;

        static new_with_buffer(buffer: Uint8Array | string): StreamMem;

        static new_with_byte_array(array: Uint8Array | string): StreamMem;

        // Signals

        connect<K extends keyof StreamMem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamMem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamMem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamMem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamMem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamMem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the byte array from the memory stream.
         * @returns the byte array from the memory stream.
         */
        get_byte_array(): Uint8Array;
        /**
         * Gets whether or not `mem` owns the backend memory buffer.
         * @returns %TRUE if @mem owns the backend memory buffer or %FALSE otherwise.
         */
        get_owner(): boolean;
        /**
         * Sets the byte array on the memory stream.
         *
         * Note: The memory stream is not responsible for freeing the byte
         * array. Use g_mime_stream_mem_set_owner() to change this behavior.
         * @param array stream data
         */
        set_byte_array(array: Uint8Array | string): void;
        /**
         * Sets whether or not `mem` owns the backend memory buffer.
         *
         * Note: `owner` should be %TRUE if the stream should free the backend
         * memory buffer when destroyed or %FALSE otherwise.
         * @param owner %TRUE if this stream should own the #GByteArray or %FALSE otherwise
         */
        set_owner(owner: boolean): void;
    }

    namespace StreamMmap {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A memory-mapped #GMimeStream.
     */
    class StreamMmap extends Stream {
        static $gtype: GObject.GType<StreamMmap>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: StreamMmap.SignalSignatures;

        // Fields

        parent_object: Stream;
        owner: boolean;

        // This field conflicts with a function in a parent class or interface.
        eos: boolean | any;
        fd: number;
        map: string;
        maplen: number;

        // Constructors

        constructor(properties?: Partial<StreamMmap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fd: number, prot: number, flags: number): StreamMmap;

        static new_with_bounds(fd: number, prot: number, flags: number, start: number, end: number): StreamMmap;

        // Signals

        connect<K extends keyof StreamMmap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamMmap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamMmap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamMmap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamMmap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamMmap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StreamNull {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A #GMimeStream which has no backing store.
     */
    class StreamNull extends Stream {
        static $gtype: GObject.GType<StreamNull>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: StreamNull.SignalSignatures;

        // Fields

        parent_object: Stream;
        written: number;
        newlines: number;

        // Constructors

        constructor(properties?: Partial<StreamNull.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamNull;

        // Signals

        connect<K extends keyof StreamNull.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamNull.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamNull.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamNull.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamNull.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamNull.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StreamPipe {
        // Signal signatures
        interface SignalSignatures extends Stream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Stream.ConstructorProps {}
    }

    /**
     * A #GMimeStream wrapper around pipes.
     */
    class StreamPipe extends Stream {
        static $gtype: GObject.GType<StreamPipe>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: StreamPipe.SignalSignatures;

        // Fields

        parent_object: Stream;
        owner: boolean;

        // This field conflicts with a function in a parent class or interface.
        eos: boolean | any;
        fd: number;

        // Constructors

        constructor(properties?: Partial<StreamPipe.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fd: number): StreamPipe;

        // Signals

        connect<K extends keyof StreamPipe.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamPipe.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StreamPipe.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StreamPipe.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StreamPipe.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StreamPipe.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether or not `stream` owns the backend pipe descriptor.
         * @returns %TRUE if @stream owns the backend pipe descriptor or %FALSE otherwise.
         */
        get_owner(): boolean;
        /**
         * Sets whether or not `stream` owns the backend pipe descriptor.
         *
         * Note: `owner` should be %TRUE if the stream should close() the
         * backend pipe descriptor when destroyed or %FALSE otherwise.
         * @param owner owner
         */
        set_owner(owner: boolean): void;
    }

    type CertificateClass = typeof Certificate;
    type CertificateListClass = typeof CertificateList;
    /**
     * State used by g_mime_charset_best() and g_mime_charset_best_name().
     */
    class Charset {
        static $gtype: GObject.GType<Charset>;

        // Fields

        mask: number;
        level: number;

        // Constructors

        constructor(
            properties?: Partial<{
                mask: number;
                level: number;
            }>,
        );
        _init(...args: any[]): void;

        // Static methods

        /**
         * Computes the best charset to use to encode this text buffer.
         * @param inbuf a UTF-8 text buffer
         * @param inlen input buffer length
         */
        static best(inbuf: string, inlen: number): string;
        /**
         * Attempts to find a canonical charset name for `charset`.
         *
         * Note: Will normally return the same value as
         * g_mime_charset_iconv_name() unless the system iconv does not use
         * the canonical ISO charset names (such as using ISO8859-1 rather
         * than the canonical form ISO-8859-1).
         * @param charset charset name
         */
        static canon_name(charset: string): string;
        /**
         * Attempts to find an iconv-friendly charset name for `charset`.
         * @param charset charset name
         */
        static iconv_name(charset: string): string;
        /**
         * Maps the ISO-8859-# charset to the equivalent Windows-CP125#
         * charset.
         * @param isocharset ISO-8859-# charset
         */
        static iso_to_windows(isocharset: string): string;
        /**
         * Attempts to find a specific language code that is specific to
         * `charset`. Currently only handles CJK and Russian/Ukranian
         * charset->lang mapping. Everything else will return %NULL.
         * @param charset charset name
         */
        static language(charset: string): string;
        /**
         * Gets the user's locale charset (or iso-8859-1 by default).
         *
         * Note: This function is deprecated. Use g_mime_locale_charset()
         * instead.
         */
        static locale_name(): string;
        /**
         * Initializes character set maps.
         *
         * Note: g_mime_init() calls this routine for you.
         */
        static map_init(): void;
        /**
         * Frees internal lookup tables created in g_mime_charset_map_init().
         */
        static map_shutdown(): void;
        /**
         * Attempts to find an iconv-friendly charset name for `charset`.
         *
         * Note: This function is deprecated. Use g_mime_charset_iconv_name()
         * instead.
         * @param charset charset name
         */
        static name(charset: string): string;

        // Methods

        /**
         * Gets the best charset name based on the charset mask `charset`.
         * @returns a pointer to a string containing the best charset name that can represent the charset mask @charset.
         */
        best_name(): string;
        /**
         * Check to see if the UTF-8 `text` will fit safely within `charset`.
         * @param charset a charset
         * @param text utf-8 text to check
         * @param len length of @text
         * @returns %TRUE if it is safe to encode @text into @charset or %FALSE otherwise.
         */
        can_encode(charset: string, text: string, len: number): boolean;
        /**
         * Initializes a charset mask structure.
         */
        init(): void;
        /**
         * Steps through the input buffer 1 unicode character (glyph) at a
         * time (ie, not necessarily 1 byte at a time). Bitwise 'and' our
         * `charset->`mask with the mask for each glyph. This has the effect of
         * limiting what charsets our `charset->`mask can match.
         * @param inbuf input text buffer (must be in UTF-8)
         * @param inlen input buffer length
         */
        step(inbuf: string, inlen: number): void;
    }

    type ContentDispositionClass = typeof ContentDisposition;
    type ContentTypeClass = typeof ContentType;
    type CryptoContextClass = typeof CryptoContext;
    type DataWrapperClass = typeof DataWrapper;
    type DecryptResultClass = typeof DecryptResult;
    /**
     * A context used for encoding or decoding data.
     */
    class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Fields

        encoding: ContentEncoding;
        uubuf: Uint8Array;
        encode: boolean;
        save: number;
        state: number;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Decodes a chunk of base64 encoded data.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in @save
         * @param save leftover bits that have not yet been decoded
         */
        static base64_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Base64 encodes the input stream to the output stream. Call this
         * when finished encoding data with g_mime_encoding_base64_encode_step()
         * to flush off the last little bit.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in @save
         * @param save leftover bits that have not yet been encoded
         */
        static base64_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Base64 encodes a chunk of data. Performs an 'encode step', only
         * encodes blocks of 3 characters to the output at a time, saves
         * left-over state in state and save (initialise to 0 on first
         * invocation).
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in @save
         * @param save leftover bits that have not yet been encoded
         */
        static base64_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Decodes a block of quoted-printable encoded data. Performs a
         * 'decode step' on a chunk of QP encoded data.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in @save
         * @param save leftover bits that have not yet been decoded
         */
        static quoted_decode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Quoted-printable encodes a block of text. Call this when finished
         * encoding data with g_mime_encoding_quoted_encode_step() to flush off
         * the last little bit.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in @save
         * @param save leftover bits that have not yet been encoded
         */
        static quoted_encode_close(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Quoted-printable encodes a block of text. Performs an 'encode
         * step', saves left-over state in state and save (initialise to -1 on
         * first invocation).
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in @save
         * @param save leftover bits that have not yet been encoded
         */
        static quoted_encode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Uudecodes a chunk of data. Performs a 'decode step' on a chunk of
         * uuencoded data. Assumes the "begin mode filename" line has
         * been stripped off.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param state holds the number of bits that are stored in @save
         * @param save leftover bits that have not yet been decoded
         */
        static uudecode_step(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number;
        /**
         * Uuencodes a chunk of data. Call this when finished encoding data
         * with g_mime_encoding_uuencode_step() to flush off the last little bit.
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output buffer
         * @param uubuf temporary buffer of 60 bytes
         * @param state holds the number of bits that are stored in @save
         * @param save leftover bits that have not yet been encoded
         */
        static uuencode_close(
            inbuf: number,
            inlen: number,
            outbuf: number,
            uubuf: number,
            state: number,
            save: number,
        ): number;
        /**
         * Uuencodes a chunk of data. Performs an 'encode step', only encodes
         * blocks of 45 characters to the output at a time, saves left-over
         * state in `uubuf,` `state` and `save` (initialize to 0 on first
         * invocation).
         * @param inbuf input buffer
         * @param inlen input buffer length
         * @param outbuf output stream
         * @param uubuf temporary buffer of 60 bytes
         * @param state holds the number of bits that are stored in @save
         * @param save leftover bits that have not yet been encoded
         */
        static uuencode_step(
            inbuf: number,
            inlen: number,
            outbuf: number,
            uubuf: number,
            state: number,
            save: number,
        ): number;

        // Methods

        /**
         * Completes the incremental encode or decode of the input stream (see
         * g_mime_encoding_step() for details).
         * @param inbuf an input buffer to encode or decode
         * @param inlen input buffer length
         * @param outbuf an output buffer
         * @returns the number of bytes written to @outbuf.
         */
        flush(inbuf: string, inlen: number, outbuf: string): number;
        /**
         * Initializes a #GMimeEncoding state machine for decoding from
         * `encoding`.
         * @param encoding a #GMimeContentEncoding to use
         */
        init_decode(encoding: ContentEncoding | null): void;
        /**
         * Initializes a #GMimeEncoding state machine for encoding to
         * `encoding`.
         * @param encoding a #GMimeContentEncoding to use
         */
        init_encode(encoding: ContentEncoding | null): void;
        /**
         * Given the input length, `inlen,` calculate the needed output length
         * to perform an encoding or decoding step.
         * @param inlen an input length
         * @returns the maximum number of bytes needed to encode or decode a buffer of @inlen bytes.
         */
        outlen(inlen: number): number;
        /**
         * Resets the state of the #GMimeEncoding.
         */
        reset(): void;
        /**
         * Incrementally encodes or decodes (depending on `state)` an input
         * stream by 'stepping' through a block of input at a time.
         *
         * You should make sure `outbuf` is large enough by calling
         * g_mime_encoding_outlen() to find out how large `outbuf` might need
         * to be.
         * @param inbuf an input buffer to encode or decode
         * @param inlen input buffer length
         * @param outbuf an output buffer
         * @returns the number of bytes written to @outbuf.
         */
        step(inbuf: string, inlen: number, outbuf: string): number;
    }

    type FilterBasicClass = typeof FilterBasic;
    type FilterBestClass = typeof FilterBest;
    type FilterCRLFClass = typeof FilterCRLF;
    type FilterCharsetClass = typeof FilterCharset;
    type FilterClass = typeof Filter;
    type FilterEnrichedClass = typeof FilterEnriched;
    type FilterFromClass = typeof FilterFrom;
    type FilterGZipClass = typeof FilterGZip;
    type FilterHTMLClass = typeof FilterHTML;
    type FilterMd5Class = typeof FilterMd5;
    type FilterStripClass = typeof FilterStrip;
    type FilterWindowsClass = typeof FilterWindows;
    type FilterYencClass = typeof FilterYenc;
    type GpgContextClass = typeof GpgContext;
    /**
     * A message/rfc822 header.
     */
    abstract class Header {
        static $gtype: GObject.GType<Header>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A message or mime-part header iterator. All members should be
     * considered private.
     */
    class HeaderIter {
        static $gtype: GObject.GType<HeaderIter>;

        // Fields

        version: number;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Copies `src` to `dest`.
         * @param dest a #GMimeHeaderIter
         */
        copy_to(dest: HeaderIter): void;
        /**
         * Check that `iter1` and `iter2` reference the same header.
         * @param iter2 a #GMimeHeaderIter
         * @returns %TRUE if @iter1 and @iter2 refer to the same header or %FALSE otherwise.
         */
        equal(iter2: HeaderIter): boolean;
        /**
         * Updates `iter` to point to the first header.
         * @returns %TRUE on success or %FALSE otherwise.
         */
        first(): boolean;
        /**
         * Frees a dynamically-allocated #GMimeHeaderIter as created by
         * g_mime_header_iter_new() or g_mime_header_iter_copy().
         */
        free(): void;
        /**
         * Gets the current header's name.
         * @returns the header name or %NULL if invalid.
         */
        get_name(): string;
        /**
         * Gets the current header's value.
         * @returns the header's raw, unprocessed value or %NULL if invalid. Note: The returned value should be decoded with a function such as g_mime_utils_header_decode_text() before displaying to the user.
         */
        get_value(): string;
        /**
         * Checks if a #GMimeHeaderIter is valid. An iterator may become
         * invalid if the #GMimeHeaderList that the iterator refers to
         * changes.
         * @returns %TRUE if @iter is still valid or %FALSE otherwise.
         */
        is_valid(): boolean;
        /**
         * Updates `iter` to point to the last header.
         * @returns %TRUE on success or %FALSE otherwise.
         */
        last(): boolean;
        /**
         * Advances to the next header.
         * @returns %TRUE on success or %FALSE otherwise.
         */
        next(): boolean;
        /**
         * Advances to the previous header.
         * @returns %TRUE on success or %FALSE otherwise.
         */
        prev(): boolean;
        /**
         * Removes the current header and advances to the next header.
         *
         * Note: If you remove the last header in the list, then `iter` will
         * become invalid regardless of whether or not other headers remain.
         * @returns %TRUE on success or %FALSE otherwise.
         */
        remove(): boolean;
        /**
         * Sets the current header's value to the new value.
         * @param value new header value
         * @returns %TRUE if the value was set or %FALSE otherwise (indicates invalid iter). Note: @value should be encoded with a function such as g_mime_utils_header_encode_text().
         */
        set_value(value: string): boolean;
    }

    /**
     * A message or mime-part header.
     */
    abstract class HeaderList {
        static $gtype: GObject.GType<HeaderList>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Appends a header. If `value` is %NULL, a space will be set aside for it
         * (useful for setting the order of headers before values can be
         * obtained for them) otherwise the header will be unset.
         *
         * Note: `value` should be encoded with a function such as
         * g_mime_utils_header_encode_text().
         * @param name header name
         * @param value header value
         */
        append(name: string, value: string): void;
        /**
         * Removes all of the headers from the #GMimeHeaderList.
         */
        clear(): void;
        /**
         * Checks whether or not a header exists.
         * @param name header name
         * @returns %TRUE if the specified header exists or %FALSE otherwise.
         */
        contains(name: string): boolean;
        /**
         * Destroy the header list.
         */
        destroy(): void;
        /**
         * Calls `func` for each header name/value pair.
         * @param func function to be called for each header.
         */
        foreach(func: HeaderForeachFunc): void;
        /**
         * Gets the value of the first header with the specified name.
         * @param name header name
         * @returns the value of the header requested. Note: The returned value should be decoded with a function such as g_mime_utils_header_decode_text() before displaying to the user.
         */
        get(name: string): string;
        /**
         * Initializes an iterator for traversing `headers`.
         * @returns a %TRUE if successful or %FALSE if there are no headers to traverse.
         */
        get_iter(): [boolean, HeaderIter];
        /**
         * Gets the raw stream representing `headers`.
         * @returns a #GMimeStream if set or %NULL otherwise.
         */
        get_stream(): Stream;
        /**
         * Prepends a header. If `value` is %NULL, a space will be set aside
         * for it (useful for setting the order of headers before values can
         * be obtained for them) otherwise the header will be unset.
         *
         * Note: `value` should be encoded with a function such as
         * g_mime_utils_header_encode_text().
         * @param name header name
         * @param value header value
         */
        prepend(name: string, value: string): void;
        /**
         * Remove the specified header.
         * @param name header name
         * @returns %TRUE if the header was successfully removed or %FALSE if the specified header could not be found.
         */
        remove(name: string): boolean;
        /**
         * Set the value of the specified header. If `value` is %NULL and the
         * header, `name,` had not been previously set, a space will be set
         * aside for it (useful for setting the order of headers before values
         * can be obtained for them) otherwise the header will be unset.
         *
         * Note: If there are multiple headers with the specified field name,
         * the first instance of the header will be replaced and further
         * instances will be removed.
         *
         * Additionally, `value` should be encoded with a function such as
         * g_mime_utils_header_encode_text().
         * @param name header name
         * @param value header value
         */
        set(name: string, value: string): void;
        /**
         * Set the raw header stream.
         * @param stream a #GMimeStream
         */
        set_stream(stream: Stream): void;
        /**
         * Allocates a string buffer containing the raw rfc822 headers
         * contained in `headers`.
         * @returns a string containing the header block.
         */
        to_string(): string;
        /**
         * Write the headers to a stream.
         * @param stream output stream
         * @returns the number of bytes written or %-1 on fail.
         */
        write_to_stream(stream: Stream): number;
    }

    type InternetAddressClass = typeof InternetAddress;
    type InternetAddressGroupClass = typeof InternetAddressGroup;
    type InternetAddressListClass = typeof InternetAddressList;
    type InternetAddressMailboxClass = typeof InternetAddressMailbox;
    type MessageClass = typeof Message;
    type MessagePartClass = typeof MessagePart;
    type MessagePartialClass = typeof MessagePartial;
    type MultipartClass = typeof Multipart;
    type MultipartEncryptedClass = typeof MultipartEncrypted;
    type MultipartSignedClass = typeof MultipartSigned;
    type ObjectClass = typeof Object;
    /**
     * A parameter name/value pair as used for some Content header fields.
     */
    class Param {
        static $gtype: GObject.GType<Param>;

        // Fields

        name: string;
        value: string;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Releases all memory used by this mime param back to the Operating
         * System.
         */
        destroy(): void;
        /**
         * Gets the name of the parameter.
         * @returns the name of the parameter.
         */
        get_name(): string;
        /**
         * Gets the value of the parameter.
         * @returns the value of the parameter.
         */
        get_value(): string;
        /**
         * Gets the next #GMimeParam node in the list.
         * @returns the next #GMimeParam node in the list.
         */
        next(): Param;
        /**
         * Assumes the output string contains only the Content-* header and
         * it's immediate value.
         *
         * Writes the params out to the string `string`.
         * @param fold specifies whether or not to fold headers
         * @param str output string
         */
        write_to_string(fold: boolean, str: GLib.String): void;
    }

    type ParserClass = typeof Parser;
    type PartClass = typeof Part;
    /**
     * A MIME part iterator.
     */
    abstract class PartIter {
        static $gtype: GObject.GType<PartIter>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Frees the memory allocated by g_mime_part_iter_new().
         */
        free(): void;
        /**
         * Gets the #GMimeObject at the current #GMimePartIter position.
         * @returns the current #GMimeObject or %NULL if the state of @iter is invalid.
         */
        get_current(): Object;
        /**
         * Gets the parent of the #GMimeObject at the current #GMimePartIter
         * position.
         * @returns the parent #GMimeObject or %NULL if the state of @iter is invalid.
         */
        get_parent(): Object;
        /**
         * Gets the path of the current #GMimeObject in the MIME structure
         * used to initialize `iter`.
         * @returns a newly allocated string representation of the path to the #GMimeObject at the current #GMimePartIter position.
         */
        get_path(): string;
        /**
         * Gets the toplevel #GMimeObject used to initialize `iter`.
         * @returns the toplevel #GMimeObject.
         */
        get_toplevel(): Object;
        /**
         * Checks that the current state of `iter` is valid.
         * @returns %TRUE if @iter is valid or %FALSE otherwise.
         */
        is_valid(): boolean;
        /**
         * Updates the state of `iter` to point to the #GMimeObject specified
         * by `path`.
         * @param path a string representing the path to jump to
         * @returns %TRUE if the #GMimeObject specified by @path exists or %FALSE otherwise.
         */
        jump_to(path: string): boolean;
        /**
         * Advances to the next part in the MIME structure used to initialize
         * `iter`.
         * @returns %TRUE if successful or %FALSE otherwise.
         */
        next(): boolean;
        /**
         * Rewinds to the previous part in the MIME structure used to
         * initialize `iter`.
         * @returns %TRUE if successful or %FALSE otherwise.
         */
        prev(): boolean;
        /**
         * Removes the #GMimeObject at the current position from its
         * parent. If successful, `iter` is advanced to the next position
         * (since the current position will become invalid).
         * @returns %TRUE if the part at the current position was removed or %FALSE otherwise.
         */
        remove(): boolean;
        /**
         * Replaces the #GMimeObject at the current position with `replacement`.
         * @param replacement a #GMimeObject
         * @returns %TRUE if the part at the current position was replaced or %FALSE otherwise.
         */
        replace(replacement: Object): boolean;
        /**
         * Resets the state of `iter` to its initial state.
         */
        reset(): void;
    }

    type Pkcs7ContextClass = typeof Pkcs7Context;
    /**
     * A List of references, as per the References or In-Reply-To header
     * fields.
     */
    class References {
        static $gtype: GObject.GType<References>;

        // Fields

        msgid: string;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Appends a reference to msgid to the list of references.
         * @param refs the address of a #GMimeReferences list
         * @param msgid a message-id string
         */
        static append(refs: References, msgid: string): void;
        /**
         * Clears the #GMimeReferences list and resets it to %NULL.
         * @param refs address of a #GMimeReferences list
         */
        static clear(refs: References): void;

        // Methods

        /**
         * Frees the #GMimeReferences list.
         */
        free(): void;
        /**
         * Gets the Message-Id reference from the #GMimeReferences node.
         * @returns the Message-Id reference from the #GMimeReferences node.
         */
        get_message_id(): string;
        /**
         * Advances to the next reference node in the #GMimeReferences list.
         * @returns the next reference node in the #GMimeReferences list.
         */
        get_next(): References;
    }

    type SignatureClass = typeof Signature;
    type SignatureListClass = typeof SignatureList;
    type StreamBufferClass = typeof StreamBuffer;
    type StreamCatClass = typeof StreamCat;
    type StreamClass = typeof Stream;
    type StreamFileClass = typeof StreamFile;
    type StreamFilterClass = typeof StreamFilter;
    type StreamFsClass = typeof StreamFs;
    type StreamGIOClass = typeof StreamGIO;
    /**
     * An I/O vector for use with g_mime_stream_writev().
     */
    class StreamIOVector {
        static $gtype: GObject.GType<StreamIOVector>;

        // Fields

        data: any;
        len: number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: any;
                len: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type StreamMemClass = typeof StreamMem;
    type StreamMmapClass = typeof StreamMmap;
    type StreamNullClass = typeof StreamNull;
    type StreamPipeClass = typeof StreamPipe;
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

export default GMime;

// END
