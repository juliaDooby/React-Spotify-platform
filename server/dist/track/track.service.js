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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackService = void 0;
let TrackService = class TrackService {
    constructor(trackModel, commentModel) {
        this.trackModel = trackModel;
        this.commentModel = commentModel;
    }
    async create(dto) {
        const track = await this.trackModel.create(Object.assign(Object.assign({}, dto), { listens: 0 }));
        return track;
    }
    async getAll() {
        const tracks = await this.trackModel.find();
        return tracks;
    }
    async getOne(id) {
        const track = await this.trackModel.findById(id).populate('comments');
        return track;
    }
    async delete(id) {
        const track = await this.trackModel.findByIdAndDelete(id);
        return track._id;
    }
    async addComment(dto) {
        const track = await this.trackModel.findById(dto.trackId);
        const comment = await this.trackModel.create(Object.assign({}, dto));
        track.comments.push(comment._id);
        await track.save();
        return comment;
    }
};
TrackService = __decorate([
    Injectable(),
    __param(0, InjectModel(Track.name)),
    __param(1, InjectModel(Comment.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof Model !== "undefined" && Model) === "function" ? _a : Object, typeof (_b = typeof Model !== "undefined" && Model) === "function" ? _b : Object])
], TrackService);
exports.TrackService = TrackService;
//# sourceMappingURL=track.service.js.map
