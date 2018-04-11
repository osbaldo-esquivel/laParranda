class User < ApplicationRecord
    before_save { self.email = email.downcase }
    validates :name, presence: true, length: { maximum: 20 }
    EMAIL_VALID_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
              uniqueness: { case_sensitive: false },
              format: { with: EMAIL_VALID_REGEX }
    validates :password, presence: true, length: { minimum: 6 }
    has_secure_password
end
