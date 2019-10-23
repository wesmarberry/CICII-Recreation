

$('.dateInput').datepicker()

function toggle(source) {
	console.log('hitting toggle');
	console.log($('.personCheckbox').attr('checked'));
	// if ($('.selectAll').hasAttr('checked')) {
	// 	$('.personCheckbox').addAttr('checked')
	// } else {
	// 	$('.personCheckbox').removeAttr('checked')
	// }
}

// $('.selectAll').on('click', () => {

// 	$('.personCheckbox').toggle().attr('checked')
// })


$('.searchAdd').on('click', async () => {
	console.log($('.expandedSearch').css('display', 'none'));
	// $('#displayCol').toggle('slide', () => {
	// if ($('.expandedSearch').css('display', 'none'))
	$('#displayCol').css('width', '50%')
	$('#searchFormCol').css('width', '50%')
	$('.searchFooter').css('width', '50%')
	$('.searchAdd').css('display', 'none')
	$('.searchMinus').css('display', 'block')
	// })
	$('.expandedSearch').toggle('slide', () => {
		
		$('.expandedSearch').css('display', 'flex')
	})
})

$('.searchMinus').on('click', async () => {
	
	// $('#displayCol').toggle('slide', () => {
	// if ($('.expandedSearch').css('display', 'none'))
	$('.expandedSearch').toggle('slide', () => {
		
		$('.expandedSearch').css('display', 'none')
	})
	$('#displayCol').css('width', '82%')
	$('#searchFormCol').css('width', '18%')
	$('.searchFooter').css('width', '18%')
	$('.searchAdd').css('display', 'block')
	$('.searchMinus').css('display', 'none')
	// })
})


$('#searchFormCol').on('click', () => {
	console.log('mouse entering');
	$('.searchHeader div').css('opacity', '1')
	$('.displayHeaderContainer').css('opacity', '0.7')
})

// $('#searchFormCol').on('click',() => {
// 	console.log('mouse leaving');
// 	$('.searchHeader div').css('opacity', '0.7')
// 	$('.displayHeaderContainer').css('opacity', '1')
// })

$('#displayCol').on('click',() => {
	console.log('mouse entering');
	$('.searchHeader div').css('opacity', '0.7')
	$('.displayHeaderContainer').css('opacity', '1')
})

// $('#displayCol').on('click',() => {
// 	console.log('mouse leaving');
// 	$('.displayHeaderContainer').css('opacity', '0.7')
// })



