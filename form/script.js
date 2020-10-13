tion.jsJavaScript(
  // Code By Webdevtrick ( https://webdevtrick.com )
  function () {
    $("html").addClass("js");

    var contactForm = {
      container: $("#contact"),
      config: {
        effect: "slideToggle",
        speed: 200,
      },

      init: function (config) {
        $.extend(this.config, config);

        $("#c-btn").on("click", this.show);
      },

      show: function () {
        var cf = contactForm,
          container = cf.container,
          config = cf.config;

        if (container.is(":hidden")) {
          cf.close.call(container);
          container[config.effect](config.speed);
        }
      },

      close: function () {
        var $this = $("#contact");

        if ($this.find("span.close").length) return;

        $("<span class=close>-</span>")
          .prependTo(this)
          .on("click", function () {
            $this[contactForm.config.effect](contactForm.config.speed);
          });
      },
    };

    contactForm.init({
      effect: "fadeToggle",
      speed: 200,
    });
  }
)();
1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
48(
  // Code By Webdevtrick ( https://webdevtrick.com )
  function () {
    $("html").addClass("js");

    var contactForm = {
      container: $("#contact"),
      config: {
        effect: "slideToggle",
        speed: 200,
      },

      init: function (config) {
        $.extend(this.config, config);

        $("#c-btn").on("click", this.show);
      },

      show: function () {
        var cf = contactForm,
          container = cf.container,
          config = cf.config;

        if (container.is(":hidden")) {
          cf.close.call(container);
          container[config.effect](config.speed);
        }
      },

      close: function () {
        var $this = $("#contact");

        if ($this.find("span.close").length) return;

        $("<span class=close>-</span>")
          .prependTo(this)
          .on("click", function () {
            $this[contactForm.config.effect](contactForm.config.speed);
          });
      },
    };

    contactForm.init({
      effect: "fadeToggle",
      speed: 200,
    });
  }
)();
