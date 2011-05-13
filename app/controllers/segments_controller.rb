class SegmentsController < ApplicationController
  def index
    @segments = Segment.all
    respond_to do |format|
      format.json { render json: @segments.to_json }
    end
  end

  def show
    @segment = Segment.where("_id" => params[:id]).first
    respond_to do |format|
      format.json { render json: @segment.to_json }
    end
  end

  def create
    @segment = Segment.where("date" => params[:date]).first
    @segment ||= Segment.new
    [:waypoints, :origin, :destination, :elevations, :date].each do |sym|
      @segment[sym] = params[sym]
    end
    @segment.save!
    render :json => {}.to_json
  end
end
