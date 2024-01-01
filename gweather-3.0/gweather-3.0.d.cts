
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gweather-3.0-ambient.d.ts';
import './gweather-3.0-import.d.ts';
/**
 * GWeather-3.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

/**
 * The current or forecasted significant phenomenon.
 */
export enum ConditionPhenomenon {
    /**
     * value not available
     */
    INVALID,
    /**
     * no significant phenomenon
     */
    NONE,
    DRIZZLE,
    RAIN,
    SNOW,
    SNOW_GRAINS,
    ICE_CRYSTALS,
    ICE_PELLETS,
    HAIL,
    SMALL_HAIL,
    UNKNOWN_PRECIPITATION,
    MIST,
    FOG,
    SMOKE,
    VOLCANIC_ASH,
    SAND,
    HAZE,
    SPRAY,
    DUST,
    SQUALL,
    SANDSTORM,
    DUSTSTORM,
    FUNNEL_CLOUD,
    TORNADO,
    DUST_WHIRLS,
    LAST,
}
/**
 * An additional modifier applied to a #GWeatherConditionPhenomenon to
 * describe the current or forecasted weather conditions.
 * The exact meaning of each qualifier is described at
 * http://www.weather.com/glossary/ and
 * http://www.crh.noaa.gov/arx/wx.tbl.php
 */
export enum ConditionQualifier {
    /**
     * value not available
     */
    INVALID,
    /**
     * no qualifier for the phenomenon
     */
    NONE,
    /**
     * phenomenon happening in the proximity
     *                               of the location, not in the actual location
     */
    VICINITY,
    /**
     * phenomenon is light or predicted to be light
     */
    LIGHT,
    /**
     * phenomenon is moderate or predicted to be
     *                               moderate
     */
    MODERATE,
    /**
     * phenomenon is heavy or predicted to be heavy
     */
    HEAVY,
    /**
     * shallow fog (only valid with
     *                              %GWEATHER_PHENOMENON_FOG)
     */
    SHALLOW,
    /**
     * patches of fog (only valid with
     *                              %GWEATHER_PHENOMENON_FOG)
     */
    PATCHES,
    /**
     * partial fog (only valid with
     *                             %GWEATHER_PHENOMENON_FOG)
     */
    PARTIAL,
    /**
     * phenomenon will be a thunderstorm
     *                                   and/or will include lightning
     */
    THUNDERSTORM,
    /**
     * phenomenon is blowing (valid with
     *                              %GWEATHER_PHENOMENON_SNOW, %GWEATHER_PHENOMENON_SAND,
     *                              %GWEATHER_PHENOMENON_SPRAY, %GWEATHER_PHENOMENON_DUST)
     */
    BLOWING,
    /**
     * phenomenon is heavy and involves showers
     */
    SHOWERS,
    /**
     * phenomenon is moving across (valid
     *                               with %GWEATHER_PHENOMENON_SAND and
     *                               %GWEATHER_PHENOMENON_DUST)
     */
    DRIFTING,
    /**
     * phenomenon is freezing and involves ice
     */
    FREEZING,
    /**
     * maximum value of the enumeration.
     */
    LAST,
}
/**
 * The measure unit to use for sky visibility values, when retrieved
 * by gweather_info_get_value_visibility().
 */
export enum DistanceUnit {
    /**
     * invalid unit
     */
    INVALID,
    /**
     * the user preferred distance unit
     */
    DEFAULT,
    /**
     * meters
     */
    METERS,
    /**
     * kilometers (= 1000 meters)
     */
    KM,
    /**
     * miles
     */
    MILES,
}
/**
 * The size/scope of a particular #GWeatherLocation.
 * 
 * Locations form a hierarchy, with a %GWEATHER_LOCATION_WORLD
 * location at the top, divided into regions or countries, and so on.
 * Countries may or may not be divided into "adm1"s, and "adm1"s may
 * or may not be divided into "adm2"s. A city will have at least one,
 * and possibly several, weather stations inside it. Weather stations
 * will never appear outside of cities.
 * 
 * Building a database with gweather_location_get_world() will never
 * create detached instances, but deserializing might.
 */
export enum LocationLevel {
    /**
     * A location representing the entire world.
     */
    WORLD,
    /**
     * A location representing a continent or
     * other top-level region.
     */
    REGION,
    /**
     * A location representing a "country" (or
     * other geographic unit that has an ISO-3166 country code)
     */
    COUNTRY,
    /**
     * A location representing a "first-level
     * administrative division"; ie, a state, province, or similar
     * division.
     */
    ADM1,
    /**
     * A location representing a city
     */
    CITY,
    /**
     * A location representing a
     * weather station.
     */
    WEATHER_STATION,
    /**
     * A location that is detached from the
     * database, for example because it was loaded from external storage
     * and could not be fully recovered. The parent of this location is
     * the nearest weather station.
     */
    DETACHED,
    /**
     * A location representing a named
     * or special timezone in the world, such as UTC
     */
    NAMED_TIMEZONE,
}
/**
 * The measure unit to use for atmospheric pressure values, when
 * retrieved by gweather_info_get_value_pressure().
 */
export enum PressureUnit {
    /**
     * invalid unit
     */
    INVALID,
    /**
     * the user preferred pressure unit
     */
    DEFAULT,
    /**
     * kiloPascal (* 10^3 Pa)
     */
    KPA,
    /**
     * hectoPascal (* 10^2 Pa); also known
     *                              as millibars, but formatted differently
     */
    HPA,
    /**
     * millibars; same as %GWEATHER_PRESSURE_UNIT_HPA
     */
    MB,
    /**
     * millimeters of mercury
     */
    MM_HG,
    /**
     * inches of mercury
     */
    INCH_HG,
    /**
     * atmospheres
     */
    ATM,
}
/**
 * The sky and cloud visibility. In general it is discouraged to
 * use this value directly to compute the forecast icon: applications
 * should instead use gweather_info_get_icon_name() or
 * gweather_info_get_symbolic_icon_name().
 */
export enum Sky {
    /**
     * value not available
     */
    INVALID,
    /**
     * sky completely clear, no clouds visible
     */
    CLEAR,
    /**
     * sky mostly clear, few clouds
     */
    BROKEN,
    /**
     * sky mostly clear, patches of clouds
     */
    SCATTERED,
    /**
     * few clouds, sky cloudy but patches of sky visible
     */
    FEW,
    /**
     * sky completely clouded, sun not visible
     */
    OVERCAST,
    /**
     * the maximum value for the enumeration
     */
    LAST,
}
/**
 * The measure unit to use for wind speed values, when retrieved by
 * gweather_info_get_value_wind().
 */
export enum SpeedUnit {
    /**
     * invalid unit
     */
    INVALID,
    /**
     * the user preferred speed unit
     */
    DEFAULT,
    /**
     * meters per second
     */
    MS,
    /**
     * kilometers per hour
     */
    KPH,
    /**
     * miles per hour
     */
    MPH,
    /**
     * knots
     */
    KNOTS,
    /**
     * Beaufort scale
     */
    BFT,
}
/**
 * The measure unit to use for temperature values, when retrieved by
 * the gweather_info_get_value_temp() family of functions.
 */
export enum TemperatureUnit {
    /**
     * invalid unit
     */
    INVALID,
    /**
     * the user preferred temperature unit
     */
    DEFAULT,
    /**
     * Kelvin (absolute) temperature scale
     */
    KELVIN,
    /**
     * Celsius temperature scale
     */
    CENTIGRADE,
    /**
     * Fahrenheit temperature scale
     */
    FAHRENHEIT,
}
/**
 * The direction of the prevailing wind. Composite values
 * such as north-north-east indicate a direction between the
 * two component value (north and north-east).
 */
export enum WindDirection {
    /**
     * value not available
     */
    INVALID,
    /**
     * variable throughout the day
     */
    VARIABLE,
    /**
     * north
     */
    N,
    /**
     * north-north-east
     */
    NNE,
    /**
     * north-east
     */
    NE,
    /**
     * east-north-east
     */
    ENE,
    /**
     * east
     */
    E,
    /**
     * east-south-east
     */
    ESE,
    /**
     * south-east
     */
    SE,
    /**
     * south-south-east
     */
    SSE,
    /**
     * south
     */
    S,
    /**
     * south-south-west
     */
    SSW,
    /**
     * south-west
     */
    SW,
    /**
     * west-south-west
     */
    WSW,
    /**
     * west
     */
    W,
    /**
     * west-north-west
     */
    WNW,
    /**
     * north-west
     */
    NW,
    /**
     * north-north-west
     */
    NNW,
    /**
     * maximum value for the enumeration
     */
    LAST,
}
/**
 * Format options to influence the returned string of the
 * gweather_*_to_string_full() functions.
 * @bitfield 
 */
export enum FormatOptions {
    /**
     * The default string format
     */
    DEFAULT,
    /**
     * Capitalize as if the string
     *                                                  was starting a sentence
     */
    SENTENCE_CAPITALIZATION,
    /**
     * Capitalize as if the string was
     *                                            appearing within a sentence
     */
    NO_CAPITALIZATION,
}
export enum Provider {
    /**
     * no provider, no weather information available
     */
    NONE,
    /**
     * METAR office, providing current conditions worldwide
     */
    METAR,
    /**
     * US weather office, providing 7 days of forecast
     */
    IWIN,
    /**
     * Yahoo Weather Service, removed in 3.27.1
     */
    YAHOO,
    /**
     * MET.no service, worldwide but requires attribution and a subscription to the [API users mailing-list](https://lists.met.no/mailman/listinfo/api-users).
     */
    MET_NO,
    /**
     * OpenWeatherMap, worldwide and possibly more reliable, but requires attribution and is limited in the number of queries
     */
    OWM,
    /**
     * enable all available providers
     */
    ALL,
}
export const LOCATION_ENTRY_H: number
export const TIMEZONE_MENU_H: number
export function location_detect_nearest_city_finish(result: Gio.AsyncResult): Location
/**
 * Obtains the shared #GWeatherLocation of type %GWEATHER_LOCATION_WORLD,
 * representing a hierarchy containing all of the locations from
 * Locations.xml.
 * 
 * Prior to version 40 no reference was returned.
 * @returns a %GWEATHER_LOCATION_WORLD location, or %NULL if Locations.xml could not be found or could not be parsed.
 */
export function location_get_world(): Location | null
/**
 * Returns the location level as a string, useful for debugging
 * purposes.
 * @param level a #GWeatherLocationLevel
 * @returns a string
 */
export function location_level_to_string(level: LocationLevel): string
export function sky_to_string(sky: Sky): string
export function sky_to_string_full(sky: Sky, options: FormatOptions): string
/**
 * Creates a human-readable, localized representation of `unit`
 * @param unit a speed unit, or %GWEATHER_SPEED_UNIT_DEFAULT
 */
export function speed_unit_to_string(unit: SpeedUnit): string
/**
 * Resolve `unit` into a real temperature unit, potentially considering
 * locale defaults.
 * @param unit a tempeature unit, or %GWEATHER_TEMP_UNIT_DEFAULT
 */
export function temperature_unit_to_real(unit: TemperatureUnit): TemperatureUnit
/**
 * Get the #GWeatherTimezone for `tzid`.
 * 
 * Prior to version 40 no reference was returned.
 * @param tzid A timezone identifier, like "America/New_York" or "Europe/London"
 * @returns A #GWeatherTimezone.
 */
export function timezone_get_by_tzid(tzid: string): Timezone
/**
 * Gets the UTC timezone.
 * @returns a #GWeatherTimezone for UTC, or %NULL on error.
 */
export function timezone_get_utc(): Timezone
export function wind_direction_to_string(wind: WindDirection): string
export function wind_direction_to_string_full(wind: WindDirection, options: FormatOptions): string
export interface FilterFunc {
    (location: Location): boolean
}
export module Info {

    // Signal callback interfaces

    /**
     * Signal callback interface for `updated`
     */
    export interface UpdatedSignalCallback {
        ($obj: Info): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GWeather-3.0.GWeather.Info

        application_id?: string | null
        contact_info?: string | null
        enabled_providers?: Provider | null
        location?: Location | null
        applicationId?: string | null
        contactInfo?: string | null
        enabledProviders?: Provider | null
    }

}

export interface Info {

    // Own properties of GWeather-3.0.GWeather.Info

    application_id: string | null
    applicationId: string | null
    contact_info: string | null
    contactInfo: string | null
    enabled_providers: Provider
    enabledProviders: Provider
    location: Location

    // Owm methods of GWeather-3.0.GWeather.Info

    abort(): void
    get_apparent(): string | null
    /**
     * Get the [application ID](https://docs.flatpak.org/en/latest/conventions.html#application-ids)
     * of the application fetching the weather.
     * @returns the application ID
     */
    get_application_id(): string
    /**
     * Some weather services require the application showing the
     * data to include an attribution text, possibly including links
     * to the service website.
     * This must be shown prominently toghether with the data.
     * @returns the required attribution text, in Pango          markup form, or %NULL if not required
     */
    get_attribution(): string
    get_conditions(): string | null
    /**
     * Get the contact information of the application fetching the weather.
     * @returns the contact information
     */
    get_contact_info(): string
    get_dew(): string | null
    /**
     * Gets the bitmask of enabled #GWeatherProvider weather
     * providers.
     */
    get_enabled_providers(): Provider
    get_forecast_list(): Info[]
    get_humidity(): string | null
    get_icon_name(): string
    get_location(): Location
    get_location_name(): string | null
    get_pressure(): string | null
    get_radar(): GdkPixbuf.PixbufAnimation
    get_sky(): string | null
    get_sunrise(): string | null
    get_sunset(): string | null
    get_symbolic_icon_name(): string
    get_temp(): string | null
    get_temp_max(): string | null
    get_temp_min(): string | null
    get_temp_summary(): string | null
    get_upcoming_moonphases(): [ /* returnType */ boolean, /* phases */ number[] ]
    get_update(): string | null
    get_value_apparent(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Fills out `phenomenon` and `qualifier` with current weather conditions.
     * @returns TRUE is out arguments are valid, FALSE otherwise.
     */
    get_value_conditions(): [ /* returnType */ boolean, /* phenomenon */ ConditionPhenomenon, /* qualifier */ ConditionQualifier ]
    get_value_dew(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_moonphase(): [ /* returnType */ boolean, /* value */ MoonPhase, /* lat */ MoonLatitude ]
    get_value_pressure(unit: PressureUnit): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Fills out `sky` with current sky conditions.
     * @returns TRUE is @sky is valid, FALSE otherwise.
     */
    get_value_sky(): [ /* returnType */ boolean, /* sky */ Sky ]
    get_value_sunrise(): [ /* returnType */ boolean, /* value */ number ]
    get_value_sunset(): [ /* returnType */ boolean, /* value */ number ]
    get_value_temp(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_temp_max(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_temp_min(unit: TemperatureUnit): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Note that `value` may be 0 if `info` has not yet been updated.
     * @returns TRUE is @value is valid, FALSE otherwise.
     */
    get_value_update(): [ /* returnType */ boolean, /* value */ number ]
    get_value_visibility(unit: DistanceUnit): [ /* returnType */ boolean, /* value */ number ]
    get_value_wind(unit: SpeedUnit): [ /* returnType */ boolean, /* speed */ number, /* direction */ WindDirection ]
    get_visibility(): string | null
    get_weather_summary(): string | null
    get_wind(): string | null
    is_daytime(): boolean
    is_valid(): boolean
    network_error(): boolean
    next_sun_event(): number
    /**
     * Sets the [application ID](https://docs.flatpak.org/en/latest/conventions.html#application-ids)
     * of the application fetching the weather. It is a requirement
     * for using any of the online weather providers.
     * 
     * If the application uses #GApplication, then the application ID
     * will be automatically filled in.
     * @param application_id the application ID to set
     */
    set_application_id(application_id: string): void
    /**
     * Sets the contact information for the application fetching the
     * weather. It is a requirement for using any of the online
     * weather providers as it allows API providers to contact application
     * developers in case of terms of use breaches.
     * 
     * The contact information should be an email address, or the full
     * URL to an online contact form which weather providers can use
     * to contact the application developer. Avoid using bug tracker
     * URLs which require creating accounts.
     * @param contact_info the contact information for the application
     */
    set_contact_info(contact_info: string): void
    /**
     * Sets the enabled providers for fetching the weather. Note
     * that it is up to the application developer to make sure that
     * the terms of use for each service are respected.
     * 
     * Online providers will not be enabled if the application ID is
     * not set to a valid value.
     * @param providers a bitmask of #GWeatherProvider
     */
    set_enabled_providers(providers: Provider): void
    /**
     * Changes `info` to report weather for `location`.
     * Note that this will clear any forecast or current conditions from
     * `info,` you must call gweather_info_update() to obtain the new data.
     * @param location a location for which weather is desired
     */
    set_location(location: Location | null): void
    /**
     * Requests a reload of weather conditions and forecast data from
     * enabled network services.
     * This call does no synchronous IO: rather, the result is delivered
     * by emitting the #GWeatherInfo::updated signal.
     * Note that if no network services are enabled, the signal will not
     * be emitted. See #GWeatherInfo:enabled-providers for details.
     */
    update(): void

    // Own signals of GWeather-3.0.GWeather.Info

    connect(sigName: "updated", callback: Info.UpdatedSignalCallback): number
    connect_after(sigName: "updated", callback: Info.UpdatedSignalCallback): number
    emit(sigName: "updated", ...args: any[]): void

    // Class property signals of GWeather-3.0.GWeather.Info

    connect(sigName: "notify::application-id", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::contact-info", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contact-info", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contact-info", ...args: any[]): void
    connect(sigName: "notify::enabled-providers", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled-providers", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled-providers", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: Info, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GWeatherInfo provides a handy way to access weather conditions
 * and forecasts from a #GWeatherLocation, aggregating multiple
 * different web services.
 * 
 * It includes also astronomical data such as sunrise times and
 * moon phases.
 * @class 
 */
export class Info extends GObject.Object {

    // Own properties of GWeather-3.0.GWeather.Info

    static name: string
    static $gtype: GObject.GType<Info>

    // Constructors of GWeather-3.0.GWeather.Info

    constructor(config?: Info.ConstructorProperties) 
    /**
     * Builds a new #GWeatherInfo that will provide weather information about
     * `location`.
     * 
     * Since version 40, this does not automatically call gweather_info_update().
     * gweather_info_update() must be called manually once all the necessary set up
     * has been made, such as setting the enabled providers.
     * @constructor 
     * @param location the desidered #GWeatherLocation (%NULL for default)
     * @returns a new #GWeatherInfo
     */
    constructor(location: Location | null) 
    /**
     * Builds a new #GWeatherInfo that will provide weather information about
     * `location`.
     * 
     * Since version 40, this does not automatically call gweather_info_update().
     * gweather_info_update() must be called manually once all the necessary set up
     * has been made, such as setting the enabled providers.
     * @constructor 
     * @param location the desidered #GWeatherLocation (%NULL for default)
     * @returns a new #GWeatherInfo
     */
    static new(location: Location | null): Info
    _init(config?: Info.ConstructorProperties): void
    /**
     * Ensures that any data cached from the network is stored to disk.
     * Calling this is not necessary, as the cache will be saved when
     * the last reference to a #GWeatherInfo will be dropped.
     * On the other hand, it must be called if there is any chance that
     * the application will be closed without unreffing all objects, such
     * as when using a language binding that employs a GC.
     */
    static store_cache(): void
}

export module LocationEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.Editable.ConstructorProperties, Gtk.SearchEntry.ConstructorProperties {

        // Own constructor properties of GWeather-3.0.GWeather.LocationEntry

        location?: Location | null
        show_named_timezones?: boolean | null
        top?: Location | null
        showNamedTimezones?: boolean | null
    }

}

export interface LocationEntry extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {

    // Own properties of GWeather-3.0.GWeather.LocationEntry

    location: Location
    readonly show_named_timezones: boolean
    readonly showNamedTimezones: boolean
    readonly top: Location

    // Own fields of GWeather-3.0.GWeather.LocationEntry

    parent: Gtk.SearchEntry & Gtk.Entry & Gtk.Container & Gtk.Container

    // Owm methods of GWeather-3.0.GWeather.LocationEntry

    /**
     * Gets the location that was set by a previous call to
     * gweather_location_entry_set_location() or was selected by the user.
     * @returns the selected location (which you must unref when you are done with it), or %NULL if no location is selected.
     */
    get_location(): Location | null
    /**
     * Checks whether or not `entry'`s text has been modified by the user.
     * Note that this does not mean that no location is associated with `entry`.
     * gweather_location_entry_get_location() should be used for this.
     * @returns %TRUE if @entry's text was modified by the user, or %FALSE if it's set to the default text of a location.
     */
    has_custom_text(): boolean
    /**
     * Sets `entry'`s location to a city with the given `code,` and given
     * `city_name,` if non-%NULL. If there is no matching city, sets
     * `entry'`s location to %NULL.
     * @param city_name the city name, or %NULL
     * @param code the METAR station code
     * @returns %TRUE if @entry's location could be set to a matching city, %FALSE otherwise.
     */
    set_city(city_name: string | null, code: string): boolean
    /**
     * Sets `entry'`s location to `loc,` and updates the text of the
     * entry accordingly.
     * Note that if the database contains a location that compares
     * equal to `loc,` that will be chosen in place of `loc`.
     * @param loc a #GWeatherLocation in `entry,` or %NULL to clear `entry`
     */
    set_location(loc: Location | null): void

    // Class property signals of GWeather-3.0.GWeather.LocationEntry

    connect(sigName: "notify::location", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::show-named-timezones", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-named-timezones", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-named-timezones", ...args: any[]): void
    connect(sigName: "notify::top", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top", ...args: any[]): void
    connect(sigName: "notify::activates-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activates-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activates-default", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::caps-lock-warning", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-warning", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-warning", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::enable-emoji-completion", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-emoji-completion", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-emoji-completion", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::inner-border", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inner-border", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inner-border", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::invisible-char", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char", ...args: any[]): void
    connect(sigName: "notify::invisible-char-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::invisible-char-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::invisible-char-set", ...args: any[]): void
    connect(sigName: "notify::max-length", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-length", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-length", ...args: any[]): void
    connect(sigName: "notify::max-width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-width-chars", ...args: any[]): void
    connect(sigName: "notify::overwrite-mode", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite-mode", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite-mode", ...args: any[]): void
    connect(sigName: "notify::placeholder-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::placeholder-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::placeholder-text", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::primary-icon-activatable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-activatable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::primary-icon-gicon", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-gicon", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::primary-icon-name", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-name", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-name", ...args: any[]): void
    connect(sigName: "notify::primary-icon-pixbuf", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-pixbuf", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::primary-icon-sensitive", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-sensitive", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::primary-icon-stock", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-stock", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::primary-icon-storage-type", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-storage-type", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-markup", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::primary-icon-tooltip-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::primary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::progress-fraction", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-fraction", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-fraction", ...args: any[]): void
    connect(sigName: "notify::progress-pulse-step", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-pulse-step", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-pulse-step", ...args: any[]): void
    connect(sigName: "notify::scroll-offset", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-offset", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-offset", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-activatable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-activatable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-activatable", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-gicon", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-gicon", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-gicon", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-name", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-name", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-name", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-pixbuf", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-pixbuf", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-sensitive", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-sensitive", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-sensitive", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-stock", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-stock", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-stock", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-storage-type", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-storage-type", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-storage-type", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-markup", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secondary-icon-tooltip-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secondary-icon-tooltip-text", ...args: any[]): void
    connect(sigName: "notify::selection-bound", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-bound", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-bound", ...args: any[]): void
    connect(sigName: "notify::shadow-type", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shadow-type", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shadow-type", ...args: any[]): void
    connect(sigName: "notify::show-emoji-icon", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-emoji-icon", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-emoji-icon", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-length", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-length", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-length", ...args: any[]): void
    connect(sigName: "notify::truncate-multiline", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::truncate-multiline", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::truncate-multiline", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visibility", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-chars", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-chars", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: LocationEntry, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A subclass of #GtkSearchEntry that provides autocompletion on
 * #GWeatherLocation<!-- -->s
 * @class 
 */
export class LocationEntry extends Gtk.SearchEntry {

    // Own properties of GWeather-3.0.GWeather.LocationEntry

    static name: string
    static $gtype: GObject.GType<LocationEntry>

    // Constructors of GWeather-3.0.GWeather.LocationEntry

    constructor(config?: LocationEntry.ConstructorProperties) 
    /**
     * Creates a new #GWeatherLocationEntry.
     * 
     * `top` will normally be the location returned from
     * gweather_location_get_world(), but you can create an entry that
     * only accepts a smaller set of locations if you want.
     * @constructor 
     * @param top the top-level location for the entry.
     * @returns the new #GWeatherLocationEntry
     */
    constructor(top: Location) 
    /**
     * Creates a new #GWeatherLocationEntry.
     * 
     * `top` will normally be the location returned from
     * gweather_location_get_world(), but you can create an entry that
     * only accepts a smaller set of locations if you want.
     * @constructor 
     * @param top the top-level location for the entry.
     * @returns the new #GWeatherLocationEntry
     */
    static new(top: Location): LocationEntry

    // Overloads of new

    /**
     * Creates a #GtkSearchEntry, with a find icon when the search field is
     * empty, and a clear icon when it isn't.
     * @constructor 
     * @returns a new #GtkSearchEntry
     */
    static new(): Gtk.SearchEntry
    _init(config?: LocationEntry.ConstructorProperties): void
}

export module TimezoneMenu {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.CellLayout.ConstructorProperties, Gtk.ComboBox.ConstructorProperties {

        // Own constructor properties of GWeather-3.0.GWeather.TimezoneMenu

        top?: Location | null
        tzid?: string | null
    }

}

export interface TimezoneMenu extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {

    // Own properties of GWeather-3.0.GWeather.TimezoneMenu

    readonly top: Location
    tzid: string | null

    // Conflicting properties

    parent_instance: Gtk.Bin & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Own fields of GWeather-3.0.GWeather.TimezoneMenu

    parent: Gtk.ComboBox & Gtk.Container

    // Owm methods of GWeather-3.0.GWeather.TimezoneMenu

    /**
     * Gets `menu'`s timezone id.
     * @returns @menu's tzid, or %NULL if no timezone is selected.
     */
    get_tzid(): string | null
    /**
     * Sets `menu` to the given `tzid`. If `tzid` is %NULL, sets `menu` to
     * "Unknown".
     * @param tzid a tzdata id (eg, "America/New_York")
     */
    set_tzid(tzid: string | null): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string): void

    // Class property signals of GWeather-3.0.GWeather.TimezoneMenu

    connect(sigName: "notify::top", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top", ...args: any[]): void
    connect(sigName: "notify::tzid", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tzid", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tzid", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::active-id", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-id", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-id", ...args: any[]): void
    connect(sigName: "notify::add-tearoffs", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-tearoffs", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::add-tearoffs", ...args: any[]): void
    connect(sigName: "notify::button-sensitivity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::button-sensitivity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::button-sensitivity", ...args: any[]): void
    connect(sigName: "notify::cell-area", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-area", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::column-span-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-span-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-span-column", ...args: any[]): void
    connect(sigName: "notify::entry-text-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry-text-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entry-text-column", ...args: any[]): void
    connect(sigName: "notify::has-entry", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-entry", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-entry", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::id-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-column", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::popup-fixed-width", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-fixed-width", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-fixed-width", ...args: any[]): void
    connect(sigName: "notify::popup-shown", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-shown", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-shown", ...args: any[]): void
    connect(sigName: "notify::row-span-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-span-column", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-span-column", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-title", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: TimezoneMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A #GtkComboBox subclass for choosing a #GWeatherTimezone
 * @class 
 */
export class TimezoneMenu extends Gtk.ComboBox {

    // Own properties of GWeather-3.0.GWeather.TimezoneMenu

    static name: string
    static $gtype: GObject.GType<TimezoneMenu>

    // Constructors of GWeather-3.0.GWeather.TimezoneMenu

    constructor(config?: TimezoneMenu.ConstructorProperties) 
    /**
     * Creates a new #GWeatherTimezoneMenu.
     * 
     * `top` will normally be the location returned from
     * gweather_location_get_world(), but you can create a menu that
     * contains the timezones from a smaller set of locations if you want.
     * @constructor 
     * @param top the top-level location for the menu.
     * @returns the new #GWeatherTimezoneMenu
     */
    constructor(top: Location) 
    /**
     * Creates a new #GWeatherTimezoneMenu.
     * 
     * `top` will normally be the location returned from
     * gweather_location_get_world(), but you can create a menu that
     * contains the timezones from a smaller set of locations if you want.
     * @constructor 
     * @param top the top-level location for the menu.
     * @returns the new #GWeatherTimezoneMenu
     */
    static new(top: Location): TimezoneMenu

    // Overloads of new

    /**
     * Creates a new empty #GtkComboBox.
     * @constructor 
     * @returns A new #GtkComboBox.
     */
    static new(): Gtk.ComboBox
    _init(config?: TimezoneMenu.ConstructorProperties): void
}

export interface Conditions {

    // Own fields of GWeather-3.0.GWeather.Conditions

    /**
     * %TRUE if the struct contains usable data, %FALSE otherwise
     * @field 
     */
    significant: boolean
    /**
     * the main weather phenomenon
     * @field 
     */
    phenomenon: ConditionPhenomenon
    /**
     * a modifier for `phenomenon`
     * @field 
     */
    qualifier: ConditionQualifier

    // Owm methods of GWeather-3.0.GWeather.Conditions

    to_string(): string
    to_string_full(options: FormatOptions): string
}

/**
 * A convenient way to describe the current or forecast
 * weather phenomenon, if significant, and its associated
 * modifier. If the value is not significant, the weather conditions
 * are described by gweather_info_get_sky() instead.
 * 
 * In general it is discouraged to use this value directly to compute
 * the forecast icon: applications should instead use
 * gweather_info_get_icon_name() or
 * gweather_info_get_symbolic_icon_name().
 * @record 
 */
export class Conditions {

    // Own properties of GWeather-3.0.GWeather.Conditions

    static name: string
}

export interface InfoClass {

    // Own fields of GWeather-3.0.GWeather.InfoClass

    parent_class: GObject.ObjectClass
}

export abstract class InfoClass {

    // Own properties of GWeather-3.0.GWeather.InfoClass

    static name: string
}

export interface Location {

    // Owm methods of GWeather-3.0.GWeather.Location

    /**
     * This call undoes the effect of gweather_location_serialize(), that
     * is, it turns a #GVariant into a #GWeatherLocation. The conversion
     * happens in the context of `world` (i.e, for a city or weather station,
     * the resulting location will be attached to a administrative division,
     * country and region as appropriate).
     * @param serialized the #GVariant representing the #GWeatherLocation
     * @returns the deserialized location.
     */
    deserialize(serialized: GLib.Variant): Location
    /**
     * Initializes geocode reversing to find place for (`lat,` `lon)` coordinates. Calls the callback
     * function passed by user when the result is ready.
     * 
     * `loc` must be at most a %GWEATHER_LOCATION_ADM1 location.
     * This restriction may be lifted in a future version.
     * @param lat Latitude, in degrees
     * @param lon Longitude, in degrees
     * @param cancellable optional, NULL to ignore
     * @param callback callback function for GAsyncReadyCallback argument for GAsyncResult
     */
    detect_nearest_city(lat: number, lon: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Compares two #GWeatherLocation and sees if they represent the same
     * place.
     * It is only legal to call this for cities, weather stations or
     * detached locations.
     * Note that this function only checks for geographical characteristics,
     * such as coordinates and METAR code. It is still possible that the two
     * locations belong to different worlds (in which case care must be
     * taken when passing them GWeatherLocationEntry and GWeatherInfo), or
     * if one is them is detached it could have a custom name.
     * @param two another #GWeatherLocation
     * @returns %TRUE if the two locations represent the same place as          far as libgweather can tell, and %FALSE otherwise.
     */
    equal(two: Location): boolean
    /**
     * Retrieves the country identified by the specified ISO 3166 code,
     * if present in the database.
     * 
     * Prior to version 40 no reference was returned.
     * @param country_code a country code
     * @returns a country level #GWeatherLocation, or %NULL.
     */
    find_by_country_code(country_code: string): Location
    /**
     * Retrieves the weather station identifier by `station_code`.
     * Note that multiple instances of the same weather station can exist
     * in the database, and this function will return any of them, so this
     * not usually what you want.
     * 
     * See gweather_location_deserialize() to recover a stored #GWeatherLocation.
     * 
     * Prior to version 40 no reference was returned.
     * @param station_code a 4 letter METAR code
     * @returns a weather station level #GWeatherLocation for @station_code,          or %NULL if none exists in the database.
     */
    find_by_station_code(station_code: string): Location
    /**
     * Finds the nearest city to the passed latitude and
     * longitude, among the descendants of `loc`.
     * 
     * `loc` must be at most a %GWEATHER_LOCATION_ADM1 location.
     * This restriction may be lifted in a future version.
     * 
     * Note that this function does not check if (`lat,` `lon)` fall inside
     * `loc,` or are in the same region and timezone as the return value.
     * @param lat Latitude, in degrees
     * @param lon Longitude, in degrees
     * @returns the city closest to (@lat, @lon), in the          region or administrative district of @loc.
     */
    find_nearest_city(lat: number, lon: number): Location
    /**
     * Finds the nearest city to the passed latitude and
     * longitude, among the descendants of `loc`.
     * 
     * Supports the use of own filter function to filter out locations.
     * Geocoding should be done on the application side if needed.
     * 
     * `loc` must be at most a %GWEATHER_LOCATION_ADM1 location.
     * This restriction may be lifted in a future version.
     * @param lat Latitude, in degrees
     * @param lon Longitude, in degrees
     * @param func returns true to continue check for                                       the location and false to filter the location out
     * @returns the city closest to (@lat, @lon), in the          region or administrative district of @loc with validation of filter function.
     */
    find_nearest_city_full(lat: number, lon: number, func: FilterFunc | null): Location
    /**
     * Frees the array of timezones returned by
     * gweather_location_get_timezones().
     * @param zones an array returned from gweather_location_get_timezones()
     */
    free_timezones(zones: Timezone): void
    /**
     * Gets an array of `loc'`s children; this is owned by `loc` and will
     * not remain valid if `loc` is freed.
     * @returns @loc's children. (May be empty, but will not be %NULL.)
     */
    get_children(): Location[]
    /**
     * For a %GWEATHER_LOCATION_CITY or %GWEATHER_LOCATION_DETACHED location,
     * this is equivalent to gweather_location_get_name().
     * For a %GWEATHER_LOCATION_WEATHER_STATION location, it is equivalent to
     * calling gweather_location_get_name() on the location's parent. For
     * other locations it will return %NULL.
     * @returns @loc's city name, or %NULL
     */
    get_city_name(): string | null
    /**
     * Gets the METAR station code associated with a
     * %GWEATHER_LOCATION_WEATHER_STATION location.
     * @returns @loc's METAR station code, or %NULL
     */
    get_code(): string | null
    /**
     * Gets `loc'`s coordinates; you must check
     * gweather_location_has_coords() before calling this.
     */
    get_coords(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Gets the ISO 3166 country code of `loc` (or %NULL if `loc` is a
     * region- or world-level location)
     * @returns @loc's country code (or %NULL if @loc is a region- or world-level location)
     */
    get_country(): string | null
    /**
     * Gets the country name of loc.
     * For a %GWEATHER_LOCATION_COUNTRY location, this is equivalent to
     * gweather_location_get_name().
     * For a %GWEATHER_LOCATION_REGION and GWEATHER_LOCATION_WORLD location it
     * will return %NULL.
     * For other locations it will find the parent %GWEATHER_LOCATION_COUNTRY
     * and return its name.
     * @returns @loc's country name, or %NULL
     */
    get_country_name(): string | null
    /**
     * Determines the distance in kilometers between `loc` and `loc2`.
     * @param loc2 a second #GWeatherLocation
     * @returns the distance between @loc and @loc2.
     */
    get_distance(loc2: Location): number
    /**
     * Gets `loc'`s English name.
     * @returns @loc's English name
     */
    get_english_name(): string
    /**
     * Gets `loc'`s english "sort name", which is the english name after having
     * g_utf8_normalize() (with %G_NORMALIZE_ALL) and g_utf8_casefold()
     * called on it. You can use this to sort locations, or to comparing
     * user input against a location name.
     * @returns @loc's English name for sorting
     */
    get_english_sort_name(): string
    /**
     * Gets `loc'`s level, from %GWEATHER_LOCATION_WORLD, to
     * %GWEATHER_LOCATION_WEATHER_STATION.
     * @returns @loc's level
     */
    get_level(): LocationLevel
    /**
     * Gets `loc'`s name, localized into the current language.
     * @returns @loc's name
     */
    get_name(): string
    /**
     * Gets `loc'`s parent location.
     * 
     * Prior to version 40 no reference was returned.
     * @returns @loc's parent, or %NULL if @loc is a %GWEATHER_LOCATION_WORLD node.
     */
    get_parent(): Location | null
    /**
     * Gets `loc'`s "sort name", which is the name after having
     * g_utf8_normalize() (with %G_NORMALIZE_ALL) and g_utf8_casefold()
     * called on it. You can use this to sort locations, or to comparing
     * user input against a location name.
     * @returns @loc's sort name
     */
    get_sort_name(): string
    /**
     * Gets the timezone associated with `loc,` if known.
     * 
     * The timezone is owned either by `loc` or by one of its parents.
     * FIXME.
     * @returns @loc's timezone, or %NULL
     */
    get_timezone(): Timezone | null
    /**
     * Gets the timezone associated with `loc,` if known, as a string.
     * 
     * The timezone string is owned either by `loc` or by one of its
     * parents, do not free it.
     * @returns @loc's timezone as a string, or %NULL
     */
    get_timezone_str(): string | null
    /**
     * Gets an array of all timezones associated with any location under
     * `loc`. You can use gweather_location_free_timezones() to free this
     * array.
     * @returns an array of timezones. May be empty but will not be %NULL.
     */
    get_timezones(): Timezone[]
    /**
     * Checks if `loc` has valid latitude and longitude.
     * @returns %TRUE if @loc has valid latitude and longitude.
     */
    has_coords(): boolean
    /**
     * Allows iterating all children. Pass %NULL to get the first child,
     * and any child to get the next one. Note that the reference to `child`
     * is taken, meaning iterating all children is as simple as:
     * 
     * 
     * ```c
     *   g_autoptr(GWeatherLocation) child = NULL;
     *   while ((child = gweather_location_next_child (location, child)))
     *     {
     *        // Do something with child
     *     }
     * ```
     * 
     * @param child The child
     * @returns The next child, or %NULL
     */
    next_child(child: Location | null): Location | null
    /**
     * Adds 1 to `loc'`s reference count.
     * @returns @loc
     */
    ref(): Location
    /**
     * Transforms a #GWeatherLocation into a #GVariant, in a way that
     * calling gweather_location_deserialize() will hold an equivalent
     * #GWeatherLocation.
     * The resulting variant can then be stored into GSettings or on disk.
     * This call is only valid for cities, weather stations and detached
     * locations.
     * The format of the resulting #GVariant is private to libgweather,
     * and it is subject to change. You should use the "v" format in GSettings,
     * to ensure maximum compatibility with future versions of the library.
     * @returns the serialization of @location.
     */
    serialize(): GLib.Variant
    /**
     * Subtracts 1 from `loc'`s reference count, and frees it if the
     * reference count reaches 0.
     */
    unref(): void
}

/**
 * A #GWeatherLocation represents a "location" of some type known to
 * libgweather; anything from a single weather station to the entire
 * world. See #GWeatherLocationLevel for information about how the
 * hierarchy of locations works.
 * @record 
 */
export class Location {

    // Own properties of GWeather-3.0.GWeather.Location

    static name: string

    // Constructors of GWeather-3.0.GWeather.Location

    /**
     * Construct a new location from the given data, supplementing
     * any missing information from the static database.
     * @constructor 
     * @param name the user visible location name
     * @param icao the ICAO code of the location
     * @param latitude the latitude of the location
     * @param longitude the longitude of the location
     */
    static new_detached(name: string, icao: string | null, latitude: number, longitude: number): Location
    static detect_nearest_city_finish(result: Gio.AsyncResult): Location
    /**
     * Obtains the shared #GWeatherLocation of type %GWEATHER_LOCATION_WORLD,
     * representing a hierarchy containing all of the locations from
     * Locations.xml.
     * 
     * Prior to version 40 no reference was returned.
     * @returns a %GWEATHER_LOCATION_WORLD location, or %NULL if Locations.xml could not be found or could not be parsed.
     */
    static get_world(): Location | null
}

export interface LocationEntryClass {

    // Own fields of GWeather-3.0.GWeather.LocationEntryClass

    parent_class: Gtk.SearchEntryClass
}

export abstract class LocationEntryClass {

    // Own properties of GWeather-3.0.GWeather.LocationEntryClass

    static name: string
}

export interface LocationEntryPrivate {
}

export class LocationEntryPrivate {

    // Own properties of GWeather-3.0.GWeather.LocationEntryPrivate

    static name: string
}

export interface Timezone {

    // Owm methods of GWeather-3.0.GWeather.Timezone

    /**
     * Gets `zone'`s daylight/summer time offset from UTC, in minutes. Eg,
     * a value of 120 would indicate "GMT+2". This is only meaningful if
     * gweather_timezone_has_dst() returns %TRUE.
     * @returns @zone's daylight/summer time offset, in minutes
     */
    get_dst_offset(): number
    /**
     * Gets `zone'`s name; a translated, user-presentable string.
     * 
     * Note that the returned name might not be unique among timezones,
     * and may not make sense to the user unless it is presented along
     * with the timezone's country's name (or in some context where the
     * country is obvious).
     * @returns @zone's name
     */
    get_name(): string
    /**
     * Gets `zone'`s standard offset from UTC, in minutes. Eg, a value of
     * 120 would indicate "GMT+2".
     * @returns @zone's standard offset, in minutes
     */
    get_offset(): number
    /**
     * Gets `zone'`s tzdata identifier, eg "America/New_York".
     * @returns @zone's tzid
     */
    get_tzid(): string
    /**
     * Checks if `zone` observes daylight/summer time for part of the year.
     * @returns %TRUE if @zone observes daylight/summer time.
     */
    has_dst(): boolean
    /**
     * Adds 1 to `zone'`s reference count.
     * @returns @zone
     */
    ref(): Timezone
    /**
     * Subtracts 1 from `zone'`s reference count and frees it if it reaches 0.
     */
    unref(): void
}

/**
 * A timezone.
 * 
 * Timezones are global to the GWeather world (as obtained by
 * gweather_location_get_world()); they can be gotten by passing
 * gweather_timezone_get_by_tzid() with a tzid like "America/New_York"
 * or "Europe/London".
 * @record 
 */
export class Timezone {

    // Own properties of GWeather-3.0.GWeather.Timezone

    static name: string

    // Constructors of GWeather-3.0.GWeather.Timezone

    /**
     * Get the #GWeatherTimezone for `tzid`.
     * 
     * Prior to version 40 no reference was returned.
     * @param tzid A timezone identifier, like "America/New_York" or "Europe/London"
     * @returns A #GWeatherTimezone.
     */
    static get_by_tzid(tzid: string): Timezone
    /**
     * Gets the UTC timezone.
     * @returns a #GWeatherTimezone for UTC, or %NULL on error.
     */
    static get_utc(): Timezone
}

export interface TimezoneMenuClass {

    // Own fields of GWeather-3.0.GWeather.TimezoneMenuClass

    parent_class: Gtk.ComboBoxClass
}

export abstract class TimezoneMenuClass {

    // Own properties of GWeather-3.0.GWeather.TimezoneMenuClass

    static name: string
}

    export type MoonLatitude = number
    export type MoonPhase = number
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END