import {DollarSign} from "xpresser/types";

declare const $: DollarSign;
/**
 * See https://xpresserjs.com/router/
 */
const Route = $.router;

/**
 * Url: "/" points to AppController@index
 * The index method of the controller.
 */
Route.get('/', 'App@index').name('index');
