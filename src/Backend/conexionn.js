import {createPool} from 'mysql2/promise'

export const pool= createPool({
    host:'b11hrk9buwkq5yhpiaad-mysql.services.clever-cloud.com',
    database: 'b11hrk9buwkq5yhpiaad',
    user:'utyagzo1xjpx9bmo',
    password:'YK0MpPIanHnyoo1AZE0g',
    port:'3306'
})