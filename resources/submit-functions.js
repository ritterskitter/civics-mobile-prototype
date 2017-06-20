$(document).ready(function() {
  console.log("document loaded");
});

function activateNext(nextElement) {
  var nextID = "#" + nextElement;
  $(nextID).css({opacity: 1});
};

function app1Step2Prog() {
  var progOne = $('#app1-step2-bar');
  $(window).scroll(function() {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > 179) {
      $(progOne).switchClass("is-abs", "is-fixed", 0, "linear");
      // $(progOne).addClass("is-fixed");
    } else {
      $(progOne).switchClass("is-fixed", "is-abs", 0, "linear");
      // $(progOne).removeClass("is-fixed");
    }
  });
};

function progressTwo() {
  var progTwo = $('#view-progress-2');
  $(window).scroll(function() {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > 179) {
      $(progTwo).addClass("is-fixed");
    } else {
      $(progTwo).removeClass("is-fixed");
    }
  });
};

function progressThree() {
  var progThree = $('#view-progress-3');
  $(window).scroll(function() {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > 179) {
      $(progThree).addClass("is-fixed");
    } else {
      $(progThree).removeClass("is-fixed");
    }
  });
};

function progressFour() {
  var progFour = $('#view-progress-4');
  $(window).scroll(function() {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > 179) {
      $(progFour).addClass("is-fixed");
    } else {
      $(progFour).removeClass("is-fixed");
    }
  });
};

function progressFive() {
  var progFive = $('#view-progress-5');
  $(window).scroll(function() {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > 179) {
      $(progFive).addClass("is-fixed");
    } else {
      $(progFive).removeClass("is-fixed");
    }
  });
};

function progressSix() {
  var progSix = $('#view-progress-6');
  $(window).scroll(function() {
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > 179) {
      $(progSix).addClass("is-fixed");
    } else {
      $(progSix).removeClass("is-fixed");
    }
  });
};

function loadCheckoutUrl() {
  var checkoutURL = "checkout.html";
  window.location = checkoutURL;
}

function clearAllFields() {
  var inputFields = $('.text-box');
  $(inputFields).val('');
}

function displaySubmitConfirm() {
  var submit = $('#submit-confirm');
  var overlay = $('#overlay-3');
  $(submit).addClass("shown");
  $(overlay).addClass("shown");
}

function displaySubmitConfirm2() {
  var submit = $('#submit-confirm2');
  var overlay = $('#overlay-4');
  $(submit).addClass("shown");
  $(overlay).addClass("shown");
}
