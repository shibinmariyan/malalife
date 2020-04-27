$(function () {

    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
      //starts
      $('#reportrange span').html("Date Joined");

      var tdy = new Date();
      var tdy = tdy.getDate() + '-' + (tdy.getMonth() + 1) + '-' + tdy.getFullYear();
      if (start.format("DD-MM-YYYY") == end.format("DD-MM-YYYY")) {
        if (tdy == start.format("DD-MM-YYYY")) {

          $("#reportrange span").html("Today");
        }
        else {
          $("#reportrange span").html("Yesterday");
        }
      }//start!= end
      else {
        if ((start.format("DD-MM-YYYY") == moment().subtract(6, 'days').format("DD-MM-YYYY")) &&
          end.format("DD-MM-YYYY") == moment().format("DD-MM-YYYY")) {
          $('#reportrange span').html("Last 7 Days");
        }
        else if ((start.format("DD-MM-YYYY") == moment().subtract(29, 'days').format("DD-MM-YYYY")) &&
          end.format("DD-MM-YYYY") == moment().format("DD-MM-YYYY")) {
          $('#reportrange span').html("Last 30 Days");
        }
        else if ((start.format("DD-MM-YYYY") == moment().startOf('month').format("DD-MM-YYYY")) &&
          end.format("DD-MM-YYYY") == moment().endOf('month').format("DD-MM-YYYY")) {
          $('#reportrange span').html("This Month");
        }
        else if ((start.format("DD-MM-YYYY") == moment().subtract(1, "month").startOf('month').format("DD-MM-YYYY")) &&
          end.format("DD-MM-YYYY") == moment().subtract(1, "month").endOf('month').format("DD-MM-YYYY")) {
          $('#reportrange span').html("Last Month");
        }
        else {
          $('#reportrange span').html(start.format('DD-MMM-YY') + ' - ' + end.format('DD-MMM-YY'));
        }
      }
      // $('#reportrange span').html("Date Joined");
      //ends //$('#reportrange span').html(start.format('DD-MM-YY') + ' - ' + end.format('DD-MM-YY'));
    }

    $('#reportrange').daterangepicker({
      startDate: start,
      endDate: end,
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, cb);

    cb(start, end);

  });