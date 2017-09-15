$("#extendbutton").click(function() {
	var $this = $(this);
	$("#chrono_more").toggleClass("features_chrono");
	$this.toggleClass("expanded");

	if ($this.hasClass("expanded")) {
		$("#change-chev").html(`<i class="fa fa-chevron-up" aria-hidden="true"></i>`);
	}
	else {
		$("#change-chev").html(`<i class="fa fa-chevron-down" aria-hidden="true"></i>`);
	}
});