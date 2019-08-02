class Setdefaultvalues < ActiveRecord::Migration[5.2]
  def change
    change_column :breweries, :name, :string, default: 'name'
    change_column :breweries, :city, :string, default: 'city'
    change_column :breweries, :brewery_type, :string, default: 'brewery type'
    change_column :breweries, :country, :string, default: 'country'
    change_column :breweries, :phone, :string, default: 'phone'
    change_column :breweries, :postal_code, :string, default: 'postal code'
    change_column :breweries, :street, :string, default: 'street'
    change_column :breweries, :website_url, :string, default: 'website url'
  end
end
