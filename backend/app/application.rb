class Application

    def call(env)
      resp = Rack::Response.new
      req = Rack::Request.new(env)
  
      if req.path.match(/superheros/) && req.get?
        return [200, { 'Content-Type' => 'application/json' }, [ {:superhero => Superhero.all}.to_json ]]
      elsif req.path.match(/teams/) && req.post?
        data = JSON.parse(req.body.read)
        team = Team.create(data)
        return [200, { 'Content-Type' => 'application/json' }, [ {:collection => team}.to_json ]] 
      elsif req.path.match(/users/) && req.patch?
        data = JSON.parse(req.body.read)
        user = User.remove_pass.find_by(data)
        if user 
          return [200, { 'Content-Type' => 'application/json' }, [ {:user => user, :teams => user.teams}.to_json ]] 
        else
          return [200, { 'Content-Type' => 'application/json' }, [ {message: "Incorrect information"}.to_json ]]
        end
      elsif req.path.match(/teams/) && req.delete?
        id =  req.path.split("/teams/").last
        Team.find(id).destroy
        return [200, { 'Content-Type' => 'application/json' }, [ {message: "Your team has been deleted"}.to_json ]]
      elsif req.path.match(/users/) && req.post?
        data = JSON.parse(req.body.read)
        user = User.create(data)
        u = User.remove_pass.find(user.id)
        return [200, { 'Content-Type' => 'application/json' }, [ {:user => u, :teams => user.teams}.to_json ]] 
      elsif req.path.match(/users/) && req.get?
        return [200, { 'Content-Type' => 'application/json' }, [ {:users => User.remove_pass.all}.to_json ]]       
      else
        resp.write "Path Not Found"
  
      end
  
      resp.finish
    end
  
  end
