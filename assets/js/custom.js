var baseurl = "/staging/";
var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var phone_val = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
var numeric_val = /^\d+$/;
var alphanumeric_val = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
var alphanumericspace_val = /^[a-z\d\-_\s]+$/i;
var date_val = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
var regExp = /[A-Za-z0-9_~\-!@#\$%\^&\*\(\)]+$/i;
var regExpnumbers = "/[0-9]/g;";
var whitespaces_val = /^\s+$/;
var website_val = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

$(".page_loader").fadeOut("fast");

$("form").attr("autocomplete", "off");

$("input, select, textarea").on("keydown change", function () {
  $(".error span").fadeOut();
});

$("input, select, textarea").each(function () {
  var placeholder = $(this).attr("placeholder");

  if (validateblanktext(placeholder)) {
    $(this).attr("title", placeholder);
  }
});

$(".property__listing__block p").addClass('paragraph');

$("img").each(function () {
  var placeholder = $(this).attr("alt");

  if (validateblanktext(placeholder)) {
    $(this).attr("title", placeholder);
  }
});

$('img[src^="/assets/"]').each(function() {
  var currentSrc = $(this).attr('src');
  $(this).attr('src', '/staging' + currentSrc);
});

$(".service_tab").on("click", function() {
  const service_slug = $(this).attr('data-tab');

  $(".service_tab").parent().removeClass('active');

  $(this).parent().addClass('active');

  $(".service_block").removeClass('active').addClass('d-none');

  $(".service_block[data-tab='" + service_slug + "']").addClass('active').removeClass('d-none');

  scrolltodiv("." + service_slug)
})

if($("#service_url_slug").val()) {
  scrolltodiv("." + $("#service_url_slug").val());
}

$("#contact_enquiry_phone_number, #enquiry_phone_number, #site_visit_phone_number").intlTelInput({});

$("#enquiry_form").on("submit", function(e) {
  e.preventDefault();

  $(".error span").css('display', 'none');

  var data = $(this).serialize();

  $.ajax({
    url: baseurl + "enquiry-form-details",
    data: data,
    dataType: "JSON",
    type: "POST",
    beforeSend: function() {
      $(".wait_loader").css('display', 'block');
    },
    success: function(result) {
      $(".wait_loader").css('display', 'none');
      alert(result.display_message);
      $("#enquiry_form")[0].reset();

      if($(".download_brochure.active").length) {
        const brochure_link = $(".download_brochure.active").attr('data-href');

        window.open(brochure_link, '_blank');
      }
    },
    error: function(result) {
      $(".wait_loader").css('display', 'none');
      validation_error(result);
    }
  });
});

$("#contact_enquiry_form").on("submit", function(e) {
  e.preventDefault();

  $(".error span").css('display', 'none');

  var data = $(this).serialize();

  $.ajax({
    url: baseurl + "contact-enquiry-form-details",
    data: data,
    dataType: "JSON",
    type: "POST",
    beforeSend: function() {
      $(".wait_loader").css('display', 'block');
    },
    success: function(result) {
      $(".wait_loader").css('display', 'none');
      alert(result.display_message);
      $("#contact_enquiry_form")[0].reset();
    },
    error: function(result) {
      $(".wait_loader").css('display', 'none');
      validation_error(result);
    }
  });
});

$(".enquiry_now_pop_up").on("click", function() {
  const property_id = $(this).attr('data-id');
  const property_category_id = $(this).attr('data-parent-id');

  if(property_id) {
    $("select[name='contact_enquiry_property_category_property_id']").val(property_category_id + '-' + property_id);
  }
})

$(".download_brochure").on("click", function() {
  const property_id = $(this).attr('data-id');
  const property_category_id = $(this).attr('data-parent-id');

  if(property_id) {
    $("select[name='contact_enquiry_property_category_property_id']").val(property_category_id + '-' + property_id);
  }

  $(".download_brochure").removeClass('active');

  $(this).addClass('active');
})

$("#site_visit_form").on("submit", function(e) {
  e.preventDefault();

  $(".error span").css('display', 'none');

  var data = $(this).serialize();

  $.ajax({
    url: baseurl + "site-visit-form-details",
    data: data,
    dataType: "JSON",
    type: "POST",
    beforeSend: function() {
      $(".wait_loader").css('display', 'block');
    },
    success: function(result) {
      $(".wait_loader").css('display', 'none');
      alert(result.display_message);
      $("#site_visit_form")[0].reset();
    },
    error: function(result) {
      $(".wait_loader").css('display', 'none');
      validation_error(result);
    }
  });
});

$(".property_category_projects_open").on("click", function() {
  var property_category_url_slug = $(this).attr('data-class');

  $("." + property_category_url_slug).addClass("active");
});

$(".property_status_filter li").on("click", function() {
  $(".property_status_filter li").removeClass("active");

  $(this).addClass("active");

  var property_status = $(this).attr('data-status');

  if(!property_status) {
    $(".property_blocks").fadeIn();
  } else {
    $(".property_blocks").fadeOut();

    $(".property_blocks[data-status=" + property_status + "]").fadeIn();
  }
});

$(".property_sub_category_filter li").on("click", function() {
  $(".property_sub_category_filter li").removeClass("active");

  $(this).addClass("active");

  var sub_category_id = $(this).attr('data-sub-category-id');
  var introduction_headline = $(this).attr('data-introduction-headline');
  var introduction_description = $(this).attr('data-introduction-description');

  if(sub_category_id == 0) {
    $(".property_blocks").fadeIn();
  } else {
    $(".property_blocks").fadeOut();

    $(".property_blocks[data-sub-category-id~=" + sub_category_id + "]").fadeIn();
  }

  $(".introduction_headline").html(introduction_headline);
  $(".introduction_description").html(introduction_description);
});

$(".two__row").on("click", function() {
  $(".three__row").removeClass("active");
  $(this).addClass("active");

  $(".property_blocks").css('display', 'none');

  setTimeout(function() {
    $(".property_blocks").removeClass("col-xl-4").addClass("col-xl-6");
    $(".property_blocks").fadeIn('slow');
  }, 100);
});

$(".three__row").on("click", function() {
  $(".two__row").removeClass("active");
  $(this).addClass("active");

  $(".property_blocks").css('display', 'none');

  setTimeout(function() {
    $(".property_blocks").removeClass("col-xl-6").addClass("col-xl-4");
    $(".property_blocks").fadeIn('slow');
  }, 100);
});

var magazine_pdf = $("#magazine_pdf").val();

if(magazine_pdf) {
  $("#smooth-wrapper").remove();

  var pdf = "../assets/images/magazines/" + magazine_pdf;

  var flipBook = $("#PDF_Container").flipBook(pdf, options);
}

var property_status = $("#property_status").val();
var property_sub_category_id = $("#property_sub_category_id").val();

if(property_status) {
  $(".property_status_filter li[data-status='" + property_status + "']").trigger('click');
}

if(property_sub_category_id) {
  $(".property_sub_category_filter li[data-sub-category-id~=" + property_sub_category_id + "]").trigger('click');
}

$(".view_gallery").on("click", function() {
  $(".map__title ul li[data-tab=map__gallery]").trigger('click');

  scrolltodiv(".map__tabs");
});

var product_category_url_slug = $("#product_category_url_slug").val();

if(product_category_url_slug) {
  $(".testimonials__listing__block").css('display', 'none');

  var product_block_length = $(".testimonials__listing__block." + product_category_url_slug).css('display', '');

  $(".show_all_testimonials").on("click", function() {
    $(".testimonials__listing__block").css('display', '');
  });
}

setTimeout(function() {
  var property_tab_filter = $("#property_tab_filter").val();

  if(property_tab_filter) {
    if(property_tab_filter == "gallery") {
      $(".map__title ul li[data-tab=map__gallery]").trigger('click');
      scrolltodiv(".map__tabs");
    } else if(property_tab_filter == "floor-plan") {
      $(".map__title ul li[data-tab=map__floorplan]").trigger('click');
      scrolltodiv(".map__tabs");
    } else if(property_tab_filter == "location") {
      $(".map__title ul li[data-tab=map__location]").trigger('click');
      scrolltodiv(".map__tabs");
    }
  }
}, 1500);

$("#search_type").on("change", function() {
  let location_list = $(this).find('option:selected').attr('data-locations');

  if(location_list) {
    $("#search_location option[value!='']").css('display', 'none');

    const location_array = location_list.split("||");

    $.each(location_array, function(k, location_name) {
      $("#search_location option[value='" + location_name + "']").css('display', 'block');
    });
  } else {
    $("#search_location option").css('display', 'block');
  }
});

$("#search_location").on("change", function() {
  let property_type_ids = $(this).find('option:selected').attr('data-type-ids');

  if(property_type_ids) {
    $("#search_type option[value!='']").css('display', 'none');

    const property_type_array = property_type_ids.split(" ");

    $.each(property_type_array, function(k, property_type_id) {
      $("#search_type option[value='" + property_type_id + "']").css('display', 'block');
    });
  } else {
    $("#search_type option").css('display', 'block');
  }
});

$("#property_search").on("submit", function(e) {
  e.preventDefault();

  var data = $(this).serialize();

  $.ajax({
    url: baseurl + "property-search-form-details",
    data: data,
    dataType: "JSON",
    type: "POST",
    beforeSend: function() {
      $(".wait_loader").css('display', 'block');
    },
    success: function(result) {
      $(".wait_loader").css('display', 'none');

      $(".top__projects").html(result.residentials);

      if ($(".top__projects__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        easing: "swing",
        arrows: !1,
        speed: 700,
        dots: !0
      }),

      $(".container__width").length > 0) {
        setTimeout((() => {
          $(".top__projects__slider .slick-dots").css("margin-left", e)
        }), 2e3)
      }

      scrolltodiv(".top__projects");
    },
    error: function(result) {
      $(".wait_loader").css('display', 'none');
    }
  });
});

$(".project__link").on("click", function() {
  var property_category_id = $(this).attr('data-category-id');
  var property_id = $(this).attr('data-property-id');

  var data = {property_category_id:property_category_id, property_id:property_id};

  $.ajax({
    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
    url: baseurl + "featured-project-details",
    data: data,
    dataType: "HTML",
    type: "POST",
    beforeSend: function() {
      $(".wait_loader").css('display', 'block');
    },
    success: function(result) {
      $(".wait_loader").css('display', 'none');
      $(".project__details__modal").html(result);

      let cursor = document.querySelector(".cursor");
			let cursorScale = document.querySelectorAll(".cursor-scale, a");

      cursorScale.forEach((link) => {
				link.addEventListener("mousemove", (e) => {
					cursor.classList.add("grow");
					if (link.classList.contains("small")) {
						cursor.classList.remove("grow");
						cursor.classList.remove("grow-close");
						cursor.classList.add("grow-small");
					}
					if (link.classList.contains("close")) {
						cursor.classList.remove("grow");
						cursor.classList.add("grow-close");
					}
				});

				link.addEventListener("mouseleave", () => {
					cursor.classList.remove("grow");
					cursor.classList.remove("grow-small");
					cursor.classList.remove("grow-close");
				});
			});

      $(".project__details__modal__close").on("click",(function(e){
        e.preventDefault();
        $(".project__details__modal,body").removeClass("active")
      })
      );
    },
    error: function(result) {
      $(".wait_loader").css('display', 'none');
    }
  });
});

$(".timeline_year").on("click", function() {
  var timeline_year = $(this).attr('data-id');

  $(".timeline__projects").addClass('d-none');
  
  $(".timeline__projects[data-id=" + timeline_year + "]").removeClass('d-none');
});

$("#filter_property_name").on("keydown keyup change", function(e) {
  var filter_keywords = $(this).val();

  var code = e.keyCode || e.which;

  var filter = filter_keywords.toUpperCase();
  var filter_property_name = document.getElementsByClassName("filter_property_name");

  for (i = 0; i < filter_property_name.length; i++) {
      a = filter_property_name[i].getElementsByClassName("filter_property_name_span")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          filter_property_name[i].style.display = "block";
      } else {
          filter_property_name[i].style.display = "none";
      }
  }

  if(validateblanktext(filter_keywords)) {
    $(".searchbox__suggestion").removeClass("d-none");
  } else {
    $(".filter_property_name").css('display', 'none');
    $(".searchbox__suggestion").addClass("d-none");
  }

  var filter_property_name_visible_count = $(".filter_property_name:visible").length;

  if(filter_property_name_visible_count == 0) {
    $(".searchbox__suggestion").addClass("d-none");
  }
});

$("#hospitality__slider").on("click", function(e) {
  e.preventDefault();
  $("body, .hospitality_brands").addClass('active');
});

$(".hospitality_brands .brands__close").on("click", (function(e) {
  e.preventDefault();
  $(".hospitality").fadeOut();

  setTimeout((() => {
      $("body, .hospitality_brands").removeClass("active"), o.slick("slickGoTo", 0), $(".hospitality_brands").fadeIn()
  }), 1e3)
}));

$(".emi_calculator_form_reset").on("click", function() {
  $("#loan_emi_amount, #loan_interest_amount, #loan_total_payments").html("0");
  $(".year_labels").removeClass('d-none');
  $(".month_labels").addClass('d-none');
});

function stripNonNumbers(stringValue) {
  stringValue = stringValue.replace(/\D/g, "");

  return stringValue;
}

$("#loan_amount").on("change", function() {
  let loan_amount = $(this).val();

  $("#loan_amount_range").val(loan_amount);

  if(!Number.isInteger(loan_amount)) {
    loan_amount = stripNonNumbers(loan_amount);

    $("#loan_amount, #loan_amount_range").val(loan_amount);
  }
});

$("#loan_amount_range").on("change", function() {
  let loan_amount_range = $(this).val();

  $("#loan_amount").val(loan_amount_range);
});

$("#loan_interest_rate").on("change", function() {
  let loan_interest_rate = $(this).val();

  $("#loan_interest_rate_range").val(loan_interest_rate);

  if(!floatVal.test(loan_interest_rate)) {
    loan_interest_rate = stripNonNumbers(loan_interest_rate);

    $("#loan_interest_rate, #loan_interest_rate_range").val(loan_interest_rate);
  }
});

$("#loan_interest_rate_range").on("change", function() {
  let loan_interest_rate_range = $(this).val();

  $("#loan_interest_rate").val(loan_interest_rate_range);
});

$("#loan_tenure").on("change", function() {
  let loan_tenure = $(this).val();

  $("#loan_tenure_range").val(loan_tenure);

  if(!floatVal.test(loan_tenure)) {
    loan_tenure = stripNonNumbers(loan_tenure);

    $("#loan_tenure, #loan_tenure_range").val(loan_tenure);
  }
});

$("#loan_tenure_range").on("change", function() {
  let loan_tenure_range = $(this).val();

  $("#loan_tenure").val(loan_tenure_range);
});

$(".loan_tenure_type").on("change", function() {
  let loan_tenure_type_id = $(".loan_tenure_type:checked").val();

  if(loan_tenure_type_id == 1) {
    $("#loan_tenure, #loan_tenure_range").attr('min', '1').attr('max', '30').attr('step', '0.5');
    $("#loan_tenure, #loan_tenure_range").val(1);
    $(".year_labels").removeClass('d-none');
    $(".month_labels").addClass('d-none');
  } else if(loan_tenure_type_id == 2) {
    $("#loan_tenure, #loan_tenure_range").attr('min', '12').attr('max', '360').attr('step', '6');
    $("#loan_tenure, #loan_tenure_range").val(12);
    $(".month_labels").removeClass('d-none');
    $(".year_labels").addClass('d-none');
  }
});

$("#emi_calculator_form").on("submit", function(e) {
  e.preventDefault();

  let loan_amount = $("#loan_amount").val();
  let loan_interest_rate = $("#loan_interest_rate").val();
  let loan_tenure_type = $(".loan_tenure_type:checked").val();
  let loan_tenure = $("#loan_tenure").val();

  if(loan_tenure_type == 1) {
    loan_tenure = loan_tenure * 12;
  }

  let emi_amount = Math.floor(loan_amount * (loan_interest_rate/12/100) * ((Math.pow(1 + (loan_interest_rate/12/100), loan_tenure)) / (Math.pow(1 + (loan_interest_rate/12/100), loan_tenure) - 1)));

  $("#loan_emi_amount").html(emi_amount.toLocaleString());

  $("#loan_interest_amount").html(((emi_amount * loan_tenure) - loan_amount).toLocaleString());

  $("#loan_total_payments").html((emi_amount * loan_tenure).toLocaleString());
});

setTimeout(() => {
  $("img").each(function () {
    let img_source = $(this).attr('data-src');

    if (img_source) {
      $(this).attr('src', img_source);
    }
  });
}, 100)

setTimeout(() => {
  if(window.location.hash) {
    if(window.location.hash.startsWith("#")) {
      scrolltodiv(window.location.hash);
    }
  }
}, 2000)

function validation_error(result) {
  $.each(result.responseJSON.errors, function (k, v) {
    $("#" + k + "_err").fadeIn();
    $("#" + k + "_err").html(v);
    $("#" + k).focus();
    return false;
  });
}

function scrolltodiv(element_to_scroll) {
  $("html,body").animate(
    { scrollTop: $(element_to_scroll).offset().top},
    "slow"
  );
}

function validatestring(stringtext) {
  if (
    stringtext == "" ||
    whitespaces_val.test(stringtext) ||
    numeric_val.test(stringtext) ||
    alphanumeric_val.test(stringtext)
  ) {
    return false;
  } else {
    return true;
  }
}

function validateblanktext(stringtext) {
  if (
    stringtext == "" ||
    whitespaces_val.test(stringtext) ||
    stringtext === null
  ) {
    return false;
  } else {
    return true;
  }
}


$(".services__slider").slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: false,
  speed: 700,
  slidesToShow: 2.7,
  centerMode: false,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 1024,
      slidesToShow: 2,
  },
    {
      slidesToShow: 1,
    }
  ]
})
$(".services__right").on("click", function () {
  $(".slick-next").hasClass("slick-disabled")
    ? ($(this).css("opacity", ".3"),
      $(".services__left").css("opacity", "1"))
    : $(".services__left").css("opacity", "1"),
    $(".services__slider .slick-next").trigger("click");
})
$(".services__left").on("click", function () {
  $(".slick-prev").hasClass("slick-disabled")
    ? ($(this).css("opacity", ".3"),
      $(".services__right").css("opacity", "1"))
    : $(".services__right").css("opacity", "1"),
    $(".services__slider .slick-prev").trigger("click");
})
//back to top code
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
//home spotlight slider


$(".slider").slick({
  slidesToShow: 1,
  infinite:true,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  // fade: true,
  asNavFor: '.progressBarContainer'

});

$(".progressBarContainer").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite:false,
  asNavFor: '.slider',
  arrows: false,
  dots: false,
  autoplay: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


//ticking machine
var percentTime;
var tick;
var time = 1;
var progressBarIndex = 0;

var progress = $('.inProgress');

$('.progressBarContainer .progressBar').each(function (index) {
  var progress = "<div class='inProgress inProgress" + index + "'></div>";
  $(this).html(progress);
});

function startProgressbar() {
  resetProgressbar();
  percentTime = 0;
  tick = setInterval(interval, 10);
}

function interval() {
  if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
      progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");

      console.log(progressBarIndex);

      if (progressBarIndex == 1) {
          $(".inProgress0").addClass('on');
          $(".inProgress1").removeClass('on');
      }
      else if (progressBarIndex == 2) {
          $(".inProgress0").addClass('on');
          $(".inProgress1").addClass('on');
      }
      else if (progressBarIndex == 0) {
          $(".inProgress0").removeClass('on');
          $(".inProgress1").removeClass('on');
      }
      startProgressbar();

  } else {
      percentTime += 1 / (time + 2);
      $('.inProgress' + progressBarIndex).css({
          width: percentTime + "%"
      });
      if (percentTime >= 100) {
          $('.single-item').slick('slickNext');

          //console.log(progressBarIndex);

          if (progressBarIndex == 0) {
              $(".inProgress0").addClass('on');

          }
          else if (progressBarIndex == 1) {
              $(".inProgress0").addClass('on');
              $(".inProgress1").addClass('on');
          }
          else if (progressBarIndex == 2) {
              $(".inProgress0").removeClass('on');
              $(".inProgress1").removeClass('on');
          }

          progressBarIndex++;

          if (progressBarIndex > 2) {
              progressBarIndex = 0;
          }
          startProgressbar();

      }

  }
}

function resetProgressbar() {
  $('.inProgress').css({
      width: 0 + '%'
  });
  clearInterval(tick);
}
startProgressbar();
// End ticking machine



$(".spotlight-btm-details ul").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite:true,
  arrows: false,
  dots: false,
  autoplay: true,
  focusOnSelect: true,
  centerMode:false,
  centerPadding:'0',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});





