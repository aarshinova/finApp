package finApp;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application implements CommandLineRunner {

    @Autowired
    private MonthExpenseRepository repositoryExpenses;

    @Autowired
    private MonthRepository repositoryMonth;

    @Autowired
    private YearRepository repositoryYear;

    @Override
    public void run(String... strings) throws Exception {
        repositoryExpenses.deleteAll();
        repositoryYear.deleteAll();
        repositoryMonth.deleteAll();

        repositoryExpenses.save(new MonthExpense(6, 2017, "phone", 100.00));
        repositoryExpenses.save(new MonthExpense(6, 2017, "food", 203.2));
        repositoryExpenses.save(new MonthExpense(6,2017, "clothers", 100.4));
        repositoryExpenses.save(new MonthExpense(6,2017, "travel", 350.4));
        repositoryExpenses.save(new MonthExpense(6,2017, "transport", 100.00));
        repositoryExpenses.save(new MonthExpense(6,2017, "total", 2100.00));

        repositoryExpenses.save(new MonthExpense(7,2017, "food", 123.2));
        repositoryExpenses.save(new MonthExpense(7,2017, "clothers", 234.4));
        repositoryExpenses.save(new MonthExpense(7,2017, "travel", 534.4));
        repositoryExpenses.save(new MonthExpense(7,2017, "transport", 100.00));
        repositoryExpenses.save(new MonthExpense(7,2017, "phone", 100.00));
        repositoryExpenses.save(new MonthExpense(7,2017, "total", 2000.00));

        repositoryExpenses.save(new MonthExpense(9,2017, "food", 223.2));
        repositoryExpenses.save(new MonthExpense(9,2017, "clothes", 34.4));
        repositoryExpenses.save(new MonthExpense(9,2017, "travel", 734.4));
        repositoryExpenses.save(new MonthExpense(9,2017, "transport", 100.00));
        repositoryExpenses.save(new MonthExpense(9,2017, "phone", 100.00));
        repositoryExpenses.save(new MonthExpense(9,2017, "total", 2500.00));

        repositoryMonth.save(new Month(6, "June"));
        repositoryMonth.save(new Month(7, "July"));
        repositoryMonth.save(new Month(8, "August"));
        repositoryMonth.save(new Month(9,"September"));
        repositoryMonth.save(new Month(10, "October"));
        repositoryMonth.save(new Month(11, "November"));

        repositoryYear.save(new Year("1", "2017"));
        repositoryYear.save(new Year("2", "2018"));
        repositoryYear.save(new Year("3", "2019"));

        for (MonthExpense expense : repositoryExpenses.findAll()) {
            System.out.println(expense.getDate() + " " + expense.getCategory() + " " + expense.getTotalExpense());
        }
        System.out.println();
    }
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
