package finApp;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MonthExpenseRepository extends MongoRepository<MonthExpense, Integer>{
    //List<MonthExpense> findByMonthYear(@Param("date") int month, int year);
}
