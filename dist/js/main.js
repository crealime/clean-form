// Heigth Textarea

$.each($(".form textarea"), function () {
	var offset = this.offsetHeight - this.clientHeight;
	var resizeTextarea = function (el) {
		$(el).css('height', '28').css('height', el.scrollHeight + offset);
	};
	$(this).on('keyup input', function () { resizeTextarea(this); })
});


// Send Mail

var myForm = $(".form"),
		mySum = $('.send-sum'),
		sendForm = $("#send-form"),
		sending = $(".sending"),
		inputSum = $(".input-sum"),
		myValidator = false;

function randomNumber () {
	one = Math.floor(Math.random() * 8.9999) + 1;
	two = Math.floor(Math.random() * 8.9999) + 1;
	mySum.text(one + ' + ' + two + ' = ');
}

var one = Math.floor(Math.random() * 8.9999) + 1;
var two = Math.floor(Math.random() * 8.9999) + 1;
mySum.text(one + ' + ' + two + ' = ');

myForm.validate({
	
	rules: {
		Name: "required",
		Mail: {
			required: true,
			email: true
		},
		Phone: "required"
	},
  submitHandler: function() {
    myValidator = true;
  }
});

sendForm.submit(function(e) {
	e.preventDefault;
	var that = $(this);
	var result_sum = $('.input-sum');
	var end_sum = parseInt(result_sum.val());
	if(one + two == end_sum && myValidator){
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: that.serialize()
		}).done(function() {
			myValidator = false;
			myForm.animate({opacity:0}, 300, function() {
				sending.animate({opacity:1},300);
			});
			setTimeout(function() {
				$(".form textarea").css('height', '28');
				randomNumber();
				that.trigger("reset");
				inputSum.val('').attr('placeholder', '?');
				sending.animate({opacity:0}, 300, function() {
					myForm.animate({opacity:1},300);
				});
			}, 2500);
		});
	}
	else {
		inputSum.val('').attr('placeholder', 'Enter the correct answer.');
		randomNumber();
	}

	return false;
});