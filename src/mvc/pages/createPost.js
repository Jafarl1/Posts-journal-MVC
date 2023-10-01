export const createPostLayout = `
    <form class="create-post-form" id="create-post-form">
    <label for="create-title-input">Post title</label>
    <input name="create-post-input" type="text" id="create-post-title">
    <label for="create-title-input">Post body</label>
    <textarea name="create-title-body" id="create-post-body"></textarea>
    <div class="btn-group">
      <button class="body-button" id="reset-form-btn" type="reset">Reset</button>
      <button class="body-button" id="submit-form-btn" type="submit">Create post</button>
    </div>
    </form>
`;
