google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart1);
var piechart1arr=[
    ['Task', 'Hours per Day'],
    ['Kolkata', 9],
    ['Goa', 2],
    ['Delhi',  3],
    ['Telengana', 2],
    ['Bangaluru', 5],
    ['Others', 2]
];
function drawChart1() {
    var data = google.visualization.arrayToDataTable(piechart1arr);
    var options = {
        title: 'Tourist from'
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
    chart.draw(data, options);
}

var piechart2arr=[['Task', 'Hours per Day'],['Shimla',30],['Goa', 10],['Kashmir',  6],['Telengana', 6],['Darjeeling', 31],['Others', 17]];
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data=google.visualization.arrayToDataTable(piechart2arr);
    var options = {
        title: ''
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
    chart.draw(data, options);
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);
var top_x_div_arr=[
    ['Move', 'Percentage'],
    ['January',47],
    ['February',36],
    ['March',42],
    ['April',13],
    ['May',14],
    ['June',5],
    ['Jully',16],
    ['August',11],
    ['September',13],
    ['October',30],
    ['November',30],
    ['December',48]
]
function drawStuff() {
    var data = new google.visualization.arrayToDataTable(top_x_div_arr);

    var options = {
        width: 860,
        legend: { position: 'none' },
        chart: {
            title: 'Monthly Profit :',
        },
        bar: { groupWidth: "100%" }
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
};

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawSeriesChart);
var series_chart_div_arr=[
    ['Tour Id', 'Price per People', 'No. of Bookings', 'Lcation', 'Total Income'],
    ['Tour001',    800.66,              167,      'Kolkata to Kashmir',  337399000],
    ['Tour002',    793.84,              136,      'Kolkata to Telengana',  280902307],
    ['Tour003',    785.6,               184,      'Delhi to Shimla',355203095],
    ['Tour004',    699.6,               154,      'Mumbai to Goa',   341850000],
    ['Tour005',    780.09,              205,      'Kolkata to Darjeeling',  307007000]
];
function drawSeriesChart() {
    var data = google.visualization.arrayToDataTable(series_chart_div_arr);

    var options = {
        width: 860,
        title: 'Total Income :',
        hAxis: {title: 'Price per People'},
        vAxis: {title: 'No. of Bookings'},
        bubble: {textStyle: {fontSize: 15}}
    };

    var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
    chart.draw(data, options);
}

$('#search').keyup(function() {
    var $rows = $('#customers tr:not(:first)');
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
    var theTable=document.querySelector('#customers tbody');
    var noMatchFound=document.querySelector('.noMatchFound');
    if($('#customers tbody tr:visible').length==1){
        noMatchFound.style.display='flex';
    }
    else{
        noMatchFound.style.display='none';
    }
});

function openleft(){
    var left=document.getElementById('left');
    if($('#left').css('width')=='0px'){
        $('#left').addClass('leftclosed');
    }
    else{
        $('#left').removeClass('leftclosed');
    }
}

// function reversetable() {
//     table = document.querySelector("#customers tbody");
//     // $('#customers').addClass('reversetable');
//     var rows = table.rows;
//     console.log(rows.length);
//     for (let i = 1; i < (rows.length - 1); i++) {
//         rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
//     }
// }
function convertDate(d) {
    var p = d.split("/");
    return +(p[2]+p[1]+p[0]);
}
function oldestTable() {
    var tbody = document.querySelector("#customers tbody");
    var rows = [].slice.call(tbody.querySelectorAll("tr"));
    
    rows.sort(function(a,b) {
      return convertDate(b.cells[5].innerHTML) - convertDate(a.cells[5].innerHTML);
    });
    rows.forEach(function(v) {
      tbody.appendChild(v);
    });
}
function newestTable() {
    var tbody = document.querySelector("#customers tbody");
    var rows = [].slice.call(tbody.querySelectorAll("tr"));
    
    rows.sort(function(a,b) {
      return convertDate(a.cells[5].innerHTML) - convertDate(b.cells[5].innerHTML);
    });
    rows.forEach(function(v) {
      tbody.appendChild(v);
    });    
}

function addincb(){
    var newCb=[
        ['A7bdkjc90ex','Chilling in Manali','Kolkata','Manali','21st February','01/01/2021',4,'210.93$'],
        ['JDS6rbs5bra','Bon Voyage to Andaman & Nicober','Hydrabad','Andaman and Nicober','30th November','30/11/2020',5,'100$']
    ]
    for(let j=0;j<newCb.length;j++){
        var tr=document.createElement('tr');
        for(let i=0;i<8;i++){
            var node=document.createTextNode(newCb[j][i]);
            var td=document.createElement('td');
            td.appendChild(node);
            tr.appendChild(td);
        }
        var customers=document.querySelector('#customers tbody');
        customers.appendChild(tr);
    }
}
addincb();