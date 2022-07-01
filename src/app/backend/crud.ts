export class crud {

    constructor(
        protected dbKey: string,
        private keys: string[]
    ) { }


    get<T>(): T[] {
        let db = localStorage.getItem(this.dbKey);
        let dbT: T[] = db ? JSON.parse(db) : [];
        return dbT;
    }
    create<T>(row: T): boolean {
        let db = this.get<T>();
        let isExist = db.some(e => {
            let count = 0;
            for (let key in row) {
                if (this.keys.includes(key) && e[key] === row[key]) {
                    count++
                }
            }
            return count === this.keys.length
        })
        if(isExist) return false
        localStorage.setItem(this.dbKey, JSON.stringify(db.concat(row)));
        return true;
    }

    delete<T extends object>(keyRow: T): boolean {
        let db = this.get<T>();

        let delRow = db.find(e => {
            for (let key in keyRow) {
                if (e[key] !== keyRow[key]) {
                    return false
                }
            }
            return true
        })
        if (!delRow)
            return false;
        db.splice(db.indexOf(delRow), 1);
        localStorage.setItem(this.dbKey, JSON.stringify(db))
        return true;
    }
    update<T extends object>(row: T): boolean {
        let db = this.get<T>();


        let editRow = db.find(e => {
            let count = 0;
            for (let key in row) {
                if (this.keys.includes(key) && e[key] === row[key]) {
                    count++
                }
            }
            return count === this.keys.length
        })
        if (!editRow) {
            return false;
        }
        Object.assign(editRow,row)
        // db.splice(db.indexOf(editRow!), 1, row);
        localStorage.setItem(this.dbKey, JSON.stringify(db));
        return true;
    }
}