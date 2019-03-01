/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "174cd7efa9f2653a9b8dc94dae057e08"
  },
  {
    "url": "assets/css/0.styles.ebcf3451.css",
    "revision": "6d079eb24adec22d599ddb69f525f6dd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bf39ec18.js",
    "revision": "9758205314479e575e1177ecc7865c13"
  },
  {
    "url": "assets/js/11.210e0db4.js",
    "revision": "5397a72111dac1e748649309dd812655"
  },
  {
    "url": "assets/js/12.ffb3dc49.js",
    "revision": "ffb0cdbfcef7cc04b5af5faaa322612e"
  },
  {
    "url": "assets/js/13.7299ff02.js",
    "revision": "bd22085d2a32f91b349be27dd9b330aa"
  },
  {
    "url": "assets/js/14.1e018a41.js",
    "revision": "d6cc5356705effefe3426e0a704aae54"
  },
  {
    "url": "assets/js/15.c7d46dc9.js",
    "revision": "5505464152409e0d85aee8f9da00d8ea"
  },
  {
    "url": "assets/js/16.aa71f129.js",
    "revision": "5c3c857969acff171c4df7c2d4064c68"
  },
  {
    "url": "assets/js/17.ee9ad401.js",
    "revision": "8e02c3f562f74974efc7fb6c14c90fef"
  },
  {
    "url": "assets/js/18.bc02023f.js",
    "revision": "7dfd6dcb603c0c33666f40b24ec1592d"
  },
  {
    "url": "assets/js/19.ac6195b2.js",
    "revision": "0daf689ef1fa71768fabcc7145494f73"
  },
  {
    "url": "assets/js/2.0f4038f2.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/20.000b2e2e.js",
    "revision": "c3ae261131d17e76390dd01a2c99f63b"
  },
  {
    "url": "assets/js/21.cda796ee.js",
    "revision": "792b20ceb59a3806951e3f78e19d38f6"
  },
  {
    "url": "assets/js/22.b96309d1.js",
    "revision": "6b7332de8851530b55c6c100bd231345"
  },
  {
    "url": "assets/js/23.24f97e00.js",
    "revision": "a1d11dbde72b27fca4506b27eab79192"
  },
  {
    "url": "assets/js/24.897297e4.js",
    "revision": "3b0e4dc8a76b9924dc1ff5d68fb4fdbe"
  },
  {
    "url": "assets/js/3.52b528e1.js",
    "revision": "b518da7867734002ad5d4bb7d291dce5"
  },
  {
    "url": "assets/js/4.c1e06c01.js",
    "revision": "4dcaa658ed47e1dfe2cf2044f637a8ee"
  },
  {
    "url": "assets/js/5.c4dd6f34.js",
    "revision": "0d91ec3de612a425fe0c3cdbdfef1b9f"
  },
  {
    "url": "assets/js/6.1701df0e.js",
    "revision": "b56c6077922df4bdbf481dd0ad3ec997"
  },
  {
    "url": "assets/js/7.e872f69f.js",
    "revision": "2bbef6207e6b83c097ff1fdb8526a3cf"
  },
  {
    "url": "assets/js/8.b5f42330.js",
    "revision": "2b422005b6358de86f6a0c2130452213"
  },
  {
    "url": "assets/js/9.444abcb4.js",
    "revision": "da2112b0f04d9577016951d6dcf56b22"
  },
  {
    "url": "assets/js/app.f5cc174e.js",
    "revision": "f1e4fbeac9eae44f5894f55f1e72ea41"
  },
  {
    "url": "index.html",
    "revision": "28915652b2a219819379fa635860a207"
  },
  {
    "url": "java_layers.png",
    "revision": "b406b304f54fbb5660934f27b5f0846a"
  },
  {
    "url": "java/app-structure.html",
    "revision": "ea727dd160080260c08f4bbd3de35127"
  },
  {
    "url": "java/block.html",
    "revision": "d6c6df9603d8e5807b33d0093870153e"
  },
  {
    "url": "java/config.html",
    "revision": "e1aacb6fbf49e1298ba5119230f06000"
  },
  {
    "url": "java/create-umi-app.html",
    "revision": "922082f10dfac593a83e99f906fac149"
  },
  {
    "url": "java/deploy.html",
    "revision": "c9d64f9a91beb1bb04fa6c42cd79f459"
  },
  {
    "url": "java/env-variables.html",
    "revision": "2871c39d87e4f6548dd03fa09b0355b9"
  },
  {
    "url": "java/examples.html",
    "revision": "55ba3966660ed429491214dd197ebf19"
  },
  {
    "url": "java/faq.html",
    "revision": "71bd7a68dc99caf26c30ce20670fb4fb"
  },
  {
    "url": "java/getting-started.html",
    "revision": "f549d90eed364439fca355184a150108"
  },
  {
    "url": "java/html-template.html",
    "revision": "f6f39bdd2f506cd8aec57094172e9b0a"
  },
  {
    "url": "java/index.html",
    "revision": "483335ad479d8681a25ee5ac1d5e9875"
  },
  {
    "url": "java/java_intro.html",
    "revision": "0f05ee8afe712d3ccdeea54a1b3f1ced"
  },
  {
    "url": "java/load-on-demand.html",
    "revision": "06d414bd569f5eb73c438f1b9c5eaf2c"
  },
  {
    "url": "java/migration.html",
    "revision": "8a39f2cd602f2500d69a86c1d310c811"
  },
  {
    "url": "java/mock-data.html",
    "revision": "b7020c0ae0e3aeae6da2807b0acb0d29"
  },
  {
    "url": "java/navigate-between-pages.html",
    "revision": "0da3de723c7780e2d70bce6cade2d12b"
  },
  {
    "url": "java/router.html",
    "revision": "0dccd1ddffc8918ca549ffce167d722c"
  },
  {
    "url": "java/runtime-config.html",
    "revision": "5d0afc4ee46dc94d3c13c4ca45e2631f"
  },
  {
    "url": "java/test.html",
    "revision": "56e5003779d4493ed50b87183b7d4c9a"
  },
  {
    "url": "java/with-dva.html",
    "revision": "a78479578d36c917873485fae52da1a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
