"use strict";
// let num2:any;
// num2=5;
// num2="Samir";
// num2=true;
// if(typeof num2==="number")
// {
//     console.log(num2+5);
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fatchdata() {
    return __awaiter(this, void 0, void 0, function* () {
        const responce = yield fetch("https:/api.example.com/data");
        const data = yield responce.json();
        return data;
    });
}
function prossesdata() {
    return __awaiter(this, void 0, void 0, function* () {
        const responce = yield fatchdata();
        if (responce === "object") {
            // Performance.operations.on.the.responce.object;
            console.log(responce);
        }
        else {
            console.log("Error");
        }
    });
}
prossesdata();
