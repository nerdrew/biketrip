class Segment
  include Mongoid::Document
  include Mongoid::Timestamps

  field :start
  field :finish
  field :waypoints, type: Array
  field :date, type: Date
  field :lodging
  field :notes
  field :map_url

  index :start
  index :finish
  index :date
    
end
