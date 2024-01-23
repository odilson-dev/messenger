class HangoutsController < ApplicationController
  def index
    @message = Message.new
    @messages = Message.includes(:user)
  end
end
