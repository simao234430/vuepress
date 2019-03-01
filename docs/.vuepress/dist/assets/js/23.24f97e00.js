(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{188:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("As of "),s("code",[t._v(">= umi@2")]),t._v(", we recommend using "),s("a",{attrs:{href:"https://github.com/umijs/umi/tree/master/packages/umi-plugin-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("umi-plugin-react"),s("OutboundLink")],1),t._v(" for "),s("code",[t._v("dva")]),t._v(" integration.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("There are two types of models: the globally registered (global) model, and the page-level model.")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("The page-level model should not be used in any other page.")]),t._v(" "),s("p",[t._v("Model loading rules:")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),t._m(14),s("p",[t._v("With the above file structure:")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/sorrycc/blog/issues/66",target:"_blank",rel:"noopener noreferrer"}},[t._v("Improve dva project with umi"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/sorrycc/blog/issues/62",target:"_blank",rel:"noopener noreferrer"}},[t._v("umi + dva, write your own user-management CURD app"),s("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"use-umi-with-dva"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-umi-with-dva","aria-hidden":"true"}},[this._v("#")]),this._v(" Use umi with dva")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("strong",[t._v("Model loading by directory")]),t._v(", getting rid of "),s("code",[t._v("app.model")])]),t._v(" "),s("li",[s("strong",[t._v("File name as namespace")]),t._v(", "),s("code",[t._v("namespace")]),t._v(" as model key will be exported by "),s("code",[t._v("umi")])]),t._v(" "),s("li",[s("strong",[t._v("No manually defined router.js")]),t._v(", "),s("code",[t._v("umi")]),t._v(" will take over the router stuff, and both "),s("code",[t._v("model")]),t._v("s and "),s("code",[t._v("component")]),t._v("s can be loaded on demand")]),t._v(" "),s("li",[s("strong",[t._v("Built-in query-string handler")]),t._v(", manually encoding and decoding URL are not required any more")]),t._v(" "),s("li",[s("strong",[t._v("Built-in dva-loading and dva-immer support")]),t._v(", of which "),s("code",[t._v("dva-immer")]),t._v(" can be enabled via configuration")]),t._v(" "),s("li",[s("strong",[t._v("Out of box")]),t._v(", dependencies such as: "),s("code",[t._v("dva")]),t._v(", "),s("code",[t._v("dva-loading")]),t._v(", "),s("code",[t._v("dva-immer")]),t._v(", "),s("code",[t._v("path-to-regexp")]),t._v(", "),s("code",[t._v("object-assign")]),t._v(", "),s("code",[t._v("react")]),t._v(", "),s("code",[t._v("react-dom")]),t._v(" are built in, so that you don't have to worry about them")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Install via "),e("code",[this._v("yarn")]),this._v(",")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ yarn add umi-plugin-react\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Install via "),e("code",[this._v("npm")]),this._v(", using the command "),e("code",[this._v("npm install --save umi-plugin-react")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Add configuration in "),e("code",[this._v(".umirc.js")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umi-plugin-react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dva"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Enable "),e("code",[this._v("dva-immer")]),this._v(" for elegant reducer writing experience")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umi-plugin-react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dva"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          immer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"registering-models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registering-models","aria-hidden":"true"}},[this._v("#")]),this._v(" Registering models")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The global model should be defined in "),e("code",[this._v("/src/models/")]),this._v(", and can be referenced in all other pages.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("src/models/**/*.js")]),t._v(" are defined as global models")]),t._v(" "),s("li",[s("code",[t._v("src/pages/**/models/**/*.js")]),t._v(" are defined as page-level models")]),t._v(" "),s("li",[t._v("global models will be loaded along with the application; page-level models are loaded on demand while in "),s("code",[t._v("production")]),t._v(" build (both will always be loaded in "),s("code",[t._v("development")]),t._v(" build)")]),t._v(" "),s("li",[t._v("page-level models can be "),s("code",[t._v(".js")]),t._v(" files in "),s("code",[t._v("models/**/*.js")]),t._v(" pattern")]),t._v(" "),s("li",[t._v("page-level models can be scanned upward to app structure, For example: if you have page "),s("code",[t._v(".js")]),t._v(" like "),s("code",[t._v("pages/a/b.js")]),t._v(", its page-level model shall be "),s("code",[t._v("pages/a/b/models/**/*.js")]),t._v(" + "),s("code",[t._v("pages/a/models/**/*.js")]),t._v("...")]),t._v(" "),s("li",[t._v("if "),s("code",[t._v("model.js")]),t._v(" is defined, the page should be a single-file-model, which means you don't have to create "),s("code",[t._v("models")]),t._v(" directory if you have only one model. So if you have "),s("code",[t._v("model.js")]),t._v(" defined, all "),s("code",[t._v(".js")]),t._v(" files defined in "),s("code",[t._v("models/**/*.js")]),t._v(" will be ignored")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("+ src\n  + models\n    - g.js\n  + pages\n    + a\n      + models\n        - a.js\n        - b.js\n        + ss\n          - s.js\n      - page.js\n    + c\n      - model.js\n      + d\n        + models\n          - d.js\n        - page.js\n      - page.js\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("the global model is "),s("code",[t._v("src/models/g.js")])]),t._v(" "),s("li",[t._v("the page-level models for "),s("code",[t._v("/a")]),t._v(" is "),s("code",[t._v("src/pages/a/models/{a,b,ss/s}.js")])]),t._v(" "),s("li",[t._v("the page-level model for "),s("code",[t._v("/c")]),t._v(" is "),s("code",[t._v("src/pages/c/model.js")])]),t._v(" "),s("li",[t._v("the page-level models for "),s("code",[t._v("/c/d")]),t._v(" are "),s("code",[t._v("src/pages/c/model.js, src/pages/c/d/models/d.js")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration-and-plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-and-plugins","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration and plugins")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("The previous configuration in "),e("code",[this._v("src/dva.js")]),this._v(" has been deprecated, and will remove support in next major release.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Create a new "),e("code",[this._v("app.js")]),this._v(" in the "),e("code",[this._v("src")]),this._v(" directory with the following contents:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dva "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dva-logger'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[this._v("#")]),this._v(" FAQ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"page-component-is-not-re-rendered-whenever-url-changed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-component-is-not-re-rendered-whenever-url-changed","aria-hidden":"true"}},[this._v("#")]),this._v(" Page component is not re-rendered whenever url changed?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you have "),e("code",[this._v("connect")]),this._v(" data in "),e("code",[this._v("layouts/index.js")]),this._v(", "),e("code",[this._v("umi/withRouter")]),this._v(" is required")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" withRouter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umi/withRouter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mapStateToProps"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LayoutComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"how-to-access-store-or-dispatch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-access-store-or-dispatch","aria-hidden":"true"}},[this._v("#")]),this._v(" How to access "),e("code",[this._v("store")]),this._v(" or "),e("code",[this._v("dispatch")]),this._v("?")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_store\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("g_app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dispatch\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"how-to-disable-load-on-demand-for-component-and-models"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-disable-load-on-demand-for-component-and-models","aria-hidden":"true"}},[this._v("#")]),this._v(" How to disable load on demand for "),e("code",[this._v("component")]),this._v(" and "),e("code",[this._v("models")]),this._v("?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Add config to "),e("code",[this._v(".umirc.js")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umi-plugin-react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dva"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          dynamicImport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" undefined "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config in dva")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        dynamicImport"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" undefined   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// root config will be inherited as well")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"page-component-is-not-re-rendered-whenever-url-is-changed-while-connect-data-in-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-component-is-not-re-rendered-whenever-url-is-changed-while-connect-data-in-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Page component is not re-rendered whenever url is changed while "),e("code",[this._v("connect")]),this._v(" data in "),e("code",[this._v("layout")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Check the order of "),e("code",[this._v("connect")]),this._v(", "),e("code",[this._v("withRouter")]),this._v(" usage")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" withRouter "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umi/withRouter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withRouter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"references"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);e.default=n.exports}}]);