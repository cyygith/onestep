require('./app.scss');

var Vue = require('vue');
var logoSrc =  require('./logo.jpg');


new Vue({
  el: "#app",
  template: "<h1>{{ msg }}</h1>",
  data () {
    return {
      msg: 'Hello nice to meet you!Elling'
    }
  },
  render (h) {
    return (
      h('div', [
        h('img', {
          domProps: {
            src: logoSrc,
            alt: 'logo',
            className: 'logo'
          }
        }),
        h('h1', this.msg)
      ])
    )
  }
});
