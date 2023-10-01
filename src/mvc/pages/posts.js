export function postsSectionLayout(post) {
    return `
        <div class="post-card" id=${post.id}>
          <h3 class="post-title">${post.title}</h3>
          <p class="post-body">${post.body}</p>
        </div>
      `;
}
