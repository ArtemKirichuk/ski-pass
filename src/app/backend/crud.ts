export class Crud {

    constructor(
        protected dbKey: string,
        private keys: string[]
    ) { }


    get<T>(): T[] {
        const db = localStorage.getItem(this.dbKey);
        const dbT: T[] = db ? JSON.parse(db) : [];
        return dbT;
    }
    create<T>(row: T): boolean {
        const db = this.get<T>();
        const isExist = db.some(e => {
            let count = 0;
            for (const key in row) {
                if (this.keys.includes(key) && e[key] === row[key]) {
                    count++;
                }
            }
            return count === this.keys.length;
        });
        if(isExist) return false;
        localStorage.setItem(this.dbKey, JSON.stringify(db.concat(row)));
        return true;
    }

    delete<T extends object>(keyRow: T): boolean {
        const db = this.get<T>();
        
        const delRow = db.find(e => {
            for (const key in keyRow) {
                if (e[key] !== keyRow[key]) {
                    return false;
                }
            }
            return true;
        });
        if (!delRow)
            return false;
        db.splice(db.indexOf(delRow), 1);
        localStorage.setItem(this.dbKey, JSON.stringify(db));
        return true;
    }
    update<T extends object>(row: T): boolean {
        const db = this.get<T>();


        const editRow = db.find(e => {
            let count = 0;
            for (const key in row) {
                if (this.keys.includes(key) && e[key] === row[key]) {
                    count++;
                }
            }
            return count === this.keys.length;
        });
        if (!editRow) {
            return false;
        }
        Object.assign(editRow,row);
        // db.splice(db.indexOf(editRow!), 1, row);
        localStorage.setItem(this.dbKey, JSON.stringify(db));
        return true;
    }
}