document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin);

  // ScrollTrigger.matchMedia({
  //   "(min-width: 1181px)": function () {
  //     const smoother = ScrollSmoother.create({
  //       smooth: 2,
  //       effects: true,
  //       // normalizeScroll: false,
  //       smoothTouch: 0.2,
  //     })
  //   },
  // })

  ScrollTrigger.matchMedia({
    "(min-width: 1181px)": function () {
      // let aboutTl = gsap
      //   .timeline({
      //     paused: true,
      //     ease: "power3.out",
      //   })
      //   .from(".aboutpage__image__text", {
      //     yPercent: 90,
      //     duration: 1,
      //     autoAlpha: 1,
      //   });

      // ScrollTrigger.create({
      //   trigger: ".aboutpage__image",
      //   pin: true,
      //   start: "bottom bottom",
      //   endtrigger: ".timeline",
      //   end: "bottom top-=" + window.innerHeight,
      //   end: () => "bottom top-=" + window.innerHeight,
      //   toggleActions: "play none none none",
      //   animation: aboutTl,
      //   scrub: true,
      // });
    },
  })

  const smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    // normalizeScroll: false,
    smoothTouch: 0,
  })

  $("body").removeClass("preloading");

  showLoadingScreen = () => {
    let isShown = localStorage.getItem("isShown");
    if (isShown != "showed") {
      $(".loading").show();
      let loadingTl = gsap
        .timeline({
          paused: true,
          opacity: 0,
          autoAlpha: 1,
        })
        .from(".loading__logo", { autoAlpha: 0 })
        .from("#background .path", {
          drawSVG: "100% 99%",
          autoAlpha: 0,
          duration: 2,
        })
        .from("#circle", { xPercent: 100, autoAlpha: 0, duration: .3 })
        .from("#text", { yPercent: 100, autoAlpha: 0, duration: .3 })
        .to(".loading", { yPercent: -100, duration: .3 }, "+=.5")
        .from(".header", { yPercent: -100, duration: .2, autoAlpha: 0 })
        .from(
          ".banner__inner__caption",
          { yPercent: 100, duration: 1, autoAlpha: 0 },
          "<"
        );
      loadingTl.play(), $("body").removeClass("active");
      localStorage.setItem("isShown", "showed");
    } else {
      $(".loading").hide();
      $("body").removeClass("active");
    }
  };

  $(".loading").addClass("loaded");
  // loadingTl.play();
  showLoadingScreen();

  // let bannerTl = gsap
  //   .timeline({
  //     paused: true,
  //     opacity: 0,
  //     autoAlpha: 1,
  //   })
  //   .to(".banner__svg rect", { strokeWidth: 1000, autoAlpha: 1, duration: 1 })
  //   .to(".banner__inner__caption h1", { color: "#35393b00", duration: 1 }, "<")
  //   .from(
  //     ".banner__inner__caption h6",
  //     { y: 30, autoAlpha: 0, duration: 1 },
  //     "<"
  //   );

  // ScrollTrigger.create({
  //   trigger: ".banner",
  //   start: "bottom bottom+=" + -150,
  //   endtrigger: ".about__inner__text",
  //   end: "bottom top-=" + window.innerHeight + 500,
  //   end: () => "bottom top-=" + window.innerHeight + 500,
  //   toggleActions: "play none none reverse",
  //   animation: bannerTl,
  //   // markers: true,
  // });

  // gsap.set(".header__enquiry__form", { yPercent: -100 });
  let enquiryFormTl = gsap
    .timeline({
      paused: true,
      opacity: 0,
      stagger: 0.2,
      autoAlpha: 1,
    })
    .from(".header__enquiry__form", { autoAlpha: 1 })
    .from(".header__enquiry__form", {
      yPercent: -100,
      duration: 0.2,
      autoAlpha: 0,
    })
    .from(".header__enquiry__form .images__block img", {
      xPercent: 150,
      stagger: 0.2,
      autoAlpha: 0,
    })
    .from(
      ".header__enquiry__form .plane-svg path",
      { drawSVG: "100% 99%" },
      "-=0.5"
    )
    .from(
      ".header__enquiry__form .form h5 span",
      { xPercent: 50, autoAlpha: 0 },
      "-=0.5"
    )
    .from(
      ".header__enquiry__form .form form",
      { xPercent: 50, autoAlpha: 0 },
      "-=0.5"
    )
    .from(
      ".header__enquiry__form .form .submit",
      { xPercent: 50, autoAlpha: 0 },
      "-=0.5"
    )
    .from(
      ".header__enquiry__form .close_btn_svg path",
      { drawSVG: "100% 99%" },
      "-=0.5"
    );

  $(".enquiry_floating_btn,.detail__page__enquiry, .enquiry_now_pop_up, .download_brochure").on("click", function (e) {
    e.preventDefault();
    $(".enquiry_floating_btn").addClass("active");
    $("html, body").animate({ scrollTop: 0 }, "fast");
    enquiryFormTl.play();
    $("body").addClass("active");
  });
  $(".close__form").on("click", function () {
    enquiryFormTl.reverse();
    $(".enquiry_floating_btn").removeClass("active");
    $("body").removeClass("active");
  });

  gsap.set(
    ".privilege__top,.privilege__footer h3,.privilege__footer ul li,.privilege__wrap__logo,.privilege__inner h4",
    {
      autoAlpha: 1,
    }
  );
  let privilegeTl = gsap
    .timeline({
      paused: true,
      ease: "power3.out",
    })
    .from(".privilege__wrap__logo", { y: 50, duration: 4, autoAlpha: 0 })
    .to(".privilege__wrap", { yPercent: -100, duration: 3 })
    .from(".privilege__top", { y: 20, duration: 2, autoAlpha: 0 })
    .from(".privilege__inner h4", { y: 20, duration: 2, autoAlpha: 0 })
    .from(".privilege__footer h3", { y: 20, duration: 2, autoAlpha: 0 })
    .from(".privilege__footer ul li", {
      y: 20,
      duration: 2,
      autoAlpha: 0,
      stagger: 0.2,
    });

  ScrollTrigger.create({
    trigger: ".privilege",
    pin: true,
    start: "top top",
    endtrigger: ".imp__links",
    end: "bottom top-=" + window.innerHeight,
    end: () => "bottom top-=" + window.innerHeight,
    toggleActions: "play none none reverse",
    animation: privilegeTl,
    scrub: true,
  });

  let aboutSectionTl = gsap
    .timeline({
      paused: true,
      defaults: { opacity: 0, autoAlpha: 1, ease: "power3.out", duration: 1.5 },
    })
    .from(".about__inner__text h2", { y: 100 })
    .from(".about__inner__text p", { y: 100 }, "-.1")
    .from(
      ".about__inner__images img",
      { xPercent: -50, yPercent: 100, stagger: 0.2 },
      "-.1"
    )
    .from(".about__inner__more h3", { y: 150, duration: 1 }, "+.5")
    .from(".about__inner__more ul li", { y: 20, stagger: 0.2 }, "+.6");

  ScrollTrigger.create({
    trigger: ".about",
    start: "top-=400px",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
    animation: aboutSectionTl,
    // markers: true,
  });

  // let aboutSectionTl = gsap
  // 	.timeline({
  // 		paused: true,
  // 		defaults: { opacity: 0, autoAlpha: 1, ease: "power3.out", duration: 1.5 },
  // 	})
  // 	.from(".about__inner__text h2", { y: 2000, duration: 3.5 })
  // 	.from(".about__inner__text p", { y: 100, duration: 3.5 })
  // 	.from(
  // 		".about__inner__images img",
  // 		{ xPercent: 150, stagger: 0.2, duration: 3 },
  // 		"<"
  // 	)
  // 	.from(".about__inner__more h3", { y: 20 }, "<")
  // 	.from(".about__inner__more ul li", { y: 20, stagger: 0.2 }, "<");

  // ScrollTrigger.create({
  // 	trigger: ".about",
  // 	start: "top-=100%",
  // 	end: "bottom-=70%",
  // 	endtrigger: ".property",
  // 	toggleActions: "play none none reverse",
  // 	animation: aboutSectionTl,
  // 	scrub: true,
  // 	markers: true,
  // });

  var sections = gsap.utils.toArray(".property__type__block");

  sections.forEach((section) => {
    let image = section.querySelector("img");
    let rightSection = section.querySelector(".info");
    let blockTl = gsap.timeline({
      paused: true,
      defaults: { opacity: 0, autoAlpha: 1, ease: "power3.out", duration: 1.5 },
      scrollTrigger: {
        trigger: section,
        start: "top-=300%",
        end: "+=10%",
        toggleActions: "play none none reverse",
      },
    });
    // blockTl.from(image, { x: -100 }).
    blockTl.from(rightSection, { x: 100 }, "<");
  });

  let titleTl = gsap
    .timeline({
      paused: true,
      defaults: { opacity: 0, autoAlpha: 1, ease: "power3.out", duration: 1.5 },
    })
    .from(".property .title h6 span", { width: 0 }, "-.1");

  ScrollTrigger.create({
    trigger: ".property",
    start: "top-=400px",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
    animation: titleTl,
    // markers: true,
  });

  let aboutVideoTl = gsap
    .timeline({
      paused: true,
      ease: "power3.out",
    })
    .to(".about__random__video", { yPercent: -100, duration: 5, delay: 1 });

  ScrollTrigger.create({
    trigger: ".about__random",
    pin: true,
    start: "top top",
    endtrigger: ".leadership",
    end: "bottom top-=" + window.innerHeight,
    end: () => "bottom top-=" + window.innerHeight,
    toggleActions: "play none none reverse",
    animation: aboutVideoTl,
    scrub: true,
  });

  let projectEnquiryFormTl = gsap
    .timeline({
      paused: true,
      opacity: 0,
      stagger: 0.2,
      autoAlpha: 1,
    })
    .from(".project__enquiry__form", { autoAlpha: 1 })
    .from(".project__enquiry__form", {
      yPercent: -100,
      duration: 0.2,
      autoAlpha: 0,
    })
    .from(".project__enquiry__form .images__block img", {
      xPercent: 150,
      stagger: 0.2,
      autoAlpha: 0,
    })
    .from(
      ".project__enquiry__form .plane-svg path",
      { drawSVG: "100% 99%" },
      "-=0.5"
    )
    .from(
      ".project__enquiry__form .form h5 span",
      { xPercent: 50, autoAlpha: 0 },
      "-=0.5"
    )
    .from(
      ".project__enquiry__form .form form",
      { xPercent: 50, autoAlpha: 0 },
      "-=0.5"
    )
    .from(
      ".project__enquiry__form .form .submit",
      { xPercent: 50, autoAlpha: 0 },
      "-=0.5"
    )
    .from(
      ".project__enquiry__form .close_btn_svg path",
      { drawSVG: "100% 99%" },
      "-=0.5"
    );

  $(".project_enquiry_form").on("click", function (e) {
    e.preventDefault();
    projectEnquiryFormTl.play();
    $("body").addClass("active");
  });
  $(".project__enquiry__form .close__form").on("click", function () {
    projectEnquiryFormTl.reverse();
    $("body").removeClass("active");
  });

  gsap.set(".main__menu", { autoAlpha: 1 });
  let menuTl = gsap
    .timeline({
      paused: true,
      opacity: 0,
      autoAlpha: 1,
    })
    .from(".main__menu", { yPercent: -100, duration: 0.2 })
    .from("#close_menu path", { drawSVG: "100% 99%" })
    .from(".main__menu a", { y: -50, autoAlpha: 0 }, "<");

  $(".header__menu").on("click", function () {
    $(".main__menu__close,body").addClass("active");
    menuTl.play();
  });

  $(document).on("click", ".main__menu__close.active", function () {
    $(".main__menu__close,body").removeClass("active");
    menuTl.reverse();
  });

  // let subMenuTl = gsap
  // 	.timeline({
  // 		paused: true,
  // 		opacity: 0,
  // 		autoAlpha: 1,
  // 	})
  // 	.from(".sub__menu", { yPercent: -100, duration: 0.2 })
  // 	.from("#close_submenu path", { drawSVG: "100% 99%" })
  // 	.from(".sub__menu a", { y: -50, autoAlpha: 0 }, "<");

  // $(".main__menu__section-links ul li a").on("click", function () {
  // 	$(".sub__menu__close,body").addClass("active");
  // 	subMenuTl.play();
  // });

  // $(document).on("click", ".sub__menu__close.active", function () {
  // 	$(".sub__menu__close,body").removeClass("active");
  // 	subMenuTl.reverse();
  // });

  // let cursor = document.querySelector(".cursor");
  // let cursorScale = document.querySelectorAll(".cursor-scale, a");
  // let mouseX = 0;
  // let mouseY = 0;

  // gsap.to({}, 0.01, {
  //   repeat: -1,
  //   onRepeat: function () {
  //     gsap.set(cursor, {
  //       css: {
  //         left: mouseX,
  //         top: mouseY,
  //       },
  //     });
  //   },
  // });

  // window.addEventListener("mousemove", (e) => {
  //   mouseX = e.clientX;
  //   mouseY = e.clientY;
  // });

  // cursorScale.forEach((link) => {
  //   link.addEventListener("mousemove", (e) => {
  //     cursor.classList.add("grow");
  //     if (link.classList.contains("small")) {
  //       cursor.classList.remove("grow");
  //       cursor.classList.remove("grow-close");
  //       cursor.classList.add("grow-small");
  //     }
  //     if (link.classList.contains("close")) {
  //       cursor.classList.remove("grow");
  //       cursor.classList.add("grow-close");
  //     }
  //   });

  //   link.addEventListener("mouseleave", () => {
  //     cursor.classList.remove("grow");
  //     cursor.classList.remove("grow-small");
  //     cursor.classList.remove("grow-close");
  //   });
  // });
  gsap.set(".slideout", { autoAlpha: 1 });
  let qualitySlideOut = gsap
    .timeline({
      paused: true,
      opacity: 0,
      autoAlpha: 1,
    })
    .from("#quality", { xPercent: -100, duration: 0.2, autoAlpha: 0 })
    .from("#quality .close_btn_svg path", { drawSVG: "100% 99%" })
    .from(
      "#quality .slideout__inner__row__image",
      { x: -50, autoAlpha: 0 },
      "<"
    )
    .from("#quality .slideout__inner__row__text", { x: -50, autoAlpha: 0 });

  let philosophySlideOut = gsap
    .timeline({
      paused: true,
      opacity: 0,
      autoAlpha: 1,
    })
    .from("#philosophy", { xPercent: -100, duration: 0.2, autoAlpha: 0 })
    .from("#philosophy .close_btn_svg path", { drawSVG: "100% 99%" })
    .from(
      "#philosophy .slideout__inner__row__image",
      { x: -50, autoAlpha: 0 },
      "<"
    )
    .from("#quality .slideout__inner__row__text", { x: -50, autoAlpha: 0 });

  $("#quality__id").on("click", function (e) {
    e.preventDefault();
    qualitySlideOut.play();
  });

  $("#quality .slideout__close").on("click", function (e) {
    e.preventDefault();
    qualitySlideOut.reverse();
  });

  $("#philosophy__id").on("click", function (e) {
    e.preventDefault();
    philosophySlideOut.play();
  });

  $("#philosophy .slideout__close").on("click", function (e) {
    e.preventDefault();
    philosophySlideOut.reverse();
  });




  let backToTopTl = gsap
    .timeline({
      paused: true,
      ease: "power3.out",
    })
    .from(".backtotop svg circle", {
      drawSVG: "100% 99%",
      autoAlpha: 0,
      duration: .5,
    })
    .from(".backtotop svg path", {
      drawSVG: "100% 99%",
      autoAlpha: 0,
      duration: .5,
    });

  ScrollTrigger.create({
    trigger: ".backtotoptrigger",
    pin: false,
    start: "top top",
    end: "bottom bottom",
    toggleActions: "play none none reverse",
    animation: backToTopTl,
    scrub: false,
  });

  window.onload = function () {
    ScrollTrigger.refresh();
  };


  var timesRun = 0;
  var interval = setInterval(function () {
    timesRun += 1;
    if (timesRun === 2) {
      clearInterval(interval);
    }
    ScrollTrigger.refresh();
  }, 5000);


});





