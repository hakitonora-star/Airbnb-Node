## Steps to setup the starter template

1. Clone the project

```
git clone https://github.com/singhsanket143/Express-Typescript-Starter-Project.git <ProjectName>
```

2. Move in to the folder structure

```
cd <ProjectName>
```

3. Install npm dependencies

```
npm i
```

4. Create a new .env file in the root directory and add the `PORT` env variable

```
echo PORT=3000 >> .env
```

5. Start the express server
npm run dev



```


6.npm i sequelize
7.npm i mysql2
8.npm i -D sequelize-cli
9.npx sequelize-cli  init // for runcode in sequelizerc
10.npx sequelize-cli migration:generate --name create-hotel-table
11.npx tsc
12.npx sequelize-cli db:migrate
12.npx sequelize-cli db:migrate:undo
12.npm i http-status-codes for status code




const path = require('path');
module.exports={
    seedersPath:path.resolve('./src/db/seeders'),
    migrationPath:path.resolve('./src/db/migrations'),
    modelsPath:path.resolve('./src/db/models'),
    configPath:path.resolve('./src/config/config.ts')
}
```
# Airbnb-Node
