class Segment
  include Mongoid::Document
  include Mongoid::Timestamps

  field :origin
  field :destination
  field :waypoints, type: Array
  field :date, type: Date
  field :overnight
  field :notes
  field :map_url
  field :directions
  field :elevations

  index :origin
  index :destination
  index :date

  def date
    Time === self['date'] ? self['date'].strftime('%Y-%m-%d') : self['date']
  end
    
end
