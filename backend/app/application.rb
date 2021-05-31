class Application

    def call(env)
      resp = Rack::Response.new
      req = Rack::Request.new(env)
  
      if req.path.match(/superheros/) && req.get?
        return [200, { 'Content-Type' => 'application/json' }, [ {:superhero => Superhero.all}.to_json ]]
      elsif req.path.match(/collections/) && req.post?
        data = JSON.parse(req.body.read)
        collection = Collection.create(data)
        return [200, { 'Content-Type' => 'application/json' }, [ {:collection => collection}.to_json ]] 
      elsif req.path.match(/collections/) && req.get?
        return [200, { 'Content-Type' => 'application/json' }, [ {:collection => Collection.all}.to_json ]] 
      else
        resp.write "Path Not Found"
  
      end
  
      resp.finish
    end
  
  end
