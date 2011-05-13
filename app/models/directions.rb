class Directions
  include Mongoid::Document
  embedded_in :segment

  field :routes, type: Array
  field :status
end
