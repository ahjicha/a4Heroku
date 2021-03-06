const express  = require( 'express' ),
      app      = express(),
      bp       = require( 'body-parser')

const todos = [
  { name:'buy groceries', completed:false }
]

app.use( bp.json() )
app.use( express.static( 'public' ) )

app.get( '/read', ( req, res ) => res.json( todos ) )

app.post( '/add', ( req,res ) => {
  todos.push( req.body )
  res.json( todos )
})

app.post( '/change', function( req,res ) {
  const idx = todos.findIndex( v => v.name === req.body.name )
  todos[ idx ].completed = req.body.completed

  res.sendStatus( 200 )
})

app.post( '/delete', function( req,res ) {
  const idx = todos.findIndex( v => v.name === req.body.name )
  todos.splice(idx, 1)

  res.json( todos )
})

app.listen( 8080 ) 