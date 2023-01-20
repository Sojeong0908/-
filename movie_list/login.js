async function login(e) {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let result = await postUserAxios.post("http://101.101.218.43/user/login", {
    email,
    password,
  });
  if (result.status === 201) {
    window.location.href = "./index.html";
  }
  //로그인 성공시 index.html로 넘어가게
}

let signInForm = document.getElementById("signInForm");
signInForm.addEventListener("submit", login);
