"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackModule = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const track_schema_1 = require("./schemas/track.schema");
const comment_schema_1 = require("./schemas/comment.schema");
let TrackModule = class TrackModule {
};
TrackModule = __decorate([
    Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: track_schema_1.Track.name, schema: track_schema_1.TrackSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: comment_schema_1.Comment.name, schema: comment_schema_1.CommentSchema }])
        ],
        controllers: [TrackController],
        providers: [TrackService],
    })
], TrackModule);
exports.TrackModule = TrackModule;
//# sourceMappingURL=track.module.js.map
