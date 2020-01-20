
import JsonPlaceHolderSDK from "../../JsonPlaceHolderSDK";

const sdk = new JsonPlaceHolderSDK();

describe('Unit test our SDK functions', () => {
  context('API + SDK ', () => {

    /** GET | testing JsonPlaceHolder Website */
    it('online API should return all posts (100 posts)', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts').as('posts');
      cy.get('@posts').should(response => {
        expect(response.body).to.have.length(100);
      });
    });
    /** GET | testing SDK  */
    it('SDK should get all posts (100 posts)', () => {
      sdk.getAllPosts().then(response => {
        expect(response).toBeDefined();
        expect(response.body).to.have.length(100);
      });
    });

    /** GET | testing JsonPlaceHolder Website */
    it('online API should return post 1 with userId = 1', () => {
      cy.request('https://jsonplaceholder.typicode.com/posts/1').as('post1');
      cy.get('@post1').should(response => {
        expect(response.body.userId).to.equal(1);
      });
    });
    /** GET | testing SDK  */
    it('SDK should get post 1 with userId = 1', () => {
      sdk.getAPost(1).then(response => {
        expect(response).toBeDefined();
        expect(response.body.userId).to.equal(1);
      });
    });

    const bodyDataPost = {
      title: 'new title',
      body: 'new body',
      userId: 33
    };

    /** POST | testing JsonPlaceHolder Website */
    it('online API should create a new post with response has properties title, body, userId, id', () => {
      cy.request(
        'POST',
        'https://jsonplaceholder.typicode.com/posts',
        bodyDataPost
      ).should(response => {
        expect(response.body).to.have.property('title', 'new title');
        expect(response.body).to.have.property('body', 'new body');
        expect(response.body).to.have.property('userId', 33);
        expect(response.body).to.have.property('id');
      });
    });

    /** POST | testing SDK  */
    it('SDK should create a new post with response has properties title, body, userId, id', () => {
      sdk.postAPost(bodyDataPost).then(response => {
        expect(response).toBeDefined();
        expect(response.body).to.have.property('title', 'new title');
        expect(response.body).to.have.property('body', 'new body');
        expect(response.body).to.have.property('userId', 33);
        expect(response.body).to.have.property('id');
      });
    });

    const bodyDataPatch = {
      title: 'updated title'
    };

   /** PATCH | testing JsonPlaceHolder Website  */
    it('online API should update the post with id 3, with the property title updated ', () => {
      cy.request(
        'PATCH',
        'https://jsonplaceholder.typicode.com/posts/3',
        bodyDataPatch
      ).should(response => {
        expect(response.body).to.have.property('title', 'updated title');
        expect(response.body).to.have.property('id', 3);
      });
    });

    /** PATCH | testing SDK  */
    it('SDK should update a post with id 3, with the property title updated', () => {
      sdk.patchAPost(3, bodyDataPost).then(response => {
        expect(response).toBeDefined();
        expect(response.body).to.have.property('id', 3);
        expect(response.body).to.have.property('title', 'updated title');
      });
    });


    /** DELETE | testing JsonPlaceHolder Website  */
    it('online API should delete post, status response from server should be 200', () => {
      cy.request('DELETE','https://jsonplaceholder.typicode.com/posts/5')
        .should(response => {
         expect(response.status).to.equal(200);
      });
    });
    /** DELETE | testing SDK  */
    it('SDK should delete post, status response from server should be 200', () => {
      sdk.deleteAPost(5).then(response => {
        expect(response).toBeDefined();
        expect(response.status).to.equal(200);
      });
    });


    /** GET | testing JsonPlaceHolder Website */
    it('online API should return all albums (100 albums)', () => {
      cy.request('https://jsonplaceholder.typicode.com/albums').as('albums');
      cy.get('@albums').should(response => {
        expect(response.body).to.have.length(100);
      });
    });
    /** GET | testing SDK  */
    it('SDK should get all albums (100 albums)', () => {
      sdk.getAllAlbums().then(response => {
        expect(response).toBeDefined();
        expect(response.body).to.have.length(100);
      });
    });


  });
});

