package finApp;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

public interface MonthExpenseRepository extends MongoRepository<MonthExpense, String>{
    List<MonthExpense> findByDate(@Param("date") String name);
}
