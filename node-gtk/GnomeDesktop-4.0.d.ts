// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeDesktop-4.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type GDesktopEnums from './GDesktopEnums-3.0';

export namespace GnomeDesktop {

enum DesktopThumbnailSize {
    NORMAL,
    LARGE,
    XLARGE,
    XXLARGE,
}
const DESKTOP_PLATFORM_VERSION: number
/**
 * Returns whether the thumbnail has the correct uri and mtime embedded in the
 * png options. This function is threadsafe and does no blocking I/O.
 * @param pixbuf an loaded thumbnail #GdkPixbuf
 * @param uri a uri
 * @param mtime the mtime
 */
function desktopThumbnailIsValid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean
/**
 * Returns the filename that a thumbnail of size `size` for `uri` would have.
 * This function is threadsafe and does no blocking I/O.
 * @param uri an uri
 * @param size a thumbnail size
 */
function desktopThumbnailPathForUri(uri: string, size: DesktopThumbnailSize): string
/**
 * Gets all locales.
 */
function getAllLocales(): string[]
/**
 * Gets the country name for `code`. If `translation` is provided the
 * returned string is translated accordingly.
 * @param code an ISO 3166 code string
 * @param translation a locale string
 */
function getCountryFromCode(code: string, translation: string | null): string
/**
 * Gets the country description for `locale`. If `translation` is
 * provided the returned string is translated accordingly.
 * @param locale a locale string
 * @param translation a locale string
 */
function getCountryFromLocale(locale: string, translation: string | null): string
/**
 * Gets the default input source's type and identifier for a given
 * locale.
 * @param locale a locale string
 */
function getInputSourceFromLocale(locale: string): [ /* returnType */ boolean, /* type */ string, /* id */ string ]
/**
 * Gets the language name for `code`. If `translation` is provided the
 * returned string is translated accordingly.
 * @param code an ISO 639 code string
 * @param translation a locale string
 */
function getLanguageFromCode(code: string, translation: string | null): string
/**
 * Gets the language description for `locale`. If `translation` is
 * provided the returned string is translated accordingly.
 * @param locale a locale string
 * @param translation a locale string
 */
function getLanguageFromLocale(locale: string, translation: string | null): string
/**
 * Returns an integer with the major version of GNOME. Useful for
 * dynamic languages like Javascript or Python (static languages like
 * C should use %GNOME_DESKTOP_PLATFORM_VERSION). If this
 * function doesn't exist, it can be presumed that the GNOME platform
 * version is 42 or previous.
 */
function getPlatformVersion(): number
/**
 * Gets a translation of the raw `modifier` string. If `translation`
 * is provided the returned string is translated accordingly.
 * @param modifier the modifier part of a locale name
 * @param translation a locale string
 */
function getTranslatedModifier(modifier: string, translation: string | null): string
/**
 * Returns %TRUE if there are translations for language `code`.
 * @param code an ISO 639 code string
 */
function languageHasTranslations(code: string): boolean
/**
 * Gets the normalized locale string in the form
 * [language[_country][.codeset][`modifier]`] for `name`.
 * @param locale a locale string
 */
function normalizeLocale(locale: string): string
/**
 * Extracts the various components of a locale string of the form
 * [language[_country][.codeset][`modifier]`]. See
 * http://en.wikipedia.org/wiki/Locale.
 * @param locale a locale string
 */
function parseLocale(locale: string): [ /* returnType */ boolean, /* languageCodep */ string, /* countryCodep */ string | null, /* codesetp */ string | null, /* modifierp */ string | null ]
/**
 * If the current process is running inside a user systemd instance, then move
 * the launched PID into a transient scope. The given `name` will be used to
 * create a unit name. It should be the application ID or the executable in all
 * other cases. If a desktop-id is passed then the .desktop suffix will be
 * stripped.
 * 
 * It is advisable to use this function every time where the started application
 * can be considered reasonably independent of the launching application. Placing
 * it in a scope creates proper separation between the programs rather than being
 * considered a single entity by systemd.
 * 
 * It is always safe to call this function. Note that a successful return code
 * does not imply that a unit has been created. It solely means that no error
 * condition was hit sending the request.
 * 
 * If `connection` is %NULL then g_dbus_get() will be called internally.
 * 
 * Note that most callers will not need to handle errors. As such, it is normal
 * to pass a %NULL `callback`.
 * @param name Name for the application
 * @param pid The PID of the application
 * @param description A description to use for the unit, or %NULL
 * @param connection An #GDBusConnection to the session bus, or %NULL
 * @param cancellable #GCancellable to use
 * @param callback Callback to call when the operation is done
 */
function startSystemdScope(name: string, pid: number, description: string | null, connection: Gio.DBusConnection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finish an asynchronous operation to create a transient scope that was
 * started with gnome_start_systemd_scope().
 * 
 * Note that a successful return code does not imply that a unit has been
 * created. It solely means that no error condition was hit sending the request.
 * @param res A #GAsyncResult
 */
function startSystemdScopeFinish(res: Gio.AsyncResult): boolean
interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, id: number): void
}
interface DesktopThumbnailFactory_ConstructProps extends GObject.Object_ConstructProps {
}

interface DesktopThumbnailFactory {

    // Own fields of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory

    parent: GObject.Object
    priv: DesktopThumbnailFactoryPrivate

    // Owm methods of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory

    /**
     * Returns TRUE if this GnomeDesktopThumbnailFactory can (at least try) to thumbnail
     * this file. Thumbnails or files with failed thumbnails won't be thumbnailed.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mimeType the mime type of the file
     * @param mtime the mtime of the file
     */
    canThumbnail(uri: string, mimeType: string, mtime: number): boolean
    /**
     * Creates a failed thumbnail for the file so that we don't try
     * to re-thumbnail the file later.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mtime the modification time of the file
     */
    createFailedThumbnail(uri: string, mtime: number): void
    /**
     * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
     * 
     * Since 42.0
     * @param uri the uri of a file
     * @param originalMtime the modification time of the original file
     * @param cancellable a Cancellable object
     * @param callback a function that will be called when the task has ended
     */
    createFailedThumbnailAsync(uri: string, originalMtime: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Since 42.0
     * @param result the result of the operation
     */
    createFailedThumbnailFinish(result: Gio.AsyncResult): void
    /**
     * Tries to generate a thumbnail for the specified file. If it succeeds
     * it returns a pixbuf that can be used as a thumbnail.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mimeType the mime type of the file
     */
    generateThumbnail(uri: string, mimeType: string): GdkPixbuf.Pixbuf
    /**
     * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
     * 
     * Since 42.0
     * @param uri the URI of a file
     * @param mimeType the MIME type of the file
     * @param cancellable a Cancellable object
     * @param callback a function that will be called when the task has ended
     */
    generateThumbnailAsync(uri: string, mimeType: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    generateThumbnailFinish(result: Gio.AsyncResult): GdkPixbuf.Pixbuf
    /**
     * Tries to locate an failed thumbnail for the file specified. Writing
     * and looking for failed thumbnails is important to avoid to try to
     * thumbnail e.g. broken images several times.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mtime the mtime of the file
     */
    hasValidFailedThumbnail(uri: string, mtime: number): boolean
    /**
     * Tries to locate an existing thumbnail for the file specified.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mtime the mtime of the file
     */
    lookup(uri: string, mtime: number): string
    /**
     * Saves `thumbnail` at the right place. If the save fails a
     * failed thumbnail is written.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param thumbnail the thumbnail as a pixbuf
     * @param uri the uri of a file
     * @param originalMtime the modification time of the original file
     */
    saveThumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, originalMtime: number): void
    /**
     * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
     * 
     * Since 42.0
     * @param thumbnail the thumbnail as a pixbuf
     * @param uri the uri of a file
     * @param originalMtime the modification time of the original file
     * @param cancellable a Cancellable object
     * @param callback a function that will be called when the task has ended
     */
    saveThumbnailAsync(thumbnail: GdkPixbuf.Pixbuf, uri: string, originalMtime: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Since 42.0
     * @param result the result of the operation
     */
    saveThumbnailFinish(result: Gio.AsyncResult): void

    // Class property signals of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DesktopThumbnailFactory extends GObject.Object {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory

    static name: string
    static $gtype: GObject.GType<DesktopThumbnailFactory>

    // Constructors of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactory

    constructor(config?: DesktopThumbnailFactory_ConstructProps) 
    /**
     * Creates a new #GnomeDesktopThumbnailFactory.
     * 
     * This function must be called on the main thread and is non-blocking.
     * @constructor 
     * @param size The thumbnail size to use
     */
    constructor(size: DesktopThumbnailSize) 
    /**
     * Creates a new #GnomeDesktopThumbnailFactory.
     * 
     * This function must be called on the main thread and is non-blocking.
     * @constructor 
     * @param size The thumbnail size to use
     */
    static new(size: DesktopThumbnailSize): DesktopThumbnailFactory
    _init(config?: DesktopThumbnailFactory_ConstructProps): void
}

interface IdleMonitor_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {
}

interface IdleMonitor extends Gio.Initable {

    // Own fields of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor

    parent: GObject.Object
    priv: IdleMonitorPrivate

    // Owm methods of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor

    addIdleWatch(intervalMsec: number, callback: IdleMonitorWatchFunc | null): number
    addUserActiveWatch(callback: IdleMonitorWatchFunc | null): number
    getIdletime(): number
    /**
     * Removes an idle time watcher, previously added by
     * gnome_idle_monitor_add_idle_watch() or
     * gnome_idle_monitor_add_user_active_watch().
     * @param id A watch ID
     */
    removeWatch(id: number): void

    // Class property signals of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class IdleMonitor extends GObject.Object {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor

    static name: string
    static $gtype: GObject.GType<IdleMonitor>

    // Constructors of GnomeDesktop-4.0.GnomeDesktop.IdleMonitor

    constructor(config?: IdleMonitor_ConstructProps) 
    constructor() 
    static new(): IdleMonitor
    _init(config?: IdleMonitor_ConstructProps): void
}

interface PnpIds_ConstructProps extends GObject.Object_ConstructProps {
}

interface PnpIds {

    // Own fields of GnomeDesktop-4.0.GnomeDesktop.PnpIds

    parent: GObject.Object
    priv: PnpIdsPrivate

    // Owm methods of GnomeDesktop-4.0.GnomeDesktop.PnpIds

    /**
     * Find the full manufacturer name for the given PNP ID.
     * @param pnpId the PNP ID to look for
     */
    getPnpId(pnpId: string): string

    // Class property signals of GnomeDesktop-4.0.GnomeDesktop.PnpIds

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PnpIds extends GObject.Object {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.PnpIds

    static name: string
    static $gtype: GObject.GType<PnpIds>

    // Constructors of GnomeDesktop-4.0.GnomeDesktop.PnpIds

    constructor(config?: PnpIds_ConstructProps) 
    /**
     * Returns a reference to a #GnomePnpIds object, or creates
     * a new one if none have been created.
     * @constructor 
     */
    constructor() 
    /**
     * Returns a reference to a #GnomePnpIds object, or creates
     * a new one if none have been created.
     * @constructor 
     */
    static new(): PnpIds
    _init(config?: PnpIds_ConstructProps): void
}

interface WallClock_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GnomeDesktop-4.0.GnomeDesktop.WallClock

    /**
     * If %TRUE, the formatted clock will never include a date or the
     * day of the week, irrespective of configuration.
     */
    timeOnly?: boolean | null
}

interface WallClock {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.WallClock

    /**
     * A formatted string representing the current clock display.
     */
    readonly clock: string
    /**
     * If %TRUE, the formatted clock will never include a date or the
     * day of the week, irrespective of configuration.
     */
    timeOnly: boolean
    /**
     * The timezone used for this clock
     */
    readonly timezone: GLib.TimeZone

    // Own fields of GnomeDesktop-4.0.GnomeDesktop.WallClock

    parentObject: GObject.Object
    priv: WallClockPrivate

    // Owm methods of GnomeDesktop-4.0.GnomeDesktop.WallClock

    /**
     * Returns the string representing the current time of this clock
     * according to the user settings.
     */
    getClock(): string
    /**
     * Returns the current local time zone used by this clock.
     */
    getTimezone(): GLib.TimeZone
    stringForDatetime(now: GLib.DateTime, clockFormat: GDesktopEnums.ClockFormat, showWeekday: boolean, showFullDate: boolean, showSeconds: boolean): string

    // Class property signals of GnomeDesktop-4.0.GnomeDesktop.WallClock

    connect(sigName: "notify::clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::time-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-only", ...args: any[]): void
    connect(sigName: "notify::timezone", callback: (...args: any[]) => void): number
    on(sigName: "notify::timezone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timezone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timezone", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WallClock extends GObject.Object {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.WallClock

    static name: string
    static $gtype: GObject.GType<WallClock>

    // Constructors of GnomeDesktop-4.0.GnomeDesktop.WallClock

    constructor(config?: WallClock_ConstructProps) 
    /**
     * Creates a new #GnomeWallClock
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GnomeWallClock
     * @constructor 
     */
    static new(): WallClock
    _init(config?: WallClock_ConstructProps): void
}

interface XkbInfo_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `layouts-changed`
 */
interface XkbInfo_LayoutsChangedSignalCallback {
    (): void
}

interface XkbInfo {

    // Own fields of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

    parentObject: GObject.Object
    priv: XkbInfoPrivate

    // Owm methods of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

    descriptionForGroup(groupId: string): string
    descriptionForOption(groupId: string, id: string): string
    /**
     * Returns a list of all layout identifiers we know about.
     */
    getAllLayouts(): string[]
    /**
     * Returns a list of all option group identifiers we know about.
     */
    getAllOptionGroups(): string[]
    /**
     * Returns a list of all languages supported by a layout, given by
     * `layout_id`.
     * @param layoutId a layout identifier
     */
    getLanguagesForLayout(layoutId: string): string[]
    /**
     * Retrieves information about a layout. Both `display_name` and
     * `short_name` are suitable to show in UIs and might be localized if
     * translations are available.
     * 
     * Some layouts don't provide a short name (2 or 3 letters) or don't
     * specify a XKB variant, in those cases `short_name` or `xkb_variant`
     * are empty strings, i.e. "".
     * 
     * If the given layout doesn't exist the return value is %FALSE and
     * all the (out) parameters are set to %NULL.
     * @param id layout's identifier about which to retrieve the info
     */
    getLayoutInfo(id: string): [ /* returnType */ boolean, /* displayName */ string | null, /* shortName */ string | null, /* xkbLayout */ string | null, /* xkbVariant */ string | null ]
    /**
     * Returns a list of all layout identifiers we know about for
     * `country_code`.
     * @param countryCode an ISO 3166 code string
     */
    getLayoutsForCountry(countryCode: string): string[]
    /**
     * Returns a list of all layout identifiers we know about for
     * `language_code`.
     * @param languageCode an ISO 639 code string
     */
    getLayoutsForLanguage(languageCode: string): string[]
    /**
     * Returns a list of all option identifiers we know about for group
     * `group_id`.
     * @param groupId group's identifier about which to retrieve the options
     */
    getOptionsForGroup(groupId: string): string[]

    // Own signals of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

    connect(sigName: "layouts-changed", callback: XkbInfo_LayoutsChangedSignalCallback): number
    on(sigName: "layouts-changed", callback: XkbInfo_LayoutsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layouts-changed", callback: XkbInfo_LayoutsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layouts-changed", callback: XkbInfo_LayoutsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "layouts-changed", ...args: any[]): void

    // Class property signals of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class XkbInfo extends GObject.Object {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

    static name: string
    static $gtype: GObject.GType<XkbInfo>

    // Constructors of GnomeDesktop-4.0.GnomeDesktop.XkbInfo

    constructor(config?: XkbInfo_ConstructProps) 
    constructor() 
    static new(): XkbInfo
    _init(config?: XkbInfo_ConstructProps): void
}

interface DesktopThumbnailFactoryClass {

    // Own fields of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactoryClass

    parent: GObject.ObjectClass
}

abstract class DesktopThumbnailFactoryClass {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactoryClass

    static name: string
}

interface DesktopThumbnailFactoryPrivate {
}

class DesktopThumbnailFactoryPrivate {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.DesktopThumbnailFactoryPrivate

    static name: string
}

interface IdleMonitorClass {

    // Own fields of GnomeDesktop-4.0.GnomeDesktop.IdleMonitorClass

    parentClass: GObject.ObjectClass
}

abstract class IdleMonitorClass {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.IdleMonitorClass

    static name: string
}

interface IdleMonitorPrivate {
}

class IdleMonitorPrivate {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.IdleMonitorPrivate

    static name: string
}

interface PnpIdsClass {

    // Own fields of GnomeDesktop-4.0.GnomeDesktop.PnpIdsClass

    parentClass: GObject.ObjectClass
}

abstract class PnpIdsClass {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.PnpIdsClass

    static name: string
}

interface PnpIdsPrivate {
}

class PnpIdsPrivate {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.PnpIdsPrivate

    static name: string
}

interface WallClockClass {

    // Own fields of GnomeDesktop-4.0.GnomeDesktop.WallClockClass

    parentClass: GObject.ObjectClass
}

abstract class WallClockClass {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.WallClockClass

    static name: string
}

interface WallClockPrivate {
}

class WallClockPrivate {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.WallClockPrivate

    static name: string
}

interface XkbInfoClass {

    // Own fields of GnomeDesktop-4.0.GnomeDesktop.XkbInfoClass

    parentClass: GObject.ObjectClass
}

abstract class XkbInfoClass {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.XkbInfoClass

    static name: string
}

interface XkbInfoPrivate {
}

class XkbInfoPrivate {

    // Own properties of GnomeDesktop-4.0.GnomeDesktop.XkbInfoPrivate

    static name: string
}

}
export default GnomeDesktop;