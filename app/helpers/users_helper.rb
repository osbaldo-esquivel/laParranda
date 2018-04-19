module UsersHelper
    def gravatar_for(user, size: 80)
        grav_id = Digest::MD5::hexdigest(user.email.downcase)
        grav_url = "https://secure.gravatar.com/avatar/#{grav_id}?s=#{size}"
        image_tag(grav_url, alt: user.name, class: "grav")
    end
end
