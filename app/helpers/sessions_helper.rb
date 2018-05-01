module SessionsHelper
    def sign_in(user)
        session[:user_id] = user.id
    end

    def curr_user
        @curr_user ||= User.find_by(id: session[:user_id])
    end

    def signed_in?
      !curr_user.nil?
    end  

    def sign_out
        session.delete(:user_id)
        @curr_user = nil
    end
end