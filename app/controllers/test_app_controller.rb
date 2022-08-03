# frozen_string_literal: true

class TestAppController < ApplicationController
    layout "test_app"
    def index
        @banner = {Banners: Banner.all}
    
    end
end