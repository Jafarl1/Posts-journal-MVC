export function postInfoLayout(post) {
  const userComment = post.comments
    .map(
      (comment) => `
      <div class="comment">
        <h5 class="comment-user">${comment.name}</h5>
        <span class="comment-email">${comment.email}</span>
        <p class="comment-body">${comment.body}</p>
      </div>
    `
    )
    .join("");

  return `
    <h1 class="post-title">${post.title}</h1>
    <p class="post-body">${post.body}</p>
    <div class="post-comments">
    <h4> Comments </h4>
       ${userComment}
    </div>
  `;
}
