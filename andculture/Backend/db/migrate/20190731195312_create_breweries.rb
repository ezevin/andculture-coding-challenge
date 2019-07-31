class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name
      t.string :city
      t.string :brewery_type
      t.string :country
      t.string :latitude
      t.string :longitude
      t.string :phone
      t.string :postal_code
      t.string :street
      t.string :website_url
      t.string :brewery_type
      t.timestamps
    end
  end
end
