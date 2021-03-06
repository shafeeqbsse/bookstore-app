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
var core_1 = require('@angular/core');
var book_1 = require('../book');
var BookFooterComponent = (function () {
    function BookFooterComponent() {
        this.currentTab = "Description";
        this.showDescription = function () {
            this.currentTab = "Description";
            console.log("description clicked");
        };
        this.showSpecifications = function () {
            this.currentTab = "Specifications";
        };
        this.showReviews = function () {
            this.currentTab = "Reviews";
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', book_1.Book)
    ], BookFooterComponent.prototype, "book", void 0);
    BookFooterComponent = __decorate([
        core_1.Component({
            selector: 'book-footer',
            templateUrl: 'app/books/book-footer.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BookFooterComponent);
    return BookFooterComponent;
}());
exports.BookFooterComponent = BookFooterComponent;
//# sourceMappingURL=book-footer.component.js.map