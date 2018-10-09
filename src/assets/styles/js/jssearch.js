$(document).ready(function() {
	$("#adv-toggle a").click(function(e) {
		e.preventDefault();
		let text = $(this).text();
		$(this).text(text == "Tìm kiếm nâng cao" ? "Ẩn tìm kiếm nâng cao" : "Tìm kiếm nâng cao");
		$("#adv-search").toggle(300);
	});
});