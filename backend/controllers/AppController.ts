import * as Xpresser from "xpresser/types/http";

/**
 * @type Xpresser.Controller.Object
 */
const AppController: Xpresser.Controller.Object = {
    /**
     * Controller name.
     * @type {string}
     */
    name: 'AppController',

    /**
     * Index Method for "/"
     * @returns {string}
     */
    index: (): string => "<h1>My xpresser Typescript lite project</h1>",

};

module.exports = AppController;
