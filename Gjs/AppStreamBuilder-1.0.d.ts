/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * AppStreamBuilder-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type AppStreamGlib from './AppStreamGlib-1.0';

export namespace AppStreamBuilder {

/**
 * The flags to use when saving resources.
 */
enum AppSaveFlags {
    /**
     * Nothing to do
     */
    NONE,
    /**
     * Save icons to disk
     */
    ICONS,
    /**
     * Save screenshots to disk
     */
    SCREENSHOTS,
}
enum PackageKind {
    DEFAULT,
    BUNDLE,
    FIRMWARE,
    LAST,
}
enum PackageLogLevel {
    NONE,
    DEBUG,
    INFO,
    WARNING,
    LAST,
}
/**
 * The flags to use when processing the context.
 */
enum ContextFlags {
    /**
     * No special actions to use
     */
    NONE,
    /**
     * Ignore missing information
     */
    IGNORE_MISSING_INFO,
    /**
     * Ignore missing parents
     */
    IGNORE_MISSING_PARENTS,
    /**
     * Unused
     */
    ADD_CACHE_ID,
    /**
     * Include HiDPI icons
     */
    HIDPI_ICONS,
    /**
     * Embed the icons in the XML
     */
    EMBEDDED_ICONS,
    /**
     * Do not download files
     */
    NO_NETWORK,
    /**
     * Write the origin-ignore.xml file
     */
    INCLUDE_FAILED,
    /**
     * Do not pack icons into a tarball
     */
    UNCOMPRESSED_ICONS,
    /**
     * Include apps that are dead upstream
     */
    IGNORE_DEAD_UPSTREAM,
    /**
     * Include apps that use obsolete toolkits
     */
    IGNORE_OBSOLETE_DEPS,
    /**
     * Include apps that use legacy icon formats
     */
    IGNORE_LEGACY_ICONS,
    /**
     * Include apps that are marked as settings
     */
    IGNORE_SETTINGS,
    /**
     * Fall back to suboptimal data where required
     */
    USE_FALLBACKS,
    /**
     * Add artificial icons and categories where required
     */
    ADD_DEFAULT_ICONS,
}
const PACKAGE_ENSURE_DEPS: number
const PACKAGE_ENSURE_FILES: number
const PACKAGE_ENSURE_LICENSE: number
const PACKAGE_ENSURE_NEVRA: number
const PACKAGE_ENSURE_NONE: number
const PACKAGE_ENSURE_RELEASES: number
const PACKAGE_ENSURE_SOURCE: number
const PACKAGE_ENSURE_URL: number
const PACKAGE_ENSURE_VCS: number
interface App_ConstructProps extends AppStreamGlib.App_ConstructProps {
}
class App {
    /* Fields of AppStreamGlib-1.0.AppStreamGlib.App */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamBuilder-1.0.AppStreamBuilder.App */
    /**
     * Gets the package that backs the application.
     */
    get_package(): Package
    /**
     * Saves to disk any resources set for the application.
     * @param save_flags #AsbAppSaveFlags, e.g. %ASB_APP_SAVE_FLAG_SCREENSHOTS
     */
    save_resources(save_flags: AppSaveFlags): boolean
    /**
     * Sets the HiDPI mode for the application.
     * @param hidpi_enabled if HiDPI mode should be enabled
     */
    set_hidpi_enabled(hidpi_enabled: boolean): void
    /**
     * Sets the package that backs the application.
     * @param pkg A #AsbPackage
     */
    set_package(pkg: Package): void
    /* Methods of AppStreamGlib-1.0.AppStreamGlib.App */
    /**
     * Adds a addon to an application.
     * @param addon a #AsApp instance.
     */
    add_addon(addon: AppStreamGlib.App): void
    /**
     * Adds a agreement to an application.
     * @param agreement a #AsAgreement instance.
     */
    add_agreement(agreement: AppStreamGlib.Agreement): void
    /**
     * Adds a package name to an application.
     * @param arch the package name.
     */
    add_arch(arch: string): void
    /**
     * Adds a bundle to an application.
     * @param bundle a #AsBundle instance.
     */
    add_bundle(bundle: AppStreamGlib.Bundle): void
    /**
     * Adds a menu category to the application.
     * @param category the category.
     */
    add_category(category: string): void
    /**
     * Adds a desktop that requires this application to be installed.
     * @param compulsory_for_desktop the desktop string, e.g. "GNOME".
     */
    add_compulsory_for_desktop(compulsory_for_desktop: string): void
    /**
     * Adds a content_rating to an application.
     * @param content_rating a #AsContentRating instance.
     */
    add_content_rating(content_rating: AppStreamGlib.ContentRating): void
    /**
     * Adds a parent ID to the application.
     * @param extends_ the full ID, e.g. "eclipse.desktop".
     */
    add_extends(extends_: string): void
    /**
     * Add a format the application has been built from.
     * @param format the #AsFormat.
     */
    add_format(format: AppStreamGlib.Format): void
    /**
     * Adds a icon to an application.
     * @param icon a #AsIcon instance.
     */
    add_icon(icon: AppStreamGlib.Icon): void
    /**
     * Add a keyword the application should match against.
     * @param locale the locale. e.g. "en_GB"
     * @param keyword the keyword.
     */
    add_keyword(locale: string | null, keyword: string): void
    /**
     * Add a kudo the application has obtained.
     * @param kudo the kudo.
     */
    add_kudo(kudo: string): void
    /**
     * Add a kudo the application has obtained.
     * @param kudo_kind the #AsKudoKind.
     */
    add_kudo_kind(kudo_kind: AppStreamGlib.KudoKind): void
    /**
     * Adds a language to the application.
     * @param percentage the percentage completion of the translation, or 0 for unknown
     * @param locale the locale. e.g. "en_GB"
     */
    add_language(percentage: number, locale?: string | null): void
    /**
     * Adds a launchable to an application.
     * @param launchable a #AsLaunchable instance.
     */
    add_launchable(launchable: AppStreamGlib.Launchable): void
    /**
     * Adds a metadata entry to the application.
     * @param key the metadata key.
     * @param value the value to store.
     */
    add_metadata(key: string, value?: string | null): void
    /**
     * Adds a mimetype the application can process.
     * @param mimetype the mimetype.
     */
    add_mimetype(mimetype: string): void
    /**
     * Add a permission the application has obtained.
     * @param permission the permission.
     */
    add_permission(permission: string): void
    /**
     * Adds a package name to an application.
     * @param pkgname the package name.
     */
    add_pkgname(pkgname: string): void
    /**
     * Adds a provide to an application.
     * @param provide a #AsProvide instance.
     */
    add_provide(provide: AppStreamGlib.Provide): void
    /**
     * Adds a specific attribute to an application.
     * @param quirk the #AsAppQuirk, e.g. %AS_APP_QUIRK_PROVENANCE
     */
    add_quirk(quirk: AppStreamGlib.AppQuirk): void
    /**
     * Adds a release to an application.
     * @param release a #AsRelease instance.
     */
    add_release(release: AppStreamGlib.Release): void
    /**
     * Adds a require to an application.
     * @param require a #AsRequire instance.
     */
    add_require(require: AppStreamGlib.Require): void
    /**
     * Adds a review to an application.
     * @param review a #AsReview instance.
     */
    add_review(review: AppStreamGlib.Review): void
    /**
     * Adds a screenshot to an application.
     * @param screenshot a #AsScreenshot instance.
     */
    add_screenshot(screenshot: AppStreamGlib.Screenshot): void
    /**
     * Adds a suggest to an application.
     * @param suggest a #AsSuggest instance.
     */
    add_suggest(suggest: AppStreamGlib.Suggest): void
    /**
     * Adds a translation to an application.
     * @param translation a #AsTranslation instance.
     */
    add_translation(translation: AppStreamGlib.Translation): void
    /**
     * Adds some URL data to the application.
     * @param url_kind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE
     * @param url the full URL.
     */
    add_url(url_kind: AppStreamGlib.UrlKind, url: string): void
    /**
     * Converts all the icons in the application to a specific kind.
     * @param kind the AsIconKind, e.g. %AS_ICON_KIND_EMBEDDED.
     */
    convert_icons(kind: AppStreamGlib.IconKind): boolean
    /**
     * Compare one application with another for equality using the following
     * properties:
     * 
     *  1. scope, e.g. `system` or `user`
     *  2. bundle kind, e.g. `package` or `flatpak`
     *  3. origin, e.g. `fedora` or `gnome-apps-nightly`
     *  4. kind, e.g. `app` or `runtime`
     *  5. AppStream ID, e.g. `gimp.desktop`
     *  6. branch, e.g. `stable` or `master`
     * @param app2 another #AsApp instance.
     */
    equal(app2: AppStreamGlib.App): boolean
    /**
     * Gets all the addons the application has.
     */
    get_addons(): AppStreamGlib.App[]
    /**
     * Gets a agreement the application has defined of a specific type.
     * @param kind an agreement kind, e.g. %AS_AGREEMENT_KIND_EULA
     */
    get_agreement_by_kind(kind: AppStreamGlib.AgreementKind): AppStreamGlib.Agreement
    /**
     * Gets a privacy policys the application has defined of a specific type.
     */
    get_agreement_default(): AppStreamGlib.Agreement
    /**
     * Gets the supported architectures for the application, or an empty list
     * if all architectures are supported.
     */
    get_architectures(): string[]
    /**
     * Gets the branch for the application.
     */
    get_branch(): string
    /**
     * Finds the default bundle.
     */
    get_bundle_default(): AppStreamGlib.Bundle
    /**
     * Gets any bundles the application has defined.
     */
    get_bundles(): AppStreamGlib.Bundle[]
    /**
     * Get the application categories.
     */
    get_categories(): string[]
    /**
     * Gets the application summary for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     */
    get_comment(locale?: string | null): string
    /**
     * Gets the comments set for the application.
     */
    get_comments(): GLib.HashTable
    /**
     * Returns the desktops where this application is compulsory.
     */
    get_compulsory_for_desktops(): string[]
    /**
     * Gets a content ratings the application has defined of a specific type.
     * @param kind a ratings kind, e.g. "oars-1.0"
     */
    get_content_rating(kind: string): AppStreamGlib.ContentRating
    /**
     * Gets any content_ratings the application has defined.
     */
    get_content_ratings(): AppStreamGlib.ContentRating[]
    /**
     * Gets the application description markup for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     */
    get_description(locale?: string | null): string
    /**
     * Gets the descriptions set for the application.
     */
    get_descriptions(): GLib.HashTable
    /**
     * Gets the application developer name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     */
    get_developer_name(locale?: string | null): string
    /**
     * Gets the developer_names set for the application.
     */
    get_developer_names(): GLib.HashTable
    /**
     * Gets the IDs that are extended from the addon.
     */
    get_extends(): string[]
    /**
     * Searches the list of formats for a specific filename.
     * @param filename a filename, e.g. "/home/hughsie/dave.desktop"
     */
    get_format_by_filename(filename: string): AppStreamGlib.Format
    /**
     * Searches the list of formats for a specific format kind.
     * @param kind a #AsFormatKind, e.g. %AS_FORMAT_KIND_APPDATA
     */
    get_format_by_kind(kind: AppStreamGlib.FormatKind): AppStreamGlib.Format
    /**
     * Returns the default format.
     */
    get_format_default(): AppStreamGlib.Format
    /**
     * Gets any formats that make up the application.
     */
    get_formats(): string[]
    /**
     * Finds the default icon.
     */
    get_icon_default(): AppStreamGlib.Icon
    /**
     * Finds an icon of a specific size.
     * @param width Size in pixels
     * @param height Size in pixels
     */
    get_icon_for_size(width: number, height: number): AppStreamGlib.Icon
    /**
     * Gets the application icon path.
     */
    get_icon_path(): string
    /**
     * Gets any icons the application has defined.
     */
    get_icons(): AppStreamGlib.Icon[]
    /**
     * Gets the full ID value.
     */
    get_id(): string
    /**
     * Returns a filename which represents the applications ID, e.g. "gimp.desktop"
     * becomes "gimp" and is used for cache directories.
     */
    get_id_filename(): string
    /**
     * Gets the ID kind.
     */
    get_id_kind(): AppStreamGlib.IdKind
    /**
     * Gets the full ID value, stripping any prefix.
     */
    get_id_no_prefix(): string
    /**
     * Gets any keywords the application should match against.
     * @param locale the locale. e.g. "en_GB"
     */
    get_keywords(locale?: string | null): string[]
    /**
     * Gets the ID kind.
     */
    get_kind(): AppStreamGlib.AppKind
    /**
     * Gets any kudos the application has obtained.
     */
    get_kudos(): string[]
    /**
     * Gets the language coverage for the specific language.
     * @param locale the locale. e.g. "en_GB"
     */
    get_language(locale?: string | null): number
    /**
     * Get a list of all languages.
     */
    get_languages(): string[]
    /**
     * Searches the list of launchables for a specific launchable kind.
     * @param kind a #AsLaunchableKind, e.g. %AS_FORMAT_KIND_APPDATA
     */
    get_launchable_by_kind(kind: AppStreamGlib.LaunchableKind): AppStreamGlib.Launchable
    /**
     * Returns the default launchable.
     */
    get_launchable_default(): AppStreamGlib.Launchable
    /**
     * Gets all the launchables the application has.
     */
    get_launchables(): AppStreamGlib.Launchable[]
    /**
     * Gets the merge_kind of the application.
     */
    get_merge_kind(): AppStreamGlib.AppMergeKind
    /**
     * Gets the metadata set for the application.
     */
    get_metadata(): GLib.HashTable
    /**
     * Gets some metadata item.
     * @param key the metadata key.
     */
    get_metadata_item(key: string): string
    /**
     * Gets the application project license.
     */
    get_metadata_license(): string
    /**
     * Gets any mimetypes the application will register.
     */
    get_mimetypes(): string[]
    /**
     * Gets the application name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     */
    get_name(locale?: string | null): string
    /**
     * Gets the names set for the application.
     */
    get_names(): GLib.HashTable
    /**
     * Gets the application origin.
     */
    get_origin(): string
    /**
     * Gets any permissions the application has obtained.
     */
    get_permissions(): string[]
    /**
     * Gets the default package name.
     */
    get_pkgname_default(): string
    /**
     * Gets the package names (if any) for the application.
     */
    get_pkgnames(): string[]
    /**
     * Gets the application priority. Larger values trump smaller values.
     */
    get_priority(): number
    /**
     * Gets an application project group.
     */
    get_project_group(): string
    /**
     * Gets the application project license.
     */
    get_project_license(): string
    /**
     * Gets all the provides the application has.
     */
    get_provides(): AppStreamGlib.Provide[]
    /**
     * Gets a specific release from the application.
     * @param version a version string
     */
    get_release(version: string): AppStreamGlib.Release
    /**
     * Gets a specific release from the application.
     * @param version a release version number, e.g. "1.2.3"
     */
    get_release_by_version(version: string): AppStreamGlib.Release
    /**
     * Gets the default (newest) release from the application.
     */
    get_release_default(): AppStreamGlib.Release
    /**
     * Gets all the releases the application has had.
     */
    get_releases(): AppStreamGlib.Release[]
    /**
     * Gets a specific requirement for the application.
     * @param kind a #AsRequireKind, e.g. %AS_REQUIRE_KIND_FIRMWARE
     * @param value a string, or NULL, e.g. `bootloader`
     */
    get_require_by_value(kind: AppStreamGlib.RequireKind, value: string): AppStreamGlib.Require
    /**
     * Gets any requires the application has defined. A rquirement could be that
     * a firmware version has to be below a defined version or that another
     * application is required to be installed.
     */
    get_requires(): AppStreamGlib.Require[]
    /**
     * Gets any reviews the application has defined.
     */
    get_reviews(): AppStreamGlib.Screenshot[]
    /**
     * Gets the scope of the application.
     */
    get_scope(): AppStreamGlib.AppScope
    /**
     * Gets the default screenshot for the component.
     */
    get_screenshot_default(): AppStreamGlib.Screenshot
    /**
     * Gets any screenshots the application has defined.
     */
    get_screenshots(): AppStreamGlib.Screenshot[]
    /**
     * Gets the token match fields. The bitfield given here is used to choose what
     * is included in the token cache.
     */
    get_search_match(): number
    /**
     * Gets the default source filename the instance was populated from.
     */
    get_source_file(): string
    /**
     * Gets the source kind, i.e. where the AsApp came from.
     */
    get_source_kind(): AppStreamGlib.FormatKind
    /**
     * Gets the source package name that produced the binary package.
     * Only source packages producing more than one binary package will have this
     * entry set.
     */
    get_source_pkgname(): string
    /**
     * Gets the application state.
     */
    get_state(): AppStreamGlib.AppState
    /**
     * Gets any suggests the application has defined.
     */
    get_suggests(): AppStreamGlib.Suggest[]
    /**
     * Gets any translations the application has defined.
     */
    get_translations(): AppStreamGlib.Translation[]
    /**
     * Gets the trust flags, i.e. how trusted the incoming data is.
     */
    get_trust_flags(): number
    /**
     * Gets the unique ID value to represent the component.
     */
    get_unique_id(): string
    /**
     * Gets the application upstream update contact email.
     */
    get_update_contact(): string
    /**
     * Gets a URL.
     * @param url_kind the URL kind, e.g. %AS_URL_KIND_HOMEPAGE.
     */
    get_url_item(url_kind: AppStreamGlib.UrlKind): string
    /**
     * Gets the URLs set for the application.
     */
    get_urls(): GLib.HashTable
    /**
     * Gets the list of vetos.
     */
    get_vetos(): string[]
    /**
     * Searches the category list for a specific item.
     * @param category a category string, e.g. "DesktopSettings"
     */
    has_category(category: string): boolean
    /**
     * Searches the compulsory for desktop list for a specific item.
     * @param desktop a desktop string, e.g. "GNOME"
     */
    has_compulsory_for_desktop(desktop: string): boolean
    /**
     * Searches the kudo list for a specific item.
     * @param kudo a kudo string, e.g. "SearchProvider"
     */
    has_kudo(kudo: string): boolean
    /**
     * Searches the kudo list for a specific item.
     * @param kudo a #AsKudoKind, e.g. %AS_KUDO_KIND_SEARCH_PROVIDER
     */
    has_kudo_kind(kudo: AppStreamGlib.KudoKind): boolean
    /**
     * Searches the permission list for a specific item.
     * @param permission a permission string, e.g. "Network"
     */
    has_permission(permission: string): boolean
    /**
     * Queries to see if an application has a specific attribute.
     * @param quirk the #AsAppQuirk, e.g. %AS_APP_QUIRK_PROVENANCE
     */
    has_quirk(quirk: AppStreamGlib.AppQuirk): boolean
    /**
     * Parses an AppData file and populates the application state.
     * @param data data to parse.
     * @param flags #AsAppParseFlags, e.g. %AS_APP_PARSE_FLAG_USE_HEURISTICS
     */
    parse_data(data: GLib.Bytes, flags: number): boolean
    /**
     * Parses a desktop or AppData file and populates the application state.
     * 
     * Applications that are not suitable for the store will have vetos added.
     * @param filename file to load.
     * @param flags #AsAppParseFlags, e.g. %AS_APP_PARSE_FLAG_USE_HEURISTICS
     */
    parse_file(filename: string, flags: number): boolean
    /**
     * Removed a menu category from the application.
     * @param category the category.
     */
    remove_category(category: string): void
    /**
     * Removes a format the application has been built from.
     * @param format the #AsFormat.
     */
    remove_format(format: AppStreamGlib.Format): void
    /**
     * Remove a kudo the application has obtained.
     * @param kudo the kudo.
     */
    remove_kudo(kudo: string): void
    /**
     * Removes a metadata item from the application.
     * @param key the metadata key.
     */
    remove_metadata(key: string): void
    /**
     * Removes a reason to not include the application in the metadata.
     * @param description veto string
     */
    remove_veto(description: string): void
    /**
     * Searches application data for a specific keyword.
     * @param search the search term.
     */
    search_matches(search: string): number
    /**
     * Searches application data for all the specific keywords.
     * @param search the search terms.
     */
    search_matches_all(search: string): number
    /**
     * Set the branch that the instance was sourced from.
     * @param branch the branch, e.g. "master" or "3-16".
     */
    set_branch(branch: string): void
    /**
     * Sets the application summary for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param comment the application summary.
     */
    set_comment(locale: string | null, comment: string): void
    /**
     * Sets the application descrption markup for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param description the application description.
     */
    set_description(locale: string | null, description: string): void
    /**
     * Sets the application developer name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param developer_name the application developer name.
     */
    set_developer_name(locale: string | null, developer_name: string): void
    /**
     * Sets the icon path, where local icons would be found.
     * @param icon_path the local path.
     */
    set_icon_path(icon_path: string): void
    /**
     * Sets a new application ID. Any invalid characters will be automatically replaced.
     * @param id the new _full_ application ID, e.g. "org.gnome.Software.desktop".
     */
    set_id(id: string): void
    /**
     * Sets the application kind.
     * @param id_kind the #AsAppKind.
     */
    set_id_kind(id_kind: AppStreamGlib.IdKind): void
    /**
     * Sets the application kind.
     * @param kind the #AsAppKind.
     */
    set_kind(kind: AppStreamGlib.AppKind): void
    /**
     * Sets the merge kind of the application.
     * @param merge_kind the #AsAppMergeKind.
     */
    set_merge_kind(merge_kind: AppStreamGlib.AppMergeKind): void
    /**
     * Set the project license.
     * @param metadata_license the project license string.
     */
    set_metadata_license(metadata_license: string): void
    /**
     * Sets the application name for a specific locale.
     * @param locale the locale. e.g. "en_GB"
     * @param name the application name.
     */
    set_name(locale: string | null, name: string): void
    /**
     * Sets the application origin.
     * @param origin the origin, e.g. "fedora-21"
     */
    set_origin(origin: string): void
    /**
     * Sets the application priority, where 0 is default and positive numbers
     * are better than negative numbers.
     * @param priority the priority.
     */
    set_priority(priority: number): void
    /**
     * Set any project affiliation.
     * @param project_group the project group, e.g. "GNOME".
     */
    set_project_group(project_group: string): void
    /**
     * Set the project license.
     * @param project_license the project license string.
     */
    set_project_license(project_license: string): void
    /**
     * Sets the scope of the application.
     * @param scope the #AsAppScope.
     */
    set_scope(scope: AppStreamGlib.AppScope): void
    /**
     * Sets the token match fields. The bitfield given here is used to choose what
     * is included in the token cache.
     * @param search_match the #AsAppSearchMatch, e.g. %AS_APP_SEARCH_MATCH_PKGNAME
     */
    set_search_match(search_match: number): void
    /**
     * Set the file that the instance was sourced from.
     * @param source_file the filename.
     */
    set_source_file(source_file: string): void
    /**
     * Sets the source kind.
     * @param source_kind the #AsFormatKind.
     */
    set_source_kind(source_kind: AppStreamGlib.FormatKind): void
    /**
     * Set the project license.
     * @param source_pkgname the project license string.
     */
    set_source_pkgname(source_pkgname: string): void
    /**
     * Sets the application state.
     * @param state the #AsAppState.
     */
    set_state(state: AppStreamGlib.AppState): void
    /**
     * Sets the check flags, where %AS_APP_TRUST_FLAG_COMPLETE is completely
     * trusted input.
     * @param trust_flags the #AsAppTrustFlags.
     */
    set_trust_flags(trust_flags: number): void
    /**
     * Set the project license.
     * @param update_contact the project license string.
     */
    set_update_contact(update_contact: string): void
    /**
     * Copies information from the donor to the application object.
     * @param donor the donor.
     */
    subsume(donor: AppStreamGlib.App): void
    /**
     * Copies information from the donor to the application object.
     * @param donor the donor.
     * @param flags any optional #AsAppSubsumeFlags, e.g. %AS_APP_SUBSUME_FLAG_NO_OVERWRITE
     */
    subsume_full(donor: AppStreamGlib.App, flags: number): void
    /**
     * Exports a DOM tree to an XML file.
     * @param file a #GFile
     * @param cancellable A #GCancellable
     */
    to_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Exports a DOM tree to an XML string.
     */
    to_xml(): GLib.String
    /**
     * Validates data in the instance for style and consistency.
     * @param flags the #AsAppValidateFlags to use, e.g. %AS_APP_VALIDATE_FLAG_NONE
     */
    validate(flags: number): AppStreamGlib.Problem[]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: App_ConstructProps)
    _init (config?: App_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pkg: Package, id: string): App
    /* Function overloads */
    static new(): App
    static $gtype: GObject.Type
}
interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
class Context {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamBuilder-1.0.AppStreamBuilder.Context */
    /**
     * Adds an application to the context.
     * @param app A #AsbApp
     */
    add_app(app: App): void
    add_app_ignore(pkg: Package): void
    /**
     * Adds a filename to the list of packages to be processed
     * @param filename package filename
     */
    add_filename(filename: string): boolean
    /**
     * Adds a package to the list of packages to be processed
     * @param pkg A #AsbPackage
     */
    add_package(pkg: Package): void
    /**
     * Find a package from its name.
     * @param pkgname a package name
     */
    find_by_pkgname(pkgname: string): Package
    /**
     * This function used to find an application in the cache, and now does nothing.
     * @param filename cache-id
     */
    find_in_cache(filename: string): boolean
    /**
     * Gets the target metadata API version.
     */
    get_api_version(): number
    /**
     * Gets the screenshot directory to use
     */
    get_cache_dir(): string
    /**
     * Gets one specific build flag.
     * @param flag A #AsbContextFlags
     */
    get_flag(flag: ContextFlags): boolean
    /**
     * Gets the build flags.
     */
    get_flags(): ContextFlags
    /**
     * Gets the minimum icon size in pixels.
     */
    get_min_icon_size(): number
    /**
     * Returns the packages already added to the context.
     */
    get_packages(): Package[]
    /**
     * Gets the temporary directory to use
     */
    get_temp_dir(): string
    /**
     * Processes all the packages that have been added to the context.
     */
    process(): boolean
    /**
     * Sets the version of the metadata to write.
     * @param api_version the AppStream API version
     */
    set_api_version(api_version: number): void
    /**
     * Sets the basename for the two metadata files.
     * @param basename AppStream file basename, e.g. "appstream"
     */
    set_basename(basename: string): void
    /**
     * Sets the cache directory to use when building metadata.
     * @param cache_dir directory
     */
    set_cache_dir(cache_dir: string): void
    /**
     * Sets flags to be used when building the metadata.
     * @param flags #AsbContextFlags, e.g. %ASB_CONTEXT_FLAG_NO_NETWORK
     */
    set_flags(flags: ContextFlags): void
    /**
     * Sets the icons directory to use when building metadata.
     * @param icons_dir directory
     */
    set_icons_dir(icons_dir: string): void
    /**
     * Sets the log directory to use when building metadata.
     * @param log_dir directory
     */
    set_log_dir(log_dir: string): void
    /**
     * Sets the maximum number of threads to use when processing packages.
     * This function now has no affect as only one thread is ever used.
     * @param max_threads integer
     */
    set_max_threads(max_threads: number): void
    /**
     * Sets the smallest icon size in pixels supported.
     * @param min_icon_size integer
     */
    set_min_icon_size(min_icon_size: number): void
    /**
     * Sets the filename location of the old metadata file.
     * This function now has no affect as no cache ID is available.
     * @param old_metadata filename, or %NULL
     */
    set_old_metadata(old_metadata: string): void
    /**
     * Sets the origin for the two metadata files.
     * @param origin AppStream origin, e.g. "fedora-21"
     */
    set_origin(origin: string): void
    /**
     * Sets the output directory to use when building metadata.
     * @param output_dir directory
     */
    set_output_dir(output_dir: string): void
    set_screenshot_dir(screenshot_dir: string): void
    /**
     * Sets the temporary directory to use when building metadata.
     * @param temp_dir directory
     */
    set_temp_dir(temp_dir: string): void
    /**
     * Sets up the context ready for use.
     */
    setup(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static $gtype: GObject.Type
}
interface Package_ConstructProps extends GObject.Object_ConstructProps {
}
class Package {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamBuilder-1.0.AppStreamBuilder.Package */
    /**
     * Add a package dependancy.
     * @param dep package dep
     */
    add_dep(dep: string): void
    /**
     * Adds a (downstream) release to a package.
     * @param version a package version
     * @param release a package release
     */
    add_release(version: string, release: AppStreamGlib.Release): void
    /**
     * Deallocates previously ensured data.
     * @param flags #AsbPackageEnsureFlags
     */
    clear(flags: PackageEnsureFlags): void
    /**
     * Closes a package, which can be re-opened if required.
     */
    close(): boolean
    /**
     * Compares one package with another.
     * @param pkg2 A #AsbPackage
     */
    compare(pkg2: Package): number
    /**
     * Ensures data exists.
     * @param flags #AsbPackageEnsureFlags
     */
    ensure(flags: PackageEnsureFlags): boolean
    /**
     * Decompresses a package into a directory, optionally using a glob list.
     * @param dir directory to explode into
     * @param glob the glob list, or %NULL
     */
    explode(dir: string, glob: string[]): boolean
    /**
     * Gets the package architecture
     */
    get_arch(): string
    /**
     * Gets the package basename.
     */
    get_basename(): string
    /**
     * Gets a config attribute from a package.
     * @param key utf8 string
     */
    get_config(key: string): string
    /**
     * Get the package dependancy list.
     */
    get_deps(): string[]
    /**
     * Gets if the package is enabled.
     */
    get_enabled(): boolean
    /**
     * Gets the epoch of the package.
     */
    get_epoch(): number
    /**
     * Gets the package EVR.
     */
    get_evr(): string
    /**
     * Gets the package filelist.
     */
    get_filelist(): string[]
    /**
     * Gets the filename of the package.
     */
    get_filename(): string
    /**
     * Gets the kind of the package.
     */
    get_kind(): PackageKind
    /**
     * Gets the package license.
     */
    get_license(): string
    /**
     * Gets the package name
     */
    get_name(): string
    /**
     * Gets the package NEVR.
     */
    get_nevr(): string
    /**
     * Gets the package NEVRA.
     */
    get_nevra(): string
    /**
     * Gets the release for a specific version.
     * @param version package version
     */
    get_release(version: string): AppStreamGlib.Release
    /**
     * Gets the package release string
     */
    get_release_str(): string
    /**
     * Gets the releases of the package.
     */
    get_releases(): AppStreamGlib.Release[]
    /**
     * Gets the package source nevra.
     */
    get_source(): string
    /**
     * Gets the package source name.
     */
    get_source_pkgname(): string
    /**
     * Gets the package homepage URL
     */
    get_url(): string
    /**
     * Gets the package version control system.
     */
    get_vcs(): string
    /**
     * Gets the package version
     */
    get_version(): string
    /**
     * Flushes the log queue.
     */
    log_flush(): boolean
    /**
     * Starts the log timer.
     */
    log_start(): void
    /**
     * Opens a package and parses the contents.
     * As little i/o should be done at this point, and implementations
     * should rely on asb_package_ensure() to set data.
     * @param filename package filename
     */
    open(filename: string): boolean
    /**
     * Sets the package architecture.
     * @param arch package architecture
     */
    set_arch(arch: string): void
    /**
     * Sets a config attribute on a package.
     * @param key utf8 string
     * @param value utf8 string
     */
    set_config(key: string, value: string): void
    /**
     * Enables or disables the package.
     * @param enabled boolean
     */
    set_enabled(enabled: boolean): void
    /**
     * Sets the package epoch
     * @param epoch epoch, or 0 for unset
     */
    set_epoch(epoch: number): void
    /**
     * Sets the package filelist.
     * @param filelist package filelist
     */
    set_filelist(filelist: string): void
    /**
     * Sets the package filename.
     * @param filename package filename
     */
    set_filename(filename: string): void
    /**
     * Sets the package kind.
     * @param kind A #AsbPackageKind
     */
    set_kind(kind: PackageKind): void
    /**
     * Sets the package license.
     * @param license license string
     */
    set_license(license: string): void
    /**
     * Sets the package name.
     * @param name package name
     */
    set_name(name: string): void
    /**
     * Sets the package release.
     * @param release package release
     */
    set_release(release: string): void
    /**
     * Sets the package source name, which is usually the parent of a set of
     * subpackages.
     * @param source source string, e.g. the srpm nevra
     */
    set_source(source: string): void
    /**
     * Sets the package source name, which is usually the parent of a set of
     * subpackages.
     * @param source_pkgname source string, e.g. the srpm name
     */
    set_source_pkgname(source_pkgname: string): void
    /**
     * Sets the package URL.
     * @param url homepage URL
     */
    set_url(url: string): void
    /**
     * Sets the package version control system.
     * @param vcs vcs string
     */
    set_vcs(vcs: string): void
    /**
     * Sets the package version.
     * @param version package version
     */
    set_version(version: string): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of AppStreamBuilder-1.0.AppStreamBuilder.Package */
    /**
     * Closes a package, which can be re-opened if required.
     */
    vfunc_close(): boolean
    /**
     * Compares one package with another.
     * @param pkg2 A #AsbPackage
     */
    vfunc_compare(pkg2: Package): number
    /**
     * Ensures data exists.
     * @param flags #AsbPackageEnsureFlags
     */
    vfunc_ensure(flags: PackageEnsureFlags): boolean
    /**
     * Decompresses a package into a directory, optionally using a glob list.
     * @param dir directory to explode into
     * @param glob the glob list, or %NULL
     */
    vfunc_explode(dir: string, glob: string[]): boolean
    /**
     * Opens a package and parses the contents.
     * As little i/o should be done at this point, and implementations
     * should rely on asb_package_ensure() to set data.
     * @param filename package filename
     */
    vfunc_open(filename: string): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Package, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Package_ConstructProps)
    _init (config?: Package_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Package
    static $gtype: GObject.Type
}
interface Task_ConstructProps extends GObject.Object_ConstructProps {
}
class Task {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of AppStreamBuilder-1.0.AppStreamBuilder.Task */
    /**
     * Processes the task.
     */
    process(): boolean
    /**
     * Sets the package used for the task.
     * @param pkg A #AsbPackage
     */
    set_package(pkg: Package): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Task_ConstructProps)
    _init (config?: Task_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(ctx: Context): Task
    static $gtype: GObject.Type
}
abstract class AppClass {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.AppClass */
    parent_class: AppStreamGlib.AppClass
    static name: string
}
abstract class ContextClass {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.ContextClass */
    parent_class: GObject.ObjectClass
    static name: string
}
abstract class PackageClass {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.PackageClass */
    parent_class: GObject.ObjectClass
    open: (pkg: Package, filename: string) => boolean
    ensure: (pkg: Package, flags: PackageEnsureFlags) => boolean
    explode: (pkg: Package, dir: string, glob: string[]) => boolean
    compare: (pkg1: Package, pkg2: Package) => number
    close: (pkg: Package) => boolean
    static name: string
}
abstract class TaskClass {
    /* Fields of AppStreamBuilder-1.0.AppStreamBuilder.TaskClass */
    parent_class: GObject.ObjectClass
    static name: string
}
    type PackageEnsureFlags = number
}
export default AppStreamBuilder;