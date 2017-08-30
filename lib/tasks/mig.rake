task :mig do
  puts 'rake db:migrate RAILS_ENV="development"'
  system "rake db:migrate RAILS_ENV='development'"
  puts 'rake db:migrate RAILS_ENV="test"'
  system "rake db:migrate RAILS_ENV='test'"
  puts "bin/annotate --exclude tests,fixtures,factories,serializers"
  system "bin/annotate --exclude tests,fixtures,factories,serializers"
end

task :migr do
  puts 'rake db:rollback RAILS_ENV="development"'
  system "rake db:rollback RAILS_ENV='development'"
  puts 'rake db:rollback RAILS_ENV="test"'
  system "rake db:rollback RAILS_ENV='test'"
  puts "bin/annotate --exclude tests,fixtures,factories,serializers"
  system "bin/annotate --exclude tests,fixtures,factories,serializers"
end

task :rlb do
  `rake migr`
end
