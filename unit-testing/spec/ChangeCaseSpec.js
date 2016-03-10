var lib = require("../src/ChangeCase.js");

describe("ChangeCase -", function(){
	it("changes lowercase letters to uppercase letters", function(){
		expect(lib.ChangeCase("asz")).toEqual("ASZ");
	});
	it("changes uppercase letters to lowercase letters", function(){
		expect(lib.ChangeCase("ASZ")).toEqual("asz");
	});
	it("does not change non alphabetic characters", function(){
		expect(lib.ChangeCase("$#!")).toEqual("$#!");
	});
});
