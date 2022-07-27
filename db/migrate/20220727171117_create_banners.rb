class CreateBanners < ActiveRecord::Migration[7.0]
  def change
    create_table :banners do |t|
      t.string :message
      t.boolean :isOn

      t.timestamps
    end
  end
end
