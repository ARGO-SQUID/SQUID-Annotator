require 'csv'

class CsvImporter

  def self.import(file_name)
    data = []
    csv = CSV.parse(File.read(file_name, {encoding: 'UTF-8'}), :headers => true)
    csv.each do |row|
      data << row.to_hash
    end

    data.group_by{|s|s["street_name"]}.each do |street_name, street_locations|
      s = Street.where(street_name: street_name).first_or_create
      locs = street_locations.sort_by{|l| ['reading_timestamp']}
      locs.each_with_index do |location, index|
        s.locations.create(lat: location['lat'],
                           long: location['long'],
                           reading_device_id: location['reading_device_id'],
                           reading_timestamp: Time.at(location['reading_timestamp'].to_i).to_datetime,
                           bumpiness: location['bumpiness'],
                           image: location['image'],
                           order: index)
      end
    end
  end

end
