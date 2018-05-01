class SessionsController < ApplicationController
  def new
  end

  def create
    email_param = params[:session][:email].downcase
    user = User.find_by(email: email_param)
    if user && user.authenticate(params[:session][:password])
      sign_in user 
      redirect_to user
    else
      flash.now[:danger] = 'Email and password are not correct'
      render 'new'
    end
  end

  def destroy
    sign_out
    redirect_to root_url
  end
end
