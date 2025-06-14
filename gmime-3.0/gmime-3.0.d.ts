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
     * GMime-3.0
     */

    /**
     * An address type.
     */

    /**
     * An address type.
     */
    export namespace AddressType {
        export const $gtype: GObject.GType<AddressType>;
    }

    enum AddressType {
        /**
         * Represents the addresses in the Sender header.
         */
        SENDER,
        /**
         * Represents the addresses in the From header.
         */
        FROM,
        /**
         * Represents the addresses in the Reply-To header.
         */
        REPLY_TO,
        /**
         * Represents the recipients in the To header.
         */
        TO,
        /**
         * Represents the recipients in the Cc header.
         */
        CC,
        /**
         * Represents the recipients in the Bcc header.
         */
        BCC,
    }
    /**
     * A description of the user's preference for encrypted messaging.
     */

    /**
     * A description of the user's preference for encrypted messaging.
     */
    export namespace AutocryptPreferEncrypt {
        export const $gtype: GObject.GType<AutocryptPreferEncrypt>;
    }

    enum AutocryptPreferEncrypt {
        /**
         * No preference stated.
         */
        NONE,
        /**
         * Please encrypt, if you also have this preference
         */
        MUTUAL,
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
        /**
         * The CRC32 hash algorithm.
         */
        CRC32,
        /**
         * The rfc1510 CRC32 hash algorithm.
         */
        CRC32_RFC1510,
        /**
         * The rfc2440 CRC32 hash algorithm.
         */
        CRC32_RFC2440,
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
     * An enum of formats.
     */

    /**
     * An enum of formats.
     */
    export namespace Format {
        export const $gtype: GObject.GType<Format>;
    }

    enum Format {
        /**
         * The stream contains a single message.
         */
        MESSAGE,
        /**
         * The stream is in the UNIX mbox format.
         */
        MBOX,
        /**
         * The stream is in the MMDF format.
         */
        MMDF,
    }
    /**
     * There are two commonly used line-endings used by modern Operating Systems.
     * Unix-based systems such as Linux and Mac OS use a single character ('\n' aka LF)
     * to represent the end of line where-as Windows (or DOS) uses a sequence of two
     * characters ("\r\n" aka CRLF). Most text-based network protocols such as SMTP,
     * POP3, and IMAP use the CRLF sequence as well.
     */

    /**
     * There are two commonly used line-endings used by modern Operating Systems.
     * Unix-based systems such as Linux and Mac OS use a single character ('\n' aka LF)
     * to represent the end of line where-as Windows (or DOS) uses a sequence of two
     * characters ("\r\n" aka CRLF). Most text-based network protocols such as SMTP,
     * POP3, and IMAP use the CRLF sequence as well.
     */
    export namespace NewLineFormat {
        export const $gtype: GObject.GType<NewLineFormat>;
    }

    enum NewLineFormat {
        /**
         * The Unix New-Line format ("\n").
         */
        UNIX,
        /**
         * The DOS New-Line format ("\r\n").
         */
        DOS,
    }
    /**
     * The type of OpenPGP data found, if any.
     */

    /**
     * The type of OpenPGP data found, if any.
     */
    export namespace OpenPGPData {
        export const $gtype: GObject.GType<OpenPGPData>;
    }

    enum OpenPGPData {
        /**
         * No OpenPGP data found.
         */
        NONE,
        /**
         * The content contains OpenPGP encrypted data.
         */
        ENCRYPTED,
        /**
         * The content contains OpenPGP signed data.
         */
        SIGNED,
        /**
         * The content contains OpenPGP public key data.
         */
        PUBLIC_KEY,
        /**
         * The content contains OpenPGP private key data.
         */
        PRIVATE_KEY,
    }
    /**
     * The MIME specifications specify that the proper method for encoding Content-Type and
     * Content-Disposition parameter values is the method described in
     * <ulink url="https://tools.ietf.org/html/rfc2231">rfc2231</ulink>. However, it is common for
     * some older email clients to improperly encode using the method described in
     * <ulink url="https://tools.ietf.org/html/rfc2047">rfc2047</ulink> instead.
     */

    /**
     * The MIME specifications specify that the proper method for encoding Content-Type and
     * Content-Disposition parameter values is the method described in
     * <ulink url="https://tools.ietf.org/html/rfc2231">rfc2231</ulink>. However, it is common for
     * some older email clients to improperly encode using the method described in
     * <ulink url="https://tools.ietf.org/html/rfc2047">rfc2047</ulink> instead.
     */
    export namespace ParamEncodingMethod {
        export const $gtype: GObject.GType<ParamEncodingMethod>;
    }

    enum ParamEncodingMethod {
        /**
         * Use the default encoding method set on the #GMimeFormatOptions.
         */
        DEFAULT,
        /**
         * Use the encoding method described in rfc2231.
         */
        RFC2231,
        /**
         * Use the encoding method described in rfc2047.
         */
        RFC2047,
    }
    /**
     * Issues the `GMimeParser` detects. Note that the `GMIME_CRIT_*` issues indicate that some parts of the `GMimeParser` input may
     * be ignored or will be interpreted differently by other software products.
     */

    /**
     * Issues the `GMimeParser` detects. Note that the `GMIME_CRIT_*` issues indicate that some parts of the `GMimeParser` input may
     * be ignored or will be interpreted differently by other software products.
     */
    export namespace ParserWarning {
        export const $gtype: GObject.GType<ParserWarning>;
    }

    enum ParserWarning {
        /**
         * Repeated exactly the same header which should exist only once.
         */
        WARN_DUPLICATED_HEADER,
        /**
         * Repeated exactly the same header parameter.
         */
        WARN_DUPLICATED_PARAMETER,
        /**
         * A header contains unencoded 8-bit characters.
         */
        WARN_UNENCODED_8BIT_HEADER,
        /**
         * Invalid content type, assuming `application/octet-stream`.
         */
        WARN_INVALID_CONTENT_TYPE,
        /**
         * Invalid RFC 2047 encoded header value.
         */
        WARN_INVALID_RFC2047_HEADER_VALUE,
        /**
         * No child parts detected within a multipart.
         */
        WARN_MALFORMED_MULTIPART,
        /**
         * The message is truncated.
         */
        WARN_TRUNCATED_MESSAGE,
        /**
         * The message is malformed.
         */
        WARN_MALFORMED_MESSAGE,
        /**
         * Invalid header name, the parser may skip the message or parts of it.
         */
        CRIT_INVALID_HEADER_NAME,
        /**
         * Conflicting header.
         */
        CRIT_CONFLICTING_HEADER,
        /**
         * Conflicting header parameter.
         */
        CRIT_CONFLICTING_PARAMETER,
        /**
         * A multipart lacks the required boundary parameter.
         */
        CRIT_MULTIPART_WITHOUT_BOUNDARY,
        /**
         * Invalid header parameter.
         */
        WARN_INVALID_PARAMETER,
        /**
         * Invalid address list.
         */
        WARN_INVALID_ADDRESS_LIST,
        /**
         * The maximum MIME nesting level has been exceeded. This is very likely to be an attempt to exploit the MIME parser.
         */
        CRIT_NESTING_OVERFLOW,
        /**
         * A MIME part's headers were terminated by a boundary marker.
         */
        WARN_PART_WITHOUT_CONTENT,
        /**
         * A MIME part was encountered without any headers -or- content. This is very likely to be an attempt to exploit the MIME parser.
         */
        CRIT_PART_WITHOUT_HEADERS_OR_CONTENT,
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
         * The Eliptic Curve algorithm.
         */
        ECC,
        /**
         * The ElGamal algorithm.
         */
        ELG,
        /**
         * The Eliptic Curve + DSA algorithm.
         */
        ECDSA,
        /**
         * The Eliptic Curve + Diffie Helman algorithm.
         */
        ECDH,
        /**
         * The Eliptic Curve + DSA algorithm.
         */
        EDDSA,
    }
    /**
     * An RFC compliance mode.
     */

    /**
     * An RFC compliance mode.
     */
    export namespace RfcComplianceMode {
        export const $gtype: GObject.GType<RfcComplianceMode>;
    }

    enum RfcComplianceMode {
        /**
         * Attempt to be much more liberal accepting broken and/or invalid formatting.
         */
        LOOSE,
        /**
         * Do not attempt to be overly liberal in accepting broken and/or invalid formatting.
         */
        STRICT,
    }
    /**
     * The S/MIME data type.
     */

    /**
     * The S/MIME data type.
     */
    export namespace SecureMimeType {
        export const $gtype: GObject.GType<SecureMimeType>;
    }

    enum SecureMimeType {
        /**
         * The S/MIME content contains compressed data.
         */
        COMPRESSED_DATA,
        /**
         * The S/MIME content contains enveloped data.
         */
        ENVELOPED_DATA,
        /**
         * The S/MIME content contains signed data.
         */
        SIGNED_DATA,
        /**
         * The S/MIME content contains only certificates.
         */
        CERTS_ONLY,
        /**
         * The S/MIME content is unknown.
         */
        UNKNOWN,
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
     * A value representing the signature status bit flags for a particular
     * #GMimeSignature.
     */

    /**
     * A value representing the signature status bit flags for a particular
     * #GMimeSignature.
     */
    export namespace SignatureStatus {
        export const $gtype: GObject.GType<SignatureStatus>;
    }

    enum SignatureStatus {
        /**
         * The signature is fully valid.
         */
        VALID,
        /**
         * The signature is good.
         */
        GREEN,
        /**
         * The signature is bad.
         */
        RED,
        /**
         * The key has been revoked.
         */
        KEY_REVOKED,
        /**
         * The key has expired.
         */
        KEY_EXPIRED,
        /**
         * The signature has expired.
         */
        SIG_EXPIRED,
        /**
         * Can't verify due to missing key.
         */
        KEY_MISSING,
        /**
         * CRL not available.
         */
        CRL_MISSING,
        /**
         * Available CRL is too old.
         */
        CRL_TOO_OLD,
        /**
         * A policy was not met.
         */
        BAD_POLICY,
        /**
         * A system error occurred.
         */
        SYS_ERROR,
        /**
         * Tofu conflict detected.
         */
        TOFU_CONFLICT,
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
         * Read in 4k blocks.
         */
        READ,
        /**
         * Write in 4k blocks.
         */
        WRITE,
    }
    /**
     * The trust level of a certificate.  Trust level tries to answer the
     * question: "How much is the user willing to rely on cryptographic
     * identity assertions made by the owner of this certificate?"
     *
     * By way of comparison with web browser X.509 certificate validation
     * stacks, the certificate of a "Root CA" has `GMIME_TRUST_ULTIMATE,`
     * while the certificate of an intermediate CA has `GMIME_TRUST_FULL,`
     * and an end-entity certificate (e.g., with CA:FALSE set) would have
     * `GMIME_TRUST_NEVER`.
     */

    /**
     * The trust level of a certificate.  Trust level tries to answer the
     * question: "How much is the user willing to rely on cryptographic
     * identity assertions made by the owner of this certificate?"
     *
     * By way of comparison with web browser X.509 certificate validation
     * stacks, the certificate of a "Root CA" has `GMIME_TRUST_ULTIMATE,`
     * while the certificate of an intermediate CA has `GMIME_TRUST_FULL,`
     * and an end-entity certificate (e.g., with CA:FALSE set) would have
     * `GMIME_TRUST_NEVER`.
     */
    export namespace Trust {
        export const $gtype: GObject.GType<Trust>;
    }

    enum Trust {
        /**
         * We do not know whether to rely on identity assertions made by the certificate.
         */
        UNKNOWN,
        /**
         * We do not have enough information to decide whether to rely on identity assertions made by the certificate.
         */
        UNDEFINED,
        /**
         * We should never rely on identity assertions made by the certificate.
         */
        NEVER,
        /**
         * We can rely on identity assertions made by this certificate as long as they are corroborated by other marginally-trusted certificates.
         */
        MARGINAL,
        /**
         * We can rely on identity assertions made by this certificate.
         */
        FULL,
        /**
         * This certificate is an undeniable root of trust (e.g. normally, this is a certificate controlled by the user themselves).
         */
        ULTIMATE,
    }
    /**
     * The validity level of a certificate's User ID.  Validity level
     * tries to answer the question: "How strongly do we believe that this
     * certificate belongs to the party it says it belongs to?"
     *
     * Note that some OpenPGP certificates have multiple User IDs, and
     * each User ID may have a different validity level (e.g. depending on
     * which third parties have certified which User IDs, and which third
     * parties the local user has chosen to trust).
     *
     * Similarly, an X.509 certificate can have multiple SubjectAltNames,
     * and each name may also have a different validity level (e.g. if the
     * issuing CA is bound by name constraints).
     *
     * Note that the GMime API currently only exposes the highest-validty
     * User ID for any given certificate.
     */

    /**
     * The validity level of a certificate's User ID.  Validity level
     * tries to answer the question: "How strongly do we believe that this
     * certificate belongs to the party it says it belongs to?"
     *
     * Note that some OpenPGP certificates have multiple User IDs, and
     * each User ID may have a different validity level (e.g. depending on
     * which third parties have certified which User IDs, and which third
     * parties the local user has chosen to trust).
     *
     * Similarly, an X.509 certificate can have multiple SubjectAltNames,
     * and each name may also have a different validity level (e.g. if the
     * issuing CA is bound by name constraints).
     *
     * Note that the GMime API currently only exposes the highest-validty
     * User ID for any given certificate.
     */
    export namespace Validity {
        export const $gtype: GObject.GType<Validity>;
    }

    enum Validity {
        /**
         * The User ID of the certificate is of unknown validity.
         */
        UNKNOWN,
        /**
         * The User ID of the certificate is undefined.
         */
        UNDEFINED,
        /**
         * The User ID of the certificate is never to be treated as valid.
         */
        NEVER,
        /**
         * The User ID of the certificate is marginally valid (e.g. it has been certified by only one marginally-trusted party).
         */
        MARGINAL,
        /**
         * The User ID of the certificate is fully valid.
         */
        FULL,
        /**
         * The User ID of the certificate is ultimately valid (i.e., usually the certificate belongs to the local user themselves).
         */
        ULTIMATE,
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
     * A bit flag for g_mime_filter_enriched_new() which signifies that
     * the filter should expect Rich Text (aka RTF).
     */
    const FILTER_ENRICHED_IS_RICHTEXT: number;
    /**
     * Enclose citation text in blockquotes.
     */
    const FILTER_HTML_BLOCKQUOTE_CITATION: number;
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
     * Wrap stream in &lt;pre&gt; and &lt;/pre&gt; tags.
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
     * A convenience macro for masking out the non-error bit flags.
     */
    const SIGNATURE_STATUS_ERROR_MASK: number;
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
     * @returns the charset name best suited for the input text or %NULL if it is ascii-safe.
     */
    function charset_best(inbuf: string, inlen: number): string | null;
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
    function charset_language(charset: string): string | null;
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
     * Gets the default format options.
     * @returns the default format options.
     */
    function format_options_get_default(): FormatOptions;
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
     */
    function init(): void;
    /**
     * Gets the user's locale charset (or iso-8859-1 by default).
     * @returns the user's locale charset (or iso-8859-1 by default).
     */
    function locale_charset(): string;
    /**
     * Gets the user's locale language code (or %NULL by default).
     * @returns the user's locale language code (or %NULL by default).
     */
    function locale_language(): string | null;
    /**
     * Gets the default parser options.
     * @returns the default parser options.
     */
    function parser_options_get_default(): ParserOptions;
    /**
     * Decodes a list of msg-ids as in the References and/or In-Reply-To
     * headers defined in rfc822.
     * @param options a #GMimeParserOptions or %NULL
     * @param text string containing a list of msg-ids
     * @returns a new #GMimeReferences containing the parsed message ids.
     */
    function references_parse(options: ParserOptions | null, text: string): References;
    /**
     * Frees internally allocated tables created in g_mime_init().
     */
    function shutdown(): void;
    /**
     * Determines the best content encoding for the first `len` bytes of
     * `text`.
     * @param text text to encode
     * @returns a #GMimeContentEncoding that is determined to be the best encoding type for the specified block of text. ("best" in this particular case means smallest output size)
     */
    function utils_best_encoding(text: Uint8Array | string): ContentEncoding;
    /**
     * Attempts to convert text in an unknown 8bit/multibyte charset into
     * UTF-8 by finding the charset which will convert the most bytes into
     * valid UTF-8 characters as possible. If no exact match can be found,
     * it will choose the best match and convert invalid byte sequences
     * into question-marks (?) in the returned string buffer.
     * @param options a #GMimeParserOptions or %NULL
     * @param text input text in   unknown 8bit/multibyte character set
     * @returns a UTF-8 string representation of @text.
     */
    function utils_decode_8bit(options: ParserOptions | null, text: Uint8Array | string): string;
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
     * Parses the rfc822 date string.
     * @param str input date string
     * @returns the #GDateTime representation of the date string specified by @str or %NULL on error.
     */
    function utils_header_decode_date(str: string): GLib.DateTime | null;
    /**
     * Decodes an rfc2047 encoded 'phrase' header.
     * @param options a #GMimeParserOptions or %NULL
     * @param phrase header to decode
     * @returns a newly allocated UTF-8 string representing the the decoded header.
     */
    function utils_header_decode_phrase(options: ParserOptions | null, phrase: string): string;
    /**
     * Decodes an rfc2047 encoded 'text' header.
     * @param options a #GMimeParserOptions or %NULL
     * @param text header text to decode
     * @returns a newly allocated UTF-8 string representing the the decoded header.
     */
    function utils_header_decode_text(options: ParserOptions | null, text: string): string;
    /**
     * Encodes a 'phrase' header according to the rules in rfc2047.
     * @param options a #GMimeFormatOptions or %NULL
     * @param phrase phrase to encode
     * @param charset the charset to use or %NULL to use the default
     * @returns the encoded 'phrase'. Useful for encoding internet addresses.
     */
    function utils_header_encode_phrase(options: FormatOptions | null, phrase: string, charset?: string | null): string;
    /**
     * Encodes a 'text' header according to the rules in rfc2047.
     * @param options a #GMimeFormatOptions or %NULL
     * @param text text to encode
     * @param charset the charset to use or %NULL to use the default
     * @returns the encoded header. Useful for encoding headers like "Subject".
     */
    function utils_header_encode_text(options: FormatOptions | null, text: string, charset?: string | null): string;
    /**
     * Allocates a string buffer containing the rfc822 formatted date
     * string represented by `date`.
     * @param date a #GDateTime
     * @returns a valid string representation of the date.
     */
    function utils_header_format_date(date: GLib.DateTime): string;
    /**
     * Unfolds a raw header value according to the rules in rfc822.
     * @param value raw header value
     * @returns an allocated string containing the unfolded header value.
     */
    function utils_header_unfold(value: string): string;
    /**
     * Quotes `string` as needed according to the rules in rfc2822.
     * @param str input string
     * @returns an allocated string containing the escaped and quoted (if needed to be) input string. The decision to quote the string is based on whether or not the input string contains any 'specials' as defined by rfc2822.
     */
    function utils_quote_string(str: string): string;
    /**
     * Folds a structured header according to the rules in rfc822.
     * @param options a #GMimeParserOptions or %NULL
     * @param format a #GMimeFormatOptions or %NULL
     * @param header header field and value string
     * @returns an allocated string containing the folded header.
     */
    function utils_structured_header_fold(
        options: ParserOptions | null,
        format: FormatOptions | null,
        header: string,
    ): string;
    /**
     * Determines if `text` contains 8bit characters within the first `len`
     * bytes.
     * @param text text to check for 8bit chars
     * @returns %TRUE if the text contains 8bit characters or %FALSE otherwise.
     */
    function utils_text_is_8bit(text: Uint8Array | string): boolean;
    /**
     * Unquotes and unescapes a string.
     * @param str input string
     */
    function utils_unquote_string(str: string): void;
    /**
     * Folds an unstructured header according to the rules in rfc822.
     * @param options a #GMimeParserOptions or %NULL
     * @param format a #GMimeFormatOptions or %NULL
     * @param header header field and value string
     * @returns an allocated string containing the folded header.
     */
    function utils_unstructured_header_fold(
        options: ParserOptions | null,
        format: FormatOptions | null,
        header: string,
    ): string;
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
    interface HeaderRawValueFormatter {
        (header: Header, options: FormatOptions, value: string, charset: string): string;
    }
    interface ObjectForeachFunc {
        (parent: Object, part: Object): void;
    }
    interface ParserHeaderRegexFunc {
        (parser: Parser, header: string, value: string, offset: number): void;
    }
    interface ParserWarningFunc {
        (offset: number, errcode: ParserWarning, item: string): void;
    }
    interface PasswordRequestFunc {
        (ctx: CryptoContext, user_id: string, prompt: string, reprompt: boolean, response: Stream): boolean;
    }
    /**
     * Decryption flags.
     */

    /**
     * Decryption flags.
     */
    export namespace DecryptFlags {
        export const $gtype: GObject.GType<DecryptFlags>;
    }

    enum DecryptFlags {
        /**
         * No flags specified.
         */
        NONE,
        /**
         * Export the decryption session-key.
         */
        EXPORT_SESSION_KEY,
        /**
         * Disable signature verification.
         */
        NO_VERIFY,
        /**
         * Enable OpenPGP keyserver lookups.
         */
        ENABLE_KEYSERVER_LOOKUPS,
        /**
         * Enable CRL and OCSP checks that require network lookups.
         */
        ENABLE_ONLINE_CERTIFICATE_CHECKS,
    }
    /**
     * Encryption flags.
     */

    /**
     * Encryption flags.
     */
    export namespace EncryptFlags {
        export const $gtype: GObject.GType<EncryptFlags>;
    }

    enum EncryptFlags {
        /**
         * No flags specified.
         */
        NONE,
        /**
         * Always trust the specified keys.
         */
        ALWAYS_TRUST,
        /**
         * Don't compress the plaintext before encrypting.
         */
        NO_COMPRESS,
        /**
         * Encrypt symmetrically.
         */
        SYMMETRIC,
        /**
         * Do not include the key ids in the ciphertext.
         */
        THROW_KEYIDS,
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
     * The current state of the #GMimeFilterOpenPGP filter.
     */

    /**
     * The current state of the #GMimeFilterOpenPGP filter.
     */
    export namespace OpenPGPState {
        export const $gtype: GObject.GType<OpenPGPState>;
    }

    enum OpenPGPState {
        /**
         * No OpenPGP markers have been found (yet).
         */
        NONE,
        /**
         * The "-----BEGIN PGP MESSAGE-----" marker has been found.
         */
        BEGIN_PGP_MESSAGE,
        /**
         * The "-----END PGP MESSAGE-----" marker has been found.
         */
        END_PGP_MESSAGE,
        /**
         * The "-----BEGIN PGP SIGNED MESSAGE-----" marker has been found.
         */
        BEGIN_PGP_SIGNED_MESSAGE,
        /**
         * The "-----BEGIN PGP SIGNATURE-----" marker has been found.
         */
        BEGIN_PGP_SIGNATURE,
        /**
         * The "-----END PGP SIGNATURE-----" marker has been found.
         */
        END_PGP_SIGNATURE,
        /**
         * The "-----BEGIN PGP PUBLIC KEY BLOCK-----" marker has been found.
         */
        BEGIN_PGP_PUBLIC_KEY_BLOCK,
        /**
         * The "-----END PGP PUBLIC KEY BLOCK-----" marker has been found.
         */
        END_PGP_PUBLIC_KEY_BLOCK,
        /**
         * The "-----BEGIN PGP PRIVATE KEY BLOCK-----" marker has been found.
         */
        BEGIN_PGP_PRIVATE_KEY_BLOCK,
        /**
         * The "-----END PGP PRIVATE KEY BLOCK-----" marker has been found.
         */
        END_PGP_PRIVATE_KEY_BLOCK,
    }
    /**
     * Signature verification flags.
     */

    /**
     * Signature verification flags.
     */
    export namespace VerifyFlags {
        export const $gtype: GObject.GType<VerifyFlags>;
    }

    enum VerifyFlags {
        /**
         * No flags specified.
         */
        NONE,
        /**
         * Enable OpenPGP keyserver lookups.
         */
        ENABLE_KEYSERVER_LOOKUPS,
        /**
         * Enable CRL and OCSP checks that require network lookups.
         */
        ENABLE_ONLINE_CERTIFICATE_CHECKS,
    }
    namespace ApplicationPkcs7Mime {
        // Signal signatures
        interface SignalSignatures extends Part.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Part.ConstructorProps {}
    }

    /**
     * An application/pkcs7-mime MIME part.
     */
    class ApplicationPkcs7Mime extends Part {
        static $gtype: GObject.GType<ApplicationPkcs7Mime>;

        // Fields

        parent_object: Part;
        smime_type: SecureMimeType;

        // Constructors

        constructor(properties?: Partial<ApplicationPkcs7Mime.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: SecureMimeType): ApplicationPkcs7Mime;
        // Conflicted with GMime.Part.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof ApplicationPkcs7Mime.SignalSignatures>(
            signal: K,
            callback: ApplicationPkcs7Mime.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ApplicationPkcs7Mime.SignalSignatures>(
            signal: K,
            callback: ApplicationPkcs7Mime.SignalSignatures[K],
        ): number;
        emit<K extends keyof ApplicationPkcs7Mime.SignalSignatures>(
            signal: K,
            ...args: ApplicationPkcs7Mime.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Attempts to encrypt the `entity` MIME part to the public keys of `recipients`
         * using S/MIME. If successful, a new application/pkcs7-mime object is returned.
         * @param entity a #GMimeObject to encrypt
         * @param flags a #GMimeEncryptFlags
         * @param recipients an array of recipients to encrypt to
         */
        static encrypt(entity: Object, flags: EncryptFlags, recipients: string[]): ApplicationPkcs7Mime | null;
        /**
         * Attempts to sign the `entity` MIME part with `userid'`s private key using
         * S/MIME. If successful, a new application/pkcs7-mime object is returned.
         * @param entity a #GMimeObject
         * @param userid the user id to sign with
         */
        static sign(entity: Object, userid: string): ApplicationPkcs7Mime | null;

        // Methods

        /**
         * Attempts to decrypt the encrypted application/pkcs7-mime part.
         *
         * When non-%NULL, `session_key` should be a %NULL-terminated string,
         * such as the one returned by g_mime_decrypt_result_get_session_key()
         * from a previous decryption. If the `session_key` is not valid, decryption
         * will fail.
         *
         * If `result` is non-%NULL, then on a successful decrypt operation, it will be
         * updated to point to a newly-allocated #GMimeDecryptResult with signature
         * status information as well as a list of recipients that the part was
         * encrypted to.
         * @param flags a #GMimeDecryptFlags
         * @param session_key session key to use or %NULL
         * @param result the decryption result
         * @returns the decrypted MIME part on success or %NULL on fail. If the decryption fails, an exception will be set on @err to provide information as to why the failure occurred.
         */
        decrypt(flags: DecryptFlags | null, session_key: string, result: DecryptResult): Object | null;
        /**
         * Gets the smime-type value of the Content-Type header.
         * @returns the smime-type value.
         */
        get_smime_type(): SecureMimeType;
        /**
         * Attempts to verify the signed `pkcs7`_mime part and extract the original
         * MIME entity.
         * @param flags a #GMimeVerifyFlags
         * @returns a new #GMimeSignatureList object on success or %NULL on fail. If the verification fails, an exception will be set on @err to provide information as to why the failure occurred.
         */
        verify(flags: VerifyFlags | null): [SignatureList | null, Object];
    }

    namespace AutocryptHeader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An object containing Autocrypt information about a given e-mail
     * address, as derived from a message header.
     *
     * See https://autocrypt.org/ for details and motivation.
     */
    class AutocryptHeader extends GObject.Object {
        static $gtype: GObject.GType<AutocryptHeader>;

        // Fields

        parent_object: GObject.Object;
        address: InternetAddressMailbox;
        prefer_encrypt: AutocryptPreferEncrypt;

        // Constructors

        constructor(properties?: Partial<AutocryptHeader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AutocryptHeader;

        static new_from_string(string: string): AutocryptHeader;

        // Signals

        connect<K extends keyof AutocryptHeader.SignalSignatures>(
            signal: K,
            callback: AutocryptHeader.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof AutocryptHeader.SignalSignatures>(
            signal: K,
            callback: AutocryptHeader.SignalSignatures[K],
        ): number;
        emit<K extends keyof AutocryptHeader.SignalSignatures>(
            signal: K,
            ...args: AutocryptHeader.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * If address and type already match between `src` and `dst,` copy
         * keydata, prefer_encrypt, effective_date from `src` to `dst`.
         * @param src a #GMimeAutocryptHeader object
         */
        clone(src: AutocryptHeader): void;
        /**
         * Compare two Autocrypt Headers.  This is useful for comparison, as well as for
         * sorting headers by:
         *
         *  - address
         *  - effective_date
         *  - keydata
         *  - prefer_encrypt
         * @param ah2 a #GMimeAutocryptHeader object
         * @returns -1, 0, or 1 when @ah1 is less than, equal to, or greater than @ah2.
         */
        compare(ah2: AutocryptHeader): number;
        /**
         * Gets the internal address of the Autocrypt header, or %NULL if not set.
         * @returns the address associated with the Autocrypt header
         */
        get_address(): InternetAddressMailbox;
        /**
         * Gets the internal address of the Autocrypt header as a C string, or %NULL if not set.
         * @returns the address associated with the Autocrypt header
         */
        get_address_as_string(): string;
        /**
         * Gets the effective date of the Autocrypt header, or %NULL if not set.
         * @returns the effective date associated with the Autocrypt header
         */
        get_effective_date(): GLib.DateTime;
        /**
         * Gets the raw keydata of the Autocrypt header, or %NULL if not set.
         * @returns the raw key data associated with the Autocrypt header
         */
        get_keydata(): GLib.Bytes;
        /**
         * Gets the encryption preference stated by the Autocrypt header.
         * @returns the encryption preference associated with the Autocrypt header
         */
        get_prefer_encrypt(): AutocryptPreferEncrypt;
        /**
         * When dealing with Autocrypt headers derived from a message, some
         * sender addresses will not have a legitimate/complete header
         * associated with them.  When a given sender address has no complete
         * header of a specific type, it should "reset" the state of the
         * associated address.
         * @returns %TRUE if the header is complete, or %FALSE if it is incomplete.
         */
        is_complete(): boolean;
        /**
         * Set the address associated with the autocrypt_header.
         * @param address a #InternetAddressMailbox value
         */
        set_address(address: InternetAddressMailbox): void;
        /**
         * Set the address associated with the autocrypt_header.
         * @param address a %NULL-terminated string that is a raw e-mail address
         */
        set_address_from_string(address: string): void;
        /**
         * Set the effective date associated with the Autocrypt header.
         * @param effective_date a #GDateTime object
         */
        set_effective_date(effective_date: GLib.DateTime): void;
        /**
         * Set the raw key data associated with the Autocrypt header.
         * @param keydata a #GBytes object
         */
        set_keydata(keydata: GLib.Bytes | Uint8Array): void;
        /**
         * Set the encryption preference associated with the Autocrypt header.
         * @param pref a #GMimeAutocryptPreferEncrypt value
         */
        set_prefer_encrypt(pref: AutocryptPreferEncrypt | null): void;
        /**
         * Gets the string representation of the Autocrypt header, or %NULL on
         * error.  For example, it might return:
         *
         *     prefer-encrypt=mutual; addr=bob\`example`.com; keydata=AAAB15BE...
         *
         * If you are using this object to populate an Autocrypt-Gossip
         * header, you should set `gossip` to %TRUE (this will suppress
         * inclusion of prefer-encrypt).
         * @param gossip a #gboolean, indicating whether this header is for use with gossip
         * @returns the string representation of the Autocrypt header.
         */
        to_string(gossip: boolean): string;
    }

    namespace AutocryptHeaderList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A list of Autocrypt headers, typically extracted from a GMimeMessage.
     */
    class AutocryptHeaderList extends GObject.Object {
        static $gtype: GObject.GType<AutocryptHeaderList>;

        // Fields

        parent_object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<AutocryptHeaderList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AutocryptHeaderList;

        // Signals

        connect<K extends keyof AutocryptHeaderList.SignalSignatures>(
            signal: K,
            callback: AutocryptHeaderList.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof AutocryptHeaderList.SignalSignatures>(
            signal: K,
            callback: AutocryptHeaderList.SignalSignatures[K],
        ): number;
        emit<K extends keyof AutocryptHeaderList.SignalSignatures>(
            signal: K,
            ...args: AutocryptHeaderList.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Adds a the passed #GMimeAutocryptHeader to the list.
         * @param header a #GMimeAutocryptHeader object
         */
        add(header: AutocryptHeader): void;
        /**
         * Adds a new incomplete #GMimeAutocryptHeader object for each
         * InternetAddressMailbox found in #addresses.
         * @param addresses an #InternetAddressList object
         * @returns the number of addresses added
         */
        add_missing_addresses(addresses: InternetAddressList): number;
        /**
         * See how many Autocrypt headers are in the list.
         * @returns the number of available Autocrypt headers
         */
        get_count(): number;
        /**
         * Get the Nth header in the list (returns %NULL on error, or if `index` is out of bounds)
         * @param index an index into the list
         * @returns a pointer to the Nth header in the list.
         */
        get_header_at(index: number): AutocryptHeader;
        /**
         * Gets the Autocrypt header corresponding to the given `mailbox`.
         * @param mailbox an #InternetAddressMailbox object
         * @returns a pointer to the header in the list which matches the requested address, or %NULL if no such header exists in the list.
         */
        get_header_for_address(mailbox: InternetAddressMailbox): AutocryptHeader;
        /**
         * Remove all incomplete Autocrypt headers from the list.
         */
        remove_incomplete(): void;
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

        // Fields

        parent_object: GObject.Object;
        pubkey_algo: PubKeyAlgo;
        digest_algo: DigestAlgo;
        trust: Trust;
        issuer_serial: string;
        issuer_name: string;
        fingerprint: string;
        created: never;
        expires: never;
        keyid: string;
        email: string;
        name: string;
        user_id: string;
        id_validity: Validity;

        // Constructors

        constructor(properties?: Partial<Certificate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Certificate;

        // Signals

        connect<K extends keyof Certificate.SignalSignatures>(
            signal: K,
            callback: Certificate.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Certificate.SignalSignatures>(
            signal: K,
            callback: Certificate.SignalSignatures[K],
        ): number;
        emit<K extends keyof Certificate.SignalSignatures>(
            signal: K,
            ...args: Certificate.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Get the creation date of the certificate's key.
         * @returns the creation date of the certificate's key or %-1 if unknown.
         */
        get_created(): never;
        /**
         * Get the creation date of the certificate's key in seconds since the
         * UNIX epoch, represented as a 64-bit signed integer.
         * @returns the creation date of the certificate's key or %-1 if unknown.
         */
        get_created64(): number;
        /**
         * Get the digest algorithm used by the certificate.
         * @returns the digest algorithm used by the certificate or #GMIME_DIGEST_ALGO_DEFAULT if unspecified.
         */
        get_digest_algo(): DigestAlgo;
        /**
         * Get the email address associated with the certificate.  If the
         * certificate contains more than one email address with different
         * validities, the email address with the highest validity is
         * returned.  If more than one email address appears in the
         * certificate with the same (highest) validity, the first such email
         * address will be returned.
         * @returns the relevant e-mail address, or %NULL if unspecified.
         */
        get_email(): string;
        /**
         * Get the expiration date of the certificate's key. A value of %0 means the certificate never expires.
         * @returns the expiration date of the certificate's key or %-1 if unknown.
         */
        get_expires(): never;
        /**
         * Get the expiration date of the certificate's key in seconds since
         * the UNIX epoch, represented as a 64-bit signed integer. A value of
         * %0 means the certificate never expires.
         * @returns the expiration date of the certificate's key or %-1 if unknown.
         */
        get_expires64(): number;
        /**
         * Get the certificate's key fingerprint.
         * @returns the certificate's key fingerprint or %NULL if unspecified.
         */
        get_fingerprint(): string;
        /**
         * Get the validity of the certificate's identity information.  This
         * validity applies to the name, email, and user_id fields associated
         * with the certificate.
         * @returns the identity validity of the certificate.
         */
        get_id_validity(): Validity;
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
         * Get the name associated with the certificate.  For email
         * certificates, this is usually the name of the person who controls
         * the certificate (encoded in UTF-8).  If the certificate contains
         * more than one name with different validities, the name with the
         * highest validity is returned.  If more than one name appears in the
         * certificate with the same (highest) validity, the first such name
         * will be returned.
         * @returns the the relevant name or %NULL if unspecified.
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
        get_trust(): Trust;
        /**
         * Get the certificate's full User ID.  If the certificate contains
         * more than one User ID with different validities, the User ID with
         * the highest validity is returned.  If more than one User ID appears
         * in the certificate with the same (highest) validity, the first such
         * User ID will be returned.
         * @returns the relevant User ID or %NULL if unspecified.
         */
        get_user_id(): string;
        /**
         * Set the creation date of the certificate's key.
         * @param created creation date
         */
        set_created(created: never): void;
        /**
         * Set the digest algorithm used by the certificate.
         * @param algo a #GMimeDigestAlgo
         */
        set_digest_algo(algo: DigestAlgo | null): void;
        /**
         * Set the email address associated with the
         * certificate. (e.g. "jane\`example`.org")
         * @param email certificate's email
         */
        set_email(email: string): void;
        /**
         * Set the expiration date of the certificate's key. A value of %0 means the certificate never expires.
         * @param expires expiration date
         */
        set_expires(expires: never): void;
        /**
         * Set the certificate's key fingerprint.
         * @param fingerprint fingerprint string
         */
        set_fingerprint(fingerprint: string): void;
        /**
         * Set the validity associated with the certificate's name, email, and user_id.
         * @param validity a #GMimeValidity representing the validity of the certificate's identity information.
         */
        set_id_validity(validity: Validity | null): void;
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
         * Set the name associated with the certificate.  For email
         * certificates, this is usually the name of the person who controls
         * the certificate (encoded in UTF-8). (e.g. "Jane Doe")
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
         * @param trust a #GMimeTrust value
         */
        set_trust(trust: Trust | null): void;
        /**
         * Set the certificate's full User ID.  By convention, this is usually
         * a mail name-addr as described in RFC 5322.  (e.g. "Jane Doe
         * &lt;jane\`example`.org&gt;")
         * @param user_id the full User ID for a certificate
         */
        set_user_id(user_id: string): void;
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
            callback: CertificateList.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof CertificateList.SignalSignatures>(
            signal: K,
            callback: CertificateList.SignalSignatures[K],
        ): number;
        emit<K extends keyof CertificateList.SignalSignatures>(
            signal: K,
            ...args: CertificateList.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Adds a #GMimeCertificate to the #GMimeCertificateList.
         * @param cert a #GMimeCertificate
         * @returns the index of the added #GMimeCertificate.
         */
        add(cert: Certificate): number;
        /**
         * Clears the list of certificates.
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
         * @param index index of the certificate to remove
         * @returns %TRUE if a #GMimeCertificate was removed or %FALSE otherwise.
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

        // Fields

        parent_object: GObject.Object;
        disposition: string;
        params: ParamList;

        // Constructors

        constructor(properties?: Partial<ContentDisposition.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContentDisposition;

        // Signals

        connect<K extends keyof ContentDisposition.SignalSignatures>(
            signal: K,
            callback: ContentDisposition.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ContentDisposition.SignalSignatures>(
            signal: K,
            callback: ContentDisposition.SignalSignatures[K],
        ): number;
        emit<K extends keyof ContentDisposition.SignalSignatures>(
            signal: K,
            ...args: ContentDisposition.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Parses the input string into a #GMimeContentDisposition object.
         * @param options a #GMimeParserOptions or %NULL
         * @param str Content-Disposition field value
         */
        static parse(options: ParserOptions | null, str: string): ContentDisposition;

        // Methods

        /**
         * Encodes the Content-Disposition header.
         * @param options a #GMimeFormatOptions or %NULL
         * @returns a new string containing the encoded header value.
         */
        encode(options?: FormatOptions | null): string;
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
         * @returns the Content-Disposition's parameter list.
         */
        get_parameters(): ParamList;
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

        // Fields

        parent_object: GObject.Object;
        type: string;
        subtype: string;
        params: ParamList;

        // Constructors

        constructor(properties?: Partial<ContentType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: string, subtype: string): ContentType;

        // Signals

        connect<K extends keyof ContentType.SignalSignatures>(
            signal: K,
            callback: ContentType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ContentType.SignalSignatures>(
            signal: K,
            callback: ContentType.SignalSignatures[K],
        ): number;
        emit<K extends keyof ContentType.SignalSignatures>(
            signal: K,
            ...args: ContentType.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Parses the input string into a #GMimeContentType object.
         * @param options a #GMimeParserOptions or %NULL
         * @param str input string containing a content-type (and params)
         */
        static parse(options: ParserOptions | null, str: string): ContentType;

        // Methods

        /**
         * Encodes the Content-Disposition header.
         * @param options a #GMimeFormatOptions or %NULL
         * @returns a new string containing the encoded header value.
         */
        encode(options?: FormatOptions | null): string;
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
         * Allocates a string buffer containing the type and subtype defined
         * by the `content_type`.
         * @returns an allocated string containing the type and subtype of the content-type in the format: type/subtype.
         */
        get_mime_type(): string;
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
        get_parameters(): ParamList;
        /**
         * Compares the given type and subtype with that of the given mime
         * type object.
         * @param type MIME type to compare against
         * @param subtype MIME subtype to compare against
         * @returns %TRUE if the MIME types match or %FALSE otherwise. You may use "*" in place of @type and/or @subtype as a wilcard.
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

        // Fields

        parent_object: GObject.Object;
        request_passwd: PasswordRequestFunc;

        // Constructors

        constructor(properties?: Partial<CryptoContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](protocol: string): CryptoContext;

        // Signals

        connect<K extends keyof CryptoContext.SignalSignatures>(
            signal: K,
            callback: CryptoContext.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof CryptoContext.SignalSignatures>(
            signal: K,
            callback: CryptoContext.SignalSignatures[K],
        ): number;
        emit<K extends keyof CryptoContext.SignalSignatures>(
            signal: K,
            ...args: CryptoContext.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        /**
         * Decrypts the ciphertext input stream and writes the resulting cleartext
         * to the output stream.
         *
         * When non-%NULL, `session_key` should be a %NULL-terminated string,
         * such as the one returned by g_mime_decrypt_result_get_session_key()
         * from a previous decryption. If the `session_key` is not valid, decryption
         * will fail.
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
         * @param flags a set of #GMimeDecryptFlags
         * @param session_key the session key to use or %NULL
         * @param istream input/ciphertext stream
         * @param ostream output/cleartext stream
         */
        vfunc_decrypt(flags: DecryptFlags, session_key: string | null, istream: Stream, ostream: Stream): DecryptResult;
        /**
         * Gets the digest id based on the digest name.
         * @param name digest name
         */
        vfunc_digest_id(name: string): DigestAlgo;
        /**
         * Gets the digest name based on the digest id `digest`.
         * @param digest digest id
         */
        vfunc_digest_name(digest: DigestAlgo): string | null;
        /**
         * Encrypts (and optionally signs) the cleartext input stream and
         * writes the resulting ciphertext to the output stream.
         * @param sign sign as well as encrypt
         * @param userid the key id (or email address) to use when signing (assuming @sign is %TRUE)
         * @param flags a set of #GMimeEncryptFlags
         * @param recipients an array of recipient key ids and/or email addresses
         * @param istream cleartext input stream
         * @param ostream ciphertext output stream
         */
        vfunc_encrypt(
            sign: boolean,
            userid: string | null,
            flags: EncryptFlags,
            recipients: string[],
            istream: Stream,
            ostream: Stream,
        ): number;
        /**
         * Exports the keys/certificates in `keys` to the stream `ostream` from
         * the key/certificate database controlled by `ctx`.
         *
         * If `keys` is %NULL or contains only a %NULL element, then all keys
         * will be exported.
         * @param keys an array of key ids, terminated by a %NULL element
         * @param ostream output stream
         */
        vfunc_export_keys(keys: string[], ostream: Stream): number;
        /**
         * Gets the encryption protocol for the crypto context.
         */
        vfunc_get_encryption_protocol(): string | null;
        /**
         * Gets the key exchange protocol for the crypto context.
         */
        vfunc_get_key_exchange_protocol(): string | null;
        /**
         * Gets the signature protocol for the crypto context.
         */
        vfunc_get_signature_protocol(): string | null;
        /**
         * Imports a stream of keys/certificates contained within `istream`
         * into the key/certificate database controlled by `ctx`.
         * @param istream input stream (containing keys)
         */
        vfunc_import_keys(istream: Stream): number;
        /**
         * Signs the input stream and writes the resulting signature to the output stream.
         * @param detach %TRUE if @ostream should be the detached signature; otherwise, %FALSE
         * @param userid private key to use to sign the stream
         * @param istream input stream
         * @param ostream output stream
         */
        vfunc_sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number;
        /**
         * Verifies the signature. If `istream` is a clearsigned stream, you
         * should pass %NULL as the `sigstream` parameter and may wish to
         * provide an `ostream` argument for GMime to output the original
         * plaintext into. Otherwise `sigstream` is assumed to be the signature
         * stream and is used to verify the integirity of the `istream`.
         * @param flags a #GMimeVerifyFlags
         * @param istream input stream
         * @param sigstream detached-signature stream
         * @param ostream output stream for use with encapsulated signature input streams
         */
        vfunc_verify(
            flags: VerifyFlags,
            istream: Stream,
            sigstream?: Stream | null,
            ostream?: Stream | null,
        ): SignatureList | null;

        // Methods

        /**
         * Decrypts the ciphertext input stream and writes the resulting cleartext
         * to the output stream.
         *
         * When non-%NULL, `session_key` should be a %NULL-terminated string,
         * such as the one returned by g_mime_decrypt_result_get_session_key()
         * from a previous decryption. If the `session_key` is not valid, decryption
         * will fail.
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
         * @param flags a set of #GMimeDecryptFlags
         * @param session_key the session key to use or %NULL
         * @param istream input/ciphertext stream
         * @param ostream output/cleartext stream
         * @returns a #GMimeDecryptResult on success or %NULL on error.
         */
        decrypt(
            flags: DecryptFlags | null,
            session_key: string | null,
            istream: Stream,
            ostream: Stream,
        ): DecryptResult;
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
        digest_name(digest: DigestAlgo | null): string | null;
        /**
         * Encrypts (and optionally signs) the cleartext input stream and
         * writes the resulting ciphertext to the output stream.
         * @param sign sign as well as encrypt
         * @param userid the key id (or email address) to use when signing (assuming @sign is %TRUE)
         * @param flags a set of #GMimeEncryptFlags
         * @param recipients an array of recipient key ids and/or email addresses
         * @param istream cleartext input stream
         * @param ostream ciphertext output stream
         * @returns %0 on success or %-1 on fail.
         */
        encrypt(
            sign: boolean,
            userid: string | null,
            flags: EncryptFlags | null,
            recipients: string[],
            istream: Stream,
            ostream: Stream,
        ): number;
        /**
         * Exports the keys/certificates in `keys` to the stream `ostream` from
         * the key/certificate database controlled by `ctx`.
         *
         * If `keys` is %NULL or contains only a %NULL element, then all keys
         * will be exported.
         * @param keys an array of key ids, terminated by a %NULL element
         * @param ostream output stream
         * @returns %0 on success or %-1 on fail.
         */
        export_keys(keys: string[], ostream: Stream): number;
        /**
         * Gets the encryption protocol for the crypto context.
         * @returns the encryption protocol or %NULL if not supported.
         */
        get_encryption_protocol(): string | null;
        /**
         * Gets the key exchange protocol for the crypto context.
         * @returns the key exchange protocol or %NULL if not supported.
         */
        get_key_exchange_protocol(): string | null;
        /**
         * Gets the signature protocol for the crypto context.
         * @returns the signature protocol or %NULL if not supported.
         */
        get_signature_protocol(): string | null;
        /**
         * Imports a stream of keys/certificates contained within `istream`
         * into the key/certificate database controlled by `ctx`.
         * @param istream input stream (containing keys)
         * @returns the total number of keys imported on success or %-1 on fail.
         */
        import_keys(istream: Stream): number;
        /**
         * Signs the input stream and writes the resulting signature to the output stream.
         * @param detach %TRUE if @ostream should be the detached signature; otherwise, %FALSE
         * @param userid private key to use to sign the stream
         * @param istream input stream
         * @param ostream output stream
         * @returns the #GMimeDigestAlgo used on success or %-1 on fail.
         */
        sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number;
        /**
         * Verifies the signature. If `istream` is a clearsigned stream, you
         * should pass %NULL as the `sigstream` parameter and may wish to
         * provide an `ostream` argument for GMime to output the original
         * plaintext into. Otherwise `sigstream` is assumed to be the signature
         * stream and is used to verify the integirity of the `istream`.
         * @param flags a #GMimeVerifyFlags
         * @param istream input stream
         * @param sigstream detached-signature stream
         * @param ostream output stream for use with encapsulated signature input streams
         * @returns a #GMimeSignatureList object containing the status of each signature or %NULL on error.
         */
        verify(
            flags: VerifyFlags | null,
            istream: Stream,
            sigstream?: Stream | null,
            ostream?: Stream | null,
        ): SignatureList | null;
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
            callback: DataWrapper.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DataWrapper.SignalSignatures>(
            signal: K,
            callback: DataWrapper.SignalSignatures[K],
        ): number;
        emit<K extends keyof DataWrapper.SignalSignatures>(
            signal: K,
            ...args: DataWrapper.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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
            callback: DecryptResult.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DecryptResult.SignalSignatures>(
            signal: K,
            callback: DecryptResult.SignalSignatures[K],
        ): number;
        emit<K extends keyof DecryptResult.SignalSignatures>(
            signal: K,
            ...args: DecryptResult.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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
         * Get the session key used for this decryption.
         * @returns the session key digest algorithm used, or %NULL if no session key was requested or found.
         */
        get_session_key(): string | null;
        /**
         * Gets a list of signatures if the encrypted stream had also been signed.
         * @returns a #GMimeSignatureList or %NULL if the stream was not signed.
         */
        get_signatures(): SignatureList | null;
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
         * Set the session key to be returned by this decryption result.
         * @param session_key a string representing the session key or %NULL to unset the key
         */
        set_session_key(session_key?: string | null): void;
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

        // Fields

        parent_object: GObject.Object;
        priv: any;
        outreal: string;
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

        connect<K extends keyof Filter.SignalSignatures>(signal: K, callback: Filter.SignalSignatures[K]): number;
        connect_after<K extends keyof Filter.SignalSignatures>(signal: K, callback: Filter.SignalSignatures[K]): number;
        emit<K extends keyof Filter.SignalSignatures>(
            signal: K,
            ...args: Filter.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        /**
         * Completes the filtering.
         * @param inbuf input buffer
         * @param prespace prespace buffer length
         */
        vfunc_complete(inbuf: Uint8Array | string, prespace: number): [Uint8Array, number];
        /**
         * Copies `filter` into a new #GMimeFilter object.
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
         * Copies `filter` into a new #GMimeFilter object.
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

        // Fields

        parent_object: Filter;

        // Constructors

        constructor(properties?: Partial<FilterBasic.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](encoding: ContentEncoding, encode: boolean): FilterBasic;

        // Signals

        connect<K extends keyof FilterBasic.SignalSignatures>(
            signal: K,
            callback: FilterBasic.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterBasic.SignalSignatures>(
            signal: K,
            callback: FilterBasic.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterBasic.SignalSignatures>(
            signal: K,
            ...args: FilterBasic.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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
            callback: FilterBest.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterBest.SignalSignatures>(
            signal: K,
            callback: FilterBest.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterBest.SignalSignatures>(
            signal: K,
            ...args: FilterBest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Calculates the best charset for encoding the content filtered
         * through the `best` filter.
         * @returns the name of the charset most suitable for encoding the content that has been passed through the filter or %NULL if the filter was not configured to detect this.
         */
        charset(): string;
        /**
         * Calculates the most efficient Content-Transfer-Encoding for the
         * content filtered through `best` that fits within the encoding
         * `constraint`.
         * @param constraint a #GMimeEncodingConstraint
         * @returns the best encoding for the content filtered by @best.
         */
        encoding(constraint: EncodingConstraint | null): ContentEncoding;
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

        // Fields

        parent_object: Filter;
        from_charset: string;
        to_charset: string;
        cd: any;

        // Constructors

        constructor(properties?: Partial<FilterCharset.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](from_charset: string, to_charset: string): FilterCharset;

        // Signals

        connect<K extends keyof FilterCharset.SignalSignatures>(
            signal: K,
            callback: FilterCharset.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterCharset.SignalSignatures>(
            signal: K,
            callback: FilterCharset.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterCharset.SignalSignatures>(
            signal: K,
            ...args: FilterCharset.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
    }

    namespace FilterChecksum {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter for calculating the checksum of a stream.
     */
    class FilterChecksum extends Filter {
        static $gtype: GObject.GType<FilterChecksum>;

        // Fields

        parent_object: Filter;

        // Constructors

        constructor(properties?: Partial<FilterChecksum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: GLib.ChecksumType): FilterChecksum;

        // Signals

        connect<K extends keyof FilterChecksum.SignalSignatures>(
            signal: K,
            callback: FilterChecksum.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterChecksum.SignalSignatures>(
            signal: K,
            callback: FilterChecksum.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterChecksum.SignalSignatures>(
            signal: K,
            ...args: FilterChecksum.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Outputs the checksum digest into `digest`.
         * @param digest the digest buffer
         * @returns the number of bytes used of the @digest buffer.
         */
        get_digest(digest: Uint8Array | string): number;
        /**
         * Outputs the checksum digest as a newly allocated hexadecimal string.
         * @returns the hexadecimal representation of the checksum. The returned string should be freed with g_free() when no longer needed.
         */
        get_string(): string;
    }

    namespace FilterDos2Unix {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter to convert a stream from Windows/DOS line endings to Unix line endings.
     */
    class FilterDos2Unix extends Filter {
        static $gtype: GObject.GType<FilterDos2Unix>;

        // Fields

        parent_object: Filter;
        ensure_newline: boolean;
        pc: number;

        // Constructors

        constructor(properties?: Partial<FilterDos2Unix.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](ensure_newline: boolean): FilterDos2Unix;

        // Signals

        connect<K extends keyof FilterDos2Unix.SignalSignatures>(
            signal: K,
            callback: FilterDos2Unix.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterDos2Unix.SignalSignatures>(
            signal: K,
            callback: FilterDos2Unix.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterDos2Unix.SignalSignatures>(
            signal: K,
            ...args: FilterDos2Unix.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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
            callback: FilterEnriched.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterEnriched.SignalSignatures>(
            signal: K,
            callback: FilterEnriched.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterEnriched.SignalSignatures>(
            signal: K,
            ...args: FilterEnriched.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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
            callback: FilterFrom.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterFrom.SignalSignatures>(
            signal: K,
            callback: FilterFrom.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterFrom.SignalSignatures>(
            signal: K,
            ...args: FilterFrom.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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
            callback: FilterGZip.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterGZip.SignalSignatures>(
            signal: K,
            callback: FilterGZip.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterGZip.SignalSignatures>(
            signal: K,
            ...args: FilterGZip.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Gets the comment that was either previously set or retrieved when decoding a gzip stream.
         * @returns a string containing the comment.
         */
        get_comment(): string;
        /**
         * Gets the filename that was either previously set or retrieved when decoding a gzip stream.
         * @returns a string containing th ename of the file.
         */
        get_filename(): string;
        /**
         * Sets the comment that should be used when generating the gzip header.
         * @param comment The comment
         */
        set_comment(comment: string): void;
        /**
         * Sets the filename that should be used when generating the gzip header.
         * @param filename The name of the file
         */
        set_filename(filename: string): void;
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

        // Fields

        parent_object: Filter;
        scanner: any;
        flags: number;
        colour: number;
        column: number;
        pre_open: number;
        citation_depth: number;

        // Constructors

        constructor(properties?: Partial<FilterHTML.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](flags: number, colour: number): FilterHTML;

        // Signals

        connect<K extends keyof FilterHTML.SignalSignatures>(
            signal: K,
            callback: FilterHTML.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterHTML.SignalSignatures>(
            signal: K,
            callback: FilterHTML.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterHTML.SignalSignatures>(
            signal: K,
            ...args: FilterHTML.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
    }

    namespace FilterOpenPGP {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter to detect OpenPGP markers.
     */
    class FilterOpenPGP extends Filter {
        static $gtype: GObject.GType<FilterOpenPGP>;

        // Fields

        parent_object: Filter;

        // Constructors

        constructor(properties?: Partial<FilterOpenPGP.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FilterOpenPGP;

        // Signals

        connect<K extends keyof FilterOpenPGP.SignalSignatures>(
            signal: K,
            callback: FilterOpenPGP.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterOpenPGP.SignalSignatures>(
            signal: K,
            callback: FilterOpenPGP.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterOpenPGP.SignalSignatures>(
            signal: K,
            ...args: FilterOpenPGP.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Gets the stream offset of the beginning of the OpenPGP data block, if any have been found.
         * @returns The stream offset or %-1 if no OpenPGP block was found.
         */
        get_begin_offset(): number;
        /**
         * Gets the type of OpenPGP data that has been detected.
         * @returns a #GMimeOpenPGPData value.
         */
        get_data_type(): OpenPGPData;
        /**
         * Gets the stream offset of the end of the OpenPGP data block, if any have been found.
         * @returns The stream offset or %-1 if no OpenPGP block was found.
         */
        get_end_offset(): number;
    }

    namespace FilterSmtpData {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter to byte-stuff SMTP DATA.
     */
    class FilterSmtpData extends Filter {
        static $gtype: GObject.GType<FilterSmtpData>;

        // Fields

        parent_object: Filter;
        bol: boolean;

        // Constructors

        constructor(properties?: Partial<FilterSmtpData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FilterSmtpData;

        // Signals

        connect<K extends keyof FilterSmtpData.SignalSignatures>(
            signal: K,
            callback: FilterSmtpData.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterSmtpData.SignalSignatures>(
            signal: K,
            callback: FilterSmtpData.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterSmtpData.SignalSignatures>(
            signal: K,
            ...args: FilterSmtpData.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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

        // Fields

        parent_object: Filter;

        // Constructors

        constructor(properties?: Partial<FilterStrip.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FilterStrip;

        // Signals

        connect<K extends keyof FilterStrip.SignalSignatures>(
            signal: K,
            callback: FilterStrip.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterStrip.SignalSignatures>(
            signal: K,
            callback: FilterStrip.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterStrip.SignalSignatures>(
            signal: K,
            ...args: FilterStrip.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
    }

    namespace FilterUnix2Dos {
        // Signal signatures
        interface SignalSignatures extends Filter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Filter.ConstructorProps {}
    }

    /**
     * A filter to convert a stream from Windows/DOS line endings to Unix line endings.
     */
    class FilterUnix2Dos extends Filter {
        static $gtype: GObject.GType<FilterUnix2Dos>;

        // Fields

        parent_object: Filter;
        ensure_newline: boolean;
        pc: number;

        // Constructors

        constructor(properties?: Partial<FilterUnix2Dos.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](ensure_newline: boolean): FilterUnix2Dos;

        // Signals

        connect<K extends keyof FilterUnix2Dos.SignalSignatures>(
            signal: K,
            callback: FilterUnix2Dos.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterUnix2Dos.SignalSignatures>(
            signal: K,
            callback: FilterUnix2Dos.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterUnix2Dos.SignalSignatures>(
            signal: K,
            ...args: FilterUnix2Dos.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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
            callback: FilterWindows.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterWindows.SignalSignatures>(
            signal: K,
            callback: FilterWindows.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterWindows.SignalSignatures>(
            signal: K,
            ...args: FilterWindows.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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
            callback: FilterYenc.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterYenc.SignalSignatures>(
            signal: K,
            callback: FilterYenc.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterYenc.SignalSignatures>(
            signal: K,
            ...args: FilterYenc.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Constructors

        constructor(properties?: Partial<GpgContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GpgContext;

        // Signals

        connect<K extends keyof GpgContext.SignalSignatures>(
            signal: K,
            callback: GpgContext.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof GpgContext.SignalSignatures>(
            signal: K,
            callback: GpgContext.SignalSignatures[K],
        ): number;
        emit<K extends keyof GpgContext.SignalSignatures>(
            signal: K,
            ...args: GpgContext.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
    }

    namespace Header {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A message or mime-part header.
     */
    class Header extends GObject.Object {
        static $gtype: GObject.GType<Header>;

        // Constructors

        constructor(properties?: Partial<Header.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Header.SignalSignatures>(signal: K, callback: Header.SignalSignatures[K]): number;
        connect_after<K extends keyof Header.SignalSignatures>(signal: K, callback: Header.SignalSignatures[K]): number;
        emit<K extends keyof Header.SignalSignatures>(
            signal: K,
            ...args: Header.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Parses the `value` and then re-formats it to conform to the formatting options,
         * folding the value if necessary.
         * @param options a #GMimeFormatOptions or %NULL
         * @param value a Sender, From, Reply-To, To, Cc, or Bcc header value
         * @param charset a charset (note: unused)
         * @returns a newly allocated string containing the reformatted value.
         */
        format_addrlist(options: FormatOptions | null, value: string, charset: string): string;
        /**
         * Parses the `value` and then re-formats it to conform to the formatting options,
         * folding the value if necessary.
         * @param options a #GMimeFormatOptions or %NULL
         * @param value a Content-Disposition header value
         * @param charset a charset (note: unused)
         * @returns a newly allocated string containing the reformatted value.
         */
        format_content_disposition(options: FormatOptions | null, value: string, charset: string): string;
        /**
         * Parses the `value` and then re-formats it to conform to the formatting options,
         * folding the value if necessary.
         * @param options a #GMimeFormatOptions or %NULL
         * @param value a Content-Type header value
         * @param charset a charset (note: unused)
         * @returns a newly allocated string containing the reformatted value.
         */
        format_content_type(options: FormatOptions | null, value: string, charset: string): string;
        /**
         * Parses the `value` and then re-formats it to conform to the formatting options,
         * folding the value if necessary.
         * @param options a #GMimeFormatOptions or %NULL
         * @param value a header value
         * @param charset a charset to use when encoding the @value
         * @returns a newly allocated string containing the reformatted value.
         */
        format_default(options: FormatOptions | null, value: string, charset: string): string;
        /**
         * Parses the `value` and then re-formats it to conform to the formatting options,
         * folding the value if necessary.
         * @param options a #GMimeFormatOptions or %NULL
         * @param value a Message-Id or Content-Id header value
         * @param charset a charset (note: unused)
         * @returns a newly allocated string containing the reformatted value.
         */
        format_message_id(options: FormatOptions | null, value: string, charset: string): string;
        /**
         * Parses the `value` and then re-formats it to conform to the formatting options,
         * folding the value if necessary.
         * @param options a #GMimeFormatOptions or %NULL
         * @param value a Received header value
         * @param charset a charset (note: unused)
         * @returns a newly allocated string containing the reformatted value.
         */
        format_received(options: FormatOptions | null, value: string, charset: string): string;
        /**
         * Parses the `value` and then re-formats it to conform to the formatting options,
         * folding the value if necessary.
         * @param options a #GMimeFormatOptions or %NULL
         * @param value a References or In-Reply-To header value
         * @param charset a charset (note: unused)
         * @returns a newly allocated string containing the reformatted value.
         */
        format_references(options: FormatOptions | null, value: string, charset: string): string;
        /**
         * Gets the header's name.
         * @returns the header name or %NULL if invalid.
         */
        get_name(): string;
        /**
         * Gets the header's stream offset if known.
         * @returns the header offset or %-1 if unknown.
         */
        get_offset(): number;
        /**
         * Gets the header's raw name. The raw header name is the complete string up to
         * (but not including) the ':' separating the header's name from its value. This
         * string may be different from the value returned by g_mime_header_get_name()
         * if the parsed message's header contained trailing whitespace after the header
         * name, such as: "Subject : this is the subject\r\n".
         * @returns the raw header name.
         */
        get_raw_name(): string;
        /**
         * Gets the header's raw (folded) value.
         * @returns the header value or %NULL if invalid.
         */
        get_raw_value(): string;
        /**
         * Gets the header's unfolded value.
         * @returns the header's decoded value or %NULL if invalid.
         */
        get_value(): string;
        /**
         * Sets the header's raw value.
         * @param raw_value the raw value
         */
        set_raw_value(raw_value: string): void;
        /**
         * Sets the header's decoded value.
         * @param options a #GMimeFormatOptions or %NULL
         * @param value the new header value
         * @param charset a charset
         */
        set_value(options: FormatOptions | null, value: string, charset?: string | null): void;
        /**
         * Write the header to the specified stream.
         * @param options a #GMimeFormatOptions or %NULL
         * @param stream a #GMimeStream
         * @returns the number of bytes written, or %-1 on fail.
         */
        write_to_stream(options: FormatOptions | null, stream: Stream): number;
    }

    namespace HeaderList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A list of message or mime-part headers.
     */
    class HeaderList extends GObject.Object {
        static $gtype: GObject.GType<HeaderList>;

        // Fields

        parent_object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<HeaderList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](options?: ParserOptions | null): HeaderList;

        // Signals

        connect<K extends keyof HeaderList.SignalSignatures>(
            signal: K,
            callback: HeaderList.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof HeaderList.SignalSignatures>(
            signal: K,
            callback: HeaderList.SignalSignatures[K],
        ): number;
        emit<K extends keyof HeaderList.SignalSignatures>(
            signal: K,
            ...args: HeaderList.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Appends a header. If `value` is %NULL, a space will be set aside for it
         * (useful for setting the order of headers before values can be
         * obtained for them) otherwise the header will be unset.
         * @param name header name
         * @param value header value
         * @param charset a charset
         */
        append(name: string, value: string, charset?: string | null): void;
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
         * Gets the number of headers contained within the header list.
         * @returns the number of headers in the header list.
         */
        get_count(): number;
        /**
         * Gets the first header with the specified name.
         * @param name header name
         * @returns a #GMimeHeader for the specified @name.
         */
        get_header(name: string): Header;
        /**
         * Gets the header at the specified `index` within the list.
         * @param index the 0-based index of the header
         * @returns the header at position @index.
         */
        get_header_at(index: number): Header;
        /**
         * Prepends a header. If `value` is %NULL, a space will be set aside
         * for it (useful for setting the order of headers before values can
         * be obtained for them) otherwise the header will be unset.
         * @param name header name
         * @param value header value
         * @param charset a charset
         */
        prepend(name: string, value: string, charset?: string | null): void;
        /**
         * Remove the first instance of the specified header.
         * @param name header name
         * @returns %TRUE if the header was successfully removed or %FALSE if the specified header could not be found.
         */
        remove(name: string): boolean;
        /**
         * Removes the header at the specified `index` from `headers`.
         * @param index the 0-based index of the header to remove
         */
        remove_at(index: number): void;
        /**
         * Set the value of the specified header. If `value` is %NULL and the
         * header, `name,` had not been previously set, a space will be set
         * aside for it (useful for setting the order of headers before values
         * can be obtained for them) otherwise the header will be unset.
         *
         * Note: If there are multiple headers with the specified field name,
         * the first instance of the header will be replaced and further
         * instances will be removed.
         * @param name header name
         * @param value header value
         * @param charset a charset
         */
        set(name: string, value: string, charset?: string | null): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        /**
         * Allocates a string buffer containing the raw rfc822 headers
         * contained in `headers`.
         * @param options a #GMimeFormatOptions or %NULL
         * @returns a string containing the header block.
         */
        to_string(options?: FormatOptions | null): string;
        /**
         * Write the headers to a stream.
         * @param options a #GMimeFormatOptions or %NULL
         * @param stream output stream
         * @returns the number of bytes written or %-1 on fail.
         */
        write_to_stream(options: FormatOptions | null, stream: Stream): number;
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

        // Fields

        parent_object: GObject.Object;
        charset: string;
        name: string;

        // Constructors

        constructor(properties?: Partial<InternetAddress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof InternetAddress.SignalSignatures>(
            signal: K,
            callback: InternetAddress.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof InternetAddress.SignalSignatures>(
            signal: K,
            callback: InternetAddress.SignalSignatures[K],
        ): number;
        emit<K extends keyof InternetAddress.SignalSignatures>(
            signal: K,
            ...args: InternetAddress.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        vfunc_to_string(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void;

        // Methods

        /**
         * Gets the charset to be used when encoding the name of the mailbox or group.
         * @returns the charset to be used when encoding the name of the mailbox or group if available or %NULL otherwise.
         */
        get_charset(): string | null;
        /**
         * Gets the display name of the #InternetAddress.
         * @returns the name of the mailbox or group in a form suitable for display if available or %NULL otherwise. If the name is available, the returned string will be in UTF-8.
         */
        get_name(): string | null;
        /**
         * Set the charset to use for encoding the name of the mailbox or group.
         * @param charset the charset to use when encoding the name or %NULL to use the defaults
         */
        set_charset(charset?: string | null): void;
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
         * @param options a #GMimeFormatOptions or %NULL
         * @param encode %TRUE if the address should be rfc2047 encoded
         * @returns the #InternetAddress object as an allocated string in rfc822 format.
         */
        to_string(options: FormatOptions | null, encode: boolean): string;
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
            callback: InternetAddressGroup.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof InternetAddressGroup.SignalSignatures>(
            signal: K,
            callback: InternetAddressGroup.SignalSignatures[K],
        ): number;
        emit<K extends keyof InternetAddressGroup.SignalSignatures>(
            signal: K,
            ...args: InternetAddressGroup.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Fields

        parent_object: GObject.Object;
        array: any[];

        // Constructors

        constructor(properties?: Partial<InternetAddressList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InternetAddressList;

        // Signals

        connect<K extends keyof InternetAddressList.SignalSignatures>(
            signal: K,
            callback: InternetAddressList.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof InternetAddressList.SignalSignatures>(
            signal: K,
            callback: InternetAddressList.SignalSignatures[K],
        ): number;
        emit<K extends keyof InternetAddressList.SignalSignatures>(
            signal: K,
            ...args: InternetAddressList.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Construct a list of internet addresses from the given string.
         * @param options a #GMimeParserOptions or %NULL
         * @param str a string containing internet addresses
         */
        static parse(options: ParserOptions | null, str: string): InternetAddressList | null;

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
         * Adds all of the addresses in `str` to `list`.
         * @param options a #GMimeParserOptions or %NULL
         * @param str a string containing internet addresses
         */
        append_parse(options: ParserOptions | null, str: string): void;
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
         * Writes the rfc2047-encoded rfc822 formatted addresses in `list` to
         * `str,` folding appropriately.
         * @param options a #GMimeFormatOptions or %NULL
         * @param str string to write to
         */
        encode(options: FormatOptions | null, str: GLib.String): void;
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
         * @param options a #GMimeFormatOptions or %NULL
         * @param encode %TRUE if the address should be rfc2047 encoded
         * @returns a string containing the list of addresses in rfc822 format or %NULL if no addresses are contained in the list.
         */
        to_string(options: FormatOptions | null, encode: boolean): string | null;
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

        // Fields

        parent_object: InternetAddress;
        idn_addr: string;
        addr: string;
        at: number;

        // Constructors

        constructor(properties?: Partial<InternetAddressMailbox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, addr: string): InternetAddressMailbox;

        // Signals

        connect<K extends keyof InternetAddressMailbox.SignalSignatures>(
            signal: K,
            callback: InternetAddressMailbox.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof InternetAddressMailbox.SignalSignatures>(
            signal: K,
            callback: InternetAddressMailbox.SignalSignatures[K],
        ): number;
        emit<K extends keyof InternetAddressMailbox.SignalSignatures>(
            signal: K,
            ...args: InternetAddressMailbox.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Gets the addr-spec of the internet address mailbox.
         * @returns the addr-spec string.
         */
        get_addr(): string;
        /**
         * Gets the IDN ascii-encoded addr-spec.
         * @returns the encoded addr-spec string.
         */
        get_idn_addr(): string;
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

        // Fields

        parent_object: Object;
        addrlists: InternetAddressList;
        mime_part: Object;
        message_id: string;
        subject: string;

        // Constructors

        constructor(properties?: Partial<Message.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](pretty_headers: boolean): Message;
        // Conflicted with GMime.Object.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Message.SignalSignatures>(signal: K, callback: Message.SignalSignatures[K]): number;
        connect_after<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: Message.SignalSignatures[K],
        ): number;
        emit<K extends keyof Message.SignalSignatures>(
            signal: K,
            ...args: Message.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Add a mailbox of a chosen type to the MIME message.
         *
         * Note: The `name` (and `addr)` strings should be in UTF-8.
         * @param type A #GMimeAddressType
         * @param name The name of the mailbox (or %NULL)
         * @param addr The address of the mailbox
         */
        add_mailbox(type: AddressType | null, name: string | null, addr: string): void;
        /**
         * Recursively calls `callback` on each of the mime parts in the mime message.
         * @param callback function to call on each of the mime parts   contained by the mime message
         */
        foreach(callback: ObjectForeachFunc): void;
        /**
         * Gets a list of addresses of the specified `type` from the `message`.
         * @param type A #GMimeAddressType
         * @returns a list of addresses of the specified @type from the @message.
         */
        get_addresses(type: AddressType | null): InternetAddressList;
        /**
         * Gets the complete list of recipients for `message`.
         * @returns a newly allocated #InternetAddressList containing all recipients of the message or %NULL if no recipients are set.
         */
        get_all_recipients(): InternetAddressList;
        /**
         * Creates a new #GMimeAutocryptHeaderList of relevant headers of the
         * given type based on the recipient(s) of an e-mail message.
         *
         * Returns the same object as
         * #g_mime_message_get_autocrypt_gossip_headers_with_inner_part , but
         * handles decryption and cleanup automatically.
         *
         * `flags` and `session_key` are passed through to
         * #g_mime_multipart_encrypted_decrypt, as needed.
         *
         * If the message is not actually an encrypted message, returns %NULL:
         * it should be ignored for purposes of evaluating gossip.
         *
         * If decryption fails, returns %NULL.  In this case, an exception
         * will be set on `err` to provide information about the decryption
         * failure.
         * @param now a #GDateTime object, or %NULL
         * @param flags a #GMimeDecryptFlags, to be used during decryption
         * @param session_key session key to use or %NULL
         * @returns a new #GMimeAutocryptHeaderList object, or %NULL on error.
         */
        get_autocrypt_gossip_headers(
            now: GLib.DateTime | null,
            flags: DecryptFlags | null,
            session_key?: string | null,
        ): AutocryptHeaderList | null;
        /**
         * Creates a new #GMimeAutocryptHeaderList of relevant headers of the
         * given type based on the recipient(s) of an e-mail message.
         *
         * You must pass the decrypted inner part of the message to this
         * function, since Autocrypt-Gossip headers are only stored within the
         * encrypted layer.
         *
         * If you don't already have the decrypted inner part available to
         * you, you probably want to use
         * #g_mime_message_get_autocrypt_gossip_headers instead.
         *
         * Each header in the returned list will:
         *
         *  - have a valid address
         *  - be of the type requested
         *  - be complete
         *
         * If no Autocrypt header is found for a recipient, no
         * #GMimeAutocryptHeader will be in the list associated with that e-mail address.
         *
         * Note that the following types of Autocrypt headers will not be
         * returned by this function:
         *
         *  - headers of an unrequested type
         *  - headers that do not match an address in "From:"
         *  - unparseable headers
         *  - headers with unknown critical attributes
         *  - duplicate valid headers for a given address
         *
         * On error (e.g. if this version of GMime cannot handle the requested
         * Autocrypt type, or if a parameter is missing or malformed), returns
         * %NULL
         *
         * The returned Autocrypt headers will have their effective_date set
         * to the earliest of either:
         *
         * - the Date: header of the message or
         * - `now` (or the current time, if `now` is %NULL)
         * @param now a #GDateTime object, or %NULL
         * @param inner_part a #GMimeObject which is the cleartext part of the inner message
         * @returns a new #GMimeAutocryptHeaderList object, or %NULL on error.
         */
        get_autocrypt_gossip_headers_from_inner_part(
            now: GLib.DateTime | null,
            inner_part: Object,
        ): AutocryptHeaderList | null;
        /**
         * Creates a new #GMimeAutocryptHeader based on the relevant Autocrypt
         * header associated with the sender of an e-mail message.
         *
         * If the message has no sender in the From: field, or has more than
         * one sender, then this function will return %NULL.  Autocrypt should
         * ignore the message entirely.
         *
         * If there is one sender, but no single Autocrypt header is found
         * that matches that e-mail address, a #GMimeAutocryptHeader will be
         * returned for the sender, but it will be incomplete (see
         * #g_mime_autocrypt_header_is_complete).
         *
         * Note that the following types of Autocrypt headers will not be
         * returned by this function:
         *
         *  - headers that do not match an address in "From:"
         *  - unparseable headers
         *  - headers with unknown critical attributes
         *  - duplicate valid headers for the sender's address
         *
         * The returned Autocrypt header will have its effective_date set to
         * the earliest of either:
         *
         * - the Date: header of the message or
         * - `now` (or the current time, if `now` is %NULL)
         * @param now a #GDateTime object, or %NULL
         * @returns a new #GMimeAutocryptHeader object, or %NULL if the message should be ignored for purposes of Autocrypt.
         */
        get_autocrypt_header(now?: GLib.DateTime | null): AutocryptHeader | null;
        /**
         * Gets combined list of parsed addresses in the Bcc header(s).
         * @returns the parsed list of addresses in the Bcc header(s).
         */
        get_bcc(): InternetAddressList;
        /**
         * Attempts to identify the MIME part containing the body of the
         * message.
         * @returns a #GMimeObject containing the textual content that appears to be the main body of the message, or %NULL if no body part has been set. Note: This function is NOT guaranteed to always work as it makes some assumptions that are not necessarily true. It is recommended that you traverse the MIME structure yourself.
         */
        get_body(): Object | null;
        /**
         * Gets combined list of parsed addresses in the Cc header(s).
         * @returns the parsed list of addresses in the Cc header(s).
         */
        get_cc(): InternetAddressList;
        /**
         * Gets the parsed date and time value from the Date header.
         * @returns a #GDateTime on success or %NULL if the date could not be parsed.
         */
        get_date(): GLib.DateTime | null;
        /**
         * Gets the parsed list of addresses in the From header.
         * @returns the parsed list of addresses in the From header.
         */
        get_from(): InternetAddressList;
        /**
         * Gets the Message-Id header of `message`.
         * @returns the Message-Id of a message, or %NULL if not specified.
         */
        get_message_id(): string | null;
        /**
         * Gets the toplevel MIME part contained within `message`.
         * @returns the toplevel MIME part of @message, or %NULL if none is present.
         */
        get_mime_part(): Object | null;
        /**
         * Gets the parsed list of addresses in the Reply-To header.
         * @returns the parsed list of addresses in the Reply-To header.
         */
        get_reply_to(): InternetAddressList;
        /**
         * Gets the parsed list of addresses in the Sender header.
         * @returns the parsed list of addresses in the Sender header.
         */
        get_sender(): InternetAddressList;
        /**
         * Gets the subject of the `message`.
         * @returns the subject of the @message in a form suitable for display or %NULL if no subject is set. If not %NULL, the returned string will be in UTF-8.
         */
        get_subject(): string | null;
        /**
         * Gets combined list of parsed addresses in the To header(s).
         * @returns the parsed list of addresses in the To header(s).
         */
        get_to(): InternetAddressList;
        /**
         * Splits `message` into an array of #GMimeMessage objects each
         * containing a single #GMimeMessagePartial object containing
         * `max_size` bytes or fewer. `nparts` is set to the number of
         * #GMimeMessagePartial objects created.
         * @param max_size max size
         * @returns an array of #GMimeMessage objects and sets @nparts to the number of messages returned or %NULL on fail.
         */
        partial_split_message(max_size: number): Message[] | null;
        /**
         * Sets the Date header on a MIME Message.
         * @param date a date to be used in the Date header
         */
        set_date(date: GLib.DateTime): void;
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
         * Set the subject of a `message`.
         *
         * Note: The `subject` string should be in UTF-8.
         * @param subject Subject string
         * @param charset The charset to use for encoding the subject or %NULL to use the default
         */
        set_subject(subject: string, charset?: string | null): void;
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
            callback: MessagePart.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MessagePart.SignalSignatures>(
            signal: K,
            callback: MessagePart.SignalSignatures[K],
        ): number;
        emit<K extends keyof MessagePart.SignalSignatures>(
            signal: K,
            ...args: MessagePart.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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
            callback: MessagePartial.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MessagePartial.SignalSignatures>(
            signal: K,
            callback: MessagePartial.SignalSignatures[K],
        ): number;
        emit<K extends keyof MessagePartial.SignalSignatures>(
            signal: K,
            ...args: MessagePartial.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Reconstructs the GMimeMessage from the given message/partial parts
         * in `partials`.
         * @param partials an array of message/partial mime parts
         */
        static reconstruct_message(partials: MessagePartial[]): Message;

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

        // Fields

        parent_object: Object;
        children: any[];
        boundary: string;
        prologue: string;
        epilogue: string;

        // Constructors

        constructor(properties?: Partial<Multipart.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Multipart;

        static new_with_subtype(subtype: string): Multipart;

        // Signals

        connect<K extends keyof Multipart.SignalSignatures>(signal: K, callback: Multipart.SignalSignatures[K]): number;
        connect_after<K extends keyof Multipart.SignalSignatures>(
            signal: K,
            callback: Multipart.SignalSignatures[K],
        ): number;
        emit<K extends keyof Multipart.SignalSignatures>(
            signal: K,
            ...args: Multipart.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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
         * Gets the epilogue on the multipart.
         * @returns a pointer to the epilogue string on the multipart.
         */
        get_epilogue(): string;
        /**
         * Gets the part at the specified `index` within the multipart.
         * @param index the 0-based index of the part
         * @returns the part at position @index.
         */
        get_part(index: number): Object;
        /**
         * Gets the prologue on the multipart.
         * @returns a pointer to the prologue string on the multipart.
         */
        get_prologue(): string;
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
         * Sets the epilogue on the multipart.
         * @param epilogue epilogue
         */
        set_epilogue(epilogue: string): void;
        /**
         * Sets the prologue on the multipart.
         * @param prologue prologue
         */
        set_prologue(prologue: string): void;
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

        // Fields

        parent_object: Multipart;

        // Constructors

        constructor(properties?: Partial<MultipartEncrypted.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MultipartEncrypted;

        // Signals

        connect<K extends keyof MultipartEncrypted.SignalSignatures>(
            signal: K,
            callback: MultipartEncrypted.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MultipartEncrypted.SignalSignatures>(
            signal: K,
            callback: MultipartEncrypted.SignalSignatures[K],
        ): number;
        emit<K extends keyof MultipartEncrypted.SignalSignatures>(
            signal: K,
            ...args: MultipartEncrypted.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Attempts to encrypt (and conditionally sign) the `entity` MIME part
         * to the public keys of `recipients` using the `ctx` encryption
         * context. If successful, a new multipart/encrypted object is returned.
         * @param ctx a #GMimeCryptoContext
         * @param entity MIME part to encrypt
         * @param sign %TRUE if the content should also be signed or %FALSE otherwise
         * @param userid user id to use for signing (only used if @sign is %TRUE)
         * @param flags a #GMimeEncryptFlags
         * @param recipients an array of recipients to encrypt to
         */
        static encrypt(
            ctx: CryptoContext,
            entity: Object,
            sign: boolean,
            userid: string | null,
            flags: EncryptFlags,
            recipients: string[],
        ): MultipartEncrypted | null;

        // Methods

        /**
         * Attempts to decrypt the encrypted MIME part contained within the
         * multipart/encrypted object `encrypted`.
         *
         * When non-%NULL, `session_key` should be a %NULL-terminated string,
         * such as the one returned by g_mime_decrypt_result_get_session_key()
         * from a previous decryption. If the `session_key` is not valid, decryption
         * will fail.
         *
         * If `result` is non-%NULL, then on a successful decrypt operation, it will be
         * updated to point to a newly-allocated #GMimeDecryptResult with signature
         * status information as well as a list of recipients that the part was
         * encrypted to.
         * @param flags a #GMimeDecryptFlags
         * @param session_key session key to use or %NULL
         * @returns the decrypted MIME part on success or %NULL on fail. If the decryption fails, an exception will be set on @err to provide information as to why the failure occurred.
         */
        decrypt(flags: DecryptFlags | null, session_key: string | null): [Object | null, DecryptResult];
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

        // Fields

        parent_object: Multipart;

        // Constructors

        constructor(properties?: Partial<MultipartSigned.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MultipartSigned;

        // Signals

        connect<K extends keyof MultipartSigned.SignalSignatures>(
            signal: K,
            callback: MultipartSigned.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MultipartSigned.SignalSignatures>(
            signal: K,
            callback: MultipartSigned.SignalSignatures[K],
        ): number;
        emit<K extends keyof MultipartSigned.SignalSignatures>(
            signal: K,
            ...args: MultipartSigned.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Attempts to sign the `content` MIME part with `userid'`s private key
         * using the `ctx` signing context. If successful, a new multipart/signed
         * object is returned.
         * @param ctx a #GMimeCryptoContext
         * @param entity MIME part to sign
         * @param userid user id to sign with
         */
        static sign(ctx: CryptoContext, entity: Object, userid: string): MultipartSigned | null;

        // Methods

        /**
         * Attempts to verify the signed MIME part contained within the
         * multipart/signed object `mps`.
         * @param flags a #GMimeVerifyFlags
         * @returns a new #GMimeSignatureList object on success or %NULL on fail. If the verification fails, an exception will be set on @err to provide information as to why the failure occurred.
         */
        verify(flags: VerifyFlags | null): SignatureList | null;
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

        // Fields

        parent_object: GObject.Object;
        disposition: ContentDisposition;
        content_type: ContentType;
        headers: HeaderList;
        content_id: string;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](options: ParserOptions | null, content_type: ContentType): Object;

        static new_type(options: ParserOptions | null, type: string, subtype: string): Object;

        // Signals

        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: Object.SignalSignatures[K]): number;
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: Object.SignalSignatures[K]): number;
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: Object.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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
         * Calculates and sets the most efficient Content-Transfer-Encoding
         * for this #GMimeObject and all child parts based on the `constraint`
         * provided.
         * @param constraint a #GMimeEncodingConstraint
         */
        vfunc_encode(constraint: EncodingConstraint): void;
        /**
         * Allocates a string buffer containing all of the MIME object's raw
         * headers.
         * @param options a #GMimeFormatOptions or %NULL
         */
        vfunc_get_headers(options?: FormatOptions | null): string;
        vfunc_header_added(header: Header): void;
        vfunc_header_changed(header: Header): void;
        vfunc_header_removed(header: Header): void;
        vfunc_headers_cleared(): void;
        /**
         * Sets the content-type for the specified MIME object and then
         * serializes it to the Content-Type header field.
         * @param content_type a #GMimeContentType object
         */
        vfunc_set_content_type(content_type: ContentType): void;
        vfunc_write_to_stream(options: FormatOptions, content_only: boolean, stream: Stream): number;

        // Methods

        /**
         * Appends a new header to the header list.
         * @param header header name
         * @param value header value
         * @param charset a charset
         */
        append_header(header: string, value: string, charset?: string | null): void;
        /**
         * Calculates and sets the most efficient Content-Transfer-Encoding
         * for this #GMimeObject and all child parts based on the `constraint`
         * provided.
         * @param constraint a #GMimeEncodingConstraint
         */
        encode(constraint: EncodingConstraint | null): void;
        /**
         * Creates a new #GMimeAutocryptHeaderList of relevant headers of the
         * given type based on the `addresses` of an `mime_part`.
         *
         * Each header in the returned list will:
         *
         *  - have a valid address
         *  - be of the type requested
         *  - be complete
         *
         * If no Autocrypt header is found for an address, no
         * #GMimeAutocryptHeader will be in the list associated with that e-mail address.
         *
         * Note that the following types of Autocrypt headers will not be
         * returned by this function:
         *
         *  - headers of an unrequested type
         *  - headers that do not match an address in "From:"
         *  - unparseable headers
         *  - headers with unknown critical attributes
         *  - duplicate valid headers for a given address
         *
         * On error (e.g. if this version of GMime cannot handle the requested
         * Autocrypt type, or if a parameter is missing or malformed), returns
         * %NULL
         *
         * The returned Autocrypt headers will have it effective_date set to
         * `effective_date`
         *
         * if `keep_incomplete` isn't set, incompletes are removed
         * @param effective_date a #GDateTime object
         * @param matchheader the header we want to match
         * @param addresses a #InternetAddressList
         * @param keep_incomplete %TRUE if the we should include incompletes
         * @returns a new #GMimeAutocryptHeaderList object, or %NULL on error.
         */
        get_autocrypt_headers(
            effective_date: GLib.DateTime,
            matchheader: string,
            addresses: InternetAddressList,
            keep_incomplete: boolean,
        ): AutocryptHeaderList | null;
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
         * Gets the value of the first header with the specified name.
         * @param header header name
         * @returns the value of the requested header if it exists or %NULL otherwise.
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
         * @param options a #GMimeFormatOptions or %NULL
         * @returns an allocated string containing all of the raw MIME headers. Note: The returned string will not be suitable for display.
         */
        get_headers(options?: FormatOptions | null): string;
        /**
         * Prepends a new header to the header list.
         * @param header header name
         * @param value header value
         * @param charset a charset
         */
        prepend_header(header: string, value: string, charset?: string | null): void;
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
         * Sets a header to the specified value.
         * @param header header name
         * @param value header value
         * @param charset a charset
         */
        set_header(header: string, value: string, charset?: string | null): void;
        /**
         * Allocates a string buffer containing the contents of `object`.
         * @param options a #GMimeFormatOptions or %NULL
         * @returns an allocated string containing the contents of the mime object.
         */
        to_string(options?: FormatOptions | null): string;
        /**
         * Write only the content of the MIME object to `stream`.
         * @param options a #GMimeFormatOptions or %NULL
         * @param stream stream
         * @returns the number of bytes written or %-1 on fail.
         */
        write_content_to_stream(options: FormatOptions | null, stream: Stream): number;
        /**
         * Write the headers and content of the MIME object to `stream`.
         * @param options a #GMimeFormatOptions or %NULL
         * @param stream stream
         * @returns the number of bytes written or %-1 on fail.
         */
        write_to_stream(options: FormatOptions | null, stream: Stream): number;
    }

    namespace Param {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A parameter name/value pair as used in the Content-Type and Content-Disposition headers.
     */
    class Param extends GObject.Object {
        static $gtype: GObject.GType<Param>;

        // Fields

        parent_object: GObject.Object;
        method: ParamEncodingMethod;
        charset: string;
        lang: string;
        name: string;
        value: string;

        // Constructors

        constructor(properties?: Partial<Param.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Param.SignalSignatures>(signal: K, callback: Param.SignalSignatures[K]): number;
        connect_after<K extends keyof Param.SignalSignatures>(signal: K, callback: Param.SignalSignatures[K]): number;
        emit<K extends keyof Param.SignalSignatures>(
            signal: K,
            ...args: Param.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Gets the charset used for encoding the parameter.
         * @returns the charset used for encoding the parameter.
         */
        get_charset(): string;
        /**
         * Gets the encoding method used for encoding the parameter.
         * @returns the encoding method used for encoding the parameter.
         */
        get_encoding_method(): ParamEncodingMethod;
        /**
         * Gets the language specifier used for encoding the parameter.
         * @returns the language specifier used for encoding the parameter.
         */
        get_lang(): string;
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
         * Sets the parameter charset used for encoding the value.
         * @param charset the charset or %NULL to use the default
         */
        set_charset(charset: string): void;
        /**
         * Sets the encoding method used for encoding the value.
         * @param method a #GMimeParamEncodingMethod
         */
        set_encoding_method(method: ParamEncodingMethod | null): void;
        /**
         * Sets the parameter language specifier used for encoding the value.
         * @param lang the language specifier
         */
        set_lang(lang: string): void;
        /**
         * Sets the parameter value to `value`.
         * @param value the new parameter value
         */
        set_value(value: string): void;
    }

    namespace ParamList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A list of Content-Type or Content-Disposition parameters.
     */
    class ParamList extends GObject.Object {
        static $gtype: GObject.GType<ParamList>;

        // Constructors

        constructor(properties?: Partial<ParamList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ParamList;

        // Signals

        connect<K extends keyof ParamList.SignalSignatures>(signal: K, callback: ParamList.SignalSignatures[K]): number;
        connect_after<K extends keyof ParamList.SignalSignatures>(
            signal: K,
            callback: ParamList.SignalSignatures[K],
        ): number;
        emit<K extends keyof ParamList.SignalSignatures>(
            signal: K,
            ...args: ParamList.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Parses the input string into a parameter list.
         * @param options a #GMimeParserOptions or %NULL
         * @param str a string to parse
         */
        static parse(options: ParserOptions, str: string): ParamList;

        // Methods

        /**
         * Clears the list of parameters.
         */
        clear(): void;
        /**
         * Encodes the parameter list into `str,` folding lines if required.
         * @param options a #GMimeFormatOptions or %NULL
         * @param fold %TRUE if the parameter list should be folded; otherwise, %FALSE
         */
        encode(options: FormatOptions | null, fold: boolean): GLib.String;
        /**
         * Gets the #GMimeParam with the given `name`.
         * @param name the name of the parameter
         * @returns the requested #GMimeParam.
         */
        get_parameter(name: string): Param;
        /**
         * Gets the #GMimeParam at the specified `index`.
         * @param index the index of the requested parameter
         * @returns the #GMimeParam at the specified index.
         */
        get_parameter_at(index: number): Param;
        /**
         * Gets the length of the list.
         * @returns the number of #GMimeParam items in the list.
         */
        length(): number;
        /**
         * Removes a parameter from the #GMimeParamList.
         * @param name the name of the parameter
         * @returns %TRUE if the specified parameter was removed or %FALSE otherwise.
         */
        remove(name: string): boolean;
        /**
         * Removes a #GMimeParam from the #GMimeParamList at the specified index.
         * @param index index of the param to remove
         * @returns %TRUE if a #GMimeParam was removed or %FALSE otherwise.
         */
        remove_at(index: number): boolean;
        /**
         * Sets the specified parameter to `value`.
         * @param name The name of the parameter
         * @param value The parameter value
         */
        set_parameter(name: string, value: string): void;
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

        // Fields

        parent_object: GObject.Object;
        priv: any;

        // Constructors

        constructor(properties?: Partial<Parser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Parser;

        static new_with_stream(stream: Stream): Parser;

        // Signals

        connect<K extends keyof Parser.SignalSignatures>(signal: K, callback: Parser.SignalSignatures[K]): number;
        connect_after<K extends keyof Parser.SignalSignatures>(signal: K, callback: Parser.SignalSignatures[K]): number;
        emit<K extends keyof Parser.SignalSignatures>(
            signal: K,
            ...args: Parser.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Constructs a MIME message from `parser`.
         * @param options a #GMimeParserOptions or %NULL
         * @returns a MIME message or %NULL on fail.
         */
        construct_message(options?: ParserOptions | null): Message | null;
        /**
         * Constructs a MIME part from `parser`.
         * @param options a #GMimeParserOptions or %NULL
         * @returns a MIME part based on @parser or %NULL on fail.
         */
        construct_part(options?: ParserOptions | null): Object | null;
        /**
         * Tests the end-of-stream indicator for `parser'`s internal stream.
         * @returns %TRUE on EOS or %FALSE otherwise.
         */
        eos(): boolean;
        /**
         * Gets the format that the parser is set to parse.
         * @returns the format that the parser is set to parse.
         */
        get_format(): Format;
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
         * Gets the mbox-style From-line of the most recently parsed message
         * (gotten from g_mime_parser_construct_message()).
         * @returns the mbox-style From-line of the most recently parsed message or %NULL on error.
         */
        get_mbox_marker(): string | null;
        /**
         * Gets the offset of the most recently parsed mbox-style From-line
         * (gotten from g_mime_parser_construct_message()).
         * @returns the offset of the most recently parsed mbox-style From-line or %-1 on error.
         */
        get_mbox_marker_offset(): number;
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
         * Sets the format that the parser should expect the stream to be in.
         * @param format a #GMimeFormat
         */
        set_format(format: Format | null): void;
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

        // Fields

        parent_object: Object;
        encoding: ContentEncoding;
        openpgp: OpenPGPData;
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

        connect<K extends keyof Part.SignalSignatures>(signal: K, callback: Part.SignalSignatures[K]): number;
        connect_after<K extends keyof Part.SignalSignatures>(signal: K, callback: Part.SignalSignatures[K]): number;
        emit<K extends keyof Part.SignalSignatures>(
            signal: K,
            ...args: Part.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Virtual methods

        /**
         * Sets the content on the mime part.
         * @param content a #GMimeDataWrapper content object
         */
        vfunc_set_content(content: DataWrapper): void;

        // Methods

        /**
         * Calculates the most efficient content encoding for the `mime_part`
         * given the `constraint`.
         * @param constraint a #GMimeEncodingConstraint
         * @returns the best content encoding for the specified mime part.
         */
        get_best_content_encoding(constraint: EncodingConstraint | null): ContentEncoding;
        /**
         * Gets the internal data-wrapper of the specified mime part, or %NULL
         * on error.
         * @returns the data-wrapper for the mime part's contents.
         */
        get_content(): DataWrapper;
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
         * Gets the filename of the specificed mime part, or %NULL if the
         * `mime_part` does not have the filename or name parameter set.
         * @returns the filename of the specified @mime_part or %NULL if neither of the parameters is set. If a file name is set, the returned string will be in UTF-8.
         */
        get_filename(): string;
        /**
         * Gets whether or not (and what type) of OpenPGP data is contained
         * within the #GMimePart.
         * @returns a #GMimeOpenPGPData.
         */
        get_openpgp_data(): OpenPGPData;
        /**
         * Determines whether or not the part is an attachment based on the
         * value of the Content-Disposition header.
         * @returns %TRUE if the part is an attachment, otherwise %FALSE.
         */
        is_attachment(): boolean;
        /**
         * Decrypts the content of the `mime_part` and then replaces the content with
         * the new, decrypted, content.
         * @param flags a set of #GMimeDecryptFlags
         * @param session_key the session key to use or %NULL
         * @returns a #GMimeDecryptResult on success or %NULL on error.
         */
        openpgp_decrypt(flags: DecryptFlags | null, session_key?: string | null): DecryptResult | null;
        /**
         * Encrypts (and optionally signs) the content of the `mime_part` and then replaces
         * the content with the new, encrypted, content.
         * @param sign %TRUE if the content should also be signed; otherwise, %FALSE
         * @param userid the key id (or email address) to use when signing (assuming @sign is %TRUE)
         * @param flags a set of #GMimeEncryptFlags
         * @param recipients an array of recipient key ids and/or email addresses
         * @returns %TRUE on success or %FALSE on error.
         */
        openpgp_encrypt(
            sign: boolean,
            userid: string | null,
            flags: EncryptFlags | null,
            recipients: string[],
        ): boolean;
        /**
         * Signs the content of the `mime_part` and then replaces the content with
         * the new, signed, content.
         * @param userid the key id (or email address) to use for signing
         * @returns %TRUE on success or %FALSE on error.
         */
        openpgp_sign(userid: string): boolean;
        /**
         * Verifies the OpenPGP signature of the `mime_part` and then replaces the content
         * with the original, raw, content.
         * @param flags a set of #GMimeVerifyFlags
         * @returns a #GMimeSignatureList on success or %NULL on error.
         */
        openpgp_verify(flags: VerifyFlags | null): SignatureList | null;
        /**
         * Sets the content on the mime part.
         * @param content a #GMimeDataWrapper content object
         */
        set_content(content: DataWrapper): void;
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
         * Sets the "filename" parameter on the Content-Disposition and also sets the
         * "name" parameter on the Content-Type.
         *
         * Note: The `filename` string should be in UTF-8.
         * @param filename the file name
         */
        set_filename(filename: string): void;
        /**
         * Sets whether or not (and what type) of OpenPGP data is contained
         * within the #GMimePart.
         * @param data a #GMimeOpenPGPData
         */
        set_openpgp_data(data: OpenPGPData | null): void;
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

        // Constructors

        constructor(properties?: Partial<Pkcs7Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Pkcs7Context;

        // Signals

        connect<K extends keyof Pkcs7Context.SignalSignatures>(
            signal: K,
            callback: Pkcs7Context.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Pkcs7Context.SignalSignatures>(
            signal: K,
            callback: Pkcs7Context.SignalSignatures[K],
        ): number;
        emit<K extends keyof Pkcs7Context.SignalSignatures>(
            signal: K,
            ...args: Pkcs7Context.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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

        // Fields

        parent_object: GObject.Object;
        status: SignatureStatus;
        cert: Certificate;
        created: never;
        expires: never;

        // Constructors

        constructor(properties?: Partial<Signature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Signature;

        // Signals

        connect<K extends keyof Signature.SignalSignatures>(signal: K, callback: Signature.SignalSignatures[K]): number;
        connect_after<K extends keyof Signature.SignalSignatures>(
            signal: K,
            callback: Signature.SignalSignatures[K],
        ): number;
        emit<K extends keyof Signature.SignalSignatures>(
            signal: K,
            ...args: Signature.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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
        get_created(): never;
        /**
         * Get the creation date of the signature in seconds since the UNIX
         * epoch, represented as a 64-bit signed integer.
         * @returns the creation date of the signature or %-1 if unknown.
         */
        get_created64(): number;
        /**
         * Get the expiration date of the signature. A value of %0 means the signature never expires.
         * @returns the expiration date of the signature or %-1 if unknown.
         */
        get_expires(): never;
        /**
         * Get the expiration date of the signature in seconds since the UNIX
         * epoch, represented as a 64-bit signed integer. A value of %0 means
         * the signature never expires.
         * @returns the expiration date of the signature or %-1 if unknown.
         */
        get_expires64(): number;
        /**
         * Get the signature status as a bitfield of #GMimeSignatureStatus flags.
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
        set_created(created: never): void;
        /**
         * Set the expiration date of the signature. A value of %0 means the signature never expires.
         * @param expires expiration date
         */
        set_expires(expires: never): void;
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

        // Fields

        parent_object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<SignatureList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SignatureList;

        // Signals

        connect<K extends keyof SignatureList.SignalSignatures>(
            signal: K,
            callback: SignatureList.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SignatureList.SignalSignatures>(
            signal: K,
            callback: SignatureList.SignalSignatures[K],
        ): number;
        emit<K extends keyof SignatureList.SignalSignatures>(
            signal: K,
            ...args: SignatureList.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Constructors

        constructor(properties?: Partial<Stream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Stream.SignalSignatures>(signal: K, callback: Stream.SignalSignatures[K]): number;
        connect_after<K extends keyof Stream.SignalSignatures>(signal: K, callback: Stream.SignalSignatures[K]): number;
        emit<K extends keyof Stream.SignalSignatures>(
            signal: K,
            ...args: Stream.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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
         */
        vfunc_write(buf: Uint8Array | string): number;

        // Methods

        /**
         * Reads in at most one less than `max` characters from `stream` and
         * stores them into the buffer pointed to by `buf`. Reading stops after
         * an EOS or newline ('\n'). If a newline is read, it is stored into
         * the buffer. A '\0' is stored after the last character in the
         * buffer.
         * @param buf line buffer
         * @returns the number of characters read into @buf on success or %-1 on fail.
         */
        buffer_gets(buf: Uint8Array | string): number;
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
         * @returns the number of bytes written or %-1 on fail.
         */
        write(buf: Uint8Array | string): number;
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
         * @returns the number of bytes written or %-1 on fail.
         */
        writev(vector: StreamIOVector[]): number;
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
            callback: StreamBuffer.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StreamBuffer.SignalSignatures>(
            signal: K,
            callback: StreamBuffer.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamBuffer.SignalSignatures>(
            signal: K,
            ...args: StreamBuffer.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
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

        // Fields

        parent_object: Stream;
        sources: any;
        current: any;

        // Constructors

        constructor(properties?: Partial<StreamCat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamCat;

        // Signals

        connect<K extends keyof StreamCat.SignalSignatures>(signal: K, callback: StreamCat.SignalSignatures[K]): number;
        connect_after<K extends keyof StreamCat.SignalSignatures>(
            signal: K,
            callback: StreamCat.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamCat.SignalSignatures>(
            signal: K,
            ...args: StreamCat.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Fields

        parent_object: Stream;
        owner: boolean;
        fp: any;

        // Constructors

        constructor(properties?: Partial<StreamFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fp?: any | null): StreamFile;

        static new_with_bounds(fp: any | null, start: number, end: number): StreamFile;

        // Signals

        connect<K extends keyof StreamFile.SignalSignatures>(
            signal: K,
            callback: StreamFile.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StreamFile.SignalSignatures>(
            signal: K,
            callback: StreamFile.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamFile.SignalSignatures>(
            signal: K,
            ...args: StreamFile.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Creates a new #GMimeStreamFile object for the specified `path`.
         * @param path the path to a file
         * @param mode as in fopen(3)
         */
        static open(path: string, mode: string): Stream;

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

        // Fields

        parent_object: Stream;
        priv: any;
        source: Stream;
        owner: boolean;

        // Constructors

        constructor(properties?: Partial<StreamFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stream: Stream): StreamFilter;

        // Signals

        connect<K extends keyof StreamFilter.SignalSignatures>(
            signal: K,
            callback: StreamFilter.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StreamFilter.SignalSignatures>(
            signal: K,
            callback: StreamFilter.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamFilter.SignalSignatures>(
            signal: K,
            ...args: StreamFilter.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Adds `filter` to `stream`. Filters are applied in the same order in
         * which they are added.
         * @param filter a #GMimeFilter
         * @returns an id for the filter.
         */
        add(filter: Filter): number;
        /**
         * Gets whether or not `stream` owns the source stream.
         * @returns %TRUE if @stream owns the source stream or %FALSE otherwise.
         */
        get_owner(): boolean;
        /**
         * Removed a filter from the stream based on the id (as returned from
         * filter_add).
         * @param id filter id
         */
        remove(id: number): void;
        /**
         * Sets whether or not `stream` owns the source stream..
         *
         * Note: `owner` should be %TRUE if the stream should close() the
         * backend source stream when destroyed or %FALSE otherwise.
         * @param owner %TRUE if this stream should own the source stream or %FALSE otherwise
         */
        set_owner(owner: boolean): void;
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

        static new_with_bounds(fd: number, start: number, end: number): StreamFs;

        // Signals

        connect<K extends keyof StreamFs.SignalSignatures>(signal: K, callback: StreamFs.SignalSignatures[K]): number;
        connect_after<K extends keyof StreamFs.SignalSignatures>(
            signal: K,
            callback: StreamFs.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamFs.SignalSignatures>(
            signal: K,
            ...args: StreamFs.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Static methods

        /**
         * Creates a new #GMimeStreamFs object for the specified `path`.
         * @param path the path to a file
         * @param flags as in open(2)
         * @param mode as in open(2)
         */
        static open(path: string, flags: number, mode: number): Stream;

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

        connect<K extends keyof StreamGIO.SignalSignatures>(signal: K, callback: StreamGIO.SignalSignatures[K]): number;
        connect_after<K extends keyof StreamGIO.SignalSignatures>(
            signal: K,
            callback: StreamGIO.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamGIO.SignalSignatures>(
            signal: K,
            ...args: StreamGIO.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        connect<K extends keyof StreamMem.SignalSignatures>(signal: K, callback: StreamMem.SignalSignatures[K]): number;
        connect_after<K extends keyof StreamMem.SignalSignatures>(
            signal: K,
            callback: StreamMem.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamMem.SignalSignatures>(
            signal: K,
            ...args: StreamMem.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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
            callback: StreamMmap.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StreamMmap.SignalSignatures>(
            signal: K,
            callback: StreamMmap.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamMmap.SignalSignatures>(
            signal: K,
            ...args: StreamMmap.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

        // Fields

        parent_object: Stream;
        written: number;
        newlines: number;
        count_newlines: boolean;

        // Constructors

        constructor(properties?: Partial<StreamNull.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StreamNull;

        // Signals

        connect<K extends keyof StreamNull.SignalSignatures>(
            signal: K,
            callback: StreamNull.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StreamNull.SignalSignatures>(
            signal: K,
            callback: StreamNull.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamNull.SignalSignatures>(
            signal: K,
            ...args: StreamNull.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Gets whether or not the stream should keep track of the number of newlines
         * encountered.
         * @returns %TRUE if the stream should count the number of newlines or %FALSE otherwise.
         */
        get_count_newlines(): boolean;
        /**
         * Sets whether or not the stream should keep track of the number of newlines
         * encountered.
         * @param count %TRUE if newlines should be counted or %FALSE otherwise
         */
        set_count_newlines(count: boolean): void;
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
            callback: StreamPipe.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StreamPipe.SignalSignatures>(
            signal: K,
            callback: StreamPipe.SignalSignatures[K],
        ): number;
        emit<K extends keyof StreamPipe.SignalSignatures>(
            signal: K,
            ...args: StreamPipe.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

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

    namespace TextPart {
        // Signal signatures
        interface SignalSignatures extends Part.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Part.ConstructorProps {}
    }

    /**
     * A text MIME part object.
     */
    class TextPart extends Part {
        static $gtype: GObject.GType<TextPart>;

        // Fields

        parent_object: Part;

        // Constructors

        constructor(properties?: Partial<TextPart.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TextPart;

        static new_with_subtype(subtype: string): TextPart;

        // Signals

        connect<K extends keyof TextPart.SignalSignatures>(signal: K, callback: TextPart.SignalSignatures[K]): number;
        connect_after<K extends keyof TextPart.SignalSignatures>(
            signal: K,
            callback: TextPart.SignalSignatures[K],
        ): number;
        emit<K extends keyof TextPart.SignalSignatures>(
            signal: K,
            ...args: TextPart.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * Gets the value of the charset parameter on the Content-Type header.
         * @returns the value of the charset parameter or %NULL if unavailable.
         */
        get_charset(): string;
        /**
         * Gets the text content of the `mime_part` as a string.
         * @returns a newly allocated string containing the utf-8 encoded text content.
         */
        get_text(): string;
        /**
         * Sets the charset parameter on the Content-Type header to the specified value.
         * @param charset the name of the charset
         */
        set_charset(charset: string): void;
        /**
         * Sets the specified text as the content and updates the charset parameter on the Content-Type header.
         * @param text the text in utf-8
         */
        set_text(text: string): void;
    }

    type ApplicationPkcs7MimeClass = typeof ApplicationPkcs7Mime;
    type AutocryptHeaderClass = typeof AutocryptHeader;
    type AutocryptHeaderListClass = typeof AutocryptHeaderList;
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
        static best(inbuf: string, inlen: number): string | null;
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
        static language(charset: string): string | null;
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
         * @returns the charset name that best represents the charset mask @charset or %NULL for us-ascii.
         */
        best_name(): string | null;
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
    type FilterCharsetClass = typeof FilterCharset;
    type FilterChecksumClass = typeof FilterChecksum;
    type FilterClass = typeof Filter;
    type FilterDos2UnixClass = typeof FilterDos2Unix;
    type FilterEnrichedClass = typeof FilterEnriched;
    type FilterFromClass = typeof FilterFrom;
    type FilterGZipClass = typeof FilterGZip;
    type FilterHTMLClass = typeof FilterHTML;
    type FilterOpenPGPClass = typeof FilterOpenPGP;
    type FilterSmtpDataClass = typeof FilterSmtpData;
    type FilterStripClass = typeof FilterStrip;
    type FilterUnix2DosClass = typeof FilterUnix2Dos;
    type FilterWindowsClass = typeof FilterWindows;
    type FilterYencClass = typeof FilterYenc;
    /**
     * Format options for serializing various GMime objects.
     */
    class FormatOptions {
        static $gtype: GObject.GType<FormatOptions>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): FormatOptions;

        // Static methods

        /**
         * Gets the default format options.
         */
        static get_default(): FormatOptions;

        // Methods

        /**
         * Adds the given header to the list of headers that should be hidden.
         * @param header a header name
         */
        add_hidden_header(header: string): void;
        /**
         * Clears the list of headers that should be hidden.
         */
        clear_hidden_headers(): void;
        /**
         * Clones a #GMimeFormatOptions.
         * @returns a newly allocated #GMimeFormatOptions.
         */
        clone(): FormatOptions;
        /**
         * Creates a #GMimeFilter suitable for converting line-endings to the
         * currently set new-line format.
         * @param ensure_newline %TRUE if the output must *always* end with a new line
         * @returns a #GMimeFilter to convert to the specified new-line format.
         */
        create_newline_filter(ensure_newline: boolean): Filter;
        /**
         * Frees a set of #GMimeFormatOptions.
         */
        free(): void;
        /**
         * Gets a string representing the currently set new-line format.
         * @returns a new-line character sequence.
         */
        get_newline(): string;
        /**
         * Gets the new-line format to use when writing out messages and headers.
         * @returns the new-line format that is currently set.
         */
        get_newline_format(): NewLineFormat;
        /**
         * Gets the parameter encoding method to use for #GMimeParam parameters that do not
         * already have an encoding method specified.
         * @returns the encoding method that is currently set.
         */
        get_param_encoding_method(): ParamEncodingMethod;
        /**
         * Gets whether or not the specified header should be hidden.
         * @param header the name of a header
         * @returns %TRUE if the header should be hidden or %FALSE otherwise.
         */
        is_hidden_header(header: string): boolean;
        /**
         * Removes the given header from the list of headers that should be hidden.
         * @param header a header name
         */
        remove_hidden_header(header: string): void;
        /**
         * Sets the new-line format that should be used when writing headers and messages.
         * @param newline a #GMimeNewLineFormat
         */
        set_newline_format(newline: NewLineFormat | null): void;
        /**
         * Sets the parameter encoding method to use when encoding parameters which
         * do not have an encoding method specified.
         *
         * Note: #GMIME_PARAM_ENCODING_METHOD_DEFAULT is not allowed.
         * @param method a #GMimeParamEncodingMethod
         */
        set_param_encoding_method(method: ParamEncodingMethod | null): void;
    }

    type GpgContextClass = typeof GpgContext;
    type HeaderClass = typeof Header;
    type HeaderListClass = typeof HeaderList;
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
     * An OpenPGP marker for use with GMime's internal state machines used for detecting OpenPGP blocks.
     */
    class OpenPGPMarker {
        static $gtype: GObject.GType<OpenPGPMarker>;

        // Fields

        marker: string;
        len: number;
        before: OpenPGPState;
        after: OpenPGPState;
        is_end_marker: boolean;

        // Constructors

        _init(...args: any[]): void;
    }

    type ParamClass = typeof Param;
    type ParamListClass = typeof ParamList;
    type ParserClass = typeof Parser;
    /**
     * A set of parser options used by #GMimeParser and various other parsing functions.
     */
    class ParserOptions {
        static $gtype: GObject.GType<ParserOptions>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): ParserOptions;

        // Static methods

        /**
         * Gets the default parser options.
         */
        static get_default(): ParserOptions;

        // Methods

        /**
         * Clones a #GMimeParserOptions.
         * @returns a newly allocated #GMimeParserOptions.
         */
        clone(): ParserOptions;
        /**
         * Frees a set of #GMimeParserOptions.
         */
        free(): void;
        /**
         * Gets the compliance mode that should be used when parsing rfc822 addresses.
         *
         * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the address parser is fairly liberal in
         * what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder to
         * deal with garbage input.
         * @returns the compliance mode that is currently set.
         */
        get_address_compliance_mode(): RfcComplianceMode;
        /**
         * Gets whether or not the rfc822 address parser should allow addresses without a domain.
         *
         * In general, you'll probably want this value to be %FALSE (the default) as it allows
         * maximum interoperability with existing (broken) mail clients and other mail software
         * such as sloppily written perl scripts (aka spambots) that do not properly quote the
         * name when it contains a comma.
         *
         * This option exists in order to allow parsing of mailbox addresses that do not have a
         * domain component. These types of addresses are rare and were typically only used when
         * sending mail to other users on the same UNIX system.
         * @returns %TRUE if the address parser should allow addresses without a domain.
         */
        get_allow_addresses_without_domain(): boolean;
        /**
         * Gets the fallback charsets to try when decoding 8-bit headers.
         * @returns a %NULL-terminated list of charsets to try when decoding 8-bit headers.
         */
        get_fallback_charsets(): string[];
        /**
         * Gets the compliance mode that should be used when parsing Content-Type and
         * Content-Disposition parameters.
         *
         * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the parameter parser is fairly liberal
         * in what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder
         * to deal with garbage input.
         * @returns the compliance mode that is currently set.
         */
        get_parameter_compliance_mode(): RfcComplianceMode;
        /**
         * Gets the compliance mode that should be used when parsing rfc2047 encoded words.
         *
         * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the rfc2047 parser is fairly liberal
         * in what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder
         * to deal with garbage input.
         * @returns the compliance mode that is currently set.
         */
        get_rfc2047_compliance_mode(): RfcComplianceMode;
        /**
         * Sets the compliance mode that should be used when parsing rfc822 addresses.
         *
         * In general, you'll probably want this value to be #GMIME_RFC_COMPLIANCE_LOOSE
         * (the default) as it allows maximum interoperability with existing (broken) mail clients
         * and other mail software such as sloppily written perl scripts (aka spambots).
         *
         * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the address parser is fairly liberal in
         * what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder to
         * deal with garbage input.
         * @param mode a #GMimeRfcComplianceMode
         */
        set_address_compliance_mode(mode: RfcComplianceMode | null): void;
        /**
         * Sets whether the rfc822 address parser should allow addresses without a domain.
         *
         * In general, you'll probably want this value to be %FALSE (the default) as it allows
         * maximum interoperability with existing (broken) mail clients and other mail software
         * such as sloppily written perl scripts (aka spambots) that do not properly quote the
         * name when it contains a comma.
         *
         * This option exists in order to allow parsing of mailbox addresses that do not have a
         * domain component. These types of addresses are rare and were typically only used when
         * sending mail to other users on the same UNIX system.
         * @param allow %TRUE if the parser should allow addresses without a domain or %FALSE otherwise
         */
        set_allow_addresses_without_domain(allow: boolean): void;
        /**
         * Sets the fallback charsets to try when decoding 8-bit headers.
         *
         * Note: It is recommended that the list of charsets start with utf-8
         * and end with iso-8859-1.
         * @param charsets a %NULL-terminated list of charsets or %NULL for the default list
         */
        set_fallback_charsets(charsets: string): void;
        /**
         * Sets the compliance mode that should be used when parsing Content-Type and
         * Content-Disposition parameters.
         *
         * In general, you'll probably want this value to be #GMIME_RFC_COMPLIANCE_LOOSE
         * (the default) as it allows maximum interoperability with existing (broken) mail clients
         * and other mail software such as sloppily written perl scripts (aka spambots).
         *
         * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the parameter parser is fairly liberal
         * in what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder
         * to deal with garbage input.
         * @param mode a #GMimeRfcComplianceMode
         */
        set_parameter_compliance_mode(mode: RfcComplianceMode | null): void;
        /**
         * Sets the compliance mode that should be used when parsing rfc2047 encoded words.
         *
         * In general, you'll probably want this value to be #GMIME_RFC_COMPLIANCE_LOOSE
         * (the default) as it allows maximum interoperability with existing (broken) mail clients
         * and other mail software such as sloppily written perl scripts (aka spambots).
         *
         * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the parameter parser is fairly liberal
         * in what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder
         * to deal with garbage input.
         * @param mode a #GMimeRfcComplianceMode
         */
        set_rfc2047_compliance_mode(mode: RfcComplianceMode | null): void;
        /**
         * Registers the callback function being called if the parser detects any issues.
         * @param warning_cb a #GMimeParserWarningFunc or %NULL to clear the callback
         */
        set_warning_callback(warning_cb: ParserWarningFunc): void;
    }

    type PartClass = typeof Part;
    /**
     * A MIME part iterator.
     */
    class PartIter {
        static $gtype: GObject.GType<PartIter>;

        // Constructors

        constructor(toplevel: Object);
        _init(...args: any[]): void;

        static ['new'](toplevel: Object): PartIter;

        // Methods

        /**
         * Clones the `iter,` including its current state.
         * @returns a new #GMimePartIter that is identical to @iter.
         */
        clone(): PartIter;
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

        array: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                array: any[];
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): References;

        // Static methods

        /**
         * Decodes a list of msg-ids as in the References and/or In-Reply-To
         * headers defined in rfc822.
         * @param options a #GMimeParserOptions or %NULL
         * @param text string containing a list of msg-ids
         */
        static parse(options: ParserOptions | null, text: string): References;

        // Methods

        /**
         * Appends a reference to msgid to the list of references.
         * @param msgid a message-id string
         */
        append(msgid: string): void;
        /**
         * Clears the #GMimeReferences list.
         */
        clear(): void;
        /**
         * Copies a #GMimeReferences list.
         * @returns a new #GMimeReferences list that contains an identical list of items as @refs.
         */
        copy(): References;
        /**
         * Frees the #GMimeReferences list.
         */
        free(): void;
        /**
         * Gets the specified Message-Id reference from the #GMimeReferences.
         * @param index the index of the message id
         * @returns the Message-Id reference from the #GMimeReferences.
         */
        get_message_id(index: number): string;
        /**
         * Gets the length of the #GMimeReferences list.
         * @returns the number of message ids in the list.
         */
        length(): number;
        /**
         * Sets the specified Message-Id reference from the #GMimeReferences.
         * @param index the index of the message id
         * @param msgid the message id
         */
        set_message_id(index: number, msgid: string): void;
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
    type TextPartClass = typeof TextPart;
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
