"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// write a function to create a users table in your database.
const client = new pg_1.Client({
    connectionString: "postgresql://shiva_owner:bL49hdcYRHGB@ep-round-queen-a5bjlmrk.us-east-2.aws.neon.tech/shiva?sslmode=require"
});
function insertUserData(username, password, email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
       INSERT INTO users3 (username, password, email)
       VALUES($1,$2,$3)
    `, [username, password, email]);
        console.log(result);
    });
}
insertUserData("shivaji2", "shiva78@gmail.com", "12334");
