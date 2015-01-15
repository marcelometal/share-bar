<<<<<<< HEAD
/*! ShareBar - v2.0.2 - 2014-08-29
* Copyright (c) 2014 Time Core; Licensed MIT */
=======
/*! ShareBar - v3.0.7 - 2015-01-15
* Copyright (c) 2015 Globo.com; Licensed MIT */
var BUTTON_WIDTH = 34;
var BUTTON_FULL_WIDTH = 110;
var BUTTON_PADDING = 4;
var MAX_SOCIAL_BUTTONS = 6;

>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
function ShareBar(options) {
    'use strict';
    return this.init(options);
}

(function (window, document) {
    'use strict';

    function preventDefault(e) {
        if (e && e.preventDefault) {
            e.preventDefault();
        } else if (window.event) {
            window.event.returnValue = false;
        }
    }

    function addEventListener(element, event, handler) {
        if (element.addEventListener) {
            return element.addEventListener(event, handler, false);
        }
        if (element.attachEvent) {
            return element.attachEvent('on' + event, function () { handler.call(element); });
        }
    }

    ShareBar.prototype = {
        init: function init(options) {
            this.eventName = this.getActionName();
            this.verifyTouch();
            this.supportSvg = this.hasSupportSvg();
            this.createSVG();
            this.mergeOptions(options);
            this.containers = document.querySelectorAll(this.selector);
            this.createBars();
        },

        getActionName: function getActionName() {
<<<<<<< HEAD
            return this.isTouch() ? 'touchend' : 'click';
=======
            return this.isTouch() ? 'mouseup' : 'click';
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
        },

        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
        verifyTouch: function verifyTouch() {
            var html = document.querySelector('html'),
                isTouch = this.isTouch();

            if (isTouch && html.className.indexOf(' touch') === -1) {
                html.className += ' touch';

            } else if (!isTouch && html.className.indexOf(' no-touch') === -1) {
                html.className += ' no-touch';
            }
        },

        isTouch: function isTouch() {
            var bool = false;

            if (window.ontouchstart !== undefined || (window.DocumentTouch && document instanceof DocumentTouch)) {
                bool = true;
            }
            return bool;
        },

        hasSupportSvg: function hasSupportSvg() {
            return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
        },

        createSVG: function createSVG() {
            if (this.supportSvg) {
                var svgContainer = document.createElement('div');
<<<<<<< HEAD
                svgContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"><symbol viewBox="0 0 500 500" id="icon-email"><title>email</title><path d="M1.369 386.854c0 27.481 22.258 49.766 49.729 49.766h398.193c27.472 0 49.729-22.283 49.729-49.766v-248.869s-12.964 10.139-199.146 148.415c-28.297 17.069-69.558 17.459-99.372-.243-181.929-135.099-199.121-148.16-199.121-148.16l-.012 248.857zm228.099-157.947c9.294 5.564 32.148 5.759 41.844 0 97.806-70.979 116.88-85.534 209.169-154.526-7.619-6.743-19.379-11.001-31.189-11.001h-398.194c-11.883 0-22.793 4.173-31.347 11.136 102.398 74.878 111.523 81.56 209.717 154.391z"/></symbol><symbol viewBox="0 0 500 500" id="icon-facebook"><title>facebook</title><path id="svgstoreeb06781e16b6b900d678925df65cf12eWhite_2_" d="M471.379 1.153h-442.757c-15.173 0-27.469 12.296-27.469 27.469v442.757c0 15.168 12.296 27.469 27.469 27.469h238.365v-192.735h-64.858v-75.111h64.858v-55.393c0-64.283 39.262-99.287 96.607-99.287 27.469 0 51.076 2.045 57.957 2.959v67.18l-39.771.018c-31.188 0-37.227 14.82-37.227 36.567v47.956h74.379l-9.684 75.111h-64.695v192.734h126.826c15.168 0 27.469-12.301 27.469-27.469v-442.756c0-15.173-12.301-27.469-27.469-27.469z"/></symbol><symbol viewBox="0 0 500 500" id="icon-googleplus"><title>googleplus</title><path fill-rule="evenodd" clip-rule="evenodd" d="M332.72 1.512h-146.848c-97.906 0-150.835 45.908-150.835 125.266 0 65.242 60.163 109.498 131.258 99.056-17.323 33.057 1.329 57.072 13.394 69.564-97.456 0-178.004 42.251-178.004 105.626 0 55.68 47.381 97.248 141.948 97.248 102.436 0 174.965-55.934 174.965-123.885 0-23.46-7.442-43.73-25.771-64.509-31.965-36.229-70.957-46.018-70.957-71.558 0-23.24 22.223-34.421 39.962-49.687 27.123-23.333 35.952-53.148 33.884-82.732-2.866-41.055-27.077-65.086-44.215-77.7 15.254.029 37.547.364 37.547.364l43.672-27.053zm-69.605 364.959c26.291 35.768 6.876 103.269-86.362 103.269-52.189 0-116.27-21.067-116.27-80.906 0-70.286 102.021-75.117 140.226-75.117 23.021 16.848 45.869 30.254 62.406 52.754zm-63.977-162.004c-45.116 18.017-81.727-10.47-99.57-68.952-14.48-47.405-3.872-93.318 29.746-105.112 43.718-15.33 79.012 9.32 98.334 62.959 21.46 59.546 6.957 95.007-28.51 111.105zm240.121 9.696v-59.1h-35.421v59.1h-59.204v35.369h59.204v59.608h35.421v-59.608h59.446v-35.369h-59.446z"/></symbol><symbol viewBox="0 0 500 500" id="icon-pinterest"><title>pinterest</title><path d="M250.425 1.195c-137.305 0-248.62 111.304-248.62 248.615 0 101.799 61.205 189.248 148.813 227.705-.704-17.358-.133-38.189 4.321-57.078 4.783-20.188 31.999-135.472 31.999-135.472s-7.951-15.878-7.951-39.331c0-36.854 21.353-64.367 47.949-64.367 22.615 0 33.541 16.982 33.541 37.328 0 22.73-14.494 56.732-21.96 88.22-6.227 26.379 13.231 47.889 39.246 47.889 47.1 0 78.831-60.501 78.831-132.176 0-54.493-36.696-95.28-103.449-95.28-75.42 0-122.398 56.24-122.398 119.066 0 21.656 6.385 36.927 16.388 48.75 4.601 5.438 5.244 7.623 3.569 13.862-1.189 4.577-3.933 15.587-5.062 19.957-1.651 6.288-6.761 8.546-12.442 6.215-34.742-14.178-50.923-52.21-50.923-94.976 0-70.619 59.566-155.308 177.692-155.308 94.915 0 157.383 68.683 157.383 142.416 0 97.526-54.213 170.384-134.137 170.384-26.84 0-52.089-14.494-60.744-30.979 0 0-14.433 57.271-17.48 68.343-5.281 19.167-15.599 38.335-25.031 53.267 22.36 6.591 45.983 10.185 70.467 10.185 137.281 0 248.596-111.304 248.596-248.621-.002-137.31-111.317-248.614-248.598-248.614z"/></symbol><symbol viewBox="0 0 500 500" id="icon-twitter"><title>twitter</title><path d="M498.717 96.337c-18.296 8.108-37.961 13.593-58.599 16.056 21.062-12.629 37.239-32.599 44.851-56.426-19.713 11.698-41.544 20.185-64.778 24.759-18.614-19.821-45.126-32.214-74.474-32.214-56.338 0-102.01 45.666-102.01 101.977 0 8.001.896 15.78 2.638 23.24-84.795-4.249-159.969-44.841-210.282-106.55-8.784 15.059-13.811 32.585-13.811 51.272 0 35.392 18 66.593 45.383 84.883-16.725-.527-32.457-5.115-46.219-12.758-.007.425-.007.857-.007 1.296 0 49.403 35.175 90.608 81.846 99.972-8.562 2.335-17.574 3.584-26.877 3.584-6.578 0-12.973-.642-19.193-1.822 12.98 40.52 50.651 69.993 95.292 70.815-34.913 27.343-78.897 43.656-126.695 43.656-8.238 0-16.36-.479-24.334-1.424 45.14 28.928 98.772 45.821 156.379 45.821 187.655 0 290.266-155.389 290.266-290.152 0-4.426-.088-8.818-.289-13.203 19.934-14.375 37.231-32.327 50.913-52.782z"/></symbol><symbol viewBox="0 0 500 500" id="icon-whatsapp"><title>whatsapp</title><path fill-rule="evenodd" clip-rule="evenodd" d="M254.551 1c-134.759 0-244.009 108.368-244.009 242.056 0 45.74 12.796 88.506 35.012 124.986l-44.041 129.878 135.095-42.91c34.962 19.171 75.159 30.114 117.942 30.114 134.77 0 244.009-108.396 244.009-242.068.001-133.688-109.239-242.056-244.008-242.056zm0 443.563c-41.255 0-79.676-12.277-111.759-33.319l-78.06 24.792 25.371-74.828c-24.312-33.23-38.68-74.05-38.68-118.152 0-111.108 91.126-201.518 203.128-201.518 112.013 0 203.134 90.409 203.134 201.518 0 111.115-91.122 201.507-203.134 201.507zm114.407-146.501c-6.117-3.32-36.159-19.408-41.797-21.692-5.637-2.261-9.751-3.441-14.136 2.587-4.391 6.018-16.855 19.492-20.633 23.474-3.795 3.993-7.44 4.363-13.562 1.037-6.105-3.314-25.934-10.59-48.928-32.519-17.892-17.06-29.629-37.765-33.038-44.074-3.403-6.315-.022-9.547 3.215-12.493 2.901-2.68 6.503-6.994 9.751-10.49 3.243-3.491 4.385-6.017 6.619-10.077 2.228-4.037 1.334-7.688-.11-10.838-1.445-3.138-12.752-34.008-17.479-46.572-4.721-12.564-9.983-10.689-13.618-10.821-3.635-.144-7.766-.816-11.924-.971-4.147-.149-10.959 1.147-16.899 7.126-5.94 5.957-22.597 20.308-23.744 50.709-1.147 30.406 20.06 60.609 23.016 64.845 2.962 4.236 40.495 70.14 102.875 97.237 62.385 27.087 62.71 18.836 74.16 18.229 11.45-.596 37.417-13.579 43.153-27.809 5.741-14.229 6.199-26.596 4.737-29.237-1.455-2.632-5.548-4.342-11.658-7.651z"/></symbol></svg>';
=======
                svgContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"><symbol viewBox="0 0 500 500" id="icon-email"><title>email</title><path d="M1.37 386.854c0 27.48 22.257 49.766 49.728 49.766H449.29c27.473 0 49.73-22.283 49.73-49.766v-248.87s-12.964 10.14-199.146 148.416c-28.297 17.07-69.558 17.46-99.372-.243-181.93-135.1-199.12-148.16-199.12-148.16l-.013 248.857zm228.098-157.947c9.294 5.564 32.148 5.76 41.844 0 97.806-70.98 116.88-85.534 209.17-154.526-7.62-6.742-19.38-11-31.19-11H51.098c-11.883 0-22.793 4.173-31.347 11.136 102.4 74.878 111.524 81.56 209.718 154.39z"/></symbol><symbol viewBox="0 0 500 500" id="icon-facebook"><title>facebook</title><path id="svgstoreeb06781e16b6b900d678925df65cf12eWhite_2_" d="M471.38 1.153H28.62c-15.173 0-27.47 12.296-27.47 27.47v442.756c0 15.167 12.297 27.468 27.47 27.468h238.365V306.113H202.13v-75.11h64.857v-55.394c0-64.284 39.262-99.288 96.607-99.288 27.47 0 51.076 2.045 57.957 2.96v67.18l-39.77.017c-31.188 0-37.227 14.82-37.227 36.566v47.956h74.38l-9.685 75.11h-64.695v192.735H471.38c15.167 0 27.468-12.3 27.468-27.47V28.623c0-15.173-12.3-27.47-27.47-27.47z"/></symbol><symbol viewBox="0 0 500 500" id="icon-googleplus"><title>googleplus</title><path fill-rule="evenodd" clip-rule="evenodd" d="M332.72 1.512H185.872c-97.906 0-150.835 45.908-150.835 125.266 0 65.242 60.163 109.498 131.258 99.056-17.323 33.057 1.33 57.072 13.394 69.564-97.457 0-178.005 42.25-178.005 105.626 0 55.68 47.38 97.248 141.948 97.248 102.436 0 174.965-55.934 174.965-123.885 0-23.46-7.442-43.73-25.77-64.51-31.966-36.228-70.958-46.017-70.958-71.557 0-23.24 22.223-34.42 39.962-49.687 27.123-23.333 35.952-53.148 33.884-82.732-2.866-41.054-27.077-65.085-44.215-77.7 15.255.03 37.548.365 37.548.365L332.72 1.512zm-69.605 364.96c26.29 35.767 6.876 103.268-86.362 103.268-52.19 0-116.27-21.067-116.27-80.906 0-70.286 102.02-75.117 140.226-75.117 23.02 16.848 45.868 30.254 62.405 52.754zm-63.977-162.005c-45.116 18.017-81.727-10.47-99.57-68.952-14.48-47.405-3.872-93.318 29.746-105.112 43.718-15.33 79.012 9.32 98.334 62.96 21.46 59.545 6.957 95.006-28.51 111.104zm240.12 9.696v-59.1h-35.42v59.1h-59.204v35.37h59.204v59.607h35.42v-59.608h59.447v-35.37H439.26z"/></symbol><symbol viewBox="0 0 500 500" id="icon-pinterest"><title>pinterest</title><path d="M250.425 1.195C113.12 1.195 1.805 112.5 1.805 249.81c0 101.8 61.205 189.248 148.813 227.705-.704-17.358-.133-38.19 4.32-57.078 4.784-20.188 32-135.472 32-135.472s-7.95-15.878-7.95-39.33c0-36.855 21.352-64.368 47.948-64.368 22.615 0 33.54 16.982 33.54 37.328 0 22.73-14.493 56.732-21.96 88.22-6.226 26.38 13.232 47.89 39.247 47.89 47.1 0 78.83-60.502 78.83-132.177 0-54.493-36.695-95.28-103.448-95.28-75.42 0-122.398 56.24-122.398 119.066 0 21.656 6.385 36.927 16.388 48.75 4.6 5.438 5.244 7.623 3.57 13.862-1.19 4.577-3.934 15.587-5.063 19.957-1.65 6.288-6.76 8.546-12.442 6.215-34.742-14.178-50.923-52.21-50.923-94.976 0-70.62 59.566-155.308 177.692-155.308 94.914 0 157.382 68.683 157.382 142.416 0 97.526-54.213 170.384-134.137 170.384-26.84 0-52.09-14.494-60.744-30.98 0 0-14.432 57.272-17.48 68.344-5.28 19.167-15.598 38.335-25.03 53.267 22.36 6.59 45.983 10.185 70.467 10.185 137.28 0 248.596-111.304 248.596-248.62C499.02 112.5 387.706 1.194 250.425 1.194z"/></symbol><symbol viewBox="0 0 500 500" id="icon-twitter"><title>twitter</title><path d="M498.717 96.337c-18.296 8.108-37.96 13.593-58.6 16.056 21.063-12.63 37.24-32.6 44.852-56.426-19.714 11.698-41.545 20.185-64.78 24.76-18.613-19.822-45.125-32.215-74.473-32.215-56.338 0-102.01 45.666-102.01 101.977 0 8 .896 15.78 2.638 23.24-84.795-4.25-159.97-44.842-210.282-106.55-8.784 15.058-13.81 32.584-13.81 51.27 0 35.393 18 66.594 45.382 84.884-16.725-.527-32.457-5.115-46.22-12.758-.006.425-.006.857-.006 1.296 0 49.403 35.174 90.608 81.845 99.972-8.562 2.335-17.574 3.584-26.877 3.584-6.578 0-12.973-.642-19.193-1.822 12.98 40.52 50.65 69.993 95.292 70.815-34.913 27.344-78.897 43.657-126.695 43.657-8.238 0-16.36-.48-24.334-1.424 45.14 28.928 98.772 45.82 156.38 45.82 187.654 0 290.265-155.388 290.265-290.15 0-4.427-.088-8.82-.29-13.204 19.935-14.376 37.232-32.328 50.914-52.783z"/></symbol><symbol viewBox="0 0 500 500" id="icon-whatsapp"><title>whatsapp</title><path fill-rule="evenodd" clip-rule="evenodd" d="M254.55 1C119.793 1 10.543 109.368 10.543 243.056c0 45.74 12.796 88.506 35.012 124.986L1.514 497.92l135.094-42.91c34.962 19.17 75.16 30.114 117.942 30.114 134.77 0 244.01-108.396 244.01-242.068C498.56 109.368 389.32 1 254.55 1zm0 443.563c-41.254 0-79.675-12.277-111.758-33.32l-78.06 24.793 25.37-74.828c-24.31-33.23-38.68-74.05-38.68-118.152 0-111.108 91.127-201.518 203.13-201.518 112.012 0 203.133 90.41 203.133 201.518 0 111.115-91.122 201.507-203.134 201.507zm114.408-146.5c-6.117-3.32-36.16-19.41-41.797-21.693-5.636-2.26-9.75-3.44-14.135 2.587-4.39 6.018-16.855 19.492-20.633 23.474-3.795 3.994-7.44 4.364-13.562 1.038-6.105-3.314-25.934-10.59-48.928-32.52-17.892-17.06-29.63-37.764-33.038-44.073-3.403-6.315-.022-9.547 3.215-12.493 2.9-2.68 6.502-6.994 9.75-10.49 3.243-3.49 4.385-6.017 6.62-10.077 2.227-4.037 1.333-7.688-.11-10.838-1.446-3.138-12.753-34.008-17.48-46.572-4.72-12.564-9.983-10.69-13.618-10.82-3.635-.145-7.766-.817-11.924-.972-4.147-.15-10.96 1.147-16.9 7.126-5.94 5.956-22.596 20.307-23.743 50.708-1.147 30.406 20.06 60.61 23.016 64.845 2.963 4.236 40.496 70.14 102.876 97.237 62.385 27.087 62.71 18.836 74.16 18.23 11.45-.597 37.417-13.58 43.153-27.81 5.74-14.23 6.198-26.596 4.736-29.237-1.455-2.632-5.548-4.342-11.658-7.65z"/></symbol></svg>';
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
                svgContainer.style.display = 'none';
                document.body.appendChild(svgContainer);
            }
        },

        mergeOptions: function mergeOptions(options) {
            var option,
                defaultOptions = {
                    // Selector to open lightbox
                    selector: '.share-bar',
                    classPopup: 'share-popup',
<<<<<<< HEAD
=======
                    facebookAppId: '',
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
                    networks: [
                        'facebook',
                        'twitter',
                        'whatsapp',
                        'google',
                        'pinterest',
                        'email'
                    ],
                    theme: 'natural',
<<<<<<< HEAD
                    buttonWidth: 34,
                    buttonFullWidth: 110,
                    buttonPadding: 4,
                    maxSocialButtons: 6,
=======
                    buttonWidth: BUTTON_WIDTH,
                    buttonFullWidth: BUTTON_FULL_WIDTH,
                    buttonPadding: BUTTON_PADDING,
                    maxSocialButtons: MAX_SOCIAL_BUTTONS,
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
                    onCreateBar: function (bar) { return false; },
                    onCreateButton: function (button) { return false; },
                    onShare: function (button) { return false; }
                };

            if (!options) {
                options = {};
            }

            for (option in defaultOptions) {
                if (defaultOptions.hasOwnProperty(option)) {
                    this[option] = options[option] || defaultOptions[option];
                }
            }
        },

        validateNetworks: function validateNetworks(networks) {
            var i = 0,
                networkName = '',
                method = '';

            if (Object.prototype.toString.call(networks) !== '[object Array]') {
<<<<<<< HEAD
                throw new Error('List of networks passed on inicialization is wrong [Should be an Array]');
=======
                throw new Error('The list of networks passed on inicialization is wrong [Should be an Array]');
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
            }

            for (i; i < networks.length; i++) {
                if (typeof networks[i] === 'string') {
                    networkName = networks[i];
                    networkName = networkName.substr(0, 1).toUpperCase() + networkName.substr(1);
                    method = ShareBar.prototype['create' + networkName + 'Button'];

                    if (method) {
                        networks[i] = method;
                    } else {
<<<<<<< HEAD
                        throw new Error('List of networks passed on inicialization is wrong [Netowrk name is wrong]');
                    }

                } else if (typeof networks[i] !== 'function') {
                    throw new Error('List of networks passed on inicialization is wrong [Should be string or function]');
=======
                        throw new Error('The list of networks passed on inicialization is wrong [Netowrk name "' + networks[i] + '" is wrong, should be facebook or twitter or whatsapp or google or pinterest or email]');
                    }

                } else if (typeof networks[i] !== 'function') {
                    throw new Error('The list of networks passed on inicialization is wrong [Should be string or function]');
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
                }
            }

            return networks;
        },

        createBars: function createBars() {
            var items = this.containers,
                element = 0;

            for (element = 0; element < items.length; element++) {
                this.createBar(items[element]);
            }
<<<<<<< HEAD
=======

>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
        },

        createBar: function createBar(element, networks) {
            var theme = ' share-theme-',
                i = 0,
                count = 0,
                buttonClasses = [];

            networks = this.validateNetworks(networks || this.networks);
            networks = networks.slice(0, this.maxSocialButtons);

            count = networks.length;
            buttonClasses = this.getButtonsSize(element.offsetWidth, count);

            for (i; i < count; i++) {
                networks[i].call(this, element, buttonClasses[i]);
            }

            theme += element.getAttribute('data-theme') || this.theme;
            element.className += ' share-bar-container' + theme;
<<<<<<< HEAD
            this.bindOpenPopup();
=======
            this.bindOpenPopup(element);
            this.bindShare(element);
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
            this.onCreateBar(element);
        },

        getButtonsSize: function getButtonsSize(containerWidth, numberOfButtons) {
            var fullButtonWidth = this.buttonFullWidth + this.buttonPadding,
                smallButtonWidth = this.buttonWidth + this.buttonPadding,
                isSmallScreen = this.isSmallScreen();

            if ((numberOfButtons * smallButtonWidth) > containerWidth) {
                return this.getButtonsSmall(
                    numberOfButtons,
                    smallButtonWidth,
                    containerWidth
                );
            }

            if (isSmallScreen) {
                return ['', '', '', '', '', ''];
            }

            return this.getButtonsFull(
                numberOfButtons,
                fullButtonWidth,
                smallButtonWidth,
                containerWidth
            );
        },

        getButtonsSmall: function getButtonsSmall(numberOfButtons, smallButtonWidth, containerWidth) {
            var result = [],
                i = 1,
                totalOfSmallButtons = 0,
                isSmallScreen = this.isSmallScreen();

            for (i; i <= numberOfButtons; i++) {
                totalOfSmallButtons = i * smallButtonWidth;

                if (totalOfSmallButtons <= containerWidth) {
                    result[i - 1] = isSmallScreen ? '' : ' share-small';
                } else {
                    result[i - 1] = ' share-hidden';
                }
            }

            return result;
        },

        getButtonsFull: function getButtonsFull(numberOfButtons, fullButtonWidth, smallButtonWidth, containerWidth) {
            var result = [],
                i = 1,
                totalOfFullButtons = 0,
                totalOfSmallButtons = 0;

            for (i; i <= numberOfButtons; i++) {
                totalOfFullButtons = i * fullButtonWidth;
                totalOfSmallButtons = (numberOfButtons - i) * smallButtonWidth;

                if ((totalOfSmallButtons + totalOfFullButtons) <= containerWidth) {
                    result[i - 1] = ' share-full';
                } else {
                    result[i - 1] = ' share-small';
                }
            }

            return result;
        },

<<<<<<< HEAD
        bindOpenPopup: function bindOpenPopup() {
            var linksPopup = document.querySelectorAll('.' + this.classPopup),
                i = 0,
                self = this,
                onShareClick = function (e) {
                    self.onShare(this);
=======
        bindOpenPopup: function bindOpenPopup(element) {
            var linksPopup = element.querySelectorAll('.' + this.classPopup),
                i = 0,
                self = this,
                onShareClick = function (e) {
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
                    self.openPopup.call(this, e);
                };

            for (i; i < linksPopup.length; i++) {
                addEventListener(linksPopup[i], this.eventName, onShareClick);
                addEventListener(linksPopup[i], 'click', preventDefault);
            }
        },

<<<<<<< HEAD
=======
        bindShare: function bindShare(element) {
            var self = this,
                onShareClick = function (e) {
                    if (e.target.className.search('share-button') !== -1) {
                        self.onShare(e.target);
                    }
                };

            addEventListener(element, this.eventName, onShareClick);
            addEventListener(element, 'click', preventDefault);
        },

>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
        openPopup: function openPopup(e) {
            var win = window.open(
                this.getAttribute('href'),
                'popup',
                'height=400,width=500,left=10,top=10,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no'
            );

            win.focus();
        },

        getMetadataFromElement: function getMetadataFromElement(element) {
            var encode = window.encodeURIComponent,
                data = {
                    'url': encode(element.getAttribute('data-url') || ''),
                    'title': encode(element.getAttribute('data-title') || ''),
<<<<<<< HEAD
                    'imageUrl': encode(element.getAttribute('data-image-url') || '')
=======
                    'imageUrl': encode(element.getAttribute('data-image-url') || ''),
                    'hashtags': encode(element.getAttribute('data-hashtags') || '')
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
                };
            return data;
        },

        deviceIsIphone: function deviceIsIphone() {
            return navigator.userAgent.match(/iPhone/i) !== null;
        },

        isSmallScreen: function isSmallScreen() {
            var desktopMinWidth = 768,
                width = window.innerWidth || screen.width;
            return width < desktopMinWidth;
        },

<<<<<<< HEAD
        createButton: function createButton(container, socialNetworkClass, className, url, socialNetworkTitle) {
            var shareContainer = document.createElement('div');
            socialNetworkTitle = socialNetworkTitle || socialNetworkClass;
            shareContainer.className = 'share-button share-' + socialNetworkClass + className;
            socialNetworkTitle = socialNetworkTitle[0].toUpperCase() + socialNetworkTitle.slice(1);
            shareContainer.innerHTML = [
                '<a class="' + this.classPopup + '" href="' + url + '" title="Compartilhar via ' + socialNetworkTitle + '">',
=======
        createButton: function createButton(container, socialNetworkClass, className, url, socialNetworkTitle, openInPage) {
            var shareContainer = document.createElement('div'),
                classPopup = '';
            socialNetworkTitle = socialNetworkTitle || socialNetworkClass;
            shareContainer.className = 'share-button share-' + socialNetworkClass + className;
            socialNetworkTitle = socialNetworkTitle[0].toUpperCase() + socialNetworkTitle.slice(1);

            if (!openInPage) {
                classPopup = this.classPopup;
            }

            shareContainer.innerHTML = [
                '<a class="' + classPopup + '" href="' + url + '" title="Compartilhar via ' + socialNetworkTitle + '">',
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
                this.createContentButton(socialNetworkClass, socialNetworkTitle),
                '</a>'
            ].join('');

            container.appendChild(shareContainer);
            this.onCreateButton(shareContainer);

            return shareContainer;
        },

        createContentButton: function createContentButton(name, title) {
            var iconElement;
            title = title || name;

            if (this.supportSvg) {
                iconElement = [
                    '   <div class="svg-size">',
                    '      <svg viewBox="0 0 100 100" class="share-icon">',
                    '           <use xlink:href="#icon-' + name + '"></use>',
                    '       </svg>',
                    '   </div>',
                    '<span>' + title + '</span>'
                ].join('');

            } else {
                iconElement = [
                    '   <i class="share-font ico-share-' + name + '"></i>',
                    '   <span>' + title + '</span>'
                ].join('');
            }

            return iconElement;
        },

        createFacebookButton: function createFacebookButton(container, buttonClass) {
<<<<<<< HEAD
            var data = this.getMetadataFromElement(container);
            buttonClass = buttonClass || '';

            this.createButton(
                container,
                'facebook',
                buttonClass,
                'http://www.facebook.com/sharer/sharer.php?u=' + data.url
            );
=======
            var onShare = '',
                button = '',
                data = this.getMetadataFromElement(container);
            buttonClass = buttonClass || '';

            button = this.createButton(
                container,
                'facebook',
                buttonClass,
                'http://www.facebook.com/',
                '',
                true
            );

            this.getFacebookUi();

            onShare = function () {
                var decode = window.decodeURIComponent;

                FB.ui({
                    method: 'feed',
                    link: decode(data.url),
                    name: decode(data.title),
                    picture: decode(data.imageUrl)
                });
            };

            addEventListener(button, this.eventName, onShare);
            addEventListener(button, 'click', preventDefault);
        },

        getFacebookUi: function getFacebookUi() {
            var facebookAppId = this.facebookAppId;

            if (window.FB) {
                return false;
            }

            window.fbAsyncInit = function () {
                FB.init({
                    appId: facebookAppId,
                    xfbml: true,
                    version: 'v2.1'
                });
            };

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) { return; }
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
        },

        createTwitterButton: function createTwitterButton(container, buttonClass) {
            var data = this.getMetadataFromElement(container);
            buttonClass = buttonClass || '';

            this.createButton(
                container,
                'twitter',
                buttonClass,
<<<<<<< HEAD
                'https://twitter.com/share?url=' + data.url + '&amp;text=' + data.title
=======
                'https://twitter.com/share?url=' + data.url + '&amp;text=' + data.title + ' ' + data.hashtags
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
            );
        },

        createGoogleButton: function createGoogleButton(container, buttonClass) {
            var data = this.getMetadataFromElement(container);
            buttonClass = buttonClass || '';

            this.createButton(
                container,
                'googleplus',
                buttonClass,
                'https://plus.google.com/share?url=' + data.url,
                'google+'
            );
        },

        createPinterestButton: function createPinterestButton(container, buttonClass) {
            var data = this.getMetadataFromElement(container);
            buttonClass = buttonClass || '';

            this.createButton(
                container,
                'pinterest',
                buttonClass,
                'http://www.pinterest.com/pin/create/button/?url=' + data.url + '&amp;media=' + data.imageUrl + '&amp;description=' + data.title
            );
        },

        createWhatsappButton: function createWhatsappButton(container, buttonClass) {
            var data = this.getMetadataFromElement(container);

            if (!this.isSmallScreen() || !this.isTouch()) {
                return false;
            }

            buttonClass = buttonClass || '';

            this.createButton(
                container,
                'whatsapp',
                buttonClass,
<<<<<<< HEAD
                'whatsapp://send?text=' + data.title + '%20' + data.url
=======
                'whatsapp://send?text=' + data.title + '%20' + data.url,
                '',
                true
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
            );
        },

        createEmailButton: function createEmailButton(container, buttonClass) {
            var data = this.getMetadataFromElement(container);
<<<<<<< HEAD
=======

            if (!this.isTouch()) {
                return false;
            }

>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
            buttonClass = buttonClass || '';

            this.createButton(
                container,
                'email',
                buttonClass,
                'mailto:?subject=' + data.title + '&amp;body=' + data.url,
<<<<<<< HEAD
                'e-mail'
=======
                'e-mail',
                true
>>>>>>> 6ce7dc92ec7f40a9aa98383b255d814556819b4f
            );
        }
    };

}(window, document));
