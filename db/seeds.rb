file_name = 'lib/csvs/staten_island.csv'
CsvImporter.import(file_name)
Street.update_all_averages
Street.update_all_annotation_counts
