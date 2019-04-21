// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage

//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets

//= require turbolinks
//= require_tree .

// Bean Counter code
var beans = 0;
var monkeys = 0;
localStorage.setItem(﻿'monkeys', 'monkeys');
localStorage.setItem(﻿'beans', 'beans');

function beanClick(number) {
  beans = beans + number;
  document.getElementById("beans").innerHTML = beans;
  save();
};

function buyMonkey() { 
  var monkeyCost = Math.floor(10 * Math.pow(1.1,monkeys));
  if(beans >= monkeyCost) {
      monkeys = monkeys + 1;
      beans = beans - monkeyCost;
      document.getElementById('monkeys').innerHTML = monkeys; 
      document.getElementById('beans').innerHTML = beans;

      var nextCost = Math.floor(10 * Math.pow(1.1,monkeys));
      document.getElementById('monkeyCost').innerHTML = nextCost;  
    };

    window.setInterval(function(){ beanClick(monkeys); }, 1000);
    save();
};

function save() {
	var save = {
    monkeys: monkeys,
    beans: beans,
}
	localStorage.setItem("save",JSON.stringify(save));
}


function load() {
var savegame = JSON.parse(localStorage.getItem("save"));
}

// TODO
// Add user registration
// Add saved status tagged to users
// Add offline tru idle game functionality
// Add cool SASS and images
// Add annoying sounds
// Add more options:
// 	Bean vendor
// 	Bean farm
// 	Beanology research
// 		Bean machines
// 		Bean machien upgrades
// 	Bean awards that give upgrades and display on screen
// Add leaderboards

