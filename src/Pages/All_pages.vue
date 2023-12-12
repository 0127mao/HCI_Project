<template>
  <div id="app" class="body_set">
    <div class="container_main">
      <nav class="fixed-nav">
        <ul>
          <li :class="{ 'active': $route.path === '/admin/overview' }">
            <router-link class="link" to="/admin/overview">首页</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/admin/library' }">
            <router-link class="link" to="/admin/library">书城</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/admin/author' }">
            <router-link class="link" to="/admin/author">作家专区</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/admin/self' }">
            <router-link class="link" to="/admin/self">个人</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/admin/help' }">
            <router-link class="link" to="/admin/help">帮助</router-link>
          </li>
          <li :class="{ 'active': $route.path === '/login' }">
            <router-link class="link" to="/login">登出</router-link>
          </li>
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
  background-image: url("../../src/images/blue_cloud.jpg");
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
  /* background: #afeefe;
  border-radius: 50px;
  padding: 10px;
  box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.4); */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul li.active {
  color: #ffffff;
}
nav ul li.active::after {
  top: 50%;
  opacity: 1;
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
  background: #82bde7;
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
