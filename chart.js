/**
 * Created by Brian on 3/20/2017.
 */
var chart1 = d3.select("#firstGraph");
var chart2 = d3.select("#secondGraph");


var info =
    [
        {
            "field" : "Other Programs",
	        "bar-color" : "#81e4f5",
	        "2008": 92223571067,
            "2008display": "$92,223,571,067",
	        "2016": 54191150125,
            "2016display": "$54,191,150,125"
        },
        {
            "field" : "General Science, Space, and Technology",
	        "bar-color" : "#8c914a",
	        "2008": 27084471421,
            "2008display": "$27,84,471,421",
	        "2016": 27591365102,
            "2016display": "$27,591,365,102"
        },
        {
            "field" : "Natural Resources and Environment",
	        "bar-color" : "#9c06f7",
	        "2008": 32190187152,
            "2008display": "$32,190,187,152",
	        "2016": 38140451451,
            "2016display": "$38,140,451,451"
        },
        {
            "field" : "International Affairs",
	        "bar-color" : "#4e0215",
	        "2008": 29192716236,
            "2008display": "$29,192,716,236",
	        "2016": 41600680759,
            "2016display": "$41,600,680,759"
        },
        {
            "field" : "Administration of Justice",
	        "bar-color" : "#c6cfe9",
	        "2008": 48656550328,
            "2008display": "$48,656,550,328",
	        "2016": 57698853457,
            "2016display": "$57,698,853,457"
        },
        {
            "field" : "Transportation",
	        "bar-color" : "#4e0215",
	        "2008": 78518968133,
            "2008display": "$78,518,968,133",
	        "2016": 82731099964,
            "2016display": "$82,731,99,964"
        },
	    {
	        "field" : "Education Training, Employment, and Social Services",
	        "bar-color" : "#d3045c",
	        "2008": 92349013657,
            "2008display": "$92,349,13,657",
	        "2016": 102053027588,
            "2016display": "$102,53,27,588"
	    },
	    {
	        "field" : "Veterans Benefits and Services",
	        "bar-color" : "#7c4471",
	        "2008": 85637835103,
            "2008display": "$85,637,835,103",
	        "2016": 159596022930,
            "2016display": "$159,596,22,930"
	    },
	    {
            "field" : "Net Interest",
	        "bar-color" : "#147a70",
	        "2008": 255697521497,
            "2008display": "$255,697,521,497",
	        "2016": 214979398065,
            "2016display": "$214,979,398,65"
	    },
	    {
	        "field" : "National Defense",
	        "bar-color" : "#d1ca64",
	        "2008": 623233181588,
            "2008display": "$623,233,181,588",
	        "2016": 541429595127,
            "2016display": "$541,429,595,127"
	    },
	    {
            "field" : "Medicare and Health",
	        "bar-color" : "#c5756b",
	        "2008": 679167425392,
            "2008display": "$679,167,425,392",
	        "2016": 1004278932282,
            "2016display": "$1,4,278,932,282"
    	},
    	{
    	    "field" : "Social Security, Unemployment, and Labor",
    	    "bar-color" : "#67f243",
    	    "2008" : 1060536165907,
            "2008display": "$1,60,536,165,907",
    	    "2016": 1305647617341,
            "2016display": "$1,305,647,617,341"
	    }
    ];

var klondike = function() {
    chart1.selectAll("div")
	    .data(info)
	    .enter()
	    .append("p")
	    .text( function(d) {
	        return d["field"];
	    })
	    .append("div")
	    .style("background-color", function(d) {
	        return d["bar-color"];
	    })
	    .text( function(d) {
	        return d["2008display"];
	    })
        .transition()
	    .duration(1000)
	    .style("width", function(d) {
	        return d["2008"]/1000000000 + "px";
	    });
    chart2.selectAll("div")
	    .data(info)
	    .enter()
	    .append("p")
	    .text( function(d) {
	        return d["field"];
	    })
	    .append("div")
	    .style("background-color", function(d) {
	        return d["bar-color"];
	    })
	    .text( function(d) {
	    return d["2016display"];
	    })
        .transition()
	    .duration(1000)
	    .style("width", function(d) {
	        return d["2016"]/1000000000 + "px";
	    });
};
klondike();