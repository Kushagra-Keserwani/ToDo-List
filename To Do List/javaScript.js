$("ul").on("click","li", function(){
	$(this).toggleClass("completed");

})
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut("100ms",function(){
		$(this).remove();
	})
	event.stopPropagation();
})
$("input[type='text']").keypress(function(evt){
	if(evt.which === 13){
		var s = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span>" + s +"</li>")
	}
})
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});