// Learned with https://www.section.io/engineering-education/job-scheduling-in-nodejs/
const express = require('express')
const app = express()
const cron = require('node-cron')

const gsuite = require('./gsuite')

app.listen(2400, () => {
    console.log('Server started at port 2400')
})

cron.schedule('* * * * *', () => {
    console.log('Task is running every minute ' + new Date())
    gsuite.sendMessage('Hi, it\'s swamp reminder at your service!')
})