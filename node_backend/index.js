const express = require('express')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI= require('swagger-ui-express')
const app = express()
const port=4000
const userRoutes= require('./routes/user')
const bookRoutes= require('./routes/books')
const userComments= require('./routes/comments')
const logger = require('./middelware/logger')
const auth = require('./middelware/authorize')


const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Library API",
        version: '1.0.0',
      },
    },
    apis: ["index.js"],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
  
  /**
   * @swagger
   * /books:
   *   get:
   *     description: Get all books
   *     responses:
   *       200:
   *         description: Success
   * 
   */
 
  /**
   * @swagger
   * /books:
   *   post:
   *     description: Get all books
   *     parameters:
   *      - name: title
   *        description: title of the book
   *        in: formData
   *        required: true
   *        type: string
   *     responses:
   *       201:
   *         description: Created
   */

app.use(logger);
app.use('/user',auth,userRoutes);
app.use('/comments',userComments);
app.use('/books',bookRoutes);
app.listen(port , ()=>{
    console.log(`listen to the port ${port}`)
})