const app = document.querySelector("#SuguApp");
const listData = document.querySelector(".DataList");
const posts = document.querySelector("#posts");

const usersFetch = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => dataDisplay(data));
};
const postsDisplay = (id) => {
  fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => response.json())
    .then((post) => {
      posts.innerHTML = "";
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
      postsDisplay(user.id);
      window.scrollTo(0, 0);
    };

    list.append(name, email, btn);
    listData.append(list);
    app.append(listData);
  });
};

usersFetch();
