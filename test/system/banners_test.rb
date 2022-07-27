require "application_system_test_case"

class BannersTest < ApplicationSystemTestCase
  setup do
    @banner = banners(:one)
  end

  test "visiting the index" do
    visit banners_url
    assert_selector "h1", text: "Banners"
  end

  test "should create banner" do
    visit banners_url
    click_on "New banner"

    check "Ison" if @banner.isOn
    fill_in "Message", with: @banner.message
    click_on "Create Banner"

    assert_text "Banner was successfully created"
    click_on "Back"
  end

  test "should update Banner" do
    visit banner_url(@banner)
    click_on "Edit this banner", match: :first

    check "Ison" if @banner.isOn
    fill_in "Message", with: @banner.message
    click_on "Update Banner"

    assert_text "Banner was successfully updated"
    click_on "Back"
  end

  test "should destroy Banner" do
    visit banner_url(@banner)
    click_on "Destroy this banner", match: :first

    assert_text "Banner was successfully destroyed"
  end
end
