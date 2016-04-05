file_name = 'lib/csvs/staten_island.csv'
CsvImporter.import(file_name)
Street.update_all_averages
