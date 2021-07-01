const app = document.querySelector("#SuguApp");
const listData = document.querySelector(".DataList");
const posts = document.querySelector("#posts");
const postTitle = document.createElement("h2");
postTitle.append("POSTS");

//Fetching Users Data to be displayed --Email and Name and button to be clicked
const usersFetch = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => dataDisplay(data));
};
// code for displaying All Posts for clicked users
const postsDisplay = (data) => {
  posts.innerHTML = "";
  posts.append(postTitle);
  data.map((post) => {
    const pst = document.createElement("div");
    pst.id = post.userId;
    const pstTitle = document.createElement("h2");
    const pstBody = document.createElement("div");
    pstTitle.textContent = post.title;
    pstBody.textContent = post.body;
    pst.append(pstTitle, pstBody);
    posts.append(pst);
  });
};

// Fetching  Posts for Clicked  user
const postsFetch = (id) => {
  fetch("https://jsonplaceholder.typicode.com/users/" + id + "/posts")
    .then((response) => response.json())
    .then((data) => {
      postsDisplay(data);
    });
};
// code for displaying Users Name,Email,Button to be clicked pon home page
const dataDisplay = (data) => {
  data.map((user) => {
    const list = document.createElement("li");
    const name = document.createElement("h3");
    const email = document.createElement("div");
    const btn = document.createElement("button");

    name.textContent = user.name;
    email.textContent = "Email: " + user.email;
    btn.textContent = "Get User’s Posts";
    btn.id = "btn_" + user.id;
    btn.onclick = () => {
      posts.style.display = "block";
      posts.style.backgroundColor = "rgb(148, 0, 99)";
      postsFetch(user.id);
      window.scrollTo(0, 0);
    };

    list.append(name, email, btn);
    listData.append(list);
    app.append(listData);
  });
};

usersFetch();
