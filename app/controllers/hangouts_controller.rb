class HangoutsController < ApplicationController
  def index
    @message = Message.new
  end
end
