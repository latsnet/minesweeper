class MineSweeper {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._container = $("#minesweeper");
        this._fields = [];
    }

}

class MineBox {

    constructor() {

        this._bomb = false;
    }

}