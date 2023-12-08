<template>
  <div id="app" class="body_set">
    <div class="container_main">
      <nav class="fixed-nav">
        <ul>
          <li>
            <router-link class="link" to="/admin/overview"
              >Overview</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/admin/library">Library</router-link>
          </li>
          <li>
            <router-link class="link" to="/admin/author">Authors</router-link>
          </li>
          <li><router-link class="link" to="/admin/self">Self</router-link></li>
          <li><router-link class="link" to="/admin/help">Help</router-link></li>
          <li><router-link class="link" to="/login">LogOut</router-link></li>
        </ul>
      </nav>
      <router-link to="/admin/self"
        ><img class="avatar" src="../images/blue_cloud.jpg" alt="Avatar"
      /></router-link>
    </div>
    <router-view class="router-view" />
    <footer class="footer">
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 10px;
}

.router-view {
  padding-top: 10vh;
}
.container_main {
  background-image: url("../../src/images/3.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 10vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  margin: 0;
  z-index: 999;
}
nav {
  background: #afeefe;
  border-radius: 50px;
  padding: 10px;
  box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  display: flex;
  align-items: center;
}
nav ul li {
  list-style: none;
  display: inline-block;
  padding: 13px 35px;
  margin: 1px;
  font-size: 18px;
  font-weight: 500;
  color: #777777;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  z-index: 2;
  transition: color 0.5s;
}

.link {
  text-decoration: none;
}

nav ul li::after {
  content: "";
  background: #2ca8ff;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0;
  transition: top 0.5s, opacity 0.5s;
}

nav ul li:hover {
  color: #ffffff;
}
nav ul li:hover::after {
  top: 50%;
  opacity: 1;
}
.body_set {
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b6f1e0 0%,
    #7de3db 0%,
    #80b8f6 33%,
    #8da2dc 66%,
    #a9afd9 100%
  );
}
.footer {
  background: #afeefe;
  text-align: center;
  padding: 20px;
  color: #777777;
  font-size: 14px;
}
</style>
<script setup></script>
