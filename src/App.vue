<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    titleTemplate: "%s | 至我的爱人",
    link: [
      { rel: "favicon", href: "./assets/favicon.ico" },
      { rel: "apple-touch-icon", href: "./assets/favicon.png", sizes: "57x57" },
      { rel: "apple-touch-icon", href: "./assets/favicon.png", sizes: "72x72" },
      {
        rel: "apple-touch-icon",
        href: "./assets/favicon.png",
        sizes: "114x114"
      },
      {
        rel: "apple-touch-icon",
        href: "./assets/favicon.png",
        sizes: "144x144"
      },
      {
        rel: "shortcut icon",
        href: "./assets/favicon.ico",
        type: "image/x-icon"
      }
    ]
  }
};
</script>

<style>
</style>
