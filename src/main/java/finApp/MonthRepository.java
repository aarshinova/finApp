package finApp;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface MonthRepository extends MongoRepository<Month, Integer> {

}
