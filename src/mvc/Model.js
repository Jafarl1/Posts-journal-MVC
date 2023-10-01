export default class Model {
  constructor() {
    this.API = "https://jsonplaceholder.typicode.com";
    this.posts = [];
    this.selectedPost = null;
  }

  async fetchPosts() {
    try {
      const allPosts = await fetch(`${this.API}/posts`);
      const allComments = await fetch(`${this.API}/comments`);
      let posts = await allPosts.json();
      posts = posts.slice(0, 10);
      let comments = await allComments.json();

      for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        const postComments = comments.filter(
          (comment) => comment.postId === post.id
        );

        const postWithComments = {
          ...post,
          comments: postComments,
        };

        this.posts.push(postWithComments);
      }
    } catch (error) {
      console.log("Error loading posts:", error);
    }
  }

  selectPost(id) {
    if (id) {
      this.selectedPost = this.posts.find((el) => el.id === +id);
    }
  }

  async createPost(data) {
    try {
      const response = await fetch(`${this.API}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const newPost = await response.json();
      this.posts.push(newPost);
    } catch (error) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  }
}
