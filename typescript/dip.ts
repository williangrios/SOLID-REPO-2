interface Database{
    save(data: string): void
}

class MySqlDatabase implements Database{
    save(data: string): void {
        console.log('data saved at mysql database')
    }
}

class PostgresDatabase implements Database{
    save(data: string): void {
        console.log('data saved at postgres database')
    }
}

class HighLevelModule{
    constructor(public database: Database){

    }
    execute(data: string){
        this.database.save(data)
    }
}

const mySql = new MySqlDatabase()
const postgres = new PostgresDatabase()

const userModule = new HighLevelModule(mySql)
const userModule2 = new HighLevelModule(postgres)
userModule.execute('Willian')
userModule2.execute('Willian')