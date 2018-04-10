require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(name: "Test Name", email: "test@gmail.com")
  end

  test "should be valid" do
    assert @user.valid?
  end

  test "name should be present" do
    @user.name = " "
    assert_not @user.valid?
  end

  test "email should be present" do
    @user.email = ""
    assert_not @user.valid?
  end

  test "name should not be too long" do
    @user.name = "Thisnameistoolongbrosef"
    assert_not @user.valid?
  end

  test "emails should not be too long" do 
    @user.email = "a" * 246 + "@email.com"
    assert_not @user.valid?
  end

  test "email validation should accept valid addresses" do 
    valid_emails = %w[ test@gmail.com TEST@gmail.com F_UC-KS@test.gmail.com 
                       one.two@gmail.mx test+alias@us.en ]

    valid_emails.each do |valid_email|
      @user.email = valid_email
      assert @user.valid?, "#{valid_email.inspect} should be valid"
    end
  end

  test "email validation should reject invalid addresses" do 
    invalid_emails = %w[ test@gmail,com test_name_gmail.com first.second@gmail. 
                         test@test_gmail.com test@test+gmail.com test@gmail..com ]

    invalid_emails.each do |invalid_email|
      @user.email = invalid_email
      assert_not @user.valid?, "#{invalid_email.inspect} should not be valid"
    end
  end
end
