$(document).ready(() => {
    $('.btn').on('click', (e) => {
        e.preventDefault();
        $('.btn').removeClass('active');
        $(e.currentTarget).addClass('active');
        if($('#bill').val() === '') {
            $('.error').slideToggle();
        }
    });

    $('#bill').on('input', () => {
        $('.error').slideUp();
    });

    $('.custom').on('click', (e) => {
        e.preventDefault();
        $('#tip-custom').slideToggle();
    })

    

    const calculateTip = () => {
        const bill = parseFloat($('#bill').val());
        const numPeople = parseInt($('#num-ppl').val());
        let tipPercentage = 0;
        
        if ($('.custom').hasClass('active')) {
            tipPercentage = parseFloat($('#tip-custom').val());
        } else {
            tipPercentage = parseFloat($('.btn.active').text());
        }

        const tipAmount = (bill * tipPercentage) / 100;
        const totalAmount = bill + tipAmount;
        const tipPerPerson = tipAmount / numPeople;
        const totalPerPerson = totalAmount / numPeople;

        $('#tip-per-p').text('$' + tipPerPerson.toFixed(2));
        $('#total-tip').text('$' + totalPerPerson.toFixed(2));
    };

    $('#bill').on('input', calculateTip);

    $('.btn').on('click', function(e) {
        e.preventDefault();
        $('.btn').removeClass('active');
        $(this).addClass('active');
        calculateTip(); 
    });

   
    $('.custom').on('click', function(e) {
        e.preventDefault();
        $('.btn').removeClass('active');
        $(this).addClass('active');
        $('#tip-custom').focus();
        calculateTip(); 
    });


    $('#tip-custom').on('input', function() {
        $('.custom').addClass('active');
        calculateTip(); 
    });

    const resetValues = () => {
        
        $('#bill').val('');
        
        
        $('.btn').removeClass('active');
        
        
        $('#tip-custom').val('');
        
        
        $('#num-ppl').val(2); 
        
        
        $('#tip-per-p').text('$0.00');
        $('#total-tip').text('$0.00');
    };

    
    $('#num-ppl').on('input', calculateTip);

    $('.res-btn-wrap a').on('click', function(e) {
        e.preventDefault();
        resetValues(); 
    });
});