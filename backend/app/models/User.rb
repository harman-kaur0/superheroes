class User < ActiveRecord::Base
    has_many :teams

    def self.remove_pass
        remove = (self.attribute_names - ["password"]).join(", ")
        self.all.select(remove)
    end
end