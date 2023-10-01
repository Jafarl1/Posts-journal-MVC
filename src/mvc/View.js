import { postsSectionLayout } from "./pages/posts";
import { createPostLayout } from "./pages/createPost";
import { errorPageLayout } from "./pages/errorPage";
import { postInfoLayout } from "./pages/postInfo";

export default class View {
  constructor() {
    this.pageHeader = document.querySelector(".title");
    this.createPostBtn = document.getElementById("create-post-btn");
    this.goBackBtn = document.getElementById("go-back-btn");

    this.createPostSection = document.querySelector(".create-post");
    this.postsSection = document.querySelector(".posts");
    this.postInfoSection = document.querySelector(".post-info");

    this.sections = [
      this.createPostSection,
      this.postsSection,
      this.postInfoSection,
    ];

    this.createPostBtn.onclick = () => this.moveToCreatePostPage();
    this.goBackBtn.onclick = () => this.moveToMainPage();
  }

  showAllPosts(posts) {
    this.postsSection.innerHTML = "";
    posts.forEach((post) => {
      this.postsSection.innerHTML += postsSectionLayout(post);
    });
  }

  handleClickOnPost(callback) {
    const posts = document.querySelectorAll(".post-card");
    posts.forEach((post) => {
      post.onclick = () => {
        callback(post.id);
      };
    });
  }

  hideAllSections() {
    this.sections.forEach((section) => section.classList.add("hidden"));
  }

  changeHeaderButton(button) {
    if (button === "create") {
      this.createPostBtn.classList.remove("hidden");
      this.goBackBtn.classList.add("hidden");
    } else if (button === "back") {
      this.createPostBtn.classList.add("hidden");
      this.goBackBtn.classList.remove("hidden");
    }
  }

  initCreatePostPage() {
    this.createPostSection.innerHTML = createPostLayout;
  }

  moveToMainPage() {
    this.changeHeaderButton("create");
    this.hideAllSections();

    this.pageHeader.innerHTML = "Posts";
    this.postsSection.classList.remove("hidden");
  }

  moveToCreatePostPage() {
    this.changeHeaderButton("back");

    this.hideAllSections();
    this.createPostSection.classList.remove("hidden");
  }

  handleCreateNewPost(callback) {
    document.getElementById("submit-form-btn").onclick = (event) => {
      event.preventDefault();

      const form = document.getElementById("create-post-form");
      const title = document.getElementById("create-post-title").value;
      const body = document.getElementById("create-post-body").value;

      if (title.trim() && body.trim()) {
        callback({ title, body });
        form.reset();
        this.moveToMainPage();
      } else {
        alert("Fill all blanks please.");
      }
    };
  }

  moveToSelectedPostPage(post) {
    this.changeHeaderButton("back");

    this.hideAllSections();
    this.postInfoSection.classList.remove("hidden");

    if (post.title) {
      this.pageHeader.innerHTML = `Post ${post.id}`;
      this.postInfoSection.innerHTML = postInfoLayout(post);
    } else {
      this.handleErrorOnPage(this.postInfoSection);
    }
  }

  handleErrorOnPage(element) {
    element.innerHTML = errorPageLayout;
  }
}
