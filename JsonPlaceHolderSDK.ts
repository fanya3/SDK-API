
/**
 * The SDK to request JsonPlaceHolder API.
 */

class JsonPlaceHolderSDK {

    /** GET | /posts | Get a list of all posts */
    getAllPosts = () => {
      return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log('get all posts', json);
          return json;
        });
    };
  
    /** GET | /posts/:id | get a post based on id
     * @param {number} id - id of the post
     */
    getAPost = (id: number) => {
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log(`get post ${id}`, json);
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
    postAPost = (bodyData: object) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(bodyData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
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
  
    patchAPost = (id: number, bodyData: object) => {
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(bodyData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log('updated post', json);
          return json;
        });
    };
  
  
    /** DELETE | /posts/:id | Delete a post
     * @param {number} id - id of the post
     */
    deleteAPost = (id: number) => {
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
      })
        .then(response => {
          console.log('status response from API', response.status);
          return response;
        });
    };
  
  
    /** GET | /albums | Get a list of all albums */
    getAllAlbums = () => {
      return fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log('get all albums', json);
          return json;
        });
    };
  }
  
  
  export default JsonPlaceHolderSDK;
  