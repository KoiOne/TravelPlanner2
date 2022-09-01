//include jQuery, Moment.js, and Date Range Picker's file in webpage

//<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
//<script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
//<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
//<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />


package DatePicker;

public class js {
<input type="text" name="datefilter" value="" />

<script type="text/javascript">
$(function() {

    $('input[name="datefilter"]').daterangepicker({
                                                      autoUpdateInput: false,
                                                      locale: {
                                                          cancelLabel: 'Clear'
                                                      }
                                                  });

    $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });

});
</script>
}
