console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
const newPostText = document.createElement("p");
const newPostFooter = document.createElement("footer");
const newPostSpan = document.createElement("span");
const newPostButton = document.createElement("button");

newPost.classList.add("post");
newPostText.classList.add("post__content");
newPostFooter.classList.add("post__footer");
newPostSpan.classList.add("post__username");
newPostButton.classList.add("post__button");
newPost.textContent = "Lirum larum Löfffelstiel...";
newPostSpan.textContent = "@username";
newPostButton.textContent = "♥ Like";

document.body.append(newPost);
newPost.append(newPostText);
newPost.append(newPostFooter);
newPostFooter.append(newPostSpan);
newPostFooter.append(newPostButton);

newPostButton.addEventListener("click", handleLikeButtonClick);
