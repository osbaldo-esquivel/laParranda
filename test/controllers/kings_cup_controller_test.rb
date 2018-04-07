require 'test_helper'

class KingsCupControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get kings_cup_index_url
    assert_response :success
  end

end
