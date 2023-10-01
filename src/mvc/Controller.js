export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async init() {
    await this.handleAllPosts();
    this.view.handleClickOnPost(this.handleSelectPost.bind(this));
    this.view.initCreatePostPage();
    this.view.handleCreateNewPost(this.createNewPost.bind(this));
  }

  async handleAllPosts() {
    await this.model.fetchPosts();
    this.view.showAllPosts(this.model.posts);
  }

  handleSelectPost(id) {
    this.model.selectPost(id);
    this.view.moveToSelectedPostPage(this.model.selectedPost);
  }

  async createNewPost(post) {
    await this.model.createPost(post);
    this.view.showAllPosts(this.model.posts);
  }
}
