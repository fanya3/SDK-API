"use strict";
/**
 * The SDK to request JsonPlaceHolder API.
 */
exports.__esModule = true;
var JsonPlaceHolderSDK = /** @class */ (function () {
    function JsonPlaceHolderSDK() {
        /** GET | /posts | Get a list of all posts */
        this.getAllPosts = function () {
            return fetch('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                return response.json();
            })
                .then(function (json) {
                console.log('get all posts', json);
                return json;
            });
        };
        /** GET | /posts/:id | get a post based on id
         * @param {number} id - id of the post
         */
        this.getAPost = function (id) {
            return fetch("https://jsonplaceholder.typicode.com/posts/" + id)
                .then(function (response) {
                return response.json();
            })
                .then(function (json) {
                console.log("get post " + id, json);
                return json;
            });
        };
        /** POST | /posts/:id | Create a post
         * @param {object} bodyData - name of the object written in the parent JS file as followed:
         * bodyData = {
         *   title: string,
         *   body: string,
         *   userId: number,
         * }
         */
        this.postAPost = function (bodyData) {
            return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(bodyData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(function (response) {
                return response.json();
            })
                .then(function (json) {
                console.log('new post', json);
                return json;
            });
        };
        /** PATCH | /posts/:id | Modify a post
         * @param {number} id - id of the post
         * @param {object} bodyData - name of the object written in your JS file, this object may contain one or more of the following fields:
         * bodyData = {
              *   title?: string,
              *   body?: string,
              *   userId?: number,
         * }
         */
        this.patchAPost = function (id, bodyData) {
            return fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
                method: 'PATCH',
                body: JSON.stringify(bodyData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
                .then(function (response) {
                return response.json();
            })
                .then(function (json) {
                console.log('updated post', json);
                return json;
            });
        };
        /** DELETE | /posts/:id | Delete a post
         * @param {number} id - id of the post
         */
        this.deleteAPost = function (id) {
            return fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
                method: 'DELETE'
            })
                .then(function (response) {
                console.log('status response from API', response.status);
                return response;
            });
        };
        /** GET | /albums | Get a list of all albums */
        this.getAllAlbums = function () {
            return fetch('https://jsonplaceholder.typicode.com/albums')
                .then(function (response) {
                return response.json();
            })
                .then(function (json) {
                console.log('get all albums', json);
                return json;
            });
        };
    }
    return JsonPlaceHolderSDK;
}());
exports["default"] = JsonPlaceHolderSDK;
