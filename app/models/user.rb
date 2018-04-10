class User < ApplicationRecord
    validates :name, presence: true, length: { maximum: 20 }
    EMAIL_VALID_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, presence: true, length: { maximum: 255 },
              format: { with: EMAIL_VALID_REGEX }
end
