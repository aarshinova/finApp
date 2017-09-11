package finApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.MongoRepository;

@SpringBootApplication
public class Application implements CommandLineRunner {

    @Autowired
    private MonthExpenseRepository repository;

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    @Override
    public void run(String... strings) throws Exception {
        repository.deleteAll();

        repository.save(new MonthExpense("08/17", "food", 123.2));
        repository.save(new MonthExpense("08/17", "clothers", 234.4));
        repository.save(new MonthExpense("08/17", "total", 500.00));


        for (MonthExpense expense : repository.findAll()) {
            System.out.println(expense.getDate() + " " + expense.getCategory() + " " + expense.getTotalExpense());
        }
        System.out.println();
    }
}
