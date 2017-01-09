'use strict';

/**
 * @ngdoc function
 * @name pomodoroClockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pomodoroClockApp
 */
angular.module('pomodoroClockApp')
  .controller('MainCtrl', function ($interval) {
    var vm = this;

    vm.timeLeftSecs = 0;

    var timeoutPromise;

    vm.running = '';

    vm.break = 5;
    vm.session = 25;

    vm.currentBreak = vm.break;
    vm.currentSession = vm.session;

    vm.incrementBreak = function() {
    	vm.break++;
    };
    vm.decrementBreak = function() {
    	vm.break--;
    };

    vm.incrementSession = function() {
    	vm.session++;
    };

    vm.decrementSession = function() {
    	vm.session--;
    };

    vm.startSession = function() {
    	vm.currentBreak = vm.break;
    	vm.currentSession = vm.session;
    	vm.startTimer();
    	
    };

    vm.startTimer = function() {
    	vm.timeLeftSecs = vm.currentSession * 60;
    	vm.running = true;
    	timeoutPromise = $interval(function() {
    									vm.currentSession = vm.toMS(vm.timeLeftSecs);
    									vm.timeLeftSecs--;
    									if(vm.timeLeftSecs === 0){
    										vm.stopTimer();
    									}
    								}, 1000);
    };
/*
    vm.updateTimer = function() {
    	vm.currentSession = vm.toMS(vm.timeLeftSecs);
    	vm.timeLeftSecs--;
    };
*/
	vm.stopTimer = function() {
		$interval.cancel(timeoutPromise);
		vm.running = false;
	};

	

	var pauseTimer = function() {
		vm.running = false;
		$interval.cancel(timeoutPromise);
	};

	var resumeTimer = function() {
		timeoutPromise = $interval(function() {
    									vm.currentSession = vm.toMS(vm.timeLeftSecs);
    									vm.timeLeftSecs--;
    									if(vm.timeLeftSecs === 0){
    										vm.stopTimer();
    									}
    								}, 1000);
	};

	vm.toggleTimer = function() {
		if(vm.running){
			pauseTimer();
		}
		else{
			resumeTimer();
		}
	};

    vm.toMS = function(time) {
    	var mins= (Math.floor(time/60));
    	var secs = (time%60);

    	if(mins < 10) {
    		mins = "0"+mins;
    	}
    	if(secs < 10) {
    		secs = "0"+secs;
    	}

    	return mins + " : " + secs;
    };

 });
