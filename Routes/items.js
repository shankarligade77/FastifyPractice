const items=require('../Items');
  
function itemRoutes(fastify,options,done){
    fastify.get('/items', async (request, reply) => {
        reply.send( items)
      })
    
      fastify.get('/items/:id', async (request, reply) => {
    
        const {id}=request.params
    
    
        const item=items.find(item=>item.id===id)
        reply.send( item)
      })
      done()
}

module.exports=itemRoutes;