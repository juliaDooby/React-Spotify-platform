"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = exports.Comment = void 0;
const mongoose = require("mongoose");
let Comment = class Comment {
};
__decorate([
    Prop(),
    __metadata("design:type", String)
], Comment.prototype, "username", void 0);
__decorate([
    Prop(),
    __metadata("design:type", String)
], Comment.prototype, "next", void 0);
__decorate([
    Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }),
    __metadata("design:type", typeof (_a = typeof Track !== "undefined" && Track) === "function" ? _a : Object)
], Comment.prototype, "track", void 0);
Comment = __decorate([
    Schema()
], Comment);
exports.Comment = Comment;
exports.CommentSchema = SchemaFactory.createForClass(Comment);
//# sourceMappingURL=comment.schema.js.map
