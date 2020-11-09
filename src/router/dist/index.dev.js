"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '*',
  name: '404',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/components/404'));
    });
  }
}, {
  path: '/',
  name: 'Home',
  type: '/',
  redirect: '/',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Home.vue'));
    });
  },
  children: [{
    path: '/',
    meta: {
      title: '雪后燕瑶池,人间第一枝'
    },
    components: {
      "default": function _default() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/index/index.vue'));
        });
      },
      top: function top() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/components/nav/header'));
        });
      }
    }
  }]
}, {
  path: '/notes',
  name: 'notes',
  type: '/notes',
  redirect: '/notes',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Home.vue'));
    });
  },
  children: [{
    path: '/notes',
    meta: {
      title: '雪后燕瑶池,人间第一枝'
    },
    components: {
      "default": function _default() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/notes/index.vue'));
        });
      },
      top: function top() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/components/nav/header'));
        });
      }
    }
  }]
}, {
  path: '/resume',
  name: 'resume',
  type: '/resume',
  redirect: '/resume',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Home.vue'));
    });
  },
  children: [{
    path: '/resume',
    meta: {
      title: '雪后燕瑶池,人间第一枝'
    },
    components: {
      "default": function _default() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/resume/index.vue'));
        });
      },
      top: function top() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/components/nav/header'));
        });
      }
    }
  }]
}, {
  path: '/detail',
  name: 'detail',
  type: '/detail',
  redirect: '/detail',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Home.vue'));
    });
  },
  children: [{
    path: '/detail',
    meta: {
      title: '文章内容'
    },
    components: {
      "default": function _default() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/notes/detail.vue'));
        });
      },
      top: function top() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/components/nav/header'));
        });
      }
    }
  }]
}, {
  path: '/essays',
  name: 'essays',
  type: '/essays',
  redirect: '/essays',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Home.vue'));
    });
  },
  children: [{
    path: '/essays',
    meta: {
      title: '雪后燕瑶池,人间第一枝'
    },
    components: {
      "default": function _default() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/essays/index.vue'));
        });
      },
      top: function top() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/components/nav/header'));
        });
      }
    }
  }]
}, {
  path: '/guestbook',
  name: 'guestbook',
  type: '/guestbook',
  redirect: '/guestbook',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Home.vue'));
    });
  },
  children: [{
    path: '/guestbook',
    meta: {
      title: '雪后燕瑶池,人间第一枝'
    },
    components: {
      "default": function _default() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/guestbook/index.vue'));
        });
      },
      top: function top() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/components/nav/header'));
        });
      }
    }
  }]
}, {
  path: '/editor',
  name: 'editor',
  type: '/editor',
  redirect: '/editor',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/Home.vue'));
    });
  },
  children: [{
    path: '/editor',
    meta: {
      title: '雪后燕瑶池,人间第一枝'
    },
    components: {
      "default": function _default() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/views/editor/index.vue'));
        });
      },
      top: function top() {
        return Promise.resolve().then(function () {
          return _interopRequireWildcard(require('@/components/nav/header'));
        });
      }
    }
  }]
}];
var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};

var router = new _vueRouter["default"]({
  mode: 'history',
  routes: routes
});
router.afterEach(function () {
  window.scrollTo(0, 0);
});
var _default2 = router;
exports["default"] = _default2;