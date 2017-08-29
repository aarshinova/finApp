package finApp;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MonthExpenseRepository extends MongoRepository<MonthExpense, String>{
    List<MonthExpense> findAll();
}
