/*global QUnit*/

sap.ui.define([
	"proposalrental/controller/proposalrental.controller"
], function (Controller) {
	"use strict";

	QUnit.module("proposalrental Controller");

	QUnit.test("I should test the proposalrental controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
