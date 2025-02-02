import type { Response } from "express"

const express = require('express')
const app = express()
const port = 3000

app
  .get('/', handleGet)

app.
  listen(port, () => console.log(`Example app listening on port ${port}`))