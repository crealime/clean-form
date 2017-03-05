// Heigth Textarea

$.each($(".form textarea"), function () {
	var offset = this.offsetHeight - this.clientHeight;
	var resizeTextarea = function (el) {
		$(el).css('height', '28').css('height', el.scrollHeight + offset);
	};
	$(this).on('keyup input', function () { resizeTextarea(this); })
});


// Send Mail

function randomNumber () {
	one = Math.floor(Math.random() * 8.9999) + 1;
	two = Math.floor(Math.random() * 8.9999) + 1;
	$('.send-sum').text(one + ' + ' + two + ' = ');
}

var one = Math.floor(Math.random() * 8.9999) + 1;
var two = Math.floor(Math.random() * 8.9999) + 1;
$('.send-sum').text(one + ' + ' + two + ' = ');

$(".form").validate();

$("#send-form").submit(function(e) {
	e.preventDefault;
	var that = $(this);
	var result_sum = $('.input-sum');
	var end_sum = parseInt(result_sum.val());
	var msg = $("[name='alert_message']").val();
	var wrong = $("[name='wrong_sum']").val();
	if(one + two == end_sum){
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: that.serialize()
		}).done(function() {
			alert(msg);
			setTimeout(function() {
				that.trigger("reset");
				$(".form textarea").css('height', '28');
				randomNumber();
			}, 1000);
		});
	}
	else {
		// alert(wrong);
		$('.input-sum').val('').attr('placeholder', 'Enter the correct answer');
		randomNumber();
	}

	return false;
});