var dataArray = [5, 11, 55, 33, 44, 53, 64, 76, 81, 92, 300, 135, 145, 167, 189, 208, 358];

var dataYears = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];

var height = 200;
var width = 500;

var area = d3.area()
    .x(function (i) { return i * 20; })
    .y0(height)
    .y1(function (d) { return height - d; });

var svg = d3.select("body").append("svg")
    .attr("height", "100%")
    .attr("width", "100%");

svg.append("path").attr("d", area(dataArray))