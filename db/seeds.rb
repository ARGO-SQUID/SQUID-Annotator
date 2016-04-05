file_name = 'lib/csvs/staten_island.csv'
CsvImporter.import(file_name)
Street.all.each(&:update_average_bumpiness_data)
