$(document).ready(function () {
	(showDisclaimer = () => {
		"true" != localStorage.getItem("isAccepted")
			? $("#disclaimerModal").modal("show")
			: $("#disclaimerModal").modal("hide");
	}),
		showDisclaimer(),
		$("#disclaimerModal .modal-footer span").on("click", function (e) {
			e.preventDefault(),
				localStorage.setItem("isAccepted", "true"),
				$("#disclaimerModal").modal("hide");
		}),
		$(".featured__projects__slider").slick({
			dots: !1,
			arrows: !0,
			infinite: false,
			speed: 1e3,
			autoplay: false,
			cssEase: "linear",
			speed: 700,
			slidesToShow: 1.7,
			slidesToScroll: 1,
			centerMode: !1,
			variableWidth: !0,
		}),

		$(".property_sub_category_filter").slick({
			dots: !1,
			arrows: !0,
			infinite: false,
			speed: 1e3,
			autoplay: false,
			cssEase: "linear",
			speed: 700,
			slidesToShow: 1.7,
			slidesToScroll: 1,
			centerMode: !1,
			variableWidth: !0,
		}),

		$(".featured__projects__right").on("click", function () {
			$(".featured__projects__slider .slick-next").hasClass("slick-disabled")
				? ($(this).css("opacity", ".3"),
					$(".featured__projects__left").css("opacity", "1"))
				: $(".featured__projects__left").css("opacity", "1"),
				$(".featured__projects__slider .slick-next").trigger("click");
		})
	$(".featured__projects__left").on("click", function () {
		$(".featured__projects__slider .slick-prev").hasClass("slick-disabled")
			? ($(this).css("opacity", ".3"),
				$(".featured__projects__right").css("opacity", "1"))
			: $(".featured__projects__right").css("opacity", "1"),
			$(".featured__projects__slider .slick-prev").trigger("click");
	})

	$(".service__slider").slick({
		dots: !1,
		arrows: !0,
		infinite: !1,
		speed: 1e3,
		autoplay: false,
		speed: 700,
		slidesToShow: 2,
		centerMode: !1,
		variableWidth: !0,
	}),
		$(".services__slider").slick({
			dots: !0,
			arrows: !0,
			infinite: false,
			speed: 1e3,
			cssEase: "linear",
			autoplay: false,
			speed: 700,
			centerMode: !1,
			variableWidth: !0,
		}),
		$(".tenants__slider").slick({
			dots: !0,
			arrows: !0,
			infinite: false,
			speed: 1e3,
			cssEase: "linear",
			autoplay: false,
			speed: 700,
			centerMode: !1,
			variableWidth: !0,
		}),
		$(".service__slider").slick({
			dots: !1,
			arrows: !0,
			infinite: !1,
			speed: 1e3,
			autoplay: false,
			speed: 700,
			slidesToShow: 2,
			centerMode: !1,
			variableWidth: !0,
		}),
	$(".top__projects__slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: "swing",
		arrows: !1,
		speed: 700,
		dots: !0,
	});
	const e = $(".details__silder__block");
	function i(e) {
		e.preventDefault();
		const i = e.data.$slider;
		e.originalEvent.deltaY > 0 ? i.slick("slickPrev") : i.slick("slickNext");
	}
	
	((e.on("init", () => {
		!(function (e) {
			$(window).on("wheel", {
				$slider: e,
			}, i);
		})(e);
	}).slick({
		vertical: !0,
		verticalSwiping: !0,
		dots: !0,
		arrows: !1,
		infinite: !1,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
	}),
	$(".container__width").length > 0)
	)

	$(".accordian__block").not(".active").children("ul").slideUp("slow"),
		$(".accordian__block h4").on("click", function (e) {
			e.preventDefault(),
				$(this).parent(".accordian__block").hasClass("active") ||
				($(this).siblings("ul").slideDown(),
					$(this)
						.parent(".accordian__block")
						.addClass("active")
						.siblings()
						.removeClass("active"),
					$(this)
						.parent(".accordian__block")
						.siblings()
						.children("ul")
						.slideUp());
		}),
		new WOW().init({
			boxClass: "wow-p",
			animateClass: "animated",
			offset: 100,
			mobile: !1,
			live: !0,
			callback: function (e) {
				setInterval(function () {
					$(e).removeClass("no-animate");
				}, 1500);
			},
		}),
	// 	$grid = $(".grid").isotope({
	// 		itemSelector: ".press__listing__block,.testimonials__listing__block",
	// 		// layoutMode: "fitRows",
	// 		transitionDuration: "1.5s",
	// 		transitionDuration: 800,
	// 		masonry: {
	// 			columnWidth: ".press__listing__block,.testimonials__listing__block",
	// 			gutter: 50,
	// 			transitionDuration: "1.5s",
	// 			transitionDuration: 800,
	// 		},
	// 	});
	// 	var filterFns = {};
	// $(".filters-button-group").on("click", ".filter", function () {
	// 	var filterValue = $(this).attr("data-filter");
	// 	// use filterFn if matches value
	// 	filterValue = filterFns[filterValue] || filterValue;
	// 	$grid.isotope({ filter: filterValue });
	// }),
	// 	$(".filters-button-group").each(function (i, buttonGroup) {
	// 		var $buttonGroup = $(buttonGroup);
	// 		$buttonGroup.on("click", ".filter", function () {
	// 		$buttonGroup.find(".active").removeClass("active");
	// 		$(this).addClass("active");
	// 	});
		// }),
		(function () {
			function e() {
				event.preventDefault(),
					$("#youtube").attr("src", ""),
					$("#video__modal").modal("hide");
			}
			$(".open__video").on("click", function (e) {
				e.preventDefault();
				var i =
					"//www.youtube.com/embed/" +
					$(this).attr("data-youtube-id") +
					"?autoplay=1&rel=0";

				$("#youtube").attr("src", i), $("#video__modal").modal("show");
			}),
				$("body").on("click", ".close-video-modal,#video__modal", function (i) {
					e();
				}),
				$("body").keyup(function (i) {
					27 == i.keyCode && e();
				});
		})();
	let t = $(".header__projects__slider").slick({
		dots: !0,
		arrows: !1,
		infinite: !1,
		speed: 700,
		slidesToShow: 1,
		centerMode: !1,
		draggable: !1,
		variableWidth: !0,
	});
	$(".header__featured").on("click", function (e) {
		e.preventDefault(), $(".header__projects").toggleClass("active");
	}),
		$(".header__projects .close__slider").on("click", function (e) {
			e.preventDefault(),
				$(".header__projects").fadeOut(),
				t.slick("slickSetOption", "draggable", !1, !1),
				setTimeout(() => {
					$(".header__projects,body").removeClass("open"),
						$(".header__projects,body").removeClass("active"),
						$(".header__projects__slider").slick("slickGoTo", 0),
						$(".header__projects").fadeIn();
				}, 1e3);
		}),
		$(".header__projects__slider").on("click", function (e) {
			$(".header__projects").addClass("open"),
				t.slick("slickSetOption", "draggable", !0, !1);
		}),
		$(".featured__projects__slider .project__link").on("click", function () {
			$(".project__details__modal,body").addClass("active");
		}),
		$(".project__details__modal__close").on("click", function (e) {
			e.preventDefault(),
				$(".project__details__modal,body").removeClass("active");
		}),
		$(".property__search").on("click", function (e) {
			e.preventDefault(), $(".searchbox").addClass("active");
		}),
		$(".property__heading .searchbox .input-group button").on(
			"click",
			function (e) {
				e.preventDefault(), $(".searchbox").removeClass("active");
			}
		),
		$(".legend__slider").slick({
			arrows: !0,
			infinite: !1,
			variableWidth: !0,
			asNavFor: ".timeline__slider",
		}),
		$(".timeline__slider").slick({
			arrows: !1,
			slidesToShow: 1,
			infinite: !1,
			slidesToScroll: 1,
			asNavFor: ".legend__slider",
			fade: !0,
			dots: !1,
			focusOnSelect: !0,
		}),
		$(".timeline__slide__left").css("opacity", ".3"),
		$(".timeline__slide__right").on("click",function () {
				$(".legend__slider .slick-next").hasClass("slick-disabled")
					? ($(this).css("opacity", ".3"),
						$(".timeline__slide__left").css(
							"opacity",
							"1"
						))
					: $(".timeline__slide__left").css(
						"opacity",
						"1"
					),
					$(".legend__slider .slick-next").trigger("click");
			}
		),
		$(".timeline__slide__left").on(
			"click",
			function () {
				$(".slick-prev").hasClass("slick-disabled")
					? ($(this).css("opacity", ".3"),
						$(".timeline__slide__right").css(
							"opacity",
							"1"
						))
					: $(".timeline__slide__right").css(
						"opacity",
						"1"
					),
					$(".legend__slider .slick-prev").trigger("click");
			}
		),
		$(".year[data-slide]").click(function (e) {
			e.preventDefault();
			var i = $(this).data("slide");
			$(".timeline__slider").slick("slickGoTo", i - 1);
		}),
		$(".timeline__projects__slider").slick({
			dots: !0,
			arrows: !1,
			infinite: !1,
			speed: 700,
			slidesToShow: 1,
			centerMode: !1,
			variableWidth: !0,
		}),
		$(".timeline__projects__slider").on("click", function (e) {
			e.preventDefault(), $(".timeline__projects,body").addClass("active");
		}),
		$(".timeline__projects .close__slider").on("click", function (e) {
			e.preventDefault(),
				$(".timeline__projects,body").removeClass("active"),
				$(".timeline__projects__slider").slick("slickGoTo", 0);
		}),
		$(".project__highlight__slider").slick({
			dots: !1,
			arrows: !0,
			infinite: !1,
			speed: 1e3,
			autoplay: false,
			autoplaySpeed: 2e3,
			speed: 700,
			slidesToShow: 1.7,
			slidesToScroll: 1,
			centerMode: !1,
			variableWidth: !0,
		}),
		$(".amenities__slider").slick({
			dots: !1,
			arrows: !0,
			infinite: !1,
			speed: 1e3,
			autoplay: false,
			autoplaySpeed: 2e3,
			speed: 700,
			slidesToShow: 1.7,
			slidesToScroll: 1,
			centerMode: !1,
			variableWidth: !0,
		}),

		$(".images__slider").slick({
			dots: !0,
			arrows: !1,
			infinite: !0,
			speed: 700,
			slidesToShow: 1.7,
			slidesToScroll: 1,
		}),
		$(".map__tabs__block").each(function (e) {
			setTimeout(() => {
				let e = $(this).height();
				const i = $(".map__tabs__block.active").height();
				$(".map__tabs").css("height", i),
					$(this).css({
						height: e,
						transform: `translateY(-${e}px)`,
					}),
					$(this).hasClass("active") &&
					$(this).css({
						height: e,
						transform: "translateY(0px)",
					});
			}, 2000);
		}),
		setTimeout(() => {
			$(".map__title button:first-child").click();
		}, 500),
		$("body,html").on("click", ".map__title button", function () {
			let e = $(this).text(),
				i = $(this).data("tab");
				$(this).addClass("active").siblings("button").removeClass("active"),
				$(`#${i}`)
					.addClass("active")
					.siblings(".map__tabs__block")
					.removeClass("active"),
				$(".map__tabs__block").each(function (e) {
					setInterval(() => {
						let e = $(this).height();
						const i = $(".map__tabs__block.active").height();
						$(".map__tabs").css("height", i),
							$(this).css({
								height: e,
								transform: `translateY(-${e}px)`,
							}),
							$(this).hasClass("active") &&
							$(this).css({
								height: e,
								transform: "translateY(0px)",
							});
					}, 1000);
				});
		}),
		$(".gallery__slider").slick({
			dots: !0,
			arrows: !1,
			centerMode: false,
			rows: 2,
			infinite: false,
			speed: 700,
			variableWidth: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: false,
						dots: !0,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		}),
		$(".map__modal__slider").slick({
			dots: !1,
			arrows: !0,
			infinite: !1,
			speed: 700,
			fade: !0,
			slidesToShow: 1,
			slidesToScroll: 1,
		}),
		$("body").keydown(function (e) {
			27 == e.keyCode &&
				($(".map__modal__close").trigger("click"),
					$(".project__details__modal,body").removeClass("active"));
		}),
		$("#map__gallery .gallery__slider .item").on("click", function () {
			$(".map__modal").addClass("active");
			var e = $(this).data("slide");
			$(".map__modal__slider").slick("slickGoTo", e - 1);
		}),
		$(".map__modal__close").on("click", function () {
			$(".map__modal").removeClass("active");
		}),
		$("#map__floorplan").length > 0 &&
		$(".xzoom").xzoom({
			position: "#zoom-preview",
			tint: "#ffa200",
		}),
		$(".map__tabs__block .floorplan__legends__list ul li").on("click", function () {
				let e = $(this).data("floor");
				$(this).addClass("active").siblings("li").removeClass("active"),
					$(`#${e}`)
						.addClass("active xzoom")
						.siblings("img")
						.removeClass("active xzoom"),
					$(".xzoom").xzoom({
						position: "#zoom-preview",
						tint: "#ffa200",
					});
			}
		),
		$(".related__blog__slider").slick({
			dots: !1,
			arrows: !1,
			infinite: !1,
			speed: 700,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						infinite: !0,
						arrows: !1,
						dots: !0,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: !0,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: !0,
					},
				},
			],
		}),
		$(".amenities__list__slider").slick({
			vertical: !0,
			verticalSwiping: !0,
			centerMode: !0,
			centerPadding: "100px",
			slidesToShow: 3,
			focusOnSelect: !0,
			dots: !1,
			infinite: !0,
			speed: 1e3,
			asNavFor: ".amenities__gallery__slider",
		}),
		$(".amenities__gallery__slider").slick({
			dots: !1,
			arrows: !1,
			infinite: !0,
			fade: !1,
			speed: 1e3,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: ".amenities__list__slider",
		});
	let o = $(".brands__slider").slick({
		dots: !0,
		arrows: !1,
		infinite: !1,
		speed: 700,
		centerMode: !1,
		variableWidth: !0,
	});
	$("#brands__slider").on("click", function (e) {
		e.preventDefault(), $(".brands, body").addClass("active");
	}),
		$(".brands .brands__close").on("click", function (e) {
			e.preventDefault(),
				$(".brands").fadeOut(),
				setTimeout(() => {
					$(".brands,body").removeClass("active"),
						o.slick("slickGoTo", 0),
						$(".brands").fadeIn();
				}, 2000);
		});

	$(".hospitality_brands__slider").slick({
		dots: !0,
		arrows: !1,
		infinite: !1,
		speed: 700,
		centerMode: !1,
		variableWidth: !0,
	});

	$("#hospitality__slider").on("click", function (e) {
		e.preventDefault(), $(".hospitality_brands, body").addClass("active");
	}),
		$(".hospitality_brands__close").on("click", function (e) {
			e.preventDefault(),
				$(".hospitality_brands").fadeOut(),
				setTimeout(() => {
					$(".hospitality_brands,body").removeClass("active"),
						o.slick("slickGoTo", 0),
						$(".hospitality_brands").fadeIn();
				}, 1500);
		});

	let l = $(".partners__slider").slick({
		dots: !0,
		arrows: !1,
		infinite: !1,
		speed: 700,
		centerMode: !1,
		draggable: !0,
		variableWidth: !0,
	});
	$("#partners__slider").on("click", function (e) {
		e.preventDefault(), $(".partners, body").addClass("active");
	}),
		$(".partners .partners__close").on("click", function (e) {
			e.preventDefault(),
				$(".partners").fadeOut(),
				setTimeout(() => {
					$(".partners,body").removeClass("active"),
						l.slick("slickGoTo", 0),
						$(".partners").fadeIn();
				}, 1e3);
		}),
		$("#datepicker").datepicker({
			format: "dd/mm/yyyy",
			startDate: "+1d",
		}),
		$(".faqs__section__block p").slideUp(),
		$(".faqs__section__block__title").on("click", function () {
			$(this)
				.toggleClass("active")
				.parents(".faqs__section__block")
				.siblings()
				.children(".faqs__section__block__title")
				.removeClass("active"),
				$(this)
					.siblings("p")
					.slideToggle()
					.parents(".faqs__section__block")
					.siblings()
					.children("p")
					.slideUp();
		}),
		$(".property__type__block").mouseover(function () {
			$(".property").css("background-color", $(this).data("color"));
		}),
		$(".property__type__block").mouseleave(function () {
			$(".property").css("background-color", "#fff");
		}),
		$(".project__details__modal").on("click", function () {
			$(".project__details__modal,body").removeClass("active");
		}),
		$(".quick_navigation li").on("click", function () {
			let e = $(this).data("section");
			$("html, body").animate(
				{
					scrollTop: $(`#${e}`).offset().top,
				},
				1e3
			);
		}),
		$(".important__link__slider").slick({
			dots: !1,
			arrows: !1,
			infinite: !1,
			speed: 700,
			centerMode: !1,
			variableWidth: !0,
		});
	var a = new bootstrap.Modal(document.getElementById("amenities__modal"), {
		backdrop: !1,
	});
	$(".amenities__gallery__slider img").on("click", function () {
		let e = $(this).attr("data-pop-up"),
			i = $(this).attr("title");
		$(".amenities__modal__body img").attr("src", e),
			$(".amenities__modal__body img").attr("title", i),
			$(".amenities__modal__body img").attr("alt", i),
			$(".amenities__modal__body__caption").html(i),
			setTimeout(() => {
				a.show();
			}, 500);
	}),
		$(".slick-next").hasClass("slick-disabled") &&
		$(".highlight__slide__right, ").css("opacity", ".3"),
		$(".slick-prev").hasClass("slick-disabled") &&
		$(".highlight__slide__left").css("opacity", ".3"),
		$(".highlight__slide__right").on(
			"click",
			function () {
				$(".project__highlight__slider .slick-next").hasClass("slick-disabled")
					? ($(this).css("opacity", ".3"),
						$(".highlight__slide__left").css(
							"opacity",
							"1"
						))
					: $(".highlight__slide__left").css(
						"opacity",
						"1"
					),
					$(".project__highlight__slider .slick-next").trigger("click");
			}
		),
		$(".amenities__slide__right").on("click", function () {
			$(".amenities__slider .slick-next").hasClass("slick-disabled")
				? ($(this).css("opacity", ".3"),
					$(".amenities__slide__left").css("opacity", "1"))
				: $(".amenities__slide__left").css("opacity", "1"),
				$(".amenities__slider .slick-next").trigger("click");
		}),
		$(".amenities__slide__left").on("click", function () {
			$(".amenities__slider .slick-prev").hasClass("slick-disabled")
				? ($(this).css("opacity", ".3"),
					$(".amenities__slide__right").css("opacity", "1"))
				: $(".amenities__slide__right").css("opacity", "1"),
				$(".amenities__slider .slick-prev").trigger("click");
		}),
		$(".highlight__slide__left").on(
			"click",
			function () {
				$(".slick-prev").hasClass("slick-disabled")
					? ($(this).css("opacity", ".3"),
						$(".highlight__slide__right").css(
							"opacity",
							"1"
						))
					: $(".highlight__slide__right").css(
						"opacity",
						"1"
					),
					$(".slick-prev").trigger("click");
			}
		),
		$(".services__right").on("click", function () {
			$(".slick-next").hasClass("slick-disabled")
				? ($(this).css("opacity", ".3"),
					$(".services__left").css("opacity", "1"))
				: $(".services__left").css("opacity", "1"),
				$(".services__slider .slick-next").trigger("click");
		}),
		$(".services__left").on("click", function () {
			$(".slick-prev").hasClass("slick-disabled")
				? ($(this).css("opacity", ".3"),
					$(".services__right").css("opacity", "1"))
				: $(".services__right").css("opacity", "1"),
				$(".services__slider .slick-prev").trigger("click");
		}),
		$(".tenants__right").on("click", function () {
			$(".slick-next").hasClass("slick-disabled")
				? ($(this).css("opacity", ".3"),
					$(".tenants__left").css("opacity", "1"))
				: $(".tenants__left").css("opacity", "1"),
				$(".tenants__slider .slick-next").trigger("click");
		}),
		$(".tenants__left").on("click", function () {
			$(".slick-prev").hasClass("slick-disabled")
				? ($(this).css("opacity", ".3"),
					$(".tenants__right").css("opacity", "1"))
				: $(".tenants__right").css("opacity", "1"),
				$(".tenants__slider .slick-prev").trigger("click");
		}),
		$(function () {
			var e = $(".proprtiesList").length;
			(showItems = 6),
				$(".proprtiesList").each(function () {
					0 != e &&
						($(this).find("li").length <= showItems
							? ($(this).next(".loadMore").hide(),
								$(this).children("li").show())
							: $(this)
								.children("li:lt(" + showItems + ")")
								.show());
					e--;
				});
		}),
		$(".loadMore").on("click", function () {
			$(this).siblings(".proprtiesList").children("li").show(), $(this).hide();
		}),
		$(".mastbanner__inner__links").length > 0 &&
		(setTimeout(() => {
			$(".mastbanner__inner__links").children("ul").addClass("active");
		}, 500),
			setTimeout(() => {
				$(".mastbanner__inner__links").children("ul").removeClass("active");
			}, 5e3)),
		$(".backtotop").on("click", function () {
			return (
				$("html, body").animate(
					{
						scrollTop: 0,
					},
					"slow"
				),
				!1
			);
		});

	if ($(".mastbanner__inner__footer").length) {
		var distance = $(".mastbanner__inner__footer").offset().top,
			$window = $(window);

		$window.scroll(function () {
			if ($window.scrollTop() >= distance) {
				$(".mastbanner__inner__footer").addClass("hide");
				$(".fixed__band").addClass("active");
			} else {
				$(".mastbanner__inner__footer").removeClass("hide");
				$(".fixed__band").removeClass("active");
			}
		});
	}


		let blockWidthA = ($(".services").width() - $(".container__width").width()) / 2;
		let blockWidthE = ($(".map").width() - $(".map-container").width()) / 2;
		$(".featured__projects__title,.services__slider,.tenants__slider,.featured__projects__slider").css("padding-left", blockWidthA),
			// $("").css("margin-left", a),
			$(".featured__projects__slider,.services__slider,.tenants__slider,.amenities,.project__highlight").css("padding-left", blockWidthE),

			setTimeout(() => {
				$(".top__projects__slider .slick-dots,.services__slider .slick-dots,.tenants__slider .slick-dots").css("margin-left", blockWidthA);
				$(".tenants__slider .slick-dots, .services__slider .slick-dots").css("margin-left", blockWidthE);
			}, 2e3);

			$grid = $(".grid").isotope({
				itemSelector: ".press__listing__block,.testimonials__listing__block",
				// layoutMode: "fitRows",
				transitionDuration: "1.5s",
				transitionDuration: 800,
				masonry: {
					columnWidth: ".press__listing__block,.testimonials__listing__block",
					gutter: 50,
					transitionDuration: "1.5s",
					transitionDuration: 800,
				},
			});
			var filterFns = {};
			// bind filter button click
			$(".filters-button-group").on("click", ".filter", function () {
				var filterValue = $(this).attr("data-filter");
				// use filterFn if matches value
				filterValue = filterFns[filterValue] || filterValue;
				$grid.isotope({ filter: filterValue });
			});
			// change is-checked class on buttons
			$(".filters-button-group").each(function (i, buttonGroup) {
				var $buttonGroup = $(buttonGroup);
				$buttonGroup.on("click", ".filter", function () {
					$buttonGroup.find(".active").removeClass("active");
					$(this).addClass("active");
				});
			});
		

});


